import authModel from "../models/auth.model.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../config/jwt.js";
import jwt from "jsonwebtoken";
export const register = async (req, res, next) => {
  try {
    let email = req.body.email;
    if (email) {
      try {
        let userExist = await authModel.exists({ email });

        if (userExist) {
          res.status(400).json({
            status: 400,
            action: "error",
            message: "User already exist",
          });
        } else {
          let salt = await bcrypt.genSalt(10);
          let pass = await bcrypt.hash(req.body.password, salt);
          const user = await authModel.create({
            name: req.body.name,
            email: email,
            password: pass,
            role: req.body.role,
            createdAt: req.body.createdAt,
          });
          user.save();

          res.json({
            status: 200,
            action: "success",
            message: "User created successfully",
            data: req.body.email,
          });
        }
      } catch (error) {
        res.status(400).json({
          status: 400,
          action: "error",
          message: error,
        });
      }
    } else {
      res.status(400).json({
        status: 400,
        action: "error",
        message: "please provide email",
      });
    }
  } catch (error) {
    res.status(400).json({
      status: 400,
      action: "error",
      message: error,
    });
  }
};

export const login = async (req, res, next) => {
  try {
    let email = req.body.email;
    let userExist = await authModel.exists({ email, role: req.body.role });
    if (userExist) {
      let currectUeser = await authModel
        .findOne({ email })
        .select("name email role password -_id");
      let isPassword = await bcrypt.compare(
        req.body.password,
        currectUeser.password
      );
      let user = {
        name: currectUeser.name,
        email: currectUeser.email,
        role: currectUeser.role,
      };
      let token = generateToken(user);
      if (isPassword) {
        res.status(201)
        .cookie("token", token, {
        httpOnly: true,    
        secure: true,      
        sameSite: "strict", 
        path: "/",         
        maxAge: 24 * 60 * 60 * 1000, 
      })
        .json({
          status: 201,
          action: "success",
          message: "User  exist",
          data: user,
          token,
        });
      } else {
        res.status(400).json({
          status: 400,
          action: "error",
          message: "User or password invalid",
          data: [],
        });
      }
    } else {
      res.status(400).json({
        status: 400,
        action: "error",
        message: "User or password invalid",
        data: [],
      });
    }
  } catch (error) {}
};

export const updatePassword = async (req, res, next) => {
  try {
    let {email,currentPassword,password} = req.body;
    let userExist = await authModel.exists({ email });
    if (userExist) {
      let currectUeser = await authModel
        .findOne({ email })
        .select("password");
      
      let isPassword = await bcrypt.compare(
        currentPassword,
        currectUeser.password
      );
      if (isPassword) {
        let salt = await bcrypt.genSalt(10);
        let pass = await bcrypt.hash(password, salt);
         
       const data =await authModel.updateOne({ "email":email },{ $set:{ "password": pass }});

        return res.status(201).json({
          status: 201,
          action: "success",
          message: "Password update successfully",
        });
      } else {
        return res.status(400).json({
          status: 400,
          action: "error",
          message: "User or password invalid",
          data: [],
        });
      }
    } else {
      res.status(400).json({
        status: 400,
        action: "error",
        message: "User or password invalid",
        data: [],
      });
    }
  } catch (error) {
    res.status(400).json({
      status: 400,
      action: "error",
      message: "User or password invalid",
      data: [],
    });
  }
};
