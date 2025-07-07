"use client";

import React, { useMemo, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-theme-quartz.css";
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { Search, Plus, RefreshCw, Download, Edit, Trash2 } from "lucide-react";
import { Typography } from "@mui/joy";
import { useMediaQuery } from "@mui/material";
import { ColDef } from "ag-grid-community";

interface ILeaveRequest {
    leaveType: string;
    startDate: string;
    endDate: string;
    totalDays: number;
    status: string;
    dateSubmitted: string;
    reason: string;
    approver: string;
    comments?: string;
}

const LeaveRequestTeacher = () => {
    const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);
    const isMobile = useMediaQuery('(max-width: 768px)');
    const [searchText, setSearchText] = useState("");

    const [rowData] = useState<ILeaveRequest[]>([
        { leaveType: "Sick Leave", startDate: "2024-10-01", endDate: "2024-10-05", totalDays: 5, status: "Approved", dateSubmitted: "2024-09-25", reason: "Flu", approver: "Principal Smith", comments: "Get well soon!" },
        { leaveType: "Personal Leave", startDate: "2024-10-10", endDate: "2024-10-12", totalDays: 3, status: "Pending", dateSubmitted: "2024-10-01", reason: "Family commitment", approver: "", comments: "" },
        { leaveType: "Vacation", startDate: "2024-10-15", endDate: "2024-10-20", totalDays: 6, status: "Rejected", dateSubmitted: "2024-10-05", reason: "Pre-planned trip", approver: "Principal Smith", comments: "Schedule conflicts with school events." },
        { leaveType: "Sick Leave", startDate: "2024-10-07", endDate: "2024-10-09", totalDays: 3, status: "Approved", dateSubmitted: "2024-10-01", reason: "Medical procedure", approver: "Principal Smith", comments: "All the best for your recovery." },
        { leaveType: "Vacation", startDate: "2024-11-01", endDate: "2024-11-05", totalDays: 5, status: "Approved", dateSubmitted: "2024-10-02", reason: "Family reunion", approver: "Principal Smith", comments: "Enjoy your time!" },
        { leaveType: "Personal Leave", startDate: "2024-11-10", endDate: "2024-11-12", totalDays: 3, status: "Pending", dateSubmitted: "2024-10-05", reason: "Home repairs", approver: "", comments: "" },
        { leaveType: "Sick Leave", startDate: "2024-11-15", endDate: "2024-11-17", totalDays: 3, status: "Approved", dateSubmitted: "2024-11-01", reason: "Migraine", approver: "Principal Smith", comments: "Take care!" },
        { leaveType: "Vacation", startDate: "2024-12-01", endDate: "2024-12-05", totalDays: 5, status: "Approved", dateSubmitted: "2024-11-10", reason: "Holiday trip", approver: "Principal Smith", comments: "Safe travels!" },
        { leaveType: "Personal Leave", startDate: "2024-12-10", endDate: "2024-12-12", totalDays: 3, status: "Pending", dateSubmitted: "2024-11-20", reason: "Appointment", approver: "", comments: "" },
        { leaveType: "Sick Leave", startDate: "2024-12-15", endDate: "2024-12-17", totalDays: 3, status: "Approved", dateSubmitted: "2024-12-01", reason: "Flu", approver: "Principal Smith", comments: "Wishing you a speedy recovery!" },
    ]);

    const statusCellRenderer = (params: any) => {
        const status = params.value;
        let bgColor = "";
        if (status === "Approved") bgColor = "bg-green-100 text-green-600";
        else if (status === "Pending") bgColor = "bg-yellow-100 text-yellow-600";
        else if (status === "Rejected") bgColor = "bg-red-100 text-red-600";

        return (
            <span className={`px-2 py-1 rounded text-xs ${bgColor}`}>
                {status}
            </span>
        );
    };

    const actionCellRenderer = (params: any) => (
        <div className="flex space-x-2 justify-center">
            <button className="text-blue-500 hover:text-blue-700">
                <Edit size={18} />
            </button>
            <button className="text-red-500 hover:text-red-700">
                <Trash2 size={18} />
            </button>
        </div>
    );

    const [columnDefs] = useState<ColDef<ILeaveRequest>[]>([
        { checkboxSelection: true, headerCheckboxSelection: true, width: 40 },
        { field: "leaveType" as keyof ILeaveRequest, headerName: "Leave Type", minWidth: 130, flex: 1 },
        { field: "startDate" as keyof ILeaveRequest, headerName: "Start Date", minWidth: 110, flex: 1 },
        { field: "endDate" as keyof ILeaveRequest, headerName: "End Date", minWidth: 110, flex: 1 },
        { field: "totalDays" as keyof ILeaveRequest, headerName: "Total Days", minWidth: 100, flex: 1 },
        { field: "status" as keyof ILeaveRequest, headerName: "Status", minWidth: 100, flex: 1, cellRenderer: statusCellRenderer },
        { field: "dateSubmitted" as keyof ILeaveRequest, headerName: "Date Submitted", minWidth: 120, flex: 1, hide: isMobile },
        { field: "reason" as keyof ILeaveRequest, headerName: "Reason for Leave", minWidth: 180, flex: 1 },
        { field: "approver" as keyof ILeaveRequest, headerName: "Approver", minWidth: 150, flex: 1, hide: isMobile },
        { field: "comments" as keyof ILeaveRequest, headerName: "Comments", minWidth: 200, flex: 1, hide: isMobile },
        { headerName: "Actions", minWidth: 90, flex: 1, cellRenderer: actionCellRenderer },
    ]);

    const defaultColDef = useMemo<ColDef>(() => ({
        sortable: true,
        filter: true,
        resizable: true,
        cellStyle: { display: 'flex', alignItems: 'center' }
    }), []);

    return (
        <div className="p-4">
            <div className="flex py-4 items-center">
                {!isMobile ? <h1 className="text-xl font-bold">Leave Request</h1> :
                    <Typography className="text-sm font-bold whitespace-nowrap">Leave Request</Typography>}
                <NavigateNextOutlinedIcon fontSize="small" />
                <HomeOutlinedIcon fontSize="small" />
                <NavigateNextOutlinedIcon fontSize="small" />
                <Typography fontSize={"small"}>Teacher</Typography>
                <NavigateNextOutlinedIcon fontSize="small" />
                <Typography fontSize={"small"}>Leave Request</Typography>
            </div>

            <div className="bg-sky-100 py-4 dark:bg-sky-900 rounded-lg shadow">
                {/* Toolbar */}
                <div className="flex items-center justify-between">
                    {!isMobile && <Typography className="text-lg px-4">Leave Request</Typography>}

                    <div className="flex items-center space-x-2">
                        <div className="relative pl-1 pb-1">
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

                        <button className={`bg-blue-500 text-white px-3 py-1 ${!isMobile && "mr-1"} rounded flex items-center space-x-1 text-sm`}>
                            <Download size={14} /> {!isMobile && <span>Download</span>}
                        </button>
                    </div>
                </div>

                {/* AG Grid */}
                <div className="overflow-x-auto ag-theme-quartz" style={{
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
                } as React.CSSProperties}>
                    <AgGridReact<ILeaveRequest>
                        rowData={rowData.filter(row =>
                            row.leaveType.toLowerCase().includes(searchText.toLowerCase()) ||
                            row.status.toLowerCase().includes(searchText.toLowerCase()) ||
                            row.reason.toLowerCase().includes(searchText.toLowerCase())
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

export default LeaveRequestTeacher;
