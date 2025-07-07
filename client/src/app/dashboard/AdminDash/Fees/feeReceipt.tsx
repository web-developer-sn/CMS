"use client";

import React, { useRef } from "react";
import { useMediaQuery } from "@mui/material";
import { Typography } from "@mui/joy";
import NavigateNextOutlinedIcon from "@mui/icons-material/NavigateNextOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

const FeesReceipt = () => {
    const printRef = useRef<HTMLDivElement>(null);
    const isMobile = useMediaQuery('(max-width: 768px)');

    const handlePrint = () => {
        window.print();
    };

    const receiptDetails = {
        receiptNumber: "345766",
        billFrom: "Aditya University, Opp. Town Hall, Sardar Patel Road, Ahmedabad - 380015",
        billTo: "Jayesh Patel, 207, Prem Sagar Appt., Near Income Tax Office, Ashram Road, Ahmedabad - 380057",
        invoiceDate: "14th July 2019",
        status: "Paid",
        items: [
            { id: 1, feeType: "Annual Fees", frequency: "Yearly", date: "2016-11-19", invoiceNumber: "#IN-345609865", amount: 100 },
            { id: 2, feeType: "Tuition Fees", frequency: "Monthly", date: "2016-11-19", invoiceNumber: "#IN-345604565", amount: 50 }
        ],
        discount: 10,
        tax: 14,
        subTotal: 150,
        total: 164
    };

    return (
        <div className="p-4">
            {/* Breadcrumb */}
            <div className="flex py-4 items-center">
                {!isMobile ? <h1 className="text-xl font-bold">Fees Receipt</h1> :
                    <Typography className="text-sm font-bold whitespace-nowrap">Fees Receipt</Typography>}
                <NavigateNextOutlinedIcon fontSize="small" />
                <HomeOutlinedIcon fontSize="small" />
                <NavigateNextOutlinedIcon fontSize="small" />
                <Typography fontSize={"small"}>Fees</Typography>
                <NavigateNextOutlinedIcon fontSize="small" />
                <Typography fontSize={"small"}>Fees Receipt</Typography>
            </div>

            {/* Print Button */}
            <div className="mb-4">
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    onClick={handlePrint}
                >
                    Print Receipt
                </button>
            </div>

            {/* Receipt */}
            <div ref={printRef} className="bg-white p-6 rounded-lg shadow max-w-3xl mx-auto text-sm print:block">
                <div className="flex justify-between mb-4">
                    <div>
                        <h2 className="text-lg font-bold mb-2">RECEIPT #{receiptDetails.receiptNumber}</h2>
                        <div>
                            <strong>BILL FROM:</strong><br />
                            Aditya University<br />
                            Opp. Town Hall,<br />
                            Sardar Patel Road,<br />
                            Ahmedabad - 380015
                        </div>
                    </div>
                    <div>
                        <div className="mb-2">
                            <strong>BILL TO:</strong><br />
                            Jayesh Patel<br />
                            207, Prem Sagar Appt.<br />
                            Near Income Tax Office<br />
                            Ashram Road, Ahmedabad - 380057
                        </div>
                    </div>
                    <div>
                        <div><strong>Invoice Date:</strong> {receiptDetails.invoiceDate}</div>
                        <div><strong>Status:</strong> <span className="text-green-600 font-medium">{receiptDetails.status}</span></div>
                    </div>
                </div>

                {/* Table */}
                <table className="w-full border border-collapse mb-4">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border p-2">#</th>
                            <th className="border p-2">Fees Type</th>
                            <th className="border p-2">Frequency</th>
                            <th className="border p-2">Date</th>
                            <th className="border p-2">Invoice Number</th>
                            <th className="border p-2 text-right">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {receiptDetails.items.map((item) => (
                            <tr key={item.id}>
                                <td className="border p-2 text-center">{item.id}</td>
                                <td className="border p-2">{item.feeType}</td>
                                <td className="border p-2">{item.frequency}</td>
                                <td className="border p-2">{item.date}</td>
                                <td className="border p-2">{item.invoiceNumber}</td>
                                <td className="border p-2 text-right">${item.amount}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Summary */}
                <div className="flex justify-end">
                    <div className="w-full max-w-xs space-y-2">
                        <div className="flex justify-between">
                            <span>Sub - Total Amount:</span>
                            <span>${receiptDetails.subTotal}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Discount:</span>
                            <span>${receiptDetails.discount}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Tax (10%):</span>
                            <span>${receiptDetails.tax}</span>
                        </div>
                        <div className="flex justify-between font-semibold text-lg border-t pt-2">
                            <span>Total:</span>
                            <span>${receiptDetails.total}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeesReceipt;
