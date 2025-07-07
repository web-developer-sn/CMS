"use client";

import React from "react";
import { Typography } from "@mui/joy";
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import { useMediaQuery, Tabs, Tab, Box, Avatar, Divider, LinearProgress } from "@mui/material";

const AboutTeacher = () => {
    const isMobile = useMediaQuery('(max-width: 768px)');
    const [tab, setTab] = React.useState(0);

    const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
        setTab(newValue);
    };

    return (
         <div className="p-4">
            {/* Breadcrumb */}
            <div className="flex py-4 items-center">
                {!isMobile ? <h1 className="text-xl font-bold">Profile</h1> :
                    <Typography className="text-sm font-bold whitespace-nowrap">Profile </Typography>}
                <NavigateNextOutlinedIcon fontSize="small" />
                <HomeOutlinedIcon fontSize="small" />
                <NavigateNextOutlinedIcon fontSize="small" />
                <Typography fontSize={"small"}>Teacher</Typography>
                <NavigateNextOutlinedIcon fontSize="small" />
                <Typography fontSize={"small"}>Profile</Typography>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Profile Card */}
                <div className="bg-white p-4 rounded shadow flex flex-col items-center">
                    <div className="bg-gray-900 h-24 w-full rounded-t flex flex-col items-center">
                        <h2 className="text-white font-semibold text-lg justify-center">Sarah Smith</h2>
                         <p className="text-white justify-center text-sm">Senior Teacher</p>
                    </div>
                    <Avatar
                        src="data:image/jpeg;base64,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"
                        alt="Sarah Smith"
                        sx={{borderRadius: 2,  width: 80, height: 80, marginTop: -5 }}
                    />

                   
                    <p className="mt-2 text-center text-sm text-gray-500">456, Eastern Avenue, Courtage area, New York</p>
                    <p className="text-gray-700 mt-2 text-sm"><CallOutlinedIcon fontSize="small"/> 264-625-2583</p>

                    <div className="flex justify-around w-full mt-4 text-center">
                        <div>
                            <h4 className="font-bold">564</h4>
                            <span className="text-gray-500 text-sm">Following</span>
                        </div>
                        <div>
                            <h4 className="font-bold">18k</h4>
                            <span className="text-gray-500 text-sm">Followers</span>
                        </div>
                        <div>
                            <h4 className="font-bold">565</h4>
                            <span className="text-gray-500 text-sm">Post</span>
                        </div>
                    </div>
                </div>

                {/* Tabs and About Section */}
                <div className="lg:col-span-2 bg-white p-4 rounded shadow">
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={tab} onChange={handleTabChange}>
                            <Tab label="About Me" />
                            <Tab label="Settings" />
                        </Tabs>
                    </Box>

                    {tab === 0 && (
                        <div className="mt-4 space-y-4">
                            <h3 className="font-semibold">About</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <strong>Full Name:</strong> Emily Smith
                                </div>
                                <div>
                                    <strong>Mobile:</strong> (123) 456 7890
                                </div>
                                <div>
                                    <strong>Email:</strong> johndeo@example.com
                                </div>
                                <div>
                                    <strong>Location:</strong> India
                                </div>
                            </div>

                            <p className="text-sm text-gray-600">
                                Completed my graduation in Arts from the well-known and renowned institution of India – SARDAR PATEL ARTS COLLEGE, BARODA in 2000-01.
                                Worked as Professor and Head of the department at Sarda College, Rajkot, Gujarat from 2003-2015.
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>

                            <Divider />

                            <h3 className="font-semibold">Education</h3>
                            <ul className="list-disc pl-5 text-sm text-gray-600">
                                <li>B.A, Gujarat University, Ahmedabad, India</li>
                                <li>M.A, Gujarat University, Ahmedabad, India</li>
                                <li>Ph.D, Saurashtra University, Rajkot</li>
                            </ul>

                            <Divider />

                            <h3 className="font-semibold">Experience</h3>
                            <ul className="list-disc pl-5 text-sm text-gray-600">
                                <li>One year experience as Jr. Teacher from April-2009 to March-2010 at B. J. Arts College, Ahmedabad.</li>
                                <li>Three years experience as Jr. Teacher at V.S. Arts & Commerce College from April-2008 to April-2011.</li>
                                <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                                <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                            </ul>

                            <Divider />

                            <h3 className="font-semibold">Conferences, Courses & Workshops Attended</h3>
                            <ul className="list-disc pl-5 text-sm text-gray-600">
                                <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                                <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                                <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                            </ul>
                        </div>
                    )}
                </div>

                {/* Skills Card */}
                <div className="lg:col-span-3 bg-white p-4 rounded shadow mt-4">
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={tab} onChange={handleTabChange}>
                            <Tab label="About" />
                            <Tab label="Skills" />
                        </Tabs>
                    </Box>

                    {tab === 1 && (
                        <div className="mt-4 space-y-4">
                            <div>
                                <h4 className="font-medium mb-1">JAVA</h4>
                                <LinearProgress variant="determinate" value={50} sx={{ height: 8, borderRadius: 5, backgroundColor: '#f3f3f3' }} />
                            </div>
                            <div>
                                <h4 className="font-medium mb-1">PHP</h4>
                                <LinearProgress variant="determinate" value={40} sx={{ height: 8, borderRadius: 5, backgroundColor: '#f3f3f3' }} />
                            </div>
                            <div>
                                <h4 className="font-medium mb-1">Angular</h4>
                                <LinearProgress variant="determinate" value={30} sx={{ height: 8, borderRadius: 5, backgroundColor: '#f3f3f3' }} />
                            </div>
                            <div>
                                <h4 className="font-medium mb-1">JavaScript</h4>
                                <LinearProgress variant="determinate" value={80} sx={{ height: 8, borderRadius: 5, backgroundColor: '#f3f3f3' }} />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AboutTeacher;
