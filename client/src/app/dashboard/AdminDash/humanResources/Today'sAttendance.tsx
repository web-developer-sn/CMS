"use client";

import React, { useMemo, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-theme-quartz.css";
import NavigateNextOutlinedIcon from "@mui/icons-material/NavigateNextOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { Search, Plus, RefreshCw, Download, Edit, Trash2 } from "lucide-react";
import { Typography, Avatar } from "@mui/joy";
import { useMediaQuery } from "@mui/material";

interface IAttendanceRecord {
    employeeName: string;
    firstIn: string;
    break: string;
    lastOut: string;
    totalHours: string;
    status: string;
    shift: string;
}

const TodaysAttendance = () => {
    const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);
    const isMobile = useMediaQuery('(max-width: 768px)');
    const [searchText, setSearchText] = useState("");

    const [rowData] = useState<IAttendanceRecord[]>([
        { employeeName: "John Deo", firstIn: "10:30", break: "01:15", lastOut: "19:37", totalHours: "08:02", status: "present", shift: "Night Shift" },
        { employeeName: "Sarah Smith", firstIn: "10:32", break: "01:00", lastOut: "19:30", totalHours: "08:10", status: "absent", shift: "Day Shift" },
        { employeeName: "Edna Gilbert", firstIn: "10:42", break: "01:10", lastOut: "19:32", totalHours: "08:08", status: "absent", shift: "Day Shift" },
        { employeeName: "Shelia Osterberg", firstIn: "10:38", break: "01:07", lastOut: "19:40", totalHours: "08:00", status: "present", shift: "Night Shift" },
        { employeeName: "Barbara Garland", firstIn: "10:33", break: "01:15", lastOut: "19:30", totalHours: "08:01", status: "present", shift: "Night Shift" },
        { employeeName: "Sarah Smith", firstIn: "10:30", break: "01:10", lastOut: "19:37", totalHours: "08:10", status: "absent", shift: "Day Shift" },
        { employeeName: "Marie Brodsky", firstIn: "10:32", break: "01:05", lastOut: "19:40", totalHours: "08:00", status: "absent", shift: "Day Shift" },
        { employeeName: "Kara Thompson", firstIn: "10:40", break: "01:07", lastOut: "19:30", totalHours: "08:12", status: "present", shift: "Day Shift" },
        { employeeName: "Joseph Nye", firstIn: "10:28", break: "01:00", lastOut: "19:32", totalHours: "08:02", status: "present", shift: "Night Shift" },
        { employeeName: "Ricardo Wendler", firstIn: "10:38", break: "01:15", lastOut: "19:37", totalHours: "08:00", status: "present", shift: "Night Shift" }
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
        const colorClass = status === 'present' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700';
        return (
            <span className={`px-2 py-1 rounded text-xs font-medium ${colorClass}`}>{status}</span>
        );
    };

    const employeeCellRenderer = (params: any) => (
        <div className="flex items-center space-x-2">
            <Avatar size="sm" />
            <span>{params.value}</span>
        </div>
    );

    const [columnDefs] = useState<any[]>([
        { checkboxSelection: true, headerCheckboxSelection: true, width: 80 },
        { field: "employeeName", headerName: "Employee Name", minWidth: 250, cellRenderer: employeeCellRenderer },
        { field: "firstIn", headerName: "First In", width: 120 },
        { field: "break", headerName: "Break", width: 120 },
        { field: "lastOut", headerName: "Last Out", width: 120 },
        { field: "totalHours", headerName: "Total Hours", width: 130 },
        { field: "status", headerName: "Status", width: 130, cellRenderer: statusCellRenderer },
        { field: "shift", headerName: "Shift", width: 150 },
        { headerName: "Actions", minWidth: 240, cellRenderer: actionCellRenderer },
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
                {!isMobile ? <h1 className="text-xl font-bold">Today's Attendance</h1> :
                    <Typography className="text-sm font-bold whitespace-nowrap">Today's Attendance</Typography>}
                <NavigateNextOutlinedIcon fontSize="small" />
                <HomeOutlinedIcon fontSize="small" />
                <NavigateNextOutlinedIcon fontSize="small" />
                <Typography fontSize={"small"}>HR</Typography>
                <NavigateNextOutlinedIcon fontSize="small" />
                <Typography fontSize={"small"}>Today's Attendance</Typography>
            </div>

            <div className="bg-sky-100 py-4 dark:bg-sky-900 rounded-lg shadow">
                <div className="flex items-center justify-between flex-wrap gap-2 px-4">
                    {!isMobile && <Typography className="text-lg">Today's Attendance</Typography>}

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
                    <AgGridReact<IAttendanceRecord>
                        rowData={rowData.filter(row =>
                            row.employeeName.toLowerCase().includes(searchText.toLowerCase()) ||
                            row.status.toLowerCase().includes(searchText.toLowerCase()) ||
                            row.shift.toLowerCase().includes(searchText.toLowerCase())
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

export default TodaysAttendance;
