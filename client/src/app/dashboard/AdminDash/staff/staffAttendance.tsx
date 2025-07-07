"use client";

import React, { useMemo, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-theme-quartz.css";
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { Search, Plus, RefreshCw, Download, Edit, Trash2 } from "lucide-react";
import { Avatar, Typography } from "@mui/joy";
import { useMediaQuery } from "@mui/material";

const StaffAttendance = () => {
    const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);
    const isMobile = useMediaQuery('(max-width: 768px)');
    const [searchText, setSearchText] = useState("");

    const rowData = [
        { employeeId: "E12345", name: "John Deo", avatar: "/avatars/avatar1.png", designation: "Admin Officer", date: "2024-10-08", checkIn: "10:30", break: "01:15", checkOut: "19:37", totalHours: "08:02", department: "Admin", shift: "Day", attendanceStatus: "Present" },
        { employeeId: "E12346", name: "Sarah Smith", avatar: "/avatars/avatar2.png", designation: "Library Assistant", date: "2024-10-08", checkIn: "10:32", break: "01:00", checkOut: "19:30", totalHours: "08:10", department: "Library", shift: "Day", attendanceStatus: "Absent" },
        { employeeId: "E12347", name: "Edna Gilbert", avatar: "/avatars/avatar3.png", designation: "Library Clerk", date: "2024-10-08", checkIn: "10:42", break: "01:10", checkOut: "19:32", totalHours: "08:08", department: "Library", shift: "Day", attendanceStatus: "Absent" },
        { employeeId: "E12348", name: "Shelia Osteen", avatar: "/avatars/avatar4.png", designation: "Math Teacher", date: "2024-10-08", checkIn: "10:38", break: "01:07", checkOut: "19:40", totalHours: "08:00", department: "Teaching", shift: "Day", attendanceStatus: "Present" },
        { employeeId: "E12349", name: "Barbara Green", avatar: "/avatars/avatar5.png", designation: "English Teacher", date: "2024-10-08", checkIn: "10:33", break: "01:15", checkOut: "19:30", totalHours: "08:01", department: "Teaching", shift: "Day", attendanceStatus: "Present" },
        { employeeId: "E12350", name: "Sarah Smith", avatar: "/avatars/avatar2.png", designation: "Teaching Assistant", date: "2024-10-08", checkIn: "10:30", break: "01:10", checkOut: "19:37", totalHours: "08:10", department: "Teaching", shift: "Day", attendanceStatus: "Absent" },
        { employeeId: "E12351", name: "Marie Brown", avatar: "/avatars/avatar6.png", designation: "Sports Coach", date: "2024-10-08", checkIn: "10:32", break: "01:05", checkOut: "19:40", totalHours: "08:00", department: "Sport", shift: "Day", attendanceStatus: "Absent" },
        { employeeId: "E12352", name: "Kara Thompson", avatar: "/avatars/avatar7.png", designation: "Library Assistant", date: "2024-10-08", checkIn: "10:40", break: "01:07", checkOut: "19:30", totalHours: "08:12", department: "Library", shift: "Day", attendanceStatus: "Present" },
        { employeeId: "E12353", name: "Joseph Nye", avatar: "/avatars/avatar8.png", designation: "Library Clerk", date: "2024-10-08", checkIn: "10:28", break: "01:00", checkOut: "19:32", totalHours: "08:02", department: "Library", shift: "Day", attendanceStatus: "Present" },
        { employeeId: "E12354", name: "Ricardo Wynn", avatar: "/avatars/avatar9.png", designation: "Placement Coordinator", date: "2024-10-08", checkIn: "10:38", break: "01:15", checkOut: "19:37", totalHours: "08:00", department: "Placement", shift: "Day", attendanceStatus: "Present" },
    ];

    const nameCellRenderer = (params: any) => (
        <div className="flex items-center space-x-2">
            <Avatar src={params.data.avatar} alt={params.value} size="sm" variant="soft" />
            <span className="text-sm">{params.value}</span>
        </div>
    );

    const attendanceStatusRenderer = (params: any) => {
        const status = params.value;
        const color = status === "Present" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600";
        return <span className={`px-2 py-1 rounded text-xs ${color}`}>{status}</span>;
    };

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

    const [columnDefs] = useState<any[]>([
        { headerCheckboxSelection: true, checkboxSelection: true, width: 40, field: undefined as any },
        { field: "employeeId", headerName: "Employee ID", minWidth: 110, flex: 1 },
        { field: "name", headerName: "Name", minWidth: 150, flex: 1.5, cellRenderer: nameCellRenderer },
        { field: "designation", headerName: "Designation", minWidth: 160, flex: 1.5 },
        { field: "date", headerName: "Date", minWidth: 110, flex: 1 },
        { field: "checkIn", headerName: "Check In", minWidth: 90, flex: 1 },
        { field: "break", headerName: "Break", minWidth: 80, flex: 1 },
        { field: "checkOut", headerName: "Check Out", minWidth: 100, flex: 1 },
        { field: "totalHours", headerName: "Total Hours", minWidth: 100, flex: 1 },
        { field: "department", headerName: "Department", minWidth: 120, flex: 1 },
        { field: "shift", headerName: "Shift", minWidth: 80, flex: 1 },
        { field: "attendanceStatus", headerName: "Status", minWidth: 100, flex: 1.2, cellRenderer: attendanceStatusRenderer },
        { headerName: "Actions", minWidth: 90, flex: 0.8, cellRenderer: actionCellRenderer }
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
                {!isMobile ? <h1 className="text-xl font-bold">Staff Attendance</h1> :
                    <Typography className="text-sm font-bold whitespace-nowrap">Staff Attendance</Typography>}
                <NavigateNextOutlinedIcon fontSize="small" />
                <HomeOutlinedIcon fontSize="small" />
                <NavigateNextOutlinedIcon fontSize="small" />
                <Typography fontSize={"small"}>Attendance</Typography>
                <NavigateNextOutlinedIcon fontSize="small" />
                <Typography fontSize={"small"}>Staff Attendance</Typography>
            </div>

            <div className="bg-sky-100 py-4 dark:bg-sky-900 rounded-lg shadow">
                <div className="flex items-center justify-between flex-wrap gap-2 px-4">
                    {!isMobile && <Typography className="text-lg">Staff Attendances</Typography>}

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

                <div className="ag-theme-quartz mt-4" style={{
                    ...gridStyle,
                    maxWidth: '100%',
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
                    <AgGridReact
                        rowData={rowData.filter(row =>
                            row.name.toLowerCase().includes(searchText.toLowerCase()) ||
                            row.employeeId.toLowerCase().includes(searchText.toLowerCase()) ||
                            row.designation.toLowerCase().includes(searchText.toLowerCase()) ||
                            row.department.toLowerCase().includes(searchText.toLowerCase())
                        )}
                        columnDefs={columnDefs}
                        defaultColDef={defaultColDef}
                        animateRows={true}
                        pagination={true}
                        paginationPageSize={10}
                        rowSelection="multiple"
                        getRowHeight={() => 35}
                    />
                </div>
            </div>
        </div>
    );
};

export default StaffAttendance;
