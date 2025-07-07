"use client";

import React, { useMemo, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-theme-quartz.css";
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { Search, Plus, RefreshCw, Download, Edit, Trash2 } from "lucide-react";
import { Typography } from "@mui/joy";
import { useMediaQuery } from "@mui/material";

interface IFeeRecord {
    rollNo: number;
    studentName: string;
    studentClass: string;
    feesType: string;
    invoiceNo: string;
    paymentDueDate: string;
    paymentDate?: string;
    paymentType?: string;
    status: string;
    amount: string;
    notes: string;
}

const AllFees = () => {
    const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);
    const isMobile = useMediaQuery('(max-width: 768px)');
    const [searchText, setSearchText] = useState("");

    const [rowData] = useState<IFeeRecord[]>([
        { rollNo: 1, studentName: "Jenish Shah", studentClass: "10th Grade", feesType: "library", invoiceNo: "IN-5645644", paymentDueDate: "03/01/2019", status: "pending", amount: "170$", notes: "N/A" },
        { rollNo: 2, studentName: "Priya Patel", studentClass: "11th Grade", feesType: "annual", invoiceNo: "IN-5645644", paymentDueDate: "03/01/2019", status: "pending", amount: "170$", notes: "N/A" },
        { rollNo: 3, studentName: "Mayank Jani", studentClass: "7th Grade", feesType: "other", invoiceNo: "IN-5645644", paymentDueDate: "01/01/2020", status: "pending", amount: "250$", notes: "N/A" },
        { rollNo: 4, studentName: "Bertie Jones", studentClass: "8th Grade", feesType: "annual", invoiceNo: "IN-5645644", paymentDueDate: "03/01/2019", paymentDate: "02/10/2019", paymentType: "cheque", status: "paid", amount: "340$", notes: "N/A" },
        { rollNo: 5, studentName: "Jenish Shah", studentClass: "9th Grade", feesType: "transport", invoiceNo: "IN-5645644", paymentDueDate: "03/01/2019", paymentDate: "02/10/2019", paymentType: "credit card", status: "paid", amount: "170$", notes: "N/A" },
        { rollNo: 6, studentName: "Sarah Smith", studentClass: "11th Grade", feesType: "exam", invoiceNo: "IN-5645644", paymentDueDate: "03/01/2019", paymentDate: "02/10/2019", paymentType: "cash", status: "paid", amount: "340$", notes: "N/A" },
        { rollNo: 7, studentName: "Pam Abbott", studentClass: "7th Grade", feesType: "tuition", invoiceNo: "IN-5645644", paymentDueDate: "03/01/2019", status: "pending", amount: "340$", notes: "N/A" },
        { rollNo: 8, studentName: "Bethaney Spence", studentClass: "8th Grade", feesType: "library", invoiceNo: "IN-5645644", paymentDueDate: "03/01/2019", paymentDate: "02/10/2019", paymentType: "credit card", status: "paid", amount: "250$", notes: "N/A" },
        { rollNo: 9, studentName: "Ivan Bell", studentClass: "11th Grade", feesType: "transport", invoiceNo: "IN-5645644", paymentDueDate: "03/01/2019", status: "pending", amount: "170$", notes: "N/A" },
        { rollNo: 10, studentName: "Jay Soni", studentClass: "9th Grade", feesType: "tuition", invoiceNo: "IN-5645644", paymentDueDate: "03/01/2019", paymentDate: "02/10/2019", paymentType: "credit card", status: "paid", amount: "340$", notes: "N/A" },
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

    const statusCellRenderer = (params: any) => {
        const status = params.value;
        const colorClass = status === 'paid' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-red-700';
        return (
            <span className={`px-2 py-1 rounded text-xs font-medium ${colorClass}`}>{status}</span>
        );
    };

    const [columnDefs] = useState<any[]>([
        { checkboxSelection: true, headerCheckboxSelection: true, width: 40 },
        { field: "rollNo", headerName: "Roll No", width: 80 },
        { field: "studentName", headerName: "Student Name", width: 160 },
        { field: "studentClass", headerName: "Class", width: 120 },
        { field: "feesType", headerName: "Fees Type", width: 100 },
        { field: "invoiceNo", headerName: "Invoice No", width: 100 },
        { field: "paymentDueDate", headerName: "Payment Due Date", width: 110 },
        { field: "paymentDate", headerName: "Payment Date", width: 140 },
        { field: "paymentType", headerName: "Payment Type", width: 120 },
        { field: "status", headerName: "Status", width: 100, cellRenderer: statusCellRenderer },
        { field: "amount", headerName: "Amount", width: 80 },
        { field: "notes", headerName: "Notes", width: 110 },
        { headerName: "Actions", width: 90, cellRenderer: actionCellRenderer },
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
                {!isMobile ? <h1 className="text-xl font-bold">All Fees</h1> :
                    <Typography className="text-sm font-bold whitespace-nowrap">All Fees</Typography>}
                <NavigateNextOutlinedIcon fontSize="small" />
                <HomeOutlinedIcon fontSize="small" />
                <NavigateNextOutlinedIcon fontSize="small" />
                <Typography fontSize={"small"}>Fees</Typography>
                <NavigateNextOutlinedIcon fontSize="small" />
                <Typography fontSize={"small"}>All Fees</Typography>
            </div>

            <div className="bg-sky-100 py-4 dark:bg-sky-900 rounded-lg shadow">
                <div className="flex items-center justify-between flex-wrap gap-2 px-4">
                    {!isMobile && <Typography className="text-lg">All Fees</Typography>}

                    <div className="flex items-center space-x-2">
                        <div className="relative">
                            <Search className="absolute left-2 top-2 text-gray-400" size={16} />
                            <input
                                type="text"
                                placeholder="Search"
                                className="border rounded pl-8 pr-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                                onChange={(e) => setSearchText(e.target.value)}
                            />
                        </div>

                        <button className="bg-green-500 text-white px-3 py-1 rounded flex items-center space-x-1 text-sm">
                            <Plus size={14} /> {!isMobile && <span>Add</span>}
                        </button>

                        <button className="bg-yellow-500 text-white px-3 py-1 rounded flex items-center space-x-1 text-sm">
                            <RefreshCw size={14} /> {!isMobile && <span>Refresh</span>}
                        </button>

                        <button className="bg-blue-500 text-white px-3 py-1 rounded flex items-center space-x-1 text-sm">
                            <Download size={14} /> {!isMobile && <span>Download</span>}
                        </button>
                    </div>
                </div>

                <div className="overflow-x-auto ag-theme-quartz mt-4" style={{
                    ...gridStyle,
                    maxWidth: 'calc(100dvw - 42px)',
                    height: "calc(100vh - 305px)",
                    '--ag-row-height': '35px',
                    '--ag-line-height': '35px',
                    '--ag-font-size': '13px',
                    '--ag-header-background-color': "#0284C7",
                    '--ag-header-foreground-color': '#FFFFFF',
                    '--ag-background-color': 'rgb(255, 255, 255)',
                    '--ag-foreground-color': 'rgb(51, 51, 51)',
                    '--ag-odd-row-background-color': 'rgba(0, 0, 0, 0.03)',
                    '--ag-header-column-resize-handle-color': 'rgb(150, 150, 150)',
                    '--ag-cell-horizontal-padding': '8px',
                } as React.CSSProperties}>
                    <AgGridReact<IFeeRecord>
                        rowData={rowData.filter(row =>
                            row.studentName.toLowerCase().includes(searchText.toLowerCase()) ||
                            row.studentClass.toLowerCase().includes(searchText.toLowerCase()) ||
                            row.feesType.toLowerCase().includes(searchText.toLowerCase()) ||
                            row.status.toLowerCase().includes(searchText.toLowerCase())
                        )}
                        columnDefs={columnDefs}
                        defaultColDef={defaultColDef}
                        animateRows={true}
                        pagination={true}
                        rowSelection="multiple"
                        getRowHeight={() => 35}
                    />
                </div>
            </div>
        </div>
    );
};

export default AllFees;
