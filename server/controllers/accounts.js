import bcrypt from 'bcryptjs';       //to hash up the password and encrypt it
import User from '../models/accounts.js';

export const signin = async (req, res) => {
    const {email, password} = req.body;     //All of the data comes from the req.body

    try {
        const existingUser = await User.findOne({email});
        if(!existingUser) return res.status(404).json({message: "User doesn't exist."});

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
        if(!isPasswordCorrect) return res.status(400).json({message: "Invalid Credentials."});

        res.status(200).json({result: existingUser});

    } catch (error) {
        res.status(500).json({message: 'Something went wrong.'});
    }
}; 

export const signup = async (req, res) => {
    const { firstName, email, password, confirmPassword, lastName} = req.body;
    
    try {
        const existingUser = await User.findOne({email});
        if(existingUser) return res.status(400).json({message: email});
        if(password != confirmPassword) return res.status(400).json({message: "Passwords do not match."});

        const hashedPassword = await bcrypt.hash(password, 12);

        const result = await User.create({email, password: hashedPassword, name: `${firstName} ${lastName}`});

        res.status(200).json({result});
    } catch (error) {
        res.status(500).json({message: 'Something went wrong.'});
    }
} 