import mongoose from "mongoose";

const leaveRequestSchema = new mongoose.Schema({
  user: { type: String, required: true },
  subject: { type: String, required: false },
  className: { type: String, required: false },
  fromDate: { type: Date, required: false },
  toDate: { type: Date, required: false },
  time: { type: String, required: false },
  duration: { type: String, require: false },
  roomNo: { type: String, required: false },
  totalMarks: { type: Number, required: false },
  requiredMarks: { type: Number, required: false },
});

const leaveRequestModel = mongoose.model("leave_request", leaveRequestSchema);
export default leaveRequestModel;
