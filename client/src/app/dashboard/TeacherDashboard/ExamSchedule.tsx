"use client";

import React, { useMemo, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-theme-quartz.css";
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { AllCommunityModule, ColDef, iconSetQuartzLight, ModuleRegistry, themeQuartz } from "ag-grid-community";
import { Search, Plus, RefreshCw, Download, Edit, Trash2 } from "lucide-react";
import { Typography } from "@mui/joy";
import { useMediaQuery } from "@mui/material";

ModuleRegistry.registerModules([AllCommunityModule]);

const myTheme = themeQuartz
    .withPart(iconSetQuartzLight)
    .withParams({
        backgroundColor: "rgb(255, 255, 255)",
        foregroundColor: "rgb(51, 51, 51)",
        headerTextColor: "rgb(0, 0, 0)",
        headerBackgroundColor: "#086F8B",
        oddRowBackgroundColor: "rgba(0, 0, 0, 0.03)",
        headerColumnResizeHandleColor: "rgb(150, 150, 150)",
    });

interface IExamSchedule {
    subject: string;
    className: string;
    date: string;
    time: string;
    duration: string;
    roomNo: string;
    totalMarks: number;
    requiredMarks: number;
}

const ExamSchedule = () => {
    const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);
    const isMobile = useMediaQuery('(max-width: 768px)');
    const [searchText, setSearchText] = useState("");

    const [rowData] = useState<IExamSchedule[]>([
        { subject: "Mathematics", className: "Class 1", date: "2018-02-10T14:22:18Z", time: "10:30 AM", duration: "3 hours", roomNo: "101", totalMarks: 100, requiredMarks: 35 },
        { subject: "Science", className: "Class 1", date: "2018-02-11T14:22:18Z", time: "10:30 AM", duration: "3 hours", roomNo: "103", totalMarks: 100, requiredMarks: 35 },
        { subject: "Geography", className: "Class 1", date: "2018-02-12T14:22:18Z", time: "10:30 AM", duration: "3 hours", roomNo: "102", totalMarks: 100, requiredMarks: 35 },
        { subject: "Chemistry", className: "Class 1", date: "2018-02-13T14:22:18Z", time: "10:30 AM", duration: "3 hours", roomNo: "104", totalMarks: 100, requiredMarks: 35 },
        { subject: "Biology", className: "Class 1", date: "2018-02-15T14:22:18Z", time: "10:30 AM", duration: "3 hours", roomNo: "101", totalMarks: 100, requiredMarks: 35 },
        { subject: "Economics", className: "Class 1", date: "2018-02-16T14:22:18Z", time: "10:30 AM", duration: "3 hours", roomNo: "105", totalMarks: 100, requiredMarks: 35 },
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

    const [columnDefs] = useState<ColDef<IExamSchedule>[]>([
        { checkboxSelection: true, headerCheckboxSelection: true, width: 65 },
        { field: "subject", headerName: "Subject", minWidth: 160, flex: 1 },
        { field: "className", headerName: "Class", minWidth: 100, flex: 1 },
        { field: "date", headerName: "Date", minWidth: 130, flex: 1, valueFormatter: params => new Date(params.value).toLocaleDateString() },
        { field: "time", headerName: "Time", minWidth: 120, flex: 1 },
        { field: "duration", headerName: "Duration", minWidth: 120, flex: 1 },
        { field: "roomNo", headerName: "Room No", minWidth: 100, flex: 1 },
        { field: "totalMarks", headerName: "Total Marks", minWidth: 100, flex: 1 },
        { field: "requiredMarks", headerName: "Required Marks", minWidth: 120, flex: 1 },
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
                {!isMobile ? <h1 className="text-xl font-bold">Schedule</h1> :
                    <Typography className="text-sm font-bold whitespace-nowrap">Schedule</Typography>}
                <NavigateNextOutlinedIcon fontSize="small" />
                <HomeOutlinedIcon fontSize="small" />
                <NavigateNextOutlinedIcon fontSize="small" />
                <Typography fontSize={"small"}>Teacher</Typography>
                <NavigateNextOutlinedIcon fontSize="small" />
                <Typography fontSize={"small"}>Exam Schedule</Typography>
            </div>

            <div className="bg-sky-100 py-4 dark:bg-sky-900 rounded-lg shadow">
                <div className="flex items-center justify-between">
                    {!isMobile && <Typography className="text-lg px-4">Exam Schedule</Typography>}

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
                    <AgGridReact<IExamSchedule>
                        rowData={rowData.filter(row =>
                            row.subject.toLowerCase().includes(searchText.toLowerCase()) ||
                            row.className.toLowerCase().includes(searchText.toLowerCase()) ||
                            row.roomNo.toLowerCase().includes(searchText.toLowerCase())
                        )}
                        columnDefs={columnDefs}
                        gridOptions={{ theme: myTheme }}
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

export default ExamSchedule;
