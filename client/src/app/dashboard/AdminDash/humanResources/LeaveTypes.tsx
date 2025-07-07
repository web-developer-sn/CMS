"use client";

import React, { useMemo, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-theme-quartz.css";
import NavigateNextOutlinedIcon from "@mui/icons-material/NavigateNextOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { Search, Plus, RefreshCw, Download, Edit, Trash2 } from "lucide-react";
import { Typography } from "@mui/joy";
import { useMediaQuery } from "@mui/material";

interface ILeaveTypeRecord {
    leaveName: string;
    leaveType: string;
    leaveUnit: string;
    status: string;
    duration: number;
    createdBy: string;
    notificationPeriod: string;
}

const LeaveTypes = () => {
    const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);
    const isMobile = useMediaQuery('(max-width: 768px)');
    const [searchText, setSearchText] = useState("");

    const [rowData] = useState<ILeaveTypeRecord[]>([
        { leaveName: "Work From Home Leave", leaveType: "Paid", leaveUnit: "Days", status: "Deactive", duration: 5, createdBy: "HR Department", notificationPeriod: "48 hours prior." },
        { leaveName: "Casual Leave", leaveType: "Unpaid", leaveUnit: "Hours", status: "Active", duration: 8, createdBy: "HR Department", notificationPeriod: "24 hours prior." },
        { leaveName: "Emergency Leave", leaveType: "Unpaid", leaveUnit: "Days", status: "Active", duration: 3, createdBy: "HR Department", notificationPeriod: "Immediate." },
        { leaveName: "Family Leave", leaveType: "Unpaid", leaveUnit: "Hours", status: "Deactive", duration: 12, createdBy: "HR Department", notificationPeriod: "48 hours prior." },
        { leaveName: "Sick Leave", leaveType: "Unpaid", leaveUnit: "Days", status: "Active", duration: 10, createdBy: "HR Department", notificationPeriod: "48 hours prior." },
        { leaveName: "Casual Leave", leaveType: "Unpaid", leaveUnit: "Days", status: "Active", duration: 8, createdBy: "HR Department", notificationPeriod: "24 hours prior." },
        { leaveName: "Maternity Leave", leaveType: "Paid", leaveUnit: "Days", status: "Deactive", duration: 90, createdBy: "HR Department", notificationPeriod: "1 month prior." },
        { leaveName: "Sick Leave", leaveType: "Unpaid", leaveUnit: "Days", status: "Active", duration: 10, createdBy: "HR Department", notificationPeriod: "48 hours prior." },
        { leaveName: "Sick Leave", leaveType: "Unpaid", leaveUnit: "Days", status: "Active", duration: 10, createdBy: "HR Department", notificationPeriod: "48 hours prior." },
        { leaveName: "Casual Leave", leaveType: "Unpaid", leaveUnit: "Days", status: "Active", duration: 8, createdBy: "HR Department", notificationPeriod: "24 hours prior." },
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
        const colorClass = status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700';
        return (
            <span className={`px-2 py-1 rounded text-xs font-medium ${colorClass}`}>{status}</span>
        );
    };

    const [columnDefs] = useState<any[]>([
        { checkboxSelection: true, headerCheckboxSelection: true, width: 80 },
        { field: "leaveName", headerName: "Leave Name", width: 220 },
        { field: "leaveType", headerName: "Leave Type", width: 130 },
        { field: "leaveUnit", headerName: "Leave Unit", width: 130 },
        { field: "status", headerName: "Status", width: 130, cellRenderer: statusCellRenderer },
        { field: "duration", headerName: "Duration (Days)", width: 140 },
        { field: "createdBy", headerName: "Created By", width: 170 },
        { field: "notificationPeriod", headerName: "Notification Period", width: 180 },
        { headerName: "Actions", width: 140, cellRenderer: actionCellRenderer },
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
                {!isMobile ? <h1 className="text-xl font-bold">Leave Types</h1> :
                    <Typography className="text-sm font-bold whitespace-nowrap">Leave Types</Typography>}
                <NavigateNextOutlinedIcon fontSize="small" />
                <HomeOutlinedIcon fontSize="small" />
                <NavigateNextOutlinedIcon fontSize="small" />
                <Typography fontSize={"small"}>HR</Typography>
                <NavigateNextOutlinedIcon fontSize="small" />
                <Typography fontSize={"small"}>Leave Types</Typography>
            </div>

            <div className="bg-sky-100 py-4 dark:bg-sky-900 rounded-lg shadow">
                <div className="flex items-center justify-between flex-wrap gap-2 px-4">
                    {!isMobile && <Typography className="text-lg">Leave Types</Typography>}

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
                    <AgGridReact<ILeaveTypeRecord>
                        rowData={rowData.filter(row =>
                            row.leaveName.toLowerCase().includes(searchText.toLowerCase()) ||
                            row.leaveType.toLowerCase().includes(searchText.toLowerCase()) ||
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

export default LeaveTypes;
