const model = require('../models/data');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const getUserByName = (req, res) => {
    const name = req.params.name;
    const user = model.findUserByName(name);
    if (user) res.json(user);
    else res.status(404).json({ message: "User not found" });
};

const createUser = (req, res) => {
    const { username, password } = req.body;
    const user = model.createuser({ username, password });
    res.status(201).json(user);
};

const login = (req, res) => {
    const { username, password } = req.body;
    const user = model.findUserByName(username);

    if (!user || user.password !== password) {
        return res.status(400).json({ message: "Invalid credentials" });
    }

    // Generate Tokens
    const accessToken = generateAccessToken({ username: user.username });
    const refreshToken = jwt.sign({ username: user.username }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '3m' }); // 3 mins

    model.addRefreshToken(refreshToken);

    res.json({ accessToken, refreshToken });
};

const refresh = (req, res) => {
    const refreshToken = req.body.token;
    if (!refreshToken) return res.sendStatus(401);
    if (!model.checkRefreshToken(refreshToken)) return res.sendStatus(403);

    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);

        // 1. Remove the old refresh token (Rotation)
        model.removeRefreshToken(refreshToken);

        // 2. Generate brand new tokens
        const accessToken = generateAccessToken({ username: user.username });
        const newRefreshToken = jwt.sign({ username: user.username }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '3m' });

        // 3. Add the new refresh token to our "database"
        model.addRefreshToken(newRefreshToken);

        // 4. Return both
        res.json({ accessToken, refreshToken: newRefreshToken });
    });
};

const logout = (req, res) => {
    model.removeRefreshToken(req.body.token);
    res.sendStatus(204);
};

function generateAccessToken(user) {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1.5m' }); // 1.5 mins
}

module.exports = { getUserByName, createUser, login, refresh, logout };
