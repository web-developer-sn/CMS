import mongoose, { Types } from "mongoose";
import bcrypt from "bcryptjs";


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,

    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    role: {
        type: String,
        enum: ['admin', 'principal', 'teacher', 'student'],
        default: 'student',

    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})



const User = mongoose.model('User', userSchema);
export default User;