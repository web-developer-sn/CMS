"use client";

import React, { useMemo, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-theme-quartz.css";
import NavigateNextOutlinedIcon from "@mui/icons-material/NavigateNextOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { Search, Plus, RefreshCw, Download, Edit, Trash2 } from "lucide-react";
import { Typography, Avatar } from "@mui/joy";
import { useMediaQuery } from "@mui/material";

interface IEmployeeLeaveRecord {
    employeeName: string;
    employeeId: string;
    department: string;
    leaveType: string;
    leaveFrom: string;
    leaveTo: string;
    numberOfDays: number;
    durationType: string;
    status: string;
    reason: string;
    requestedOn: string;
    approvedBy?: string;
    approvalDate?: string;
    image?: string; // optional avatar image URL
}

const EmployeeLeaveRequests = () => {
    const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);
    const isMobile = useMediaQuery('(max-width: 768px)');
    const [searchText, setSearchText] = useState("");

    const [rowData] = useState<IEmployeeLeaveRecord[]>([
        {
            employeeName: "Mr. John Deo",
            employeeId: "T123",
            department: "Mathematics",
            leaveType: "Sick Leave",
            leaveFrom: "11/01/2024",
            leaveTo: "11/05/2024",
            numberOfDays: 5,
            durationType: "Full-day",
            status: "Approved",
            reason: "Flu symptoms, need rest for recovery.",
            requestedOn: "10/30/2024",
            approvedBy: "Ms. Jane Smith",
            approvalDate: "10/31/2024",
            image: "/avatars/avatar1.png"
        },
        {
            employeeName: "Ms. Sarah Smith",
            employeeId: "T124",
            department: "English",
            leaveType: "Maternity Leave",
            leaveFrom: "12/01/2024",
            leaveTo: "01/01/2025",
            numberOfDays: 31,
            durationType: "Full-day",
            status: "Pending",
            reason: "Pregnancy and childbirth.",
            requestedOn: "10/15/2024",
            image: "/avatars/avatar2.png"
        },
        {
            employeeName: "Ms. Edna Gilbert",
            employeeId: "T125",
            department: "History",
            leaveType: "Medical Leave",
            leaveFrom: "11/01/2024",
            leaveTo: "11/03/2024",
            numberOfDays: 2,
            durationType: "Half-day",
            status: "Rejected",
            reason: "Surgery recovery.",
            requestedOn: "10/18/2024",
            image: "/avatars/avatar3.png"
        },
        {
            employeeName: "Ms. Shelia Osterberg",
            employeeId: "T126",
            department: "IT Support",
            leaveType: "Sick Leave",
            leaveFrom: "11/05/2024",
            leaveTo: "11/07/2024",
            numberOfDays: 3,
            durationType: "Full-day",
            status: "Approved",
            reason: "Flu symptoms and fever.",
            requestedOn: "11/02/2024",
            approvedBy: "Mr. Tom Johnson",
            approvalDate: "11/03/2024",
            image: "/avatars/avatar4.png"
        },
        {
            employeeName: "Mr. Barbara Garland",
            employeeId: "T127",
            department: "Health Center",
            leaveType: "Casual Leave",
            leaveFrom: "11/15/2024",
            leaveTo: "11/17/2024",
            numberOfDays: 2,
            durationType: "Full-day",
            status: "Approved",
            reason: "Personal errands.",
            requestedOn: "10/30/2024",
            approvedBy: "Nurse Lisa Grey",
            approvalDate: "10/31/2024",
            image: "/avatars/avatar5.png"
        }
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
        const colorClass =
            status === 'Approved' ? 'bg-green-100 text-green-700' :
                status === 'Pending' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700';
        return (
            <span className={`px-2 py-1 rounded text-xs font-medium ${colorClass}`}>{status}</span>
        );
    };

    const employeeCellRenderer = (params: any) => (
        <div className="flex items-center space-x-2">
            <Avatar alt={params.data.employeeName} src={params.data.image} size="sm" />
            <span className="text-sm">{params.data.employeeName}</span>
        </div>
    );

    const [columnDefs] = useState<any[]>([
        { checkboxSelection: true, headerCheckboxSelection: true, width: 40 },
        { field: "employeeName", headerName: "Employee Name", width: 180, cellRenderer: employeeCellRenderer },
        { field: "employeeId", headerName: "Employee ID", width: 100 },
        { field: "department", headerName: "Department", width: 130 },
        { field: "leaveType", headerName: "Leave Type", width: 120 },
        { field: "leaveFrom", headerName: "Leave From", width: 110 },
        { field: "leaveTo", headerName: "Leave To", width: 110 },
        { field: "numberOfDays", headerName: "No of Days", width: 100 },
        { field: "durationType", headerName: "Duration Type", width: 110 },
        { field: "status", headerName: "Status", width: 100, cellRenderer: statusCellRenderer },
        { field: "reason", headerName: "Reason", width: 250 },
        { field: "requestedOn", headerName: "Requested On", width: 110 },
        { field: "approvedBy", headerName: "Approved By", width: 120 },
        { field: "approvalDate", headerName: "Approval Date", width: 110 },
        { headerName: "Actions", width: 80, cellRenderer: actionCellRenderer },
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
                {!isMobile ? <h1 className="text-xl font-bold">Employee Leave Requests</h1> :
                    <Typography className="text-sm font-bold whitespace-nowrap">Employee Leave Requests</Typography>}
                <NavigateNextOutlinedIcon fontSize="small" />
                <HomeOutlinedIcon fontSize="small" />
                <NavigateNextOutlinedIcon fontSize="small" />
                <Typography fontSize={"small"}>Leave Management</Typography>
                <NavigateNextOutlinedIcon fontSize="small" />
                <Typography fontSize={"small"}>Employee Leave Requests</Typography>
            </div>

            <div className="bg-sky-100 py-4 dark:bg-sky-900 rounded-lg shadow">
                <div className="flex items-center justify-between flex-wrap gap-2 px-4">
                    {!isMobile && <Typography className="text-lg">Employee Leave Requests</Typography>}

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
                    height: "calc(100vh - 305px)",
                    '--ag-row-height': '35px',
                    '--ag-line-height': '35px',
                    '--ag-font-size': '13px',
                    '--ag-header-background-color': "#0284C7",
                    '--ag-header-foreground-color': '#FFFFFF',
                    '--ag-background-color': '#FFFFFF',
                    '--ag-foreground-color': 'rgb(51, 51, 51)',
                    '--ag-odd-row-background-color': 'rgba(0, 0, 0, 0.03)',
                    '--ag-header-column-resize-handle-color': 'rgb(150, 150, 150)',
                    '--ag-cell-horizontal-padding': '8px',
                } as React.CSSProperties}>
                    <AgGridReact<IEmployeeLeaveRecord>
                        rowData={rowData.filter(row =>
                            row.employeeName.toLowerCase().includes(searchText.toLowerCase()) ||
                            row.employeeId.toLowerCase().includes(searchText.toLowerCase()) ||
                            row.department.toLowerCase().includes(searchText.toLowerCase()) ||
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

export default EmployeeLeaveRequests;
