import Lecture from "../../models/teacher/lectures.teacher.models.js";


export const createLecture = async (req, res) => {
  try {
    const lecture = await Lecture.create(req.body);
    res.status(201).json({ 
        status: 201, 
         action: "success",
        message: "Lecture created",
        data: lecture });
  } catch (err) {
    res.status(400).json({ 
        status: 400,
         action: "error",
         message: "Failed to create lecture", 
         });
  }
};


export const getAllLectures = async (req, res) => {
  try {
    const lectures = await Lecture.find().sort({ date: 1 });
    res.status(200).json({ 
        status: 200, 
        data: lectures , 
        action: "success",
        message: "successfull"
    });
  } catch (err) {
    res.status(500).json({
         status: 500, 
          action: "error",
        message: "Server Error" });
  }
};


export const updateLecture = async (req, res) => {
  try {
    const updated = await Lecture.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json({ 
         action: "success",
        message: "Lecture updated",
         data: updated 
        });
  } catch (err) {
    res.status(400).json({ 
         action: "error",
        message: "Update failed", 
     });
  }
};

export const deleteLecture = async (req, res) => {
  try {
    await Lecture.findByIdAndDelete(req.params.id);
    res.status(200).json({ 
         action: "success",
        message: "Lecture deleted"
     });
  } catch (err) {
    res.status(400).json({
         action: "error",
         message: "Delete failed",
        });
  }
};
