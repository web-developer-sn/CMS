"use client";

import React, { useState } from "react";
import { Typography } from "@mui/joy";
import NavigateNextOutlinedIcon from "@mui/icons-material/NavigateNextOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

type Day =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

type ClassEntry = {
  class: string;
  subject: string;
  time: string;
  room: string;
};

type TeacherTimeTableType = {
  [teacher: string]: {
    [day in Day]: ClassEntry[];
  };
};

// Data
const timetableData: TeacherTimeTableType = {
  "John Deo": {
    Monday: [
      { class: "Class 3(B)", subject: "Science (230)", time: "9:00 AM - 9:45 AM", room: "105" },
      { class: "Class 1(A)", subject: "Math (201)", time: "10:00 AM - 10:45 AM", room: "110" },
    ],
    Tuesday: [
      { class: "Class 2(B)", subject: "English (210)", time: "9:30 AM - 10:00 AM", room: "120" },
    ],
    Wednesday: [
      { class: "Class 5(C)", subject: "History (220)", time: "11:00 AM - 11:45 AM", room: "115" },
    ],
    Thursday: [
      { class: "Class 4(A)", subject: "Geography (240)", time: "8:30 AM - 9:15 AM", room: "125" },
    ],
    Friday: [
      { class: "Class 1(C)", subject: "Art (250)", time: "10:15 AM - 11:00 AM", room: "130" },
    ],
    Saturday: [
      { class: "Class 3(A)", subject: "Physical Education (260)", time: "12:00 PM - 12:45 PM", room: "140" },
    ],
    Sunday: [],
  },
};

const TeacherTimeTable: React.FC = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [selectedTeacher, setSelectedTeacher] = useState<string>("John Deo");

  const days: Day[] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  return (
    <div className="p-4">
      <div className="flex py-4 items-center flex-wrap gap-2">
        {!isMobile ? (
          <h1 className="text-xl font-bold">Teacher TimeTable</h1>
        ) : (
          <Typography className="text-sm font-bold whitespace-nowrap">Teacher TimeTable</Typography>
        )}
        <NavigateNextOutlinedIcon fontSize="small" />
        <HomeOutlinedIcon fontSize="small" />
        <NavigateNextOutlinedIcon fontSize="small" />
        <Typography fontSize={"small"}>Teacher</Typography>
        <NavigateNextOutlinedIcon fontSize="small" />
        <Typography fontSize={"small"}>Teacher TimeTable</Typography>
      </div>

      
      <div className="bg-white p-6 rounded shadow mb-6">
        <h2 className="text-lg font-semibold mb-4">Teacher TimeTable</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 mb-6">
          <div>
            <label className="block font-medium mb-2">Teachers</label>
            <select
              name="teachers"
              className="border py-2 px-3 w-full rounded"
              value={selectedTeacher}
              onChange={(e) => setSelectedTeacher(e.target.value)}
            >
              <option>John Deo</option>
              <option>Sarah Smith</option>
              <option>Jay Soni</option>
              <option>Smita Parikh</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {days.map((day) => (
            <motion.div
              key={day}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              {/* Card Header */}
              <div className="bg-sky-400 text-white text-center p-2 rounded-t-2xl">
                <h3 className="font-bold text-lg">{day}</h3>
              </div>

              {/* Card Content */}
              <div className="p-4 flex-1">
                {timetableData[selectedTeacher][day].length > 0 ? (
                  timetableData[selectedTeacher][day].map((item, index) => (
                    <div
                      key={index}
                      className="mb-4 bg-gray-100 rounded-xl p-4 shadow-inner hover:scale-[1.02] transition-transform duration-200"
                    >
                      <div className="flex flex-wrap gap-2 mb-2">
                        <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">{item.class}</span>
                        <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">{item.subject}</span>
                      </div>
                      <p className="text-gray-700 text-sm mb-1">🕒 {item.time}</p>
                      <p className="text-gray-700 text-sm flex items-center gap-1">
                        <LocationOnOutlinedIcon fontSize="small" /> Room No.: {item.room}
                      </p>
                    </div>
                  ))
                ) : (
                  <div className="text-gray-500 flex items-center justify-center h-24">Not Scheduled</div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div> 
    </div>
  );
};

export default TeacherTimeTable;
