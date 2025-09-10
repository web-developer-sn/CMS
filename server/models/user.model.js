import mongoose, { Types } from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
         minlength: 3,
    },
     lastName: {
        type: String,
        required: true,

    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
    },
    city:{
        type:String,
        required:false
    },
    country: {
        type: String,
        required: false,
       
    },
      address: {
        type: String,
        required: false,
    },
    
})



const User = mongoose.model('User', userSchema);
export default User;