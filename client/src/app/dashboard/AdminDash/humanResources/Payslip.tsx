"use client";

import React, { useMemo, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-theme-quartz.css";
import NavigateNextOutlinedIcon from "@mui/icons-material/NavigateNextOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { Search, Plus, RefreshCw, Download, Edit, Trash2 } from "lucide-react";
import { Typography, Avatar } from "@mui/joy";
import { useMediaQuery } from "@mui/material";

interface IPayslipRecord {
    image: string;
    employeeName: string;
    email: string;
    department: string;
    salary: string;
    bonus: string;
    deductions: string;
    netSalary: string;
}

const Payslip = () => {
    const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);
    const isMobile = useMediaQuery('(max-width: 768px)');
    const [searchText, setSearchText] = useState("");

    const [rowData] = useState<IPayslipRecord[]>([
        { image: "image", employeeName: "John Doe", email: "test@email.com", department: "Mathematics", salary: "$2,574", bonus: "$200", deductions: "$100", netSalary: "$2,674" },
        { image: "image", employeeName: "Sarah Smith", email: "test@email.com", department: "Science", salary: "$3,587", bonus: "$300", deductions: "$150", netSalary: "$3,737" },
        { image: "image", employeeName: "Rajesh", email: "test@email.com", department: "History", salary: "$7,897", bonus: "$500", deductions: "$200", netSalary: "$8,197" },
        { image: "image", employeeName: "Jay Soni", email: "test@email.com", department: "Technology", salary: "$2,697", bonus: "$150", deductions: "$80", netSalary: "$2,767" },
        { image: "image", employeeName: "Rajesh", email: "test@email.com", department: "Science", salary: "$6,587", bonus: "$400", deductions: "$200", netSalary: "$6,787" },
        { image: "image", employeeName: "John Doe", email: "test@email.com", department: "English", salary: "$8,256", bonus: "$600", deductions: "$250", netSalary: "$8,606" },
        { image: "image", employeeName: "Cara Stevens", email: "test@email.com", department: "Health Center", salary: "$7,112", bonus: "$350", deductions: "$150", netSalary: "$7,312" },
        { image: "image", employeeName: "Jay Soni", email: "test@email.com", department: "Health Center", salary: "$8,256", bonus: "$500", deductions: "$300", netSalary: "$8,456" },
        { image: "image", employeeName: "Angelica Ramos", email: "test@email.com", department: "Library", salary: "$7,758", bonus: "$450", deductions: "$200", netSalary: "$8,008" },
        { image: "image", employeeName: "Airi Satou", email: "test@email.com", department: "Management", salary: "$6,665", bonus: "$350", deductions: "$150", netSalary: "$6,865" },
    ]);

    const actionCellRenderer = () => (
        <div className="flex space-x-2 justify-center">
            <button className="text-blue-500 hover:text-blue-700">
                <Edit size={18} />
            </button>
            <button className="text-red-500 hover:text-red-700">
                <Trash2 size={18} />
            </button>
        </div>
    );

    const nameCellRenderer = (params: any) => (
        <div className="flex items-center space-x-2">
            <Avatar src="/default-profile.png" alt="Employee" size="sm" />
            <span>{params.value}</span>
        </div>
    );

    const [columnDefs] = useState<any[]>([
        { checkboxSelection: true, headerCheckboxSelection: true, width: 80 },
        { field: "employeeName", headerName: "Employee Name", minWidth: 250, cellRenderer: nameCellRenderer },
        { field: "email", headerName: "Email", width: 180 },
        { field: "department", headerName: "Department", minWidth: 140 },
        { field: "salary", headerName: "Salary", width: 120 },
        { field: "bonus", headerName: "Bonus", width: 120 },
        { field: "deductions", headerName: "Deductions", width: 120 },
        { field: "netSalary", headerName: "Net Salary", width: 120 },
        { headerName: "Actions", minWidth: 150, cellRenderer: actionCellRenderer },
    ]);

    const defaultColDef = useMemo(() => ({
        sortable: true,
        filter: true,
        resizable: true,
        cellStyle: { display: 'flex', alignItems: 'center' }
    }), []);

    return (
        <div className="p-4">
            <div className="flex py-4 items-center">
                {!isMobile ? <h1 className="text-xl font-bold">Payslip</h1> :
                    <Typography className="text-sm font-bold whitespace-nowrap">Payslip</Typography>}
                <NavigateNextOutlinedIcon fontSize="small" />
                <HomeOutlinedIcon fontSize="small" />
                <NavigateNextOutlinedIcon fontSize="small" />
                <Typography fontSize={"small"}>HR</Typography>
                <NavigateNextOutlinedIcon fontSize="small" />
                <Typography fontSize={"small"}>Payslip</Typography>
            </div>

            <div className="bg-sky-100 py-4 dark:bg-sky-900 rounded-lg shadow">
                <div className="flex items-center justify-between flex-wrap gap-2 px-4">
                    {!isMobile && <Typography className="text-lg">Payslip</Typography>}
                </div>

                  <div className="max-w-3xl mx-auto border p-6 bg-white shadow-md print:shadow-none print:border-none print:p-2">
            <h1 className="text-2xl font-bold mb-4 text-center">Payslip</h1>
            <p className="text-center text-sm mb-6">Payslip for the month of <strong>June 2022</strong></p>

            <div className="grid grid-cols-2 gap-4 text-sm mb-6">
                <div>
                    <h2 className="font-semibold">Company Details</h2>
                    <p>EInfosoft Technology</p>
                    <p>52, Titanium Software Hub</p>
                    <p>Gift City, Gandhinagar, India</p>
                    <p>Email: hr@einfosoft.com</p>
                </div>
                <div>
                    <h2 className="font-semibold">Employee Details</h2>
                    <p>Sarah Smith</p>
                    <p>A 507 Parimal Heights</p>
                    <p>Near Shyamal Cross, Ahmedabad, India</p>
                    <p>Email: sarah@einfosoft.com</p>
                </div>
            </div>

            <div className="grid grid-cols-2 text-sm mb-6">
                <p><strong>Payslip No.:</strong> 859654</p>
                <p className="text-right"><strong>Payment Date:</strong> July 02, 2022 - 12:30 AM</p>
            </div>

            <div className="grid grid-cols-2 gap-6 text-sm mb-6">
                <div>
                    <h2 className="font-semibold mb-2 border-b pb-1">Earnings</h2>
                    <div className="space-y-1">
                        <p>Basic: $8,568</p>
                        <p>HRA: $125</p>
                        <p>DA: $87</p>
                        <p>Special Allowance: $50</p>
                        <p>Bonus: $75</p>
                        <p className="font-semibold">Total Earnings: $8,905</p>
                    </div>
                </div>
                <div>
                    <h2 className="font-semibold mb-2 border-b pb-1">Deductions</h2>
                    <div className="space-y-1">
                        <p>Provident Fund: $10</p>
                        <p>Professional Tax: $20</p>
                        <p>ESI: $0</p>
                        <p>Home Loan: $210</p>
                        <p>TDS: $113</p>
                        <p className="font-semibold">Total Deductions: $353</p>
                    </div>
                </div>
            </div>

            <div className="text-lg font-bold text-right mb-2">
                Net Pay: $8,552.00
            </div>
            <div className="text-sm italic text-right mb-8">
                (Eight Thousand Five Hundred Fifty Two Only)
            </div>

            <div className="flex justify-between items-center text-sm">
                <div>For Priya Jain</div>
                <div>Authorised Signatory</div>
            </div>

            <div className="text-center mt-8 print:hidden">
                <button
                    onClick={() => window.print()}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    Print this receipt
                </button>
            </div>
        </div>
            </div>
        </div>
    );
};

export default Payslip;
