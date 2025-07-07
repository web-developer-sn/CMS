"use client";

import React from "react";
import { Typography } from "@mui/joy";
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { useMediaQuery } from "@mui/material";

const AddCourse = () => {
    const isMobile = useMediaQuery('(max-width: 768px)');

    return (
        <div className="p-4">
            {/* Breadcrumb */}
            <div className="flex py-8 items-center">
                {!isMobile ? <h1 className="text-xl font-bold">Add Course</h1> :
                    <Typography className="text-sm font-bold whitespace-nowrap">Add Course</Typography>}
                <NavigateNextOutlinedIcon fontSize="small" />
                <HomeOutlinedIcon fontSize="small" />
                <NavigateNextOutlinedIcon fontSize="small" />
                <Typography fontSize={"small"}>Course</Typography>
                <NavigateNextOutlinedIcon fontSize="small" />
                <Typography fontSize={"small"}>Add Course</Typography>
            </div>

            {/* Form */}
            <div className="bg-white p-6 rounded shadow">
                <h2 className="text-lg font-semibold mb-4">Add Course</h2>
                <form className="grid grid-cols-1 md:grid-cols-3 gap-4">

                    {/* Row 1 */}
                    <div>
                        <label className="block mb-1 font-medium">Course name*</label>
                        <input type="text" name="courseName" required className="border rounded w-full px-3 py-2" />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Course code</label>
                        <input type="text" name="courseCode" className="border rounded w-full px-3 py-2" />
                    </div>

                    {/* Row 2 */}
                    <div >
                        <label className="block mb-1 font-medium">Course Details*</label>
                        <input name="courseDetails" required className="border rounded w-full px-3 py-2"></input>
                    </div>

                    {/* Row 3 */}
                    <div>
                        <label className="block mb-1 font-medium">Start Date*</label>
                        <input type="date" name="startDate" required className="border rounded w-full px-3 py-2" />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Course Time Length*</label>
                        <input type="text" name="courseLength" required className="border rounded w-full px-3 py-2" />
                    </div>

                    {/* Row 4 */}
                    <div>
                        <label className="block mb-1 font-medium">Course Price*</label>
                        <input type="number" name="coursePrice" required className="border rounded w-full px-3 py-2" />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Professor Name*</label>
                        <select name="professorName" required className="border rounded w-full px-3 py-2">
                            <option value="">Select Professor</option>
                            <option>John Deo</option>
                            <option>Sarah Smith</option>
                            <option>Airi Satou</option>
                            <option>Ashton Cox</option>
                        </select>
                    </div>

                    {/* Row 5 */}
                    <div>
                        <label className="block mb-1 font-medium">Maximum Students Length*</label>
                        <input type="number" name="maxStudents" required className="border rounded w-full px-3 py-2" />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Contact Number*</label>
                        <input type="text" name="contactNumber" required className="border rounded w-full px-3 py-2" />
                    </div>

                    {/* File Upload */}
                    <div className="md:col-span-3">
                        <label className="block mb-1 font-medium">Upload</label>
                        <div className="border-dashed border-2 border-gray-400 rounded w-full p-4 flex items-center space-x-4">
                            <input type="file" name="fileUpload" className="hidden" id="fileUpload" />
                            <label htmlFor="fileUpload" className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer">Choose file</label>
                            <span className="text-gray-500">or drag and drop file here</span>
                        </div>
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

export default AddCourse;
