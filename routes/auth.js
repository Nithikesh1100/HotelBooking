const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/Users');
require('dotenv').config();
 

const router = express.Router();

const jwt_secret = process.env.SECRET_KEY;

// Signup route
router.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;
    try {


        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });

        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();
        res.status(201).json({ message: 'User created successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});

// Signin route
router.post('/signin', async (req, res) => {
    const { identifier, password } = req.body;

    if (!identifier || !password) {
        return res.status(400).json({ message: 'Enter both the credentials' });
    }
    try {



        const user = await User.findOne({
            $or: [{ email: identifier }, { username: identifier }]
        });

        if (!user) {
            return res.status(400).json({ message: 'User not found' });

        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        const token = jwt.sign({ id: user._id }, jwt_secret, { expiresIn: '1h' });
        // res.status(200).json({ token });
        res.json({ token, username: user.username });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
