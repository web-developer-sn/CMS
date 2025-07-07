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

interface IStaff {
    name: string;
    avatar: string;
    department: string;
    role: string;
    mobile: string;
    email: string;
    address: string;
    status: string;
    joiningDate: string;
    gender: string;
}

const AllStaff = () => {
    const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);
    const isMobile = useMediaQuery('(max-width: 768px)');
    const [searchText, setSearchText] = useState("");

    const [rowData] = useState<IStaff[]>([
        { name: "Bertie Jones", avatar: "/avatars/avatar1.png", department: "Maintenance", role: "General maintenance", mobile: "1234567890", email: "test@email.com", address: "11, Shyam appt.", status: "Active", joiningDate: "02/25/2018", gender: "Male" },
        { name: "Sarah Smith", avatar: "/avatars/avatar2.png", department: "Administration", role: "Clerk", mobile: "1234567890", email: "test@email.com", address: "22, tilak appt.", status: "Active", joiningDate: "02/12/2018", gender: "Female" },
        { name: "Bethaney Spencer", avatar: "/avatars/avatar3.png", department: "Library", role: "Librarian", mobile: "1234567890", email: "test@email.com", address: "201, Shyamal, Pushpak", status: "Active", joiningDate: "02/25/2018", gender: "Female" },
        { name: "Jay Soni", avatar: "/avatars/avatar4.png", department: "Administration", role: "Clerk", mobile: "1234567890", email: "test@email.com", address: "11, Shyam appt.", status: "Active", joiningDate: "02/25/2018", gender: "Male" },
        { name: "Pam Abbott", avatar: "/avatars/avatar5.png", department: "Procurement", role: "Purchase Officer", mobile: "1234567890", email: "test@email.com", address: "11, Shyam appt.", status: "Active", joiningDate: "02/25/2018", gender: "Female" },
        { name: "Wesley Casey", avatar: "/avatars/avatar6.png", department: "Administration", role: "Receptionist", mobile: "1234567890", email: "test@email.com", address: "11, Shyam appt.", status: "Active", joiningDate: "02/25/2018", gender: "Male" },
        { name: "Ivan Bell", avatar: "/avatars/avatar7.png", department: "Administration", role: "Clerk", mobile: "1234567890", email: "test@email.com", address: "11, Shyam appt.", status: "Active", joiningDate: "02/25/2018", gender: "Male" },
        { name: "Jay Soni", avatar: "/avatars/avatar8.png", department: "Teaching", role: "Teacher", mobile: "1234567890", email: "test@email.com", address: "11, Shyam appt.", status: "Active", joiningDate: "02/25/2018", gender: "Male" },
        { name: "Robin Graves", avatar: "/avatars/avatar9.png", department: "Transportation", role: "Driver", mobile: "1234567890", email: "test@email.com", address: "11, Shyam appt.", status: "Active", joiningDate: "02/25/2018", gender: "Male" },
        { name: "Elsie Cruz", avatar: "/avatars/avatar10.png", department: "Administration", role: "Clerk", mobile: "1234567890", email: "test@email.com", address: "11, Shyam appt.", status: "Active", joiningDate: "02/25/2018", gender: "Female" },
    ]);

    const nameCellRenderer = (params: any) => (
        <div className="flex items-center space-x-2">
            <Avatar src={params.data.avatar} alt={params.value} size="sm" variant="soft" />
            <span className="text-sm">{params.value}</span>
        </div>
    );

    const mobileCellRenderer = (params: any) => (
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

    const addressCellRenderer = (params: any) => (
        <div className="flex items-center space-x-1 text-sm">
            <LocationOnOutlinedIcon className="text-blue-500" fontSize="small" />
            <span>{params.value}</span>
        </div>
    );

    const genderCellRenderer = (params: any) => {
        const gender = params.value;
        const color = gender === "Male" ? "bg-green-100 text-green-600" : "bg-purple-100 text-purple-600";
        return <span className={`px-2 py-1 rounded text-xs ${color}`}>{gender}</span>;
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

    const [columnDefs] = useState<any[]>([
        { checkboxSelection: true, headerCheckboxSelection: true, width: 40 },
        { field: "name", headerName: "Name", minWidth: 150, flex: 1, cellRenderer: nameCellRenderer },
        { field: "department", headerName: "Department", minWidth: 120, flex: 1 },
        { field: "role", headerName: "Role", minWidth: 140, flex: 1 },
        { field: "mobile", headerName: "Mobile", minWidth: 130, flex: 1, cellRenderer: mobileCellRenderer },
        { field: "email", headerName: "Email", minWidth: 180, flex: 1, cellRenderer: emailCellRenderer },
        { field: "address", headerName: "Address", minWidth: 180, flex: 1, cellRenderer: addressCellRenderer },
        { field: "status", headerName: "Status", minWidth: 80, flex: 1 },
        { field: "joiningDate", headerName: "Joining Date", minWidth: 120, flex: 1 },
        { field: "gender", headerName: "Gender", minWidth: 100, flex: 1, cellRenderer: genderCellRenderer },
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
                {!isMobile ? <h1 className="text-xl font-bold">All Staff</h1> :
                    <Typography className="text-sm font-bold whitespace-nowrap">All Staff</Typography>}
                <NavigateNextOutlinedIcon fontSize="small" />
                <HomeOutlinedIcon fontSize="small" />
                <NavigateNextOutlinedIcon fontSize="small" />
                <Typography fontSize={"small"}>Staff</Typography>
                <NavigateNextOutlinedIcon fontSize="small" />
                <Typography fontSize={"small"}>All Staff</Typography>
            </div>

            <div className="bg-sky-100 py-4 dark:bg-sky-900 rounded-lg shadow">
                <div className="flex items-center justify-between flex-wrap gap-2 px-4">
                    {!isMobile && <Typography className="text-lg">All Staffs</Typography>}

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
                    <AgGridReact<IStaff>
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
                        paginationPageSize={10}
                        rowSelection="multiple"
                        getRowHeight={() => 35}
                    />
                </div>
            </div>
        </div>
    );
};

export default AllStaff;
