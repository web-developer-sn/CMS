"use client";

import React from "react";
import { Typography } from "@mui/joy";
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { useMediaQuery } from "@mui/material";

const EditFees = () => {
    const isMobile = useMediaQuery('(max-width: 768px)');

    return (
        <div className="p-4">
            {/* Breadcrumb */}
            <div className="flex py-8 items-center">
                {!isMobile ? <h1 className="text-xl font-bold">Edit Fees</h1> :
                    <Typography className="text-sm font-bold whitespace-nowrap">Edit Fees</Typography>}
                <NavigateNextOutlinedIcon fontSize="small" />
                <HomeOutlinedIcon fontSize="small" />
                <NavigateNextOutlinedIcon fontSize="small" />
                <Typography fontSize={"small"}>Fees</Typography>
                <NavigateNextOutlinedIcon fontSize="small" />
                <Typography fontSize={"small"}>Edit Fees</Typography>
            </div>

            {/* Form */}
            <div className="bg-white p-6 rounded shadow">
                <h2 className="text-lg font-semibold mb-4">Edit Fees</h2>
                <form className="grid grid-cols-1 md:grid-cols-4 gap-4">

                    {/* Row 1 */}
                    <div>
                        <label className="block mb-1 font-medium">Roll No*</label>
                        <input type="text" name="rollNo" required className="border rounded w-full px-3 py-2" />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Student Name*</label>
                        <input type="text" name="studentName" required className="border rounded w-full px-3 py-2" />
                    </div>


                    <div>
                        <label className="block mb-1 font-medium">Select Department*</label>
                        <select name="department" required className="border rounded w-full px-3 py-2">
                            <option value="">Select department</option>
                            <option>Mathematics</option>
                            <option>Science</option>
                            <option>Computer</option>
                            <option>Machanical</option>
                        </select>
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">Fees Type</label>
                        <input type="text" name="feesType" required className="border rounded w-full px-3 py-2" />
                    </div>



                    {/* Row 4 */}
                    <div>
                        <label className="block mb-1 font-medium">Collection Date*</label>
                        <input type="date" name="collctionDate" required className="border rounded w-full px-3 py-2" />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Payment Type*</label>
                        <select name="paymentType" required className="border rounded w-full px-3 py-2">
                            <option>Cash</option>
                            <option>Cheque</option>
                            <option>Online Transfer</option>
                            <option>Draft</option>
                            <option>Other</option>
                        </select>
                    </div>

                    {/* Row 5 */}
                    <div>
                        <label className="block mb-1 font-medium">Invoice No*</label>
                        <input type="text" name="invoiceNo" required className="border rounded w-full px-3 py-2" />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Parents Mobile Number</label>
                        <input type="text" name="parentsMobile" className="border rounded w-full px-3 py-2" />
                    </div>

                    {/* Row 6 */}
                    <div>
                        <label className="block mb-1 font-medium">Status</label>
                        <select name="status" required className="border rounded w-full px-3 py-2">
                            <option>Paid</option>
                            <option>Unpaid</option>
                            <option>Pending</option>
                        </select>
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Amount</label>
                        <input type="text" name="amount" className="border rounded w-full px-3 py-2" />
                    </div>
                    <div className="flex items-center gap-3">
                        <label>Duration:</label>
                        <label className="flex items-center gap-1">
                            <input type="radio" name="duration" value="monthly" /> Monthly
                        </label>
                        <label className="flex items-center gap-1">
                            <input type="radio" name="duration" value="yearly" /> Yearly
                        </label>
                        <label className="flex items-center gap-1">
                            <input type="radio" name="duration" value="session" /> Session
                        </label>
                    </div>
                    {/* Address */}
                    <div className="md:col-span-4">
                        <label className="block mb-1 font-medium">Details</label>
                        <textarea name="details" className="border rounded w-full px-3 py-2"></textarea>
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

export default EditFees;
