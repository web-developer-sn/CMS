"use client";

import React from "react";
import {
    Typography,
    Card,
    CardContent,
    Sheet,
    Button,
    Table,
    Chip,
    Avatar,
    Tooltip as JoyTooltip,
    IconButton
} from "@mui/joy";
import { useMediaQuery } from "@mui/material";
import NavigateNextOutlinedIcon from "@mui/icons-material/NavigateNextOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { PieChart, Pie, Cell, Tooltip as ReTooltip, ResponsiveContainer, LineChart, Line, XAxis, YAxis, BarChart, Bar, Legend } from "recharts";
import { FileText, Download, Eye, Pencil, Trash2 } from "lucide-react";

const pieData = [
    { name: "Math", value: 40, color: "#0284C7" },
    { name: "Science", value: 30, color: "#82ca9d" },
    { name: "English", value: 20, color: "#ffc658" },
    { name: "Art", value: 10, color: "#ff7f50" },
];

const progressData = [
    { subject: "Chemistry", progress: 30, time: "2 Months" },
    { subject: "Mathematics", progress: 56, time: "3 Months" },
    { subject: "Painting", progress: 67, time: "1 Month" },
    { subject: "Business Studies", progress: 70, time: "2 Months" },
    { subject: "Biology", progress: 24, time: "3 Months" },
    { subject: "Computer Studies", progress: 77, time: "4 Months" },
    { subject: "Geography", progress: 41, time: "2 Months" },
];

const timeChartData = [
    { day: "Mon", java: 40, geo: 30 },
    { day: "Tue", java: 50, geo: 40 },
    { day: "Wed", java: 60, geo: 50 },
    { day: "Thu", java: 70, geo: 60 },
    { day: "Fri", java: 60, geo: 30 },
    { day: "Sat", java: 40, geo: 20 },
];

const testResults = [
    { level: "Level 1", Maths: 25, Science: 20 },
    { level: "Level 2", Maths: 35, Science: 30 },
    { level: "Level 3", Maths: 30, Science: 40 },
    { level: "Level 4", Maths: 45, Science: 35 },
    { level: "Level 5", Maths: 60, Science: 45 },
    { level: "Level 6", Maths: 85, Science: 50 },
    { level: "Level 7", Maths: 75, Science: 55 },
];

const upcomingClasses = [
    { name: "Cara Stevens", subject: "Mathematics", date: "12 June 20", time: "10:00 AM" },
    { name: "Airi Satou", subject: "Computer Studies", date: "13 June 20", time: "11:00 AM" },
    { name: "Jens Brincker", subject: "Geography", date: "15 June 20", time: "10:30 AM" },
    { name: "Angelica Ramos", subject: "Chemistry", date: "16 June 20", time: "10:00 AM" },
    { name: "Cara Stevens", subject: "Painting", date: "18 June 20", time: "12:30 PM" },
];

const assignments = [
    { name: "Java Programming", file: "docx", size: "4.3MB" },
    { name: "Angular Theory", file: "xls", size: "1.2MB" },
    { name: "Maths Sums Solution", file: "pdf", size: "1.05MB" },
    { name: "Submit Science Journal", file: "zip", size: "8.52MB" },
    { name: "Marketing Instructions", file: "doc", size: "5.1MB" },
];

const notices = [
    { title: "Annual Sports Day Announcement", author: "Emily Johnson" },
    { title: "Midterm Exam Schedule Released", author: "Michael Smith" },
    { title: "Parent Teacher Meeting Reminder", author: "Sarah Brown" },
    { title: "Library Renovation Notice", author: "David Wilson" },
];

const books = [
    { id: "A97676", title: "Computer Programming", author: "John Deo", date: "13/01/2019", status: "Return", return: "01/23/2019" },
    { id: "B76457", title: "Design Pattern in Java", author: "Airi Satou", date: "01/11/2019", status: "Issue", return: "04/24/2019" },
    { id: "RT67013", title: "The Mathematics Principles", author: "Angelica Ramos", date: "03/11/2019", status: "Issue", return: "04/12/2019" },
    { id: "PS23908", title: "Angular 10 Advance", author: "Jens Brincker", date: "05/12/2019", status: "Issue", return: "04/23/2019" },
    { id: "MO487", title: "SEO Optimization", author: "Cara Stevens", date: "06/01/2019", status: "Issue", return: "05/27/2019" },
    { id: "BE8232", title: "Android Basic Concept", author: "Jacob Ryan", date: "01/08/2019", status: "Issue", return: "06/18/2019" },
    { id: "JS64789", title: "Intro to ML", author: "Liam Brown", date: "05/28/2019", status: "Issue", return: "06/10/2019" },
];

const StudentDashboard = () => {
    const isMobile = useMediaQuery("(max-width: 768px)");

    return (
        <div className="p-4 space-y-6 max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-4">
            <div className="col-span-12 flex items-center space-x-2 text-gray-600">
                <Typography className="text-sm font-bold whitespace-nowrap">Dashboard</Typography>
                  <NavigateNextOutlinedIcon fontSize="small" />
                <HomeOutlinedIcon fontSize="small" />
                <NavigateNextOutlinedIcon fontSize="small" />
                <Typography level="body-sm">Student</Typography>
                <NavigateNextOutlinedIcon fontSize="small" />
                <Typography level="body-sm">Dashboard</Typography>
            </div>

            <Card className="col-span-12 lg:col-span-6 flex flex-col md:flex-row items-center gap-4 p-4">
                <div className="w-full md:w-1/3 h-48">
                    <ResponsiveContainer>
                        <PieChart>
                            <Pie data={pieData} dataKey="value" outerRadius={60} label>
                                {pieData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Pie>
                            <ReTooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
                <div className="flex-1">
                    <Typography level="title-md" className="text-lg font-semibold text-green-700">
                        Good Job, Sarah. Keep Going!!
                    </Typography>
                    <Typography level="body-sm">
                        You have 80% completed this week. Keep it up and improve your result. Progress is very good!!
                    </Typography>
                </div>
            </Card>

            <Sheet variant="outlined" className="col-span-12 lg:col-span-6 p-4 rounded-lg shadow-sm">
                <Typography level="title-sm" className="mb-2 font-medium">
                    Time Spent On Learning
                </Typography>
                <ResponsiveContainer width="100%" height={200}>
                    <BarChart data={timeChartData}>
                        <XAxis dataKey="day" />
                        <YAxis />
                        <Legend />
                        <Bar dataKey="java" fill="#0284C7" />
                        <Bar dataKey="geo" fill="#82ca9d" />
                    </BarChart>
                </ResponsiveContainer>
            </Sheet>

            <Sheet variant="outlined" className="col-span-12 lg:col-span-6 p-4 rounded-lg shadow-sm">
                <Typography level="title-sm" className="mb-2 font-medium">
                    Your Progress
                </Typography>
                <div className="space-y-2">
                    {progressData.map((item) => (
                        <div className="flex justify-between items-center" key={item.subject}>
                            <Typography>{item.subject}</Typography>
                            <div className="flex items-center gap-2">
                                <div className="w-40 bg-gray-200 rounded-full overflow-hidden">
                                    <div className="bg-blue-500 h-2" style={{ width: `${item.progress}%` }}></div>
                                </div>
                                <span className="text-sm text-gray-500">{item.time}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </Sheet>

            <Sheet variant="outlined" className="col-span-12 lg:col-span-6 p-4 rounded-lg shadow-sm">
                <Typography level="title-sm" className="mb-2 font-medium">
                    Test Results
                </Typography>
                <ResponsiveContainer width="100%" height={200}>
                    <LineChart data={testResults}>
                        <XAxis dataKey="level" />
                        <YAxis />
                        <ReTooltip />
                        <Line type="monotone" dataKey="Maths" stroke="#FF6384" />
                        <Line type="monotone" dataKey="Science" stroke="#8e44ad" />
                    </LineChart>
                </ResponsiveContainer>
            </Sheet>

            <Sheet variant="outlined" className="col-span-12 lg:col-span-4 p-4 rounded-lg shadow-sm">
                <Typography level="title-sm" className="mb-4 font-semibold text-lg text-purple-900">
                    🗓️ Upcoming Classes
                </Typography>
                <div className="space-y-3">
                    {upcomingClasses.map((c, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-between p-3 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
                        >
                            <div className="flex items-center gap-3">
                                <Avatar size="sm" />
                                <div>
                                    <Typography className="text-sm font-medium text-gray-800">
                                        {c.name}
                                    </Typography>
                                    <Typography level="body-xs" className="text-gray-500">
                                        {c.subject}
                                    </Typography>
                                </div>
                            </div>
                            <div className="text-right">
                                <Typography level="body-xs" className="text-xs text-gray-700 font-medium">
                                    {c.date}
                                </Typography>
                                <Typography level="body-xs" className="text-[11px] text-gray-500">
                                    {c.time}
                                </Typography>
                            </div>
                        </div>
                    ))}
                </div>
            </Sheet>


            <Sheet variant="outlined" className="col-span-12 lg:col-span-4 p-4 rounded-lg shadow-sm">
                <Typography level="title-sm" className="mb-2 font-medium">
                    Assignments
                </Typography>
                {assignments.map((a, i) => (
                    <div key={i} className="flex justify-between items-center py-2 border-b">
                        <div className="flex items-center gap-3">
                            <FileText size={16} />
                            <Typography>{a.name}</Typography>
                        </div>
                        <Typography level="body-xs">.{a.file} - {a.size}</Typography>
                    </div>
                ))}
            </Sheet>

            <Sheet variant="outlined" className="col-span-12 lg:col-span-4 p-4 rounded-lg shadow-sm">
                <Typography level="title-sm" className="mb-4 font-semibold text-lg text-blue-900">
                    📌 Noticeboard
                </Typography>
                <div className="space-y-3">
                    {notices.map((n, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
                        >
                            <Avatar size="sm" />
                            <div className="flex flex-col">
                                <Typography className="font-medium text-sm text-gray-800">
                                    {n.title}
                                </Typography>
                                <Typography level="body-xs" className="text-gray-500">
                                    by {n.author}
                                </Typography>
                            </div>
                        </div>
                    ))}
                </div>
            </Sheet>


            <Sheet variant="outlined" className="col-span-12 p-4 rounded-lg shadow-sm overflow-auto">
                <Typography level="title-sm" className="mb-2 font-medium">
                    Library Book Issue List
                </Typography>
                <table className="min-w-full text-sm">
                    <thead>
                        <tr className="text-left border-b">
                            <th>ID</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Issue Date</th>
                            <th>Status</th>
                            <th>Return Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map((b, i) => (
                            <tr key={i} className="border-b">
                                <td>{b.id}</td>
                                <td>{b.title}</td>
                                <td>{b.author}</td>
                                <td>{b.date}</td>
                                <td><Chip size="sm" color={b.status === "Return" ? "success" : "primary"}>{b.status}</Chip></td>
                                <td>{b.return}</td>
                                <td>
                                    <div className="flex gap-2">
                                        <JoyTooltip title="Edit"><IconButton size="sm"><Pencil size={14} /></IconButton></JoyTooltip>
                                        <JoyTooltip title="View"><IconButton size="sm"><Eye size={14} /></IconButton></JoyTooltip>
                                        <JoyTooltip title="Delete"><IconButton size="sm" color="danger"><Trash2 size={14} /></IconButton></JoyTooltip>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Sheet>
        </div>
    );
};

export default StudentDashboard;
