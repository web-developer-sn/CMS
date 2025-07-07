"use client";

import React from "react";
import { Typography, Table, Card, CardContent } from "@mui/joy";
import NavigateNextOutlinedIcon from "@mui/icons-material/NavigateNextOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { useMediaQuery } from "@mui/material";

const timetable = [
    { time: "08:00", Monday: "English Studies", Tuesday: "Lang. Lab / English Studies", Wednesday: "Physical Education", Thursday: "French Language", Friday: "Mathematics" },
    { time: "08:40", Monday: "Cultural and Creative Arts", Tuesday: "Mathematics", Wednesday: "English Diction", Thursday: "Mathematics", Friday: "English Studies" },
    { time: "09:20", Monday: "Mathematics", Tuesday: "English Studies", Wednesday: "Mathematics", Thursday: "Social Studies", Friday: "G.P / Voc. Apt" },
    { time: "10:00", Monday: "Break", Tuesday: "Break", Wednesday: "Break", Thursday: "Break", Friday: "Break" },
    { time: "10:40", Monday: "English Studies", Tuesday: "Mathematics", Wednesday: "Chinese Language / Creative Writing", Thursday: "Phonics", Friday: "Phonetics" },
    { time: "11:20", Monday: "Basic Science and Technology", Tuesday: "Health Education", Wednesday: "Cultural and Creative Arts", Thursday: "English Studies", Friday: "English Studies" },
    { time: "12:00", Monday: "Reading Eggs", Tuesday: "Handwriting / Ind. Reading", Wednesday: "Mathematics", Thursday: "Mathematics", Friday: "Mathematics" },
    { time: "12:40", Monday: "ICT", Tuesday: "News", Wednesday: "Handwriting / Ind. Reading", Thursday: "Handwriting / Ind. Reading", Friday: "Reading Club" },
    { time: "01:20", Monday: "Handwriting / Ind. Reading", Tuesday: "Civic Education", Wednesday: "English Studies", Thursday: "Mathematics", Friday: "Creative Arts" },
];

const ClassTimeTable = () => {
    const isMobile = useMediaQuery("(max-width: 768px)");

    return (
        <div className="p-4">
            {/* Breadcrumb */}
            <div className="flex py-4 items-center flex-wrap gap-2">
                {!isMobile ? (
                    <h1 className="text-xl font-bold">Class Timetable</h1>
                ) : (
                    <Typography className="text-sm font-bold whitespace-nowrap">Class Timetable</Typography>
                )}
                <NavigateNextOutlinedIcon fontSize="small" />
                <HomeOutlinedIcon fontSize="small" />
                <NavigateNextOutlinedIcon fontSize="small" />
                <Typography fontSize={"small"}>Class</Typography>
                <NavigateNextOutlinedIcon fontSize="small" />
                <Typography fontSize={"small"}>Class Timetable</Typography>
            </div>

            {/* Timetable Display */}
            <div className="bg-sky-100 dark:bg-sky-900 rounded-lg shadow p-4 overflow-x-auto">
                <Typography className="text-lg mb-4">Class Timetable</Typography>

                {!isMobile ? (
                    // Desktop View Table
                    <Table
                        borderAxis="both"
                        stickyHeader
                        size="sm"
                        sx={{
                            "& thead th": {
                                backgroundColor: "#6366F1",
                                color: "#FFFFFF",
                                fontSize: 14,
                            },
                            "& tbody td": {
                                fontSize: 13,
                                whiteSpace: "nowrap",
                            },
                        }}
                    >
                        <thead>
                            <tr>
                                <th>Time</th>
                                <th>Monday</th>
                                <th>Tuesday</th>
                                <th>Wednesday</th>
                                <th>Thursday</th>
                                <th>Friday</th>
                            </tr>
                        </thead>
                        <tbody>
                            {timetable.map((row, index) => (
                                <tr key={index}>
                                    <td>{row.time}</td>
                                    <td>{row.Monday}</td>
                                    <td>{row.Tuesday}</td>
                                    <td>{row.Wednesday}</td>
                                    <td>{row.Thursday}</td>
                                    <td>{row.Friday}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                ) : (
                    // Mobile View Cards
                    <div className="flex flex-col gap-4">
                        {timetable.map((row, index) => (
                            <Card key={index} className="bg-white dark:bg-gray-800 shadow-md">
                                <CardContent>
                                    <Typography className="text-base font-bold mb-2">{row.time}</Typography>
                                    <div className="flex flex-col gap-1 text-sm">
                                        <div><strong>Monday:</strong> {row.Monday}</div>
                                        <div><strong>Tuesday:</strong> {row.Tuesday}</div>
                                        <div><strong>Wednesday:</strong> {row.Wednesday}</div>
                                        <div><strong>Thursday:</strong> {row.Thursday}</div>
                                        <div><strong>Friday:</strong> {row.Friday}</div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ClassTimeTable;
