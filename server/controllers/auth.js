import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
    try {
        const { username, password, email } = req.body; // Добавьте email

        const isUsed = await User.findOne({ username });

        if (isUsed) {
            return res.status(402).json({
                message: 'This Username is used!'
            });
        }

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        const newUser = new User({
            username,
            password: hash,
            email,
        });

        await newUser.save();

        res.json({
            newUser,
            message: 'Registration complete'
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error of creating user' });
    }
}


export const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        console.log(`Trying to log in with username: ${username}`);
        const user = await User.findOne({ username: { $regex: new RegExp(`^${username}$`, 'i') } });
        console.log('Found user:', user);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        if (!isPasswordCorrect) {
            return res.status(401).json({ message: 'Incorrect password' });
        }

        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '30d' }
        );

        res.json({
            token,
            user,
            message: 'You have entered the system!'
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Authorization error' });
    }
};


export const me = async (req, res) => {
    try{
        const user = await User.findById(req.userId)

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '30d' }
        );

        res.json({
            user,
            token
        })

    }catch(err){
        console.error(err);
        res.status(403).json({ message: 'No access' });
    }
}