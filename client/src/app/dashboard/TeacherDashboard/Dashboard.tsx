"use client";

import React, { useState } from "react";
import { Typography, Card, CardContent, Button, Table, Sheet } from "@mui/joy";
import NavigateNextOutlinedIcon from "@mui/icons-material/NavigateNextOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { useMediaQuery } from "@mui/material";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { Pencil, Trash2, Eye } from "lucide-react";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';
import FunctionsOutlinedIcon from '@mui/icons-material/FunctionsOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import BiotechOutlinedIcon from '@mui/icons-material/BiotechOutlined';
import ComputerOutlinedIcon from '@mui/icons-material/ComputerOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import { Edit } from "@mui/icons-material";

const chartData = [
    { name: "Jan", value: 45 },
    { name: "Feb", value: 70 },
    { name: "Mar", value: 30 },
    { name: "Apr", value: 65 },
    { name: "May", value: 80 },
    { name: "Jun", value: 40 },
    { name: "Jul", value: 20 },
    { name: "Aug", value: 50 },
];

const subjectData = [
    { name: "Music", value: 23, color: "#FF6384" },
    { name: "Science", value: 32, color: "#36A2EB" },
    { name: "Economics", value: 12, color: "#FFCE56" },
    { name: "Maths", value: 52, color: "#4BC0C0" },
];
const lecturesInWeek = [
    { subject: "Chemistry", days: "M - W - F", icon: ScienceOutlinedIcon, color: "#FF5722" },
    { subject: "Mathematics", days: "- T - T - S", icon: FunctionsOutlinedIcon, color: "#3F51B5" },
    { subject: "Painting", days: "M - T - S", icon: ColorLensOutlinedIcon, color: "#E91E63" },
    { subject: "Business Studies", days: "M - W - F", icon: BusinessCenterOutlinedIcon, color: "#009688" },
    { subject: "Biology", days: "M - W - F", icon: BiotechOutlinedIcon, color: "#8BC34A" },
    { subject: "Computer Studies", days: "M - W - F - S", icon: ComputerOutlinedIcon, color: "#FFC107" },
    { subject: "Geography", days: "M - W - F - S", icon: PublicOutlinedIcon, color: "#03A9F4" },
];

const todayLectures = [
    { subject: "Business studies", standard: "Standard 12", time: "10:30 AM", duration: "45 Min" },
    { subject: "Chemistry", standard: "Standard 11", time: "11:15 AM", duration: "30 Min" },
    { subject: "Biology", standard: "Standard 12", time: "12:00 AM", duration: "35 Min" },
    { subject: "Physics", standard: "Standard 11", time: "12:45 AM", duration: "30 Min" },
    { subject: "Music", standard: "Standard 8", time: "02:00 AM", duration: "45 Min" },
    { subject: "Computer studies", standard: "Standard 10", time: "03:30 AM", duration: "45 Min" },
    { subject: "Mathematics", standard: "Standard 9", time: "09:00 AM", duration: "40 Min" },
];

// Custom LineChart Tooltip
const CustomLineTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-black text-white text-xs p-2 rounded shadow">
                <p className="font-semibold">{label}</p>
                <p>Avg. Lecture: {payload[0].value}</p>
            </div>
        );
    }
    return null;
};

// Custom PieChart Tooltip
const CustomPieTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-green-500 text-white text-xs p-2 rounded shadow">
                <p>{`${payload[0].name}: ${payload[0].value}`}</p>
            </div>
        );
    }
    return null;
};

const TeacherDashBoard: React.FC = () => {
    const isMobile = useMediaQuery("(max-width: 768px)");

    return (
        <div className="p-4">
            {/* Breadcrumb */}
            <div className="flex py-4 items-center flex-wrap gap-2">
                {!isMobile ? (
                    <h1 className="text-xl font-bold">Dashboard</h1>
                ) : (
                    <Typography className="text-sm font-bold whitespace-nowrap">Dashboard</Typography>
                )}
                <NavigateNextOutlinedIcon fontSize="small" />
                <HomeOutlinedIcon fontSize="small" />
                <NavigateNextOutlinedIcon fontSize="small" />
                <Typography fontSize={"small"}>Teacher</Typography>
                <NavigateNextOutlinedIcon fontSize="small" />
                <Typography fontSize={"small"}>Dashboard</Typography>
            </div>

            {/* Welcome Section */}
            <Card className="mb-6">
                <CardContent className="flex flex-col md:flex-row items-center md:items-start md:justify-between gap-6">
                    {/* Image Section */}
                    <div className="flex-shrink-0 w-full md:w-auto flex justify-center md:justify-start">
                        <img
                            src="https://www.einfosoft.com/templates/admin/smartangular/source/light/assets/images/pages/welcome.png"
                            alt="Welcome"
                            className="w-64 md:w-80"
                        />
                    </div>

                    {/* Text Section */}
                    <div className="w-full md:flex-1 text-center md:text-left flex flex-col justify-center">
                        <Typography level="h4" className="font-bold text-gray-700">
                            Welcome back <span className="text-blue-600">Ashton Cox!</span>
                        </Typography>
                        <Typography className="mt-2 text-gray-500">
                            We would like to take this opportunity to welcome you to our practice and to thank you for choosing our platform.
                        </Typography>
                    </div>
                </CardContent>
            </Card>


            {/* Chart Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
                <Card className="col-span-2">
                    <CardContent>
                        <div className="flex justify-between items-center mb-4">
                            <Typography className="font-bold text-gray-700">Average Lecture Per Month</Typography>
                            <Button size="sm">View All</Button>
                        </div>
                        <ResponsiveContainer width="100%" height={250}>
                            <LineChart data={chartData}>
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip content={<CustomLineTooltip />} />
                                <Line type="monotone" dataKey="value" stroke="#0284C7" strokeWidth={4}
                                    dot={{ r: 2, stroke: 'orange', fill: 'orange', strokeWidth: 2 }}
                                    activeDot={{ r: 6, fill: 'orange', stroke: 'orange', strokeWidth: 0 }} />
                            </LineChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent>
                        <Typography className="font-bold mb-4 text-gray-700">Subject Chart</Typography>
                        <ResponsiveContainer width="100%" height={250}>
                            <PieChart>
                                <Tooltip content={<CustomPieTooltip />} />
                                <Pie
                                    data={subjectData}
                                    dataKey="value"
                                    nameKey="name"
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={70}
                                    label
                                >
                                    {subjectData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                        <ul className="mt-4 space-y-2">
                            {subjectData.map((subject, idx) => (
                                <li key={idx} className="flex justify-between text-sm">
                                    <span className="flex items-center gap-2">
                                        <span className="inline-block w-3 h-3 rounded-full" style={{ backgroundColor: subject.color }}></span>
                                        {subject.name}
                                    </span>
                                    <span className={`font-medium ${subject.value >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                        {subject.value >= 0 ? `+${subject.value}%` : `${subject.value}%`}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            </div>

            {/* Lecture In Week & Today's Lecture */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <Card>
                    <CardContent>
                        <Typography className="font-bold mb-6 text-gray-700">Lecture In Week</Typography>
                        <ul className="space-y-4">
                            {lecturesInWeek.map((lecture, idx) => {
                                const IconComponent = lecture.icon;
                                return (
                                    <li key={idx} className="flex justify-between items-center text-sm">
                                        <span className="flex items-center gap-2 text-gray-700">
                                            <IconComponent fontSize="small" sx={{ color: lecture.color }} />
                                            {lecture.subject}
                                        </span>
                                        <span className="flex items-center gap-1 text-gray-500">
                                            {lecture.days}
                                        </span>
                                    </li>
                                );
                            })}
                        </ul>

                    </CardContent>
                </Card>

                <Card className="col-span-2">
                    <CardContent>
                        <div className="flex justify-between items-center mb-4">
                            <Typography className="font-bold text-gray-700">Today's Lecture</Typography>
                        </div>

                        <div className="w-full overflow-x-auto">
                            <Sheet
                                sx={{
                                    height: 230,
                                    overflowY: 'auto', 
                                    minWidth: 600,
                                }}
                            >
                                <Table stickyHeader className="min-w-[600px]" borderAxis="both">
                                    <thead>
                                        <tr>
                                            <th className="py-2 px-4">Subject Name</th>
                                            <th className="py-2 px-4">Standard</th>
                                            <th className="py-2 px-4">Time</th>
                                            <th className="py-2 px-4">Duration</th>
                                            <th className="py-2 px-4">Details</th>
                                            <th className="py-2 px-4">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {todayLectures.map((lecture, idx) => (
                                            <tr key={idx} className="border-b hover:bg-gray-100">
                                                <td className="py-2 px-4">{lecture.subject}</td>
                                                <td className="py-2 px-4">{lecture.standard}</td>
                                                <td className="py-2 px-4">{lecture.time}</td>
                                                <td className="py-2 px-4">{lecture.duration}</td>
                                                <td className="py-2 px-4">
                                                    <Eye size={16} />
                                                </td>
                                                <td className="py-2 px-4 flex gap-2">
                                                    <Edit fontSize="small" />
                                                    <Trash2 size={16} className="cursor-pointer text-red-600" />
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </Sheet>
                        </div>
                    </CardContent>
                </Card>

            </div>
        </div>
    );
};

export default TeacherDashBoard;
