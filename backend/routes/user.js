import express from 'express';
import User from '../models/User.js'; 
import bcrypt from 'bcrypt';

const router = express.Router();

// Create a new user
router.post('/', async (req, res) => {
    const { name, email, password, role, profilePicture} = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ message: 'name, email, and password are required'});
    }

    try {

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
            name,
            email,
            password: hashedPassword,
            role, 
            profilePicture,
        });

        const savedUser = await user.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(400).json(err);
    }
});

//Get all users
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json(err);
    }
});

export default router;