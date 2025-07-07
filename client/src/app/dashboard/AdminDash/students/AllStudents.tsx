"use client";

import React, { useMemo, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-theme-quartz.css";
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { Search, Plus, RefreshCw, Download, Edit, Trash2, Phone, Mail } from "lucide-react";
import { Avatar, Typography } from "@mui/joy";
import { useMediaQuery } from "@mui/material";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

interface IStudent {
    rollNo: number;
    avatar: string;
    name: string;
    email: string;
    gender: string;
    mobile: string;
    department: string;
    dob: string;
    address: string;
    parentMobile: string;
    profileStatus: string;
}

const AllStudents = () => {
    const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);
    const isMobile = useMediaQuery('(max-width: 768px)');
    const [searchText, setSearchText] = useState("");

    const [rowData] = useState<IStudent[]>([
        { rollNo: 1, avatar: "/avatars/avatar1.png", name: "John Deo", email: "test@email.com", gender: "male", mobile: "1234567890", department: "mathematics", dob: "06/15/2005", address: "123 Main St", parentMobile: "0987654321", profileStatus: "complete" },
        { rollNo: 2, avatar: "/avatars/avatar2.png", name: "Sarah Smith", email: "test@email.com", gender: "female", mobile: "1234567891", department: "civil", dob: "08/20/2005", address: "456 Elm St", parentMobile: "0987654322", profileStatus: "complete" },
        { rollNo: 3, avatar: "/avatars/avatar3.png", name: "John Deo", email: "test@email.com", gender: "male", mobile: "1234567892", department: "computer", dob: "04/15/2005", address: "789 Pine St", parentMobile: "0987654323", profileStatus: "complete" },
        { rollNo: 4, avatar: "/avatars/avatar4.png", name: "Jay Soni", email: "test@email.com", gender: "female", mobile: "1234567893", department: "civil", dob: "05/10/2005", address: "321 Oak St", parentMobile: "0987654324", profileStatus: "incomplete" },
        { rollNo: 5, avatar: "/avatars/avatar5.png", name: "Smita Parikh", email: "test@email.com", gender: "male", mobile: "1234567894", department: "science", dob: "03/30/2005", address: "654 Maple St", parentMobile: "0987654325", profileStatus: "complete" },
        { rollNo: 6, avatar: "/avatars/avatar6.png", name: "Pankaj Singh", email: "test@email.com", gender: "male", mobile: "1234567895", department: "computer", dob: "02/12/2005", address: "159 Cedar St", parentMobile: "0987654326", profileStatus: "complete" },
        { rollNo: 7, avatar: "/avatars/avatar7.png", name: "Pankaj Singh", email: "test@email.com", gender: "male", mobile: "1234567896", department: "computer", dob: "11/21/2005", address: "852 Birch St", parentMobile: "0987654327", profileStatus: "complete" },
        { rollNo: 8, avatar: "/avatars/avatar8.png", name: "Jay Soni", email: "test@email.com", gender: "female", mobile: "1234567897", department: "civil", dob: "07/18/2005", address: "147 Spruce St", parentMobile: "0987654328", profileStatus: "complete" },
        { rollNo: 9, avatar: "/avatars/avatar9.png", name: "Smita Parikh", email: "test@email.com", gender: "female", mobile: "1234567898", department: "mathematics", dob: "09/25/2005", address: "258 Fir St", parentMobile: "0987654329", profileStatus: "complete" },
    ]);

    const nameCellRenderer = (params: any) => (
        <div className="flex items-center space-x-2">
            <Avatar src={params.data.avatar} alt={params.value} size="sm" variant="soft" />
            <span className="text-sm">{params.value}</span>
        </div>
    );

    const emailCellRenderer = (params: any) => (
        <div className="flex items-center space-x-1 text-sm">
            <Mail className="text-red-500" size={14} />
            <span>{params.value}</span>
        </div>
    );

    const genderCellRenderer = (params: any) => {
        const gender = params.value;
        const color = gender === "male" ? "bg-green-100 text-green-600" : "bg-purple-100 text-purple-600";
        return (
            <span className={`px-2 py-1 rounded text-xs ${color}`}>{gender}</span>
        );
    };

    const mobileCellRenderer = (params: any) => (
        <div className="flex items-center space-x-1 text-sm">
            <Phone size={14} className="text-green-500" />
            <span>{params.value}</span>
        </div>
    );

    const addressCellRenderer = (params: any) => (
        <div className="flex items-center space-x-1 text-sm">
            <LocationOnOutlinedIcon className="text-blue-500" fontSize="small" />
            <span>{params.value}</span>
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
        { checkboxSelection: true, headerCheckboxSelection: true, width: 40 },
        { field: "rollNo", headerName: "Roll No", minWidth: 70, flex: 1 },
        { field: "name", headerName: "Name", minWidth: 160, flex: 1, cellRenderer: nameCellRenderer },
        { field: "email", headerName: "Email", minWidth: 180, flex: 1, cellRenderer: emailCellRenderer },
        { field: "gender", headerName: "Gender", minWidth: 100, flex: 1, cellRenderer: genderCellRenderer },
        { field: "mobile", headerName: "Mobile", minWidth: 140, flex: 1, cellRenderer: mobileCellRenderer },
        { field: "department", headerName: "Department", minWidth: 120, flex: 1 },
        { field: "dob", headerName: "Date of Birth", minWidth: 110, flex: 1 },
        { field: "address", headerName: "Address", minWidth: 140, flex: 1, cellRenderer: addressCellRenderer },
        { field: "parentMobile", headerName: "Parent/Guardian Mobile", minWidth: 140, flex: 1 },
        { field: "profileStatus", headerName: "Profile Completion", minWidth: 100, flex: 1 },
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
                {!isMobile ? <h1 className="text-xl font-bold">All Students</h1> :
                    <Typography className="text-sm font-bold whitespace-nowrap">All Students</Typography>}
                <NavigateNextOutlinedIcon fontSize="small" />
                <HomeOutlinedIcon fontSize="small" />
                <NavigateNextOutlinedIcon fontSize="small" />
                <Typography fontSize={"small"}>Student</Typography>
                <NavigateNextOutlinedIcon fontSize="small" />
                <Typography fontSize={"small"}>All Students</Typography>
            </div>

            <div className="bg-sky-100 py-4 dark:bg-sky-900 rounded-lg shadow">
                <div className="flex items-center justify-between flex-wrap gap-2 px-4">
                    {!isMobile && <Typography className="text-lg">All Students</Typography>}

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
                    <AgGridReact<IStudent>
                        rowData={rowData.filter(row =>
                            row.name.toLowerCase().includes(searchText.toLowerCase()) ||
                            row.address.toLowerCase().includes(searchText.toLowerCase()) ||
                            row.mobile.includes(searchText) ||
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

export default AllStudents;
