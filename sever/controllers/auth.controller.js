import User from "../models/user.model.js"
import bcrypt from "bcryptjs"
import { generateToken } from '../config/jwt.js'
import jwt from 'jsonwebtoken'
export const register = async (req, res, next) => {
    try {
        let email = req.body.email
        if (email) {
            try {
                let userExist = await User.exists({ email })

                if (userExist) {
                    res.status(400).json({
                        status: 400,
                        action: "error",
                        message: "User already exist",

                    })
                } else {
                    let salt = await bcrypt.genSalt(10);
                    let pass = await bcrypt.hash(req.body.password, salt)
                    const user = await User.create({
                        "name": req.body.name,
                        "email": email,
                        "password": pass,
                        "role": req.body.role,
                        "createdAt": req.body.createdAt
                    })
                    user.save()

                    res.json({
                        status: 200,
                        action: "success",
                        message: "User created successfully",
                        data: req.body.email
                    })


                }


            } catch (error) {
                res.status(400).json({
                    status: 400,
                    action: "error",
                    message: error,

                })

            }

        } else {
            res.status(400).json({
                status: 400,
                action: "error",
                message: 'please provide email',

            })
        }


    } catch (error) {
        res.status(400).json({
            status: 400,
            action: "error",
            message: error,

        })
    }

}

export const login = async (req, res, next) => {
    try {
        let email = req.body.email;
        let userExist = await User.exists({ email });
        if (userExist) {
            let currectUeser = await User.findOne({ email }).select('name email role password -_id')
            let isPassword = await bcrypt.compare(req.body.password, currectUeser.password)
            let user = { name: currectUeser.name, email: currectUeser.email, role: currectUeser.role }
            let token = generateToken(user)
            if (isPassword) {
                res.status(201).json({
                    status: 201,
                    action: "success",
                    message: "User  exist",
                    data: user,
                    token
                })
            } else {
                res.status(400).json({
                    status: 400,
                    action: "error",
                    message: "User or password invalid",
                    data: []
                })
            }


        } else {
            res.status(400).json({
                status: 400,
                action: "error",
                message: "User or password invalid",
                data: []
            })
        }
    } catch (error) {

    }
}