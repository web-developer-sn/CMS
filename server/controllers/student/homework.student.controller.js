import homeworkModel from "../../models/student/homework.student.model.js";

export const homework = async (req, res, next) => {
  
  try {
    const homeworkData = req.body;
    if (!Array.isArray(homeworkData) || homeworkData.length === 0) {
      return res.status(400).json({
        status: 400,
        action: "error",
        message: "Request body must be a non-empty array",
        data: [],
      });
    }

     await homeworkModel.insertMany(homeworkData);
    res.status(201).json({
      status: 201,
      action: "success",
      message: "saved successfully",
    });
  } catch (error) {
    res.status(400).json({
      status: 400,
      action: "error",
      message: "Please check Data",
    });
  }
};
export const getHomework=async(req,res,next)=>{
    try {
        const user = req.user.email;
        const homeworkData=await homeworkModel.find({user}).select("-_id -user -__v")
        if(!Array.isArray(homeworkData)||homeworkData.length===0){
          return  res.status(400).json({
            status: 400,
        action: "error",
        message: "Please check User id",
        data: homeworkData,
        })
        }
        res.status(200).json({
            status: 200,
        action: "success",
        message: "successfull",
        data: homeworkData,
        })
    } catch (error) {
         res.status(400).json({
            status: 400,
        action: "error",
        message: "bad Request",
        data: [],
        })
    }
}
