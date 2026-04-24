const API_URL = 'http://localhost:5000';
let inactivityTimer;
let refreshTimer;
let inactivitySeconds; // Global tracking
const INACTIVITY_LIMIT = 2.5 * 60 * 1000; // 2.5 minutes

// --- INITIALIZATION ---
window.onload = () => {
    const token = localStorage.getItem('refreshToken');
    if (token) {
        log("Welcome back! Refreshing session...");
        refreshToken(); // Option 1: Refresh on every page load
    }
};

// --- LOGIN ---
async function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const res = await fetch(`${API_URL}/users/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });

        const data = await res.json();

        if (res.ok) {
            localStorage.setItem('accessToken', data.accessToken);
            localStorage.setItem('refreshToken', data.refreshToken);
            showDashboard();
            startTimers(data.accessToken);
            log("Logged in successfully");
        } else {
            document.getElementById('login-error').innerText = data.message;
        }
    } catch (err) {
        console.error(err);
    }
}

// --- LOGOUT ---
async function logout() {
    const refreshToken = localStorage.getItem('refreshToken');
    if (refreshToken) {
        await fetch(`${API_URL}/users/logout`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ token: refreshToken })
        });
    }

    localStorage.clear();
    stopTimers();
    document.getElementById('dashboard-view').classList.add('hidden');
    document.getElementById('login-view').classList.remove('hidden');
    log("Logged out");
}

// --- REFRESH TOKEN ---
async function refreshToken() {
    const token = localStorage.getItem('refreshToken');
    if (!token) return logout();

    try {
        const res = await fetch(`${API_URL}/users/token`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ token })
        });

        if (res.ok) {
            const data = await res.json();
            localStorage.setItem('accessToken', data.accessToken);
            localStorage.setItem('refreshToken', data.refreshToken);

            showDashboard();
            startTimers(data.accessToken);
            log("Tokens Refreshed & Rotated");
        } else {
            log("Session Expired");
            logout();
        }
    } catch (err) {
        logout();
    }
}

// --- PROTECTED API CALL ---
async function getPosts() {
    const token = localStorage.getItem('accessToken');
    try {
        const res = await fetch(`${API_URL}/posts`, {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        const data = await res.json();
        log(`API CHECK: Fetched ${data.length} posts`);
    } catch (err) {
        log("API CHECK: Failed (Unauthorized)");
    }
}

// --- TIMERS & LOGIC ---
let visualTimers = [];

function startTimers(accessToken) {
    // Stop only specific visual/refresh timers, NOT inactivity
    clearTimeout(refreshTimer);
    visualTimers.forEach(t => clearInterval(t));
    visualTimers = [];

    // 1. Dummy API Loop (10 seconds)
    const apiLoop = setInterval(getPosts, 10000);
    visualTimers.push(apiLoop);

    // 2. Token-based Refresh Timer
    const payload = parseJwt(accessToken);
    const expiresAt = payload.exp * 1000;

    // Refresh 10s before expiry
    const refreshDelay = (expiresAt - Date.now()) - 10000;
    refreshTimer = setTimeout(refreshToken, refreshDelay > 0 ? refreshDelay : 0);

    // 3. Visual Countdown Timer (Runs every second)
    const countdownInterval = setInterval(() => {
        // Inactivity Display (Counts down independently)
        if (inactivitySeconds > 0) inactivitySeconds--;
        document.getElementById('timer-display').innerText = formatTime(inactivitySeconds);

        // Access Token Display
        const accessLeft = Math.max(0, Math.floor((expiresAt - Date.now()) / 1000));
        document.getElementById('access-timer').innerText = formatTime(accessLeft);

        // Refresh Token Display (relative to when refreshed)
        if (!window.refreshStarts) window.refreshStarts = Date.now();
        const refreshLimit = 3 * 60 * 1000;
        const refreshLeft = Math.max(0, Math.floor((window.refreshStarts + refreshLimit - Date.now()) / 1000));
        document.getElementById('refresh-timer').innerText = formatTime(refreshLeft);
    }, 1000);
    visualTimers.push(countdownInterval);
}

function stopTimers() {
    clearTimeout(inactivityTimer);
    clearTimeout(refreshTimer);
    visualTimers.forEach(t => clearInterval(t));
    visualTimers = [];
    window.onclick = null;
    window.onkeypress = null;
    window.onmousemove = null;
    window.refreshStarts = null;
    inactivitySeconds = INACTIVITY_LIMIT / 1000;
}

function resetInactivityTimer() {
    clearTimeout(inactivityTimer);
    inactivitySeconds = INACTIVITY_LIMIT / 1000;
    inactivityTimer = setTimeout(() => {
        log("Inactivity - Logging out...");
        logout();
    }, INACTIVITY_LIMIT);
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

// JWT Token Parser (Basic Base64 Decoder)
function parseJwt(token) {
    try {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        return JSON.parse(window.atob(base64));
    } catch (e) {
        return { exp: 0 };
    }
}

function showDashboard() {
    if (!window.refreshStarts) {
        // First login setup
        window.refreshStarts = Date.now();
        inactivitySeconds = INACTIVITY_LIMIT / 1000;
        resetInactivityTimer();
        window.onclick = resetInactivityTimer;
        window.onkeypress = resetInactivityTimer;
        window.onmousemove = resetInactivityTimer;
    } else {
        // Just a refresh, reset the refresh start point for the timer display
        window.refreshStarts = Date.now();
    }

    document.getElementById('login-view').classList.add('hidden');
    document.getElementById('dashboard-view').classList.remove('hidden');
}

function log(msg) {
    const logs = document.getElementById('activity-log');
    if (!logs) return;
    const entry = document.createElement('div');
    entry.innerText = `${new Date().toLocaleTimeString()} - ${msg}`;
    logs.prepend(entry);
}
