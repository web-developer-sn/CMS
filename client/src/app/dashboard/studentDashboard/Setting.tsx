"use client";

import React from "react";
import { Typography } from "@mui/joy";
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { useMediaQuery } from "@mui/material";

const SettingStudent = () => {
    const isMobile = useMediaQuery('(max-width: 768px)');

    return (
        <div className="p-4">
            {/* Breadcrumb */}
            <div className="flex py-8 items-center">
                {!isMobile ? <h1 className="text-xl font-bold">Settings</h1> :
                    <Typography className="text-sm font-bold whitespace-nowrap">Settings</Typography>}
                <NavigateNextOutlinedIcon fontSize="small" />
                <HomeOutlinedIcon fontSize="small" />
                <NavigateNextOutlinedIcon fontSize="small" />
                <Typography fontSize={"small"}>Student</Typography>
                <NavigateNextOutlinedIcon fontSize="small" />
                <Typography fontSize={"small"}>Settings</Typography>
            </div>
            <div className="bg-white p-6 rounded shadow mb-6">
                <h2 className="text-lg font-semibold mb-4">Security Settings</h2>
                <form className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <label className="block mb-1 font-medium">User name*</label>
                        <input type="text" name="userName" required className="border rounded w-full px-3 py-2" />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Current Password*</label>
                        <input type="text" name="currentPasword" required className="border rounded w-full px-3 py-2" />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">New Password*</label>
                        <input type="text" name="newPassword" required className="border rounded w-full px-3 py-2" />
                    </div>
                    <div className="md:col-span-4 flex space-x-4 mt-4 justify-end">
                        <button type="submit" className="bg-blue-500 text-white px-4 py-1 rounded-full">Save</button>
                    </div>
                </form>
            </div>
            <div className="bg-white p-6 rounded shadow">
                <h2 className="text-lg font-semibold mb-4">Account Settings</h2>
                <form className="grid grid-cols-1 md:grid-cols-5 gap-4">
                    <div>
                        <label className="block mb-1 font-medium">First name*</label>
                        <input type="text" name="firstName" required className="border rounded w-full px-3 py-2" />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Last Name*</label>
                        <input type="text" name="lastName" required className="border rounded w-full px-3 py-2" />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">City*</label>
                        <input type="text" name="city" required className="border rounded w-full px-3 py-2" />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Email*</label>
                        <input type="text" name="email" required className="border rounded w-full px-3 py-2" />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Country*</label>
                        <input type="text" name="country" required className="border rounded w-full px-3 py-2" />
                    </div>
                    <div className="md:col-span-5">
                        <label className="block mb-1 font-medium">Address*</label>
                        <input type="text" name="address" required className="border rounded w-full px-3 py-2" />
                    </div>
                    <div className="md:col-span-5 flex space-x-4 mt-4 justify-end">
                        <button type="submit" className="bg-blue-500 text-white px-4 py-1 rounded-full">Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SettingStudent;
