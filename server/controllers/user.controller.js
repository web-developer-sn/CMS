import User from "../models/user.model.js";

export const user = async (req, res, next) => {
  try {
    const { firstName, lastName, email, city, country } = req.body;
    let userExist = await User.exists({ email });

    if (userExist) {
      return res.status(400).json({
        status: 400,
        action: "error",
        message: "User already exist",
      });
    }
    await User.create({
      firstName,
      lastName,
      email,
      city,
      country,
    });
    res.status(200).json({
      status: 200,
      action: "success",
      message: "User created successfully",
      data: [],
    });
  } catch (error) {}
};

export const getUser = async (req, res, next) => {
  try {
    const user = req.params.user;
    let userExist = await User.exists({ email: user });
    if (userExist) {
      const userData = await User.find({ email: user }).select("-_id -__v");
      return res.status(200).json({
        status: 200,
        action: "success",
        message: "User found",
        data: userData,
      });
    }
    res.status(400).json({
        status: 400,
        action: "error",
        message: "User not found",
        data: [],
      });
  } catch (error) {
    res.status(500).json({
      status: 500,
      action: "error",
      message: "Please check user Id",
    });
  }
};
