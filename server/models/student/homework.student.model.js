import mongoose, { model } from "mongoose";

const homeworkSchema = new mongoose.Schema({
  user: { type: String, required: true },
  subject: { type: String, required: false },
  className: { type: String, required: false },
  date: { type: Date, required: false },
  time: { type: String, required: false },
  duration: { type: String, require: false },
  roomNo: { type: String, required: false },
  totalMarks: { type: Number, required: false },
  requiredMarks: { type: Number, required: false },
});


const homeworkModel=mongoose.model("homework",homeworkSchema);
export default homeworkModel;