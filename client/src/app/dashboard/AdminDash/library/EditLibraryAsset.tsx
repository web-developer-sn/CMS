"use client";

import React from "react";
import { Typography } from "@mui/joy";
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { useMediaQuery } from "@mui/material";

const EditLibraryAsset = () => {
    const isMobile = useMediaQuery('(max-width: 768px)');

    return (
        <div className="p-4">
            {/* Breadcrumb */}
            <div className="flex py-8 items-center">
                {!isMobile ? <h1 className="text-xl font-bold">Edit Asset</h1> :
                    <Typography className="text-sm font-bold whitespace-nowrap">Edit Asset</Typography>}
                <NavigateNextOutlinedIcon fontSize="small" />
                <HomeOutlinedIcon fontSize="small" />
                <NavigateNextOutlinedIcon fontSize="small" />
                <Typography fontSize={"small"}>Library</Typography>
                <NavigateNextOutlinedIcon fontSize="small" />
                <Typography fontSize={"small"}>Edit Asset</Typography>
            </div>

            {/* Form */}
            <div className="bg-white p-6 rounded shadow">
                <h2 className="text-lg font-semibold mb-4">Edit Library Asset</h2>
                <form className="grid grid-cols-1 md:grid-cols-5 gap-4">

                    {/* Row 1 */}
                    <div>
                        <label className="block mb-1 font-medium">Bill No*</label>
                        <input type="text" name="billNo" required className="border rounded w-full px-3 py-2" />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Title*</label>
                        <input type="text" name="title" required className="border rounded w-full px-3 py-2" />
                    </div>

                    {/* Row 2 */}
                    <div>
                        <label className="block mb-1 font-medium">Subject*</label>
                        <select name="subject" required className="border rounded w-full px-3 py-2">
                            <option value="">Select Subject</option>
                            <option>Mathematics</option>
                            <option>Computer</option>
                            <option>Civil</option>
                            <option>Java</option>
                            <option>Politics</option>
                        </select>
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Author Name</label>
                        <input type="text" name="authorName" className="border rounded w-full px-3 py-2" />
                    </div>

                    {/* Row 3 */}
                    <div>
                        <label className="block mb-1 font-medium">Publisher*</label>
                        <input type="text" name="publisher" required className="border rounded w-full px-3 py-2" />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Department*</label>
                        <select name="department" required className="border rounded w-full px-3 py-2">
                            <option value="">Select Department</option>
                            <option>Science</option>
                            <option>Mathematics</option>
                            <option>Computer</option>
                            <option>Civil</option>
                            <option>Arts</option>
                        </select>
                    </div>

                    {/* Row 4 */}
                    <div>
                        <label className="block mb-1 font-medium">Asset Type*</label>
                        <select name="assetType" required className="border rounded w-full px-3 py-2">
                            <option value="">Select Asset Type</option>
                            <option>Book</option>
                            <option>CD</option>
                            <option>DVD</option>
                            <option>News Paper</option>
                        </select>
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Purchase Date*</label>
                        <input type="date" name="purchaseDate" required className="border rounded w-full px-3 py-2" />
                    </div>

                    {/* Row 5 */}
                    <div>
                        <label className="block mb-1 font-medium">Price*</label>
                        <input type="text" name="price" required className="border rounded w-full px-3 py-2" />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Status*</label>
                        <select name="status" required className="border rounded w-full px-3 py-2">
                            <option value="">Select Status</option>
                            <option>In Stock</option>
                            <option>Out of Stock</option>
                            <option>Issue</option>
                            <option>Repair</option>
                        </select>
                    </div>

                    {/* Row 6 */}
                    <div className="md:col-span-5">
                        <label className="block mb-1 font-medium">Details</label>
                        <textarea name="details" rows={3} className="border rounded w-full px-3 py-2"></textarea>
                    </div>

                    {/* Buttons */}
                    <div className="md:col-span-5 flex space-x-4 mt-4 justify-end">
                        <button type="button" className="bg-red-600 text-white px-4 py-2 rounded-full">Cancel</button>
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-full">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditLibraryAsset;
