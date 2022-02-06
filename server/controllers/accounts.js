import express from 'express';
import mongoose from 'mongoose';

import accountsMessage from '../models/accounts.js';

const router = express.Router();

export const getUser = async(req,res) => {
    const { id } = req.params;

    try {
        const acc = await accountsMessage.findById(id);

        res.status(200).json(accountsMessage);

    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const createUser = async(req,res) => {
    const { username, password } = req.body;
    
    const newUser = new accountsMessage({username, password})
    
    try {
        await newUser.save();

        res.status(200).json(newUser);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export default router;