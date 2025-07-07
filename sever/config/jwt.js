import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();


let key = process.env.JWT_SECRET_KEY || "snps";
let expire = process.env.JWT_EXPIRES_IN || "1d";

export const generateToken = (payload) => {
    return jwt.sign(payload, key, { expiresIn: expire })
}

export const verifyToken = (token) => {
    try {
        return jwt.verify(token, key)
    } catch (error) {
        return null
    }
}