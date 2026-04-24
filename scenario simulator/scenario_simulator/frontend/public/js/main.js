// Main JS for shared interactions
document.addEventListener('DOMContentLoaded', () => {
    const currentPath = window.location.pathname;
    const userJson = localStorage.getItem('user');
    const user = userJson ? JSON.parse(userJson) : null;

    // 1. Dynamic Navbar & Redirection Logic
    const navContainer = document.getElementById('nav-links') || document.querySelector('.navbar div');

    if (navContainer) {
        let navHtml = '';

        if (user) {
            // Role specific links
            if (user.role === 'admin') {
                const isAdmin = currentPath === '/admin';
                navHtml += `<a href="/admin" id="admin-link" class="${isAdmin ? 'active' : ''}" style="color:var(--danger); font-weight:700;">Admin Panel</a>`;
            }

            // Common links
            const links = [
                { name: 'Dashboard', url: '/dashboard' },
                { name: 'Leadership Dojo', url: '/dojo/roles' },
                { name: 'My Reports', url: '/report' }
            ];

            links.forEach(l => {
                const isActive = currentPath === l.url;
                navHtml += `<a href="${l.url}" class="${isActive ? 'active' : ''}">${l.name}</a>`;
            });

            navHtml += `<a href="#" id="logoutBtn">Logout</a>`;
        } else {
            // Not logged in - redirect from protected pages
            const protectedPaths = ['/dashboard', '/admin', '/report', '/scenario'];
            const isProtected = protectedPaths.some(p => currentPath.startsWith(p));

            if (isProtected) {
                console.warn('Unauthorized access to protected page. Redirecting to login.');
                window.location.href = '/';
                return;
            }

            // Show Login if not on landing/login page
            if (currentPath !== '/') {
                navHtml += `<a href="/">Sign In</a>`;
            }
        }

        navContainer.innerHTML = navHtml;

        // Add User Identity Badge
        if (user && user.name) {
            const userBadge = document.createElement('span');
            userBadge.className = 'badge';
            userBadge.style.marginLeft = '20px';
            userBadge.style.background = 'rgba(255,255,255,0.05)';
            userBadge.style.border = '1px solid var(--border)';
            userBadge.style.display = 'inline-block';
            userBadge.innerText = `${user.name} | ${user.role.toUpperCase()}`;
            navContainer.appendChild(userBadge);
        }
    }

    // 2. Logout Logic (Dynamically attached)
    document.addEventListener('click', async (e) => {
        if (e.target && e.target.id === 'logoutBtn') {
            e.preventDefault();
            try {
                await fetch('/api/auth/logout', { credentials: 'include' });
                localStorage.removeItem('user');
                window.location.href = '/';
            } catch (err) {
                console.error('Logout failed:', err);
                // Fallback logout
                localStorage.removeItem('user');
                window.location.href = '/';
            }
        }
    });

    // 3. Login Flow
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const submitBtn = loginForm.querySelector('button');

            try {
                submitBtn.innerText = 'Signing in...';
                submitBtn.disabled = true;

                const res = await fetch('/api/auth/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email, password }),
                    credentials: 'include'
                });
                const data = await res.json();

                if (data.success) {
                    localStorage.setItem('user', JSON.stringify(data.data));
                    window.location.href = '/dashboard';
                } else {
                    alert(data.error || 'Login Failed');
                    submitBtn.innerText = 'Sign In';
                    submitBtn.disabled = false;
                }
            } catch (err) {
                console.error('Login error:', err);
                alert('An error occurred during login');
                submitBtn.innerText = 'Sign In';
                submitBtn.disabled = false;
            }
        });
    }
});
