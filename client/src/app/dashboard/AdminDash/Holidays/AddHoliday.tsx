"use client";

import React from "react";
import { Typography } from "@mui/joy";
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { useMediaQuery } from "@mui/material";

const AddHoliday = () => {
    const isMobile = useMediaQuery('(max-width: 768px)');

    return (
        <div className="p-4">
            {/* Breadcrumb */}
            <div className="flex py-8 items-center">
                {!isMobile ? <h1 className="text-xl font-bold">Add Holiday</h1> :
                    <Typography className="text-sm font-bold whitespace-nowrap">Add Holiday</Typography>}
                <NavigateNextOutlinedIcon fontSize="small" />
                <HomeOutlinedIcon fontSize="small" />
                <NavigateNextOutlinedIcon fontSize="small" />
                <Typography fontSize={"small"}>Holiday</Typography>
                <NavigateNextOutlinedIcon fontSize="small" />
                <Typography fontSize={"small"}>Add Holiday</Typography>
            </div>

            {/* Form */}
            <div className="bg-white p-6 rounded shadow">
                <h2 className="text-lg font-semibold mb-4">Add Holiday Details</h2>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    {/* Title */}
                    <div className="md:col-span-2">
                        <label className="block mb-1 font-medium">Title*</label>
                        <input type="text" name="title" required className="border rounded w-full px-3 py-2" />
                    </div>

                    {/* Start Date */}
                    <div>
                        <label className="block mb-1 font-medium">Start Date*</label>
                        <input type="date" name="startDate" required className="border rounded w-full px-3 py-2" />
                    </div>

                    {/* End Date */}
                    <div>
                        <label className="block mb-1 font-medium">End Date*</label>
                        <input type="date" name="endDate" required className="border rounded w-full px-3 py-2" />
                    </div>

                    {/* Holiday Type */}
                    <div className="md:col-span-2">
                        <label className="block mb-1 font-medium">Holiday Type*</label>
                        <select name="holidayType" required className="border rounded w-full px-3 py-2">
                            <option value="">Select Holiday Type</option>
                            <option value="Public Holiday">Public Holiday</option>
                            <option value="Restricted Holiday">Restricted Holiday</option>
                            <option value="Special Holiday">Special Holiday</option>
                        </select>
                    </div>

                    {/* Holiday Details */}
                    <div className="md:col-span-2">
                        <label className="block mb-1 font-medium">Holiday Details</label>
                        <textarea name="holidayDetails" rows={4} className="border rounded w-full px-3 py-2"></textarea>
                    </div>

                    {/* Buttons */}
                    <div className="md:col-span-2 flex space-x-4 mt-4 justify-end">
                        <button type="button" className="bg-red-600 text-white px-4 py-2 rounded-full">Cancel</button>
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-full">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddHoliday;
