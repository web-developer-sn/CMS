import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();


let key = process.env.JWT_SECRET_KEY || "snps";
let expire = process.env.JWT_EXPIRES_IN || "1d";

export const generateToken = (payload) => {
    return jwt.sign(payload, key, { expiresIn: expire })
}

export const verifyToken = (req,res,next) => {
    const token=req.cookies.token;
    if(!token){
        return res.status(401).json({message:"Unauthorized : No token"})
    }

    try {
        const decode=jwt.verify(token, key)
         req.user = decode; 
         next()
    } catch (error) {
        return res.status(401).json({message:"Unauthorized :Invalid User"})
    }
}