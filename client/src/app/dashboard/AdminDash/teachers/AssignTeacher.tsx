"use client";

import React, { useMemo, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { ColDef } from "ag-grid-community";
import NavigateNextOutlinedIcon from "@mui/icons-material/NavigateNextOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { Search, Plus, RefreshCw, Download, Edit, Trash2 } from "lucide-react";
import { Avatar, Typography } from "@mui/joy";
import { useMediaQuery } from "@mui/material";

interface IAssignClassTeacher {
    teacherId: string;
    avatar: string;
    teacherName: string;
    classId: string;
    className: string;
    subject: string;
    status: string;
    academicYear: string;
    classTiming: string;
    roomNo: string;
}

const AssignClassTeacher = () => {
    const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);
    const isMobile = useMediaQuery("(max-width: 768px)");
    const [searchText, setSearchText] = useState("");

    const [rowData] = useState<IAssignClassTeacher[]>([
        {
            teacherId: "T1001",
            avatar: "/avatars/avatar1.png",
            teacherName: "John Doe",
            classId: "C101",
            className: "Grade 10 Science",
            subject: "Physics",
            status: "Active",
            academicYear: "2024-2025",
            classTiming: "Monday, Wednesday",
            roomNo: "101",
        },
        {
            teacherId: "T1002",
            avatar: "/avatars/avatar2.png",
            teacherName: "Jane Smith",
            classId: "C102",
            className: "Grade 9 Math",
            subject: "Mathematics",
            status: "Active",
            academicYear: "2024-2025",
            classTiming: "Tuesday, Thursday",
            roomNo: "102",
        },
        {
            teacherId: "T1003",
            avatar: "/avatars/avatar3.png",
            teacherName: "Emily Green",
            classId: "C103",
            className: "Grade 11 English",
            subject: "English Literature",
            status: "Inactive",
            academicYear: "2024-2025",
            classTiming: "Monday, Wednesday",
            roomNo: "103",
        },
        {
            teacherId: "T1004",
            avatar: "/avatars/avatar4.png",
            teacherName: "Michael Brown",
            classId: "C104",
            className: "Grade 12 History",
            subject: "History",
            status: "Active",
            academicYear: "2024-2025",
            classTiming: "Monday, Friday",
            roomNo: "104",
        },
        {
            teacherId: "T1005",
            avatar: "/avatars/avatar5.png",
            teacherName: "Sophie Taylor",
            classId: "C105",
            className: "Grade 10 Chemistry",
            subject: "Chemistry",
            status: "Active",
            academicYear: "2024-2025",
            classTiming: "Tuesday, Thursday",
            roomNo: "105",
        },
    ]);

    const avatarCellRenderer = (params: any) => (
        <div className="flex items-center space-x-2">
            <Avatar src={params.data.avatar} alt={params.value} size="sm" variant="soft" />
            <span className="text-sm">{params.value}</span>
        </div>
    );

    const statusCellRenderer = (params: any) => {
        const status = params.value;
        const isActive = status === "Active";
        return (
            <span
                className={`text-xs px-2 py-1 rounded-full ${isActive ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700"
                    }`}
            >
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

    const [columnDefs] = useState<ColDef<IAssignClassTeacher>[]>([
        { checkboxSelection: true, headerCheckboxSelection: true, width: 40 },
        { field: "teacherId", headerName: "Teacher ID", minWidth: 80, flex: 1 },
        { field: "teacherName", headerName: "Teacher Name", minWidth: 140, flex: 1, cellRenderer: avatarCellRenderer },
        { field: "classId", headerName: "Class ID", minWidth: 80, flex: 1 },
        { field: "className", headerName: "Class Name", minWidth: 120, flex: 1 },
        { field: "subject", headerName: "Subject", minWidth: 120, flex: 1 },
        { field: "status", headerName: "Assignment Status", minWidth: 100, flex: 1, cellRenderer: statusCellRenderer },
        { field: "academicYear", headerName: "Academic Year", minWidth: 100, flex: 1 },
        { field: "classTiming", headerName: "Class Timing", minWidth: 120, flex: 1 },
        { field: "roomNo", headerName: "Room No", minWidth: 80, flex: 1 },
        { headerName: "Actions", minWidth: 90, flex: 1, cellRenderer: actionCellRenderer },
    ]);

    const defaultColDef = useMemo(() => ({
        sortable: true,
        filter: true,
        resizable: true,
        cellStyle: { display: "flex", alignItems: "center" },
    }), []);

    const filteredData = rowData.filter(row =>
        row.teacherName.toLowerCase().includes(searchText.toLowerCase()) ||
        row.className.toLowerCase().includes(searchText.toLowerCase()) ||
        row.subject.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <div className="p-4">
            {/* Breadcrumb */}
            <div className="flex py-4 items-center">
                {!isMobile ? (
                    <h1 className="text-xl font-bold">Assign Class Teacher</h1>
                ) : (
                    <Typography className="text-sm font-bold whitespace-nowrap">Assign Class Teacher</Typography>
                )}
                <NavigateNextOutlinedIcon fontSize="small" />
                <HomeOutlinedIcon fontSize="small" />
                <NavigateNextOutlinedIcon fontSize="small" />
                <Typography fontSize={"small"}>Teacher</Typography>
                <NavigateNextOutlinedIcon fontSize="small" />
                <Typography fontSize={"small"}>Assign Class Teacher</Typography>
            </div>

            {/* Top Bar */}
            <div className="bg-sky-100 py-4 dark:bg-sky-900 rounded-lg shadow">
                <div className="flex items-center justify-between flex-wrap gap-2 px-4">
                    {!isMobile && <Typography className="text-lg">Assign Class Teacher</Typography>}

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

                        <button className={`bg-blue-500 text-white px-3 py-1 rounded flex items-center space-x-1 text-sm`}>
                            <Download size={14} /> {!isMobile && <span>Download</span>}
                        </button>
                    </div>
                </div>

                {/* AG Grid */}
                <div className="overflow-x-auto ag-theme-quartz mt-4"
                    style={{
                        ...gridStyle,
                        maxWidth: "calc(100dvw - 42px)",
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
                    } as React.CSSProperties}
                >
                    <AgGridReact<IAssignClassTeacher>
                        rowData={filteredData}
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

export default AssignClassTeacher;
