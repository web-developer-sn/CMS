"use client";

import React, { useMemo, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-theme-quartz.css";
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { Search, Plus, RefreshCw, Download, Edit, Trash2, Phone } from "lucide-react";
import { Avatar, Typography } from "@mui/joy";
import { useMediaQuery } from "@mui/material";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
interface IAllTeachers {
    avatar: string;
    name: string;
    address: string;
    phone: string;
    email: string;
    gender: string;
    degree: string;
    hireDate: string;
    salary: string;
    department: string;
}

const AllTeachers = () => {
    const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);
    const isMobile = useMediaQuery('(max-width: 768px)');
    const [searchText, setSearchText] = useState("");

    // ✅ Correct JSON data according to your column definition
    const [rowData] = useState<IAllTeachers[]>([
        {
            avatar: "/avatars/avatar1.png",
            name: "Alice Johnson",
            department: "Computer Science",
            email: "alice.johnson@example.com",
            gender: "Female",
            phone: "+1234567890",
            degree: "PhD",
            address: "123 Main Street",
            hireDate: "2021-06-15",
            salary: "50000",
        },
        {
            avatar: "/avatars/avatar2.png",
            name: "David Smith",
            department: "Mathematics",
            email: "david.smith@example.com",
            gender: "Male",
            phone: "+1234567891",
            degree: "MSc",
            address: "456 Elm Street",
            hireDate: "2020-09-10",
            salary: "45000",
        },
        {
            avatar: "/avatars/avatar3.png",
            name: "Emma Brown",
            department: "Physics",
            email: "emma.brown@example.com",
            gender: "Female",
            phone: "+1234567892",
            degree: "MPhil",
            address: "789 Oak Avenue",
            hireDate: "2019-11-05",
            salary: "48000",
        },
        {
            avatar: "/avatars/avatar4.png",
            name: "Michael Lee",
            department: "Chemistry",
            email: "michael.lee@example.com",
            gender: "Male",
            phone: "+1234567893",
            degree: "PhD",
            address: "321 Pine Road",
            hireDate: "2018-01-20",
            salary: "52000",
        },
    ]);

    const avatarCellRenderer = (params: any) => (
        <div className="flex items-center space-x-2">
            <Avatar
                src={params.data.avatar}
                alt={params.value}
                size="sm"
                variant="soft"
            />
            <span className="text-sm">{params.value}</span>
        </div>
    );

    const phoneCellRenderer = (params: any) => (
        <div className="flex items-center space-x-1">
            <Phone size={14} className="text-green-500" />
            <span className="text-sm">{params.value}</span>
        </div>
    );
     const genderCellRenderer = (params: any) => {
        const gender = params.value;
        let bgColor = "";
        if (gender === "Male") bgColor = "bg-green-100 text-green-600";
        else if (gender === "Female") bgColor = "bg-purple-100 text-purple-600";
        return (
            <span className={`px-2 py-1 rounded text-xs ${bgColor}`}>
                {gender}
            </span>
        );
    };

      const addressCellRenderer = (params: any) => (
        <div className="flex items-center space-x-1">
            <span className="text-red-500"><LocationOnOutlinedIcon color="primary" fontSize="small"/></span>
            <span className="text-sm">{params.value}</span>
        </div>
    );

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

    const [columnDefs] = useState<any[]>([
        { checkboxSelection: true, headerCheckboxSelection: true, width: 50 },
        { field: "name", headerName: "Name", minWidth: 160, flex: 1, cellRenderer: avatarCellRenderer },
        { field: "department", headerName: "Department", minWidth: 140, flex: 1 },
        { field: "email", headerName: "Email", minWidth: 130, flex: 1 },
        { field: "gender", headerName: "Gender", minWidth: 130, flex: 1,cellRenderer: genderCellRenderer  },
        { field: "phone", headerName: "Contact Number", minWidth: 140, flex: 1, cellRenderer: phoneCellRenderer },
        { field: "degree", headerName: "Degree", minWidth: 100, flex: 1 },
        { field: "address", headerName: "Address", minWidth: 140, flex: 1 ,cellRenderer:addressCellRenderer},
        { field: "hireDate", headerName: "Hire Date", minWidth: 100, flex: 1 },
        { field: "salary", headerName: "Salary", minWidth: 140, flex: 1 },
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
                {!isMobile ? <h1 className="text-xl font-bold">All Teachers</h1> :
                    <Typography className="text-sm font-bold whitespace-nowrap">All Teachers</Typography>}
                <NavigateNextOutlinedIcon fontSize="small" />
                <HomeOutlinedIcon fontSize="small" />
                <NavigateNextOutlinedIcon fontSize="small" />
                <Typography fontSize={"small"}>Teacher</Typography>
                <NavigateNextOutlinedIcon fontSize="small" />
                <Typography fontSize={"small"}>All Teachers</Typography>
            </div>

            <div className="bg-sky-100 py-4 dark:bg-sky-900 rounded-lg shadow">
                <div className="flex items-center justify-between">
                    {!isMobile && <Typography className="text-lg px-4">All Teachers</Typography>}

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
                    <AgGridReact<IAllTeachers>
                        rowData={rowData.filter(row =>
                            row.name.toLowerCase().includes(searchText.toLowerCase()) ||
                            row.address.toLowerCase().includes(searchText.toLowerCase()) ||
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

export default AllTeachers;
