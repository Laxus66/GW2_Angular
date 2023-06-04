import jwt from "jsonwebtoken";
import User from "../models/user";

export const check = async (req, res, next) => {
    try {
        // Code
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}