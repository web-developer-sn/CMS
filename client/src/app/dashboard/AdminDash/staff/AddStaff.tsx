"use client";

import React from "react";
import { Typography } from "@mui/joy";
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { useMediaQuery } from "@mui/material";

const AddStaff = () => {
    const isMobile = useMediaQuery('(max-width: 768px)');

    return (
        <div className="p-4">
            {/* Breadcrumb */}
            <div className="flex py-8 items-center">
                {!isMobile ? <h1 className="text-xl font-bold">Add Staff</h1> :
                    <Typography className="text-sm font-bold whitespace-nowrap">Add Staff</Typography>}
                <NavigateNextOutlinedIcon fontSize="small" />
                <HomeOutlinedIcon fontSize="small" />
                <NavigateNextOutlinedIcon fontSize="small" />
                <Typography fontSize={"small"}>Staff</Typography>
                <NavigateNextOutlinedIcon fontSize="small" />
                <Typography fontSize={"small"}>Add Staff</Typography>
            </div>

            {/* Form */}
            <div className="bg-white p-6 rounded shadow">
                <h2 className="text-lg font-semibold mb-4">Staff Information</h2>

                <form className="grid grid-cols-1 md:grid-cols-4 gap-4">

                    {/* Row 1 */}
                    <div>
                        <label className="block mb-1 font-medium">First Name*</label>
                        <input type="text" name="firstName" required className="border rounded w-full px-3 py-2" />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Last Name*</label>
                        <input type="text" name="lastName" required className="border rounded w-full px-3 py-2" />
                    </div>

                    {/* Row 2 */}
                    <div>
                        <label className="block mb-1 font-medium">Gender*</label>
                        <select name="gender" required className="border rounded w-full px-3 py-2">
                            <option value="">Select Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Mobile*</label>
                        <input type="text" name="mobile" required className="border rounded w-full px-3 py-2" />
                    </div>

                    {/* Row 3 */}
                    <div>
                        <label className="block mb-1 font-medium">Password*</label>
                        <input type="password" name="password" required className="border rounded w-full px-3 py-2" />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Re-Enter Password*</label>
                        <input type="password" name="reEnterPassword" required className="border rounded w-full px-3 py-2" />
                    </div>

                    {/* Row 4 */}
                    <div>
                        <label className="block mb-1 font-medium">Designation</label>
                        <input type="text" name="designation" className="border rounded w-full px-3 py-2" />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Select Department*</label>
                        <select name="department" required className="border rounded w-full px-3 py-2">
                            <option value="">Select Department</option>
                            <option>Administration</option>
                            <option>Library</option>
                            <option>Maintenance</option>
                            <option>Procurement</option>
                            <option>Teaching</option>
                            <option>Transportation</option>
                        </select>
                    </div>

                    {/* Row 5 */}
                    <div>
                        <label className="block mb-1 font-medium">Email*</label>
                        <input type="email" name="email" required className="border rounded w-full px-3 py-2" />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Date Of Birth*</label>
                        <input type="date" name="dob" required className="border rounded w-full px-3 py-2" />
                    </div>
                     {/* Education */}
                    <div>
                        <label className="block mb-1 font-medium">Education</label>
                        <input name="education" className="border rounded w-full px-3 py-2"></input>
                    </div>

                    {/* Address */}
                    <div>
                        <label className="block mb-1 font-medium">Address</label>
                        <input name="address" className="border rounded w-full px-3 py-2"></input>
                    </div>

                    {/* File Upload */}
                    <div className="md:col-span-4">
                        <label className="block mb-1 font-medium">Upload</label>
                        <div className="border-dashed border-2 border-gray-400 rounded w-full p-4 flex items-center space-x-4">
                            <input type="file" name="fileUpload" className="hidden" id="fileUpload" />
                            <label htmlFor="fileUpload" className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer">Choose file</label>
                            <span className="text-gray-500">or drag and drop file here</span>
                        </div>
                    </div>

                   

                    {/* Buttons */}
                    <div className="md:col-span-4 flex space-x-4 mt-4 justify-end">
                        <button type="button" className="bg-red-600 text-white px-4 py-2 rounded-full">Cancel</button>
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-full">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddStaff;
