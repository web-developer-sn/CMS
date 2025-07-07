"use client";

import React from "react";
import { Typography } from "@mui/joy";
import NavigateNextOutlinedIcon from "@mui/icons-material/NavigateNextOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { useMediaQuery } from "@mui/material";
import { Heart, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

interface Course {
  id: number;
  image: string;
  title: string;
  duration: string;
  instructor: string;
  description: string;
  likes: number;
  comments: number;
}

const courses: Course[] = [
  {
    id: 1,
    image: "https://www.einfosoft.com/templates/admin/smartangular/source/light/assets/images/banner/course1.png",
    title: "PHP Development Course",
    duration: "25 mins",
    instructor: "John Deo",
    description:
      "In this course, you'll explore the structure of web applications and how a web browser interacts with a PHP web server.",
    likes: 368,
    comments: 48,
  },
  {
    id: 2,
    image: "	https://www.einfosoft.com/templates/admin/smartangular/source/light/assets/images/banner/course2.png",
    title: "Java Development Course",
    duration: "45 mins",
    instructor: "Sarah Smith",
    description:
      "In this course, you'll explore the basics of Java, its syntax, object-oriented concepts, and server-side development.",
    likes: 2951,
    comments: 254,
  },
  {
    id: 3,
    image: "https://www.einfosoft.com/templates/admin/smartangular/source/light/assets/images/banner/course3.png",
    title: "Angular Development Course",
    duration: "25 mins",
    instructor: "Airi Satou",
    description:
      "Learn Angular framework, building dynamic single-page applications, and integrating APIs efficiently.",
    likes: 7871,
    comments: 658,
  },
  {
    id: 4,
    image: "https://www.einfosoft.com/templates/admin/smartangular/source/light/assets/images/banner/course2.png",
    title: "SEO Optimization Course",
    duration: "30 mins",
    instructor: "Ashton Cox",
    description:
      "Master search engine optimization, improve website visibility, and understand Google ranking factors.",
    likes: 1258,
    comments: 158,
  },
];

const AllCourses = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div className="p-4">
      {/* Breadcrumb */}
      <div className="flex py-8 items-center flex-wrap gap-2">
        {!isMobile ? (
          <h1 className="text-xl font-bold">All Courses</h1>
        ) : (
          <Typography className="text-sm font-bold whitespace-nowrap">All Courses</Typography>
        )}
        <NavigateNextOutlinedIcon fontSize="small" />
        <HomeOutlinedIcon fontSize="small" />
        <NavigateNextOutlinedIcon fontSize="small" />
        <Typography fontSize={"small"}>Course</Typography>
        <NavigateNextOutlinedIcon fontSize="small" />
        <Typography fontSize={"small"}>All Courses</Typography>
      </div>

      {/* Main Content */}
      <div className="bg-white p-6 rounded shadow mb-6">
        <h2 className="text-lg font-semibold mb-4">All Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <motion.div
              key={course.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.02] flex flex-col overflow-hidden border border-gray-200"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              {/* Image */}
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-40 object-cover"
              />

              {/* Content */}
              <div className="p-4 flex flex-col flex-1">
                <Typography className="font-bold text-md mb-1">{course.title}</Typography>
                <Typography level="body-sm" className="text-gray-500 mb-1">
                  {course.duration}
                </Typography>
                <Typography className="text-sm mb-2">{course.instructor}</Typography>

                <Typography level="body-sm" className="text-gray-600 flex-1 mb-4">
                  {course.description.length > 100
                    ? course.description.substring(0, 100) + "..."
                    : course.description}
                </Typography>

                {/* Bottom Row */}
                <div className="flex items-center justify-between mt-auto">
                  <button className="bg-gradient-to-r from-sky-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm hover:from-sky-600 hover:to-purple-600 transition">
                    Read More
                  </button>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Heart className="text-red-500" size={14} />
                      <span>{course.likes.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageCircle size={14} />
                      <span>{course.comments}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllCourses;
