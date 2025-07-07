"use client";

import React, { useMemo, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-theme-quartz.css";
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { Search, Plus, RefreshCw, Download, Edit, Trash2 } from "lucide-react";
import { Avatar, Typography } from "@mui/joy";
import { useMediaQuery } from "@mui/material";

const StudentAttendance = () => {
    const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);
    const isMobile = useMediaQuery('(max-width: 768px)');
    const [searchText, setSearchText] = useState("");

    const [rowData] = useState<any[]>([
        { rollNo: 1, avatar: "/avatars/avatar1.png", name: "Jenish Shah", class: "Class A", date: "02/25/2019", status: "Absent", semester: "Spring 2019", time: "", reason: "Family function", notes: "Leave for marriage", approved: false },
        { rollNo: 2, avatar: "/avatars/avatar2.png", name: "Priya Patel", class: "Class A", date: "02/17/2019", status: "Present", semester: "Spring 2019", time: "09:00", reason: "", notes: "", approved: true },
        { rollNo: 3, avatar: "/avatars/avatar3.png", name: "Mayank Jani", class: "Class B", date: "01/01/2020", status: "Present", semester: "Spring 2020", time: "09:00", reason: "", notes: "", approved: true },
        { rollNo: 4, avatar: "/avatars/avatar4.png", name: "Bertie Jones", class: "Class A", date: "02/01/2019", status: "Absent", semester: "Spring 2019", time: "", reason: "Family function", notes: "Leave for marriage", approved: false },
        { rollNo: 5, avatar: "/avatars/avatar5.png", name: "Jenish Shah", class: "Class E", date: "02/02/2019", status: "Present", semester: "Spring 2019", time: "09:00", reason: "", notes: "", approved: true },
        { rollNo: 6, avatar: "/avatars/avatar6.png", name: "Sarah Smith", class: "Class C", date: "02/26/2019", status: "Present", semester: "Spring 2019", time: "09:00", reason: "", notes: "", approved: true },
        { rollNo: 7, avatar: "/avatars/avatar7.png", name: "Pam Abbott", class: "Class B", date: "02/22/2019", status: "Absent", semester: "Spring 2019", time: "", reason: "Family function", notes: "Leave for marriage", approved: false },
        { rollNo: 8, avatar: "/avatars/avatar8.png", name: "Bethany Spencer", class: "Class A", date: "02/19/2019", status: "Present", semester: "Spring 2019", time: "09:00", reason: "", notes: "", approved: true },
        { rollNo: 9, avatar: "/avatars/avatar9.png", name: "Ivan Bell", class: "Class E", date: "02/14/2019", status: "Absent", semester: "Spring 2019", time: "", reason: "Family function", notes: "Leave for marriage", approved: false },
        { rollNo: 1, avatar: "/avatars/avatar10.png", name: "Jay Soni", class: "Class B", date: "02/27/2019", status: "Present", semester: "Spring 2019", time: "09:00", reason: "", notes: "", approved: true },
    ]);

    const nameCellRenderer = (params: any) => (
        <div className="flex items-center space-x-2">
            <Avatar src={params.data.avatar} alt={params.value} size="sm" variant="soft" />
            <span className="text-sm">{params.value}</span>
        </div>
    );

    const statusCellRenderer = (params: any) => {
        const status = params.value;
        const badgeClass = status === "Present" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600";
        return (
            <span className={`px-2 py-1 rounded text-xs ${badgeClass}`}>{status}</span>
        );
    };

    const approvedCellRenderer = (params: any) => (
        <span className="text-sm">{params.value ? "true" : "false"}</span>
    );

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
        { checkboxSelection: true, headerCheckboxSelection: true, width: 40 },
        { field: "rollNo", headerName: "Roll No", minWidth: 70, flex: 1 },
        { field: "name", headerName: "Student Name", minWidth: 160, flex: 1, cellRenderer: nameCellRenderer },
        { field: "class", headerName: "Class", minWidth: 100, flex: 1 },
        { field: "date", headerName: "Date", minWidth: 110, flex: 1 },
        { field: "status", headerName: "Status", minWidth: 100, flex: 1, cellRenderer: statusCellRenderer },
        { field: "semester", headerName: "Semester", minWidth: 120, flex: 1 },
        { field: "time", headerName: "Attendance Time", minWidth: 120, flex: 1 },
        { field: "reason", headerName: "Reason for Absence", minWidth: 150, flex: 1 },
        { field: "notes", headerName: "Notes", minWidth: 150, flex: 1 },
        { field: "approved", headerName: "Approved", minWidth: 90, flex: 1, cellRenderer: approvedCellRenderer },
        { headerName: "Actions", minWidth: 90, flex: 1, cellRenderer: actionCellRenderer },
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
                {!isMobile ? <h1 className="text-xl font-bold">All Student</h1> :
                    <Typography className="text-sm font-bold whitespace-nowrap">All Student</Typography>}
                <NavigateNextOutlinedIcon fontSize="small" />
                <HomeOutlinedIcon fontSize="small" />
                <NavigateNextOutlinedIcon fontSize="small" />
                <Typography fontSize={"small"}>Student</Typography>
                <NavigateNextOutlinedIcon fontSize="small" />
                <Typography fontSize={"small"}>All Student</Typography>
            </div>

            <div className="bg-sky-100 py-4 dark:bg-sky-900 rounded-lg shadow">
                <div className="flex items-center justify-between flex-wrap gap-2 px-4">
                    {!isMobile && <Typography className="text-lg">Student Attendance</Typography>}

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
                    <AgGridReact
                        rowData={rowData.filter(row =>
                            row.name.toLowerCase().includes(searchText.toLowerCase()) ||
                            row.class.toLowerCase().includes(searchText.toLowerCase()) ||
                            row.date.includes(searchText) ||
                            row.semester.toLowerCase().includes(searchText.toLowerCase())
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

export default StudentAttendance;
