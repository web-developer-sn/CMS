import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()


const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/cms";
mongoose.connect(MONGO_URI)
    .then(() => {
        console.log("mongodb", "connected successfully")
    })
    .catch((err) => {
        console.log(err)
    })