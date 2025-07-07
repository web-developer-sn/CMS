"use client";

import React from "react";
import { Typography } from "@mui/joy";
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { useMediaQuery } from "@mui/material";

const EditDepartments = () => {
    const isMobile = useMediaQuery('(max-width: 768px)');

    return (
        <div className="p-4">
            {/* Breadcrumb */}
            <div className="flex py-8 items-center">
                {!isMobile ? <h1 className="text-xl font-bold">Edit Department</h1> :
                    <Typography className="text-sm font-bold whitespace-nowrap">Edit Department</Typography>}
                <NavigateNextOutlinedIcon fontSize="small" />
                <HomeOutlinedIcon fontSize="small" />
                <NavigateNextOutlinedIcon fontSize="small" />
                <Typography fontSize={"small"}>Department</Typography>
                <NavigateNextOutlinedIcon fontSize="small" />
                <Typography fontSize={"small"}>Edit Department</Typography>
            </div>

            {/* Form */}
            <div className="bg-white p-6 rounded shadow">
                <h2 className="text-lg font-semibold mb-4">Edit Department</h2>
                <form className="grid grid-cols-1 md:grid-cols-3 gap-4">

                    {/* Department Name */}
                    <div>
                        <label className="block mb-1 font-medium">Department*</label>
                        <select name="department" required className="border rounded w-full px-3 py-2">
                            <option value="">Select Department</option>
                            <option>Mechanical</option>
                            <option>Civil</option>
                            <option>Science</option>
                            <option>Mathematics</option>
                            <option>Computer</option>
                            <option>Automobile</option>
                            <option>Management</option>
                        </select>
                    </div>

                    {/* Head of Department */}
                    <div>
                        <label className="block mb-1 font-medium">Head Of Department*</label>
                        <input type="text" name="headOfDepartment" required className="border rounded w-full px-3 py-2" />
                    </div>

                    {/* Phone */}
                    <div>
                        <label className="block mb-1 font-medium">Phone*</label>
                        <input type="text" name="phone" required className="border rounded w-full px-3 py-2" />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block mb-1 font-medium">Email*</label>
                        <input type="email" name="email" required className="border rounded w-full px-3 py-2" />
                    </div>

                    {/* Department Start Date */}
                    <div>
                        <label className="block mb-1 font-medium">Department Start Date*</label>
                        <input type="date" name="startDate" required className="border rounded w-full px-3 py-2" />
                    </div>

                    {/* Student Capacity */}
                    <div>
                        <label className="block mb-1 font-medium">Student Capacity*</label>
                        <input type="number" name="studentCapacity" required className="border rounded w-full px-3 py-2" />
                    </div>

                    {/* Details */}
                    <div className="md:col-span-3">
                        <label className="block mb-1 font-medium">Details</label>
                        <textarea name="details" rows={3} className="border rounded w-full px-3 py-2"></textarea>
                    </div>

                    {/* Buttons */}
                    <div className="md:col-span-3 flex space-x-4 mt-4 justify-end">
                        <button type="button" className="bg-red-600 text-white px-4 py-2 rounded-full">Cancel</button>
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-full">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditDepartments;
