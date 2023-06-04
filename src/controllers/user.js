import User from "../models/user";
import bcrypt from "bcryptjs";
import { signinSchema, signupSchema } from "../schemas/user";
import jwt from "jsonwebtoken"
export const signUp = async (req, res) => {
    try {
        // Code
    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}

export const signIn = async (req, res) => {
    try {
        // Code
    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}