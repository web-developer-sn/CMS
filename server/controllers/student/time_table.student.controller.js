import timeTableModel from "../../models/student/time_table.student.model.js";

export const timeTable = async (req, res, next) => {
  try {
    const timeTableData = req.body;
    if (!Array.isArray(timeTableData) || timeTableData.length === 0) {
      return res.status(400).json({
        status: 400,
        action: "error",
        message: "Request body must be a non-empty array",
        data: [],
      });
    }

     await timeTableModel.insertMany(timeTableData);
    res.status(201).json({
      status: 201,
      action: "success",
      message: "saved successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      action: "error",
      message: "Please check Data",
    });
  }
};
export const getTimeTable=async(req,res,next)=>{
    try {
        const user = req.user.email;
        const timeTableData=await timeTableModel.find({user}).select("-_id -user -__v")
        if(!Array.isArray(timeTableData)||timeTableData.length===0){
          return  res.status(400).json({
            status: 400,
        action: "error",
        message: "Please check User id",
        data: timeTableData,
        })
        }
        res.status(200).json({
            status: 200,
        action: "success",
        message: "successfull",
        data: timeTableData,
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
