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

interface IVisitorsBook {
    avatar: string;
    name: string;
    visitorType: string;
    phone: string;
    email: string;
    visitDate: string;
    visitTime: string;
    perposeVisit: string;
    followUpDate: string;
    departmentVisited: string;
    campus: string;
    previousEducation: string;
}

const VisitorsBook = () => {
    const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);
    const isMobile = useMediaQuery('(max-width: 768px)');
    const [searchText, setSearchText] = useState("");

    const [rowData] = useState<IVisitorsBook[]>([
        {
            avatar: "/avatars/avatar1.png",
            name: "Alice Johnson",
            visitorType: "Michael Johnson",
            phone: "+1234567890",
            email: "alice.johnson@example.com",
            visitDate: "11/22/2024",
            visitTime: "Website",
            perposeVisit: "Closed",
            followUpDate: "11/29/2024",
            departmentVisited: "Emily Clark",
            campus: "Main Campus",
            previousEducation: "High School Diploma",
        },
        {
            avatar: "/avatars/avatar2.png",
            name: "David Smith",
            visitorType: "Laura Smith",
            phone: "+1234567891",
            email: "david.smith@example.com",
            visitDate: "11/21/2024",
            visitTime: "Referral",
            perposeVisit: "In Process",
            followUpDate: "11/30/2024",
            departmentVisited: "John Doe",
            campus: "North Campus",
            previousEducation: "High School Diploma",
        },
         {
            avatar: "/avatars/avatar1.png",
            name: "Alice Johnson",
            visitorType: "Michael Johnson",
            phone: "+1234567890",
            email: "alice.johnson@example.com",
            visitDate: "11/22/2024",
            visitTime: "Website",
            perposeVisit: "Closed",
            followUpDate: "11/29/2024",
            departmentVisited: "Emily Clark",
            campus: "Main Campus",
            previousEducation: "High School Diploma",
        },
        {
            avatar: "/avatars/avatar2.png",
            name: "David Smith",
            visitorType: "Laura Smith",
            phone: "+1234567891",
            email: "david.smith@example.com",
            visitDate: "11/21/2024",
            visitTime: "Referral",
            perposeVisit: "In Process",
            followUpDate: "11/30/2024",
            departmentVisited: "John Doe",
            campus: "North Campus",
            previousEducation: "High School Diploma",
        },
         {
            avatar: "/avatars/avatar1.png",
            name: "Alice Johnson",
            visitorType: "Michael Johnson",
            phone: "+1234567890",
            email: "alice.johnson@example.com",
            visitDate: "11/22/2024",
            visitTime: "Website",
            perposeVisit: "Closed",
            followUpDate: "11/29/2024",
            departmentVisited: "Emily Clark",
            campus: "Main Campus",
            previousEducation: "High School Diploma",
        },
        {
            avatar: "/avatars/avatar2.png",
            name: "David Smith",
            visitorType: "Laura Smith",
            phone: "+1234567891",
            email: "david.smith@example.com",
            visitDate: "11/21/2024",
            visitTime: "Referral",
            perposeVisit: "In Process",
            followUpDate: "11/30/2024",
            departmentVisited: "John Doe",
            campus: "North Campus",
            previousEducation: "High School Diploma",
        },
    ]);

    const perposeVisitCellRenderer = (params: any) => {
        const perposeVisit = params.value;
        let bgColor = "";
        if (perposeVisit === "New") bgColor = "bg-green-300 text-green-600";
        else if (perposeVisit === "In Process") bgColor = "bg-purple-300 text-purple-600";
        else if (perposeVisit === "Closed") bgColor = "bg-orange-300 text-orange-600";

        return (
            <span className={`px-2 py-1 rounded text-xs ${bgColor}`}>
                {perposeVisit}
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
        { field: "name", headerName: "Visitor Name", minWidth: 160, flex: 1, cellRenderer: avatarCellRenderer },
        { field: "visitDate", headerName: "Visit Date", minWidth: 130, flex: 1 },
        { field: "visitTime", headerName: "Visit Time", minWidth: 130, flex: 1 },
        { field: "perposeVisit", headerName: "Purpose of Visit", minWidth: 100, flex: 1 },
        { field: "phone", headerName: "Contact Number", minWidth: 140, flex: 1, cellRenderer: phoneCellRenderer },
        { field: "visitorType", headerName: "Visitor Type", minWidth: 140, flex: 1 },
        { field: "departmentVisited", headerName: "Department/Person Visited", minWidth: 140, flex: 1 },
        { headerName: "Actions", minWidth: 90, flex: 1, cellRenderer: actionCellRenderer },
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
                {!isMobile ? <h1 className="text-xl font-bold">Visitor Book</h1> :
                    <Typography className="text-sm font-bold whitespace-nowrap">Visitor Book</Typography>}
                <NavigateNextOutlinedIcon fontSize="small" />
                <HomeOutlinedIcon fontSize="small" />
                <NavigateNextOutlinedIcon fontSize="small" />
                <Typography fontSize={"small"}>Frount</Typography>
                <NavigateNextOutlinedIcon fontSize="small" />
                <Typography fontSize={"small"}>Visitor Book</Typography>
            </div>

            <div className="bg-sky-100 py-4 dark:bg-sky-900 rounded-lg shadow">
                {/* Toolbar */}
                <div className="flex items-center justify-between">
                    {!isMobile && <Typography className="text-lg px-4">Visitor Book</Typography>}

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
                    <AgGridReact<IVisitorsBook>
                        rowData={rowData.filter(row =>
                            row.name.toLowerCase().includes(searchText.toLowerCase()) ||
                            row.visitorType.toLowerCase().includes(searchText.toLowerCase()) ||
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

export default VisitorsBook;
