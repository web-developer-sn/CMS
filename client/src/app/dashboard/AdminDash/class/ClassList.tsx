"use client";

import React, { useMemo, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-theme-quartz.css";
import NavigateNextOutlinedIcon from "@mui/icons-material/NavigateNextOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { Search, Plus, RefreshCw, Download, Edit, Trash2 } from "lucide-react";
import { Typography } from "@mui/joy";
import { useMediaQuery } from "@mui/material";

interface IClassRecord {
    className: string;
    classCode: string;
    classType: string;
    roomNumber: string;
    schedule: string;
    semester: string;
    capacity: number;
    status: string;
    startDate: string;
    endDate: string;
}

const ClassList = () => {
    const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);
    const isMobile = useMediaQuery('(max-width: 768px)');
    const [searchText, setSearchText] = useState("");

    const [rowData] = useState<IClassRecord[]>([
        { className: "Grade 10", classCode: "10A", classType: "Lecture", roomNumber: "Room 101", schedule: "Monday, Wednesday, Friday, 8:00 AM - 9:30 AM", semester: "Fall 2024", capacity: 30, status: "Active", startDate: "09/01/2024", endDate: "12/20/2024" },
        { className: "Grade 11", classCode: "11B", classType: "Lab", roomNumber: "Room 102", schedule: "Tuesday, Thursday, 9:00 AM - 10:30 AM", semester: "Fall 2024", capacity: 28, status: "Active", startDate: "09/01/2024", endDate: "12/20/2024" },
        { className: "Grade 12", classCode: "12A", classType: "Seminar", roomNumber: "Room 103", schedule: "Monday, Wednesday, Friday, 12:00 PM - 1:30 PM", semester: "Fall 2024", capacity: 25, status: "Inactive", startDate: "09/01/2024", endDate: "12/20/2024" },
        { className: "Grade 10", classCode: "10B", classType: "Workshop", roomNumber: "Room 104", schedule: "Tuesday, Thursday, 10:45 AM - 12:15 PM", semester: "Fall 2024", capacity: 32, status: "Inactive", startDate: "09/01/2024", endDate: "12/20/2024" },
        { className: "Grade 11", classCode: "11C", classType: "Lecture", roomNumber: "Room 105", schedule: "Monday, Wednesday, 3:00 PM - 4:30 PM", semester: "Fall 2024", capacity: 30, status: "Active", startDate: "09/01/2024", endDate: "12/20/2024" },
        { className: "Grade 12", classCode: "12B", classType: "Seminar", roomNumber: "Room 106", schedule: "Tuesday, Thursday, 2:00 PM - 3:30 PM", semester: "Fall 2024", capacity: 20, status: "Active", startDate: "09/01/2024", endDate: "12/20/2024" },
        { className: "Grade 10", classCode: "10C", classType: "Workshop", roomNumber: "Room 107", schedule: "Monday, Wednesday, Friday, 9:00 AM - 10:30 AM", semester: "Fall 2024", capacity: 30, status: "Inactive", startDate: "09/01/2024", endDate: "12/20/2024" },
        { className: "Grade 11", classCode: "11D", classType: "Lab", roomNumber: "Room 108", schedule: "Monday, Wednesday, 2:00 PM - 3:30 PM", semester: "Fall 2024", capacity: 26, status: "Active", startDate: "09/01/2024", endDate: "12/20/2024" },
        { className: "Grade 12", classCode: "12C", classType: "Lecture", roomNumber: "Room 109", schedule: "Tuesday, Thursday, 11:00 AM - 12:30 PM", semester: "Fall 2024", capacity: 22, status: "Active", startDate: "09/01/2024", endDate: "12/20/2024" },
        { className: "Grade 10", classCode: "10D", classType: "Seminar", roomNumber: "Room 110", schedule: "Monday, Wednesday, Friday, 12:00 PM - 1:30 PM", semester: "Fall 2024", capacity: 32, status: "Active", startDate: "09/01/2024", endDate: "12/20/2024" },
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
        { checkboxSelection: true, headerCheckboxSelection: true, width: 40 },
        { field: "className", headerName: "Class Name", width: 140 },
        { field: "classCode", headerName: "Class Code", width: 100 },
        { field: "classType", headerName: "Class Type", width: 100 },
        { field: "roomNumber", headerName: "Room Number", width: 100 },
        { field: "schedule", headerName: "Schedule", width: 300 },
        { field: "semester", headerName: "Semester", width: 100 },
        { field: "capacity", headerName: "Capacity", width: 80 },
        { field: "status", headerName: "Status", width: 100, cellRenderer: statusCellRenderer },
        { field: "startDate", headerName: "Start Date", width: 110 },
        { field: "endDate", headerName: "End Date", width: 110 },
        { headerName: "Actions", width: 70, cellRenderer: actionCellRenderer },
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
                {!isMobile ? <h1 className="text-xl font-bold">Class List</h1> :
                    <Typography className="text-sm font-bold whitespace-nowrap">Class List</Typography>}
                <NavigateNextOutlinedIcon fontSize="small" />
                <HomeOutlinedIcon fontSize="small" />
                <NavigateNextOutlinedIcon fontSize="small" />
                <Typography fontSize={"small"}>Class</Typography>
                <NavigateNextOutlinedIcon fontSize="small" />
                <Typography fontSize={"small"}>Class List</Typography>
            </div>

            <div className="bg-sky-100 py-4 dark:bg-sky-900 rounded-lg shadow">
                <div className="flex items-center justify-between flex-wrap gap-2 px-4">
                    {!isMobile && <Typography className="text-lg">Class List</Typography>}

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
                    <AgGridReact<IClassRecord>
                        rowData={rowData.filter(row =>
                            row.className.toLowerCase().includes(searchText.toLowerCase()) ||
                            row.classCode.toLowerCase().includes(searchText.toLowerCase()) ||
                            row.classType.toLowerCase().includes(searchText.toLowerCase()) ||
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

export default ClassList;
