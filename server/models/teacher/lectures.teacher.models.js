import mongoose from "mongoose";

const lectureSchema = new mongoose.Schema({
  subject: { type: String, required: true },
  classCode: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  status: { type: String, enum: ["Confirm", "Cancelled"], default: "Confirm" },
  studentGroup: { type: String },
  duration: { type: Number }, // in minutes
  location: { type: String },
  attendanceCount: { type: Number, default: 0 },
  reasonForCancellation: { type: String, default: "" },
}, { timestamps: true });

export default mongoose.model("Lecture", lectureSchema);
