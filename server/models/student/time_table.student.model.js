import mongoose from "mongoose";

const timeTableSchema = new mongoose.Schema({
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

const timeTableModel=mongoose.model("time_table",timeTableSchema)
export default timeTableModel
