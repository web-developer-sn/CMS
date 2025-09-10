import leaveRequestModel from "../../models/student/leave_request.student.model.js";

export const leaveRequest=async(req,res ,next)=>{
    try {
    const leaveRequest = req.body;
    if (!Array.isArray(leaveRequest) || leaveRequest.length === 0) {
      return res.status(400).json({
        status: 400,
        action: "error",
        message: "Request body must be a non-empty array",
        data: [],
      });
    }

     await leaveRequestModel.insertMany(leaveRequest);
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
}

 export const getLeaveRequest=async(req ,res ,next)=>{
    try {
       const user = req.user.email;
        console.log("user",user)
        const leaveRequest=await leaveRequestModel.find({user}).select("-_id -user -__v")
        if(!Array.isArray(leaveRequest)||leaveRequest.length===0){
          return  res.status(400).json({
            status: 400,
        action: "error",
        message: "Please check User id",
        data: leaveRequest,
        })
        }
        res.status(200).json({
            status: 200,
        action: "success",
        message: "successfull",
        data: leaveRequest,
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