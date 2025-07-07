"use client";

import React, { useMemo, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-theme-quartz.css";
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { Search, Plus, RefreshCw, Download, Edit, Trash2, Phone, Mail } from "lucide-react";
import { Avatar, Typography } from "@mui/joy";
import { useMediaQuery } from "@mui/material";

const AllDepartment = () => {
    const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);
    const isMobile = useMediaQuery('(max-width: 768px)');
    const [searchText, setSearchText] = useState("");

    const [rowData] = useState([
        { department: "mechanical", head: "Pooja Sarma", phone: "(123)456789", email: "test@example.com", capacity: 125, year: 1985, faculty: 30, avatar: "/avatars/avatar1.png" },
        { department: "civil", head: "Sanjay Chohan", phone: "(123)456789", email: "test@example.com", capacity: 300, year: 1989, faculty: 25, avatar: "/avatars/avatar2.png" },
        { department: "science", head: "Sarah Smith", phone: "(123)456789", email: "test@example.com", capacity: 100, year: 2014, faculty: 15, avatar: "/avatars/avatar3.png" },
        { department: "mathematics", head: "Ashton Cox", phone: "(123)456789", email: "test@example.com", capacity: 300, year: 2001, faculty: 20, avatar: "/avatars/avatar4.png" },
        { department: "computer", head: "Rajesh Malhotra", phone: "(123)456789", email: "test@example.com", capacity: 250, year: 1999, faculty: 18, avatar: "/avatars/avatar5.png" },
        { department: "civil", head: "Sanjana Patil", phone: "(123)456789", email: "test@example.com", capacity: 200, year: 1989, faculty: 25, avatar: "/avatars/avatar6.png" },
        { department: "automobile", head: "Airi Satou", phone: "(123)456789", email: "test@example.com", capacity: 125, year: 1998, faculty: 10, avatar: "/avatars/avatar7.png" },
        { department: "civil", head: "Pooja Sarma", phone: "(123)456789", email: "test@example.com", capacity: 130, year: 2001, faculty: 20, avatar: "/avatars/avatar1.png" },
        { department: "mathematics", head: "Sarah Smith", phone: "(123)456789", email: "test@example.com", capacity: 100, year: 2009, faculty: 15, avatar: "/avatars/avatar3.png" },
        { department: "management", head: "Rajesh Malhotra", phone: "(123)456789", email: "test@example.com", capacity: 125, year: 1989, faculty: 12, avatar: "/avatars/avatar5.png" }
    ]);

    const headCellRenderer = (params: any) => (
        <div className="flex items-center space-x-2">
            <Avatar src={params.data.avatar} alt={params.value} size="sm" variant="soft" />
            <span className="text-sm">{params.value}</span>
        </div>
    );

    const phoneCellRenderer = (params: any) => (
        <div className="flex items-center space-x-1 text-sm">
            <Phone size={14} className="text-green-500" />
            <span>{params.value}</span>
        </div>
    );

    const emailCellRenderer = (params: any) => (
        <div className="flex items-center space-x-1 text-sm">
            <Mail className="text-red-500" size={14} />
            <span>{params.value}</span>
        </div>
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
        { field: "department", headerName: "Department Name", minWidth: 140, flex: 1.5 },
        { field: "head", headerName: "Head of Department", minWidth: 180, flex: 2, cellRenderer: headCellRenderer },
        { field: "phone", headerName: "Phone", minWidth: 140, flex: 1.5, cellRenderer: phoneCellRenderer },
        { field: "email", headerName: "Email", minWidth: 200, flex: 2, cellRenderer: emailCellRenderer },
        { field: "capacity", headerName: "Student Capacity", minWidth: 130, flex: 1.2 },
        { field: "year", headerName: "Established Year", minWidth: 130, flex: 1.2 },
        { field: "faculty", headerName: "Total Faculty", minWidth: 110, flex: 1 },
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
                {!isMobile ? <h1 className="text-xl font-bold">All Department</h1> :
                    <Typography className="text-sm font-bold whitespace-nowrap">All Department</Typography>}
                <NavigateNextOutlinedIcon fontSize="small" />
                <HomeOutlinedIcon fontSize="small" />
                <NavigateNextOutlinedIcon fontSize="small" />
                <Typography fontSize={"small"}>Department</Typography>
                <NavigateNextOutlinedIcon fontSize="small" />
                <Typography fontSize={"small"}>All Department</Typography>
            </div>

            <div className="bg-sky-100 py-4 dark:bg-sky-900 rounded-lg shadow">
                <div className="flex items-center justify-between flex-wrap gap-2 px-4">
                    {!isMobile && <Typography className="text-lg">Departments</Typography>}

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
                            row.department.toLowerCase().includes(searchText.toLowerCase()) ||
                            row.head.toLowerCase().includes(searchText.toLowerCase()) ||
                            row.phone.includes(searchText) ||
                            row.email.toLowerCase().includes(searchText.toLowerCase())
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

export default AllDepartment;
