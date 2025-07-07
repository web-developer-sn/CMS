"use client";

import React, { useMemo, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-theme-quartz.css";
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import {
    AllCommunityModule,
    ColDef,
    iconSetQuartzLight,
    ModuleRegistry,
    themeQuartz,
} from "ag-grid-community";
import { Search, Plus, RefreshCw, Download, Edit, Trash2, Phone } from "lucide-react";
import { Avatar, Typography } from "@mui/joy";
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

interface IComplaints {
    avatar: string;
    name: string;
    guardian: string;
    phone: string;
    email: string;
    inquiryDate: string;
    source: string;
    status: string;
    priority:string;
    followUpDate: string;
    assignedTo: string;
    campus: string;
    previousEducation: string;
}

const Complaints = () => {
    const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);
    const isMobile = useMediaQuery('(max-width: 768px)');
    const [searchText, setSearchText] = useState("");

    const [rowData] = useState<IComplaints[]>([
        {
            avatar: "/avatars/avatar1.png",
            name: "Alice Johnson",
            guardian: "Michael Johnson",
            phone: "+1234567890",
            email: "alice.johnson@example.com",
            inquiryDate: "11/22/2024",
            source: "Website",
            status: "Closed",
            priority :"High",
            followUpDate: "11/29/2024",
            assignedTo: "Emily Clark",
            campus: "Main Campus",
            previousEducation: "High School Diploma",
        },
        {
            avatar: "/avatars/avatar2.png",
            name: "David Smith",
            guardian: "Laura Smith",
            phone: "+1234567891",
            email: "david.smith@example.com",
            inquiryDate: "11/21/2024",
            source: "Referral",
            status: "In Process",
             priority :"Low",
            followUpDate: "11/30/2024",
            assignedTo: "John Doe",
            campus: "North Campus",
            previousEducation: "High School Diploma",
        },
         {
            avatar: "/avatars/avatar2.png",
            name: "David Smith",
            guardian: "Laura Smith",
            phone: "+1234567891",
            email: "david.smith@example.com",
            inquiryDate: "11/21/2024",
            source: "Referral",
            status: "New",
             priority :"Medium",
            followUpDate: "11/30/2024",
            assignedTo: "John Doe",
            campus: "North Campus",
            previousEducation: "High School Diploma",
        }
        
     
    ]);

    const statusCellRenderer = (params: any) => {
        const status = params.value;
        let bgColor = "";
        if (status === "New") bgColor = "bg-green-100 text-green-600";
        else if (status === "In Process") bgColor = "bg-purple-100 text-purple-600";
        else if (status === "Closed") bgColor = "bg-orange-100 text-orange-600";

        return (
            <span className={`px-2 py-1 rounded text-xs ${bgColor}`}>
                {status}
            </span>
        );
    };
     const priorityCellRenderer = (params: any) => {
        const priority  = params.value;
        let bgColor = "";
        if (priority  === "Low") bgColor = "bg-green-100 text-green-600";
        else if (priority  === "Medium") bgColor = "bg-purple-100 text-purple-600";
        else if (priority  === "High") bgColor = "bg-orange-100 text-orange-600";

        return (
            <span className={`px-2 py-1 rounded text-xs ${bgColor}`}>
                {priority }
            </span>
        );
    };

    const avatarCellRenderer = (params: any) => {
        return (
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
    };

    const phoneCellRenderer = (params: any) => (
        <div className="flex items-center space-x-1">
            <Phone size={14} className="text-green-500" />
            <span className="text-sm">{params.value}</span>
        </div>
    );

    const emailCellRenderer = (params: any) => (
        <div className="flex items-center space-x-1">
            <span className="text-red-500">✉</span>
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

    const [columnDefs] = useState<ColDef[]>([
        { checkboxSelection: true, headerCheckboxSelection: true, width: 50 },
             { field: "name", headerName: "Com. ID", minWidth: 140, flex: 1},
        { field: "name", headerName: "Complaint Name", minWidth: 160, flex: 1, cellRenderer: avatarCellRenderer },
        { field: "guardian", headerName: "Complaint Type", minWidth: 140, flex: 1, hide: isMobile },
        { field: "phone", headerName: "Complaint Date", minWidth: 140, flex: 1, cellRenderer: phoneCellRenderer },
        { field: "email", headerName: "Complaint Time", minWidth: 200, flex: 1, cellRenderer: emailCellRenderer , hide: isMobile},
        { field: "inquiryDate", headerName: "Complaint Description", minWidth: 130, flex: 1 , hide: isMobile},
        { field: "status", headerName: "Status", minWidth: 100, flex: 1, cellRenderer: statusCellRenderer },
        { field: "source", headerName: "Department", minWidth: 130, flex: 1, hide: isMobile },
        { field: "followUpDate", headerName: "Assigned To", minWidth: 130, flex: 1, hide: isMobile },
        { field: "assignedTo", headerName: "Resolution Date", minWidth: 140, flex: 1, hide: isMobile },
        { field: "priority", headerName: "Priority Leve", minWidth: 140, flex: 1, hide: isMobile,cellRenderer:priorityCellRenderer },
        { headerName: "Actions", minWidth: 90, flex: 1, cellRenderer: actionCellRenderer, hide: isMobile },
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
                {!isMobile ? <h1 className="text-xl font-bold">Complaints</h1> :
                    <Typography className="text-sm font-bold whitespace-nowrap">Complaints</Typography>}
                <NavigateNextOutlinedIcon fontSize="small" />
                <HomeOutlinedIcon fontSize="small" />
                <NavigateNextOutlinedIcon fontSize="small" />
                <Typography fontSize={"small"}>Frount</Typography>
                <NavigateNextOutlinedIcon fontSize="small" />
                <Typography fontSize={"small"}>Complaints</Typography>
            </div>

            <div className="bg-sky-100 py-4 dark:bg-sky-900 rounded-lg shadow">
                {/* Toolbar */}
                <div className="flex items-center justify-between">
                    {!isMobile && <Typography className="text-lg px-4">Complaints</Typography>}

                    <div className="flex items-center space-x-2">
                        <div className="relative pl-1 pb-1">
                            <Search className="absolute left-2 top-2  text-gray-400" size={16} />
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

                {/* AG Grid */}
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
                    <AgGridReact<IComplaints>
                        rowData={rowData.filter(row =>
                            row.name.toLowerCase().includes(searchText.toLowerCase()) ||
                            row.guardian.toLowerCase().includes(searchText.toLowerCase()) ||
                            row.phone.includes(searchText) ||
                            row.email.toLowerCase().includes(searchText.toLowerCase())
                        )}
                        columnDefs={columnDefs}

                        gridOptions={{
                            theme: myTheme
                        }}
                        defaultColDef={defaultColDef}
                        animateRows={true}
                        pagination={true}
                        rowSelection="multiple"
                        getRowHeight={() => 35}
                    //  domLayout="autoHeight"
                    />
                </div>
            </div>
        </div>
    );
};

export default Complaints;
