"use client";

import React, { useMemo, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-theme-quartz.css";
import NavigateNextOutlinedIcon from "@mui/icons-material/NavigateNextOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { Search, Plus, RefreshCw, Download, Edit, Trash2 } from "lucide-react";
import { Typography } from "@mui/joy";
import { useMediaQuery } from "@mui/material";

interface IHolidayRecord {
    holidayName: string;
    shift: string;
    date: string;
    holidayType: string;
    createdBy: string;
    creationDate: string;
    approvalStatus: string;
    details: string;
}

const Holidays = () => {
    const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);
    const isMobile = useMediaQuery('(max-width: 768px)');
    const [searchText, setSearchText] = useState("");

    const [rowData] = useState<IHolidayRecord[]>([
        { holidayName: "New Year", shift: "All Shifts", date: "12/31/2021", holidayType: "National", createdBy: "Admin", creationDate: "11/01/2021", approvalStatus: "Approved", details: "This festival is celebrate for." },
        { holidayName: "World Aids Day", shift: "Day Shifts", date: "12/10/2021", holidayType: "Awareness", createdBy: "Admin", creationDate: "11/01/2021", approvalStatus: "Approved", details: "This festival is celebrate for." },
        { holidayName: "World Milk Day", shift: "Night Shifts", date: "06/01/2021", holidayType: "Awareness", createdBy: "Admin", creationDate: "11/01/2021", approvalStatus: "Approved", details: "This festival is celebrate for." },
        { holidayName: "Diwali", shift: "All Shifts", date: "11/04/2021", holidayType: "Religious", createdBy: "Admin", creationDate: "11/01/2021", approvalStatus: "Approved", details: "This festival is celebrate for." },
        { holidayName: "Global Family Day", shift: "Night Shifts", date: "01/01/2021", holidayType: "Cultural", createdBy: "Admin", creationDate: "11/01/2021", approvalStatus: "Rejected", details: "This festival is celebrate for." },
        { holidayName: "Earth Hour", shift: "All Shifts", date: "03/27/2021", holidayType: "Environmental", createdBy: "Admin", creationDate: "11/01/2021", approvalStatus: "Approved", details: "This festival is celebrate for." },
        { holidayName: "World Book Day", shift: "All Shifts", date: "04/23/2021", holidayType: "Cultural", createdBy: "Admin", creationDate: "11/01/2021", approvalStatus: "Rejected", details: "This festival is celebrate for." },
        { holidayName: "International Yoga Day", shift: "Night Shifts", date: "06/21/2021", holidayType: "Health", createdBy: "Admin", creationDate: "11/01/2021", approvalStatus: "Approved", details: "This festival is celebrate for." },
        { holidayName: "Eid", shift: "Day Shifts", date: "04/11/2021", holidayType: "Religious", createdBy: "Admin", creationDate: "11/01/2021", approvalStatus: "Approved", details: "This festival is celebrate for." },
        { holidayName: "Holi", shift: "Night Shifts", date: "07/25/2021", holidayType: "Religious", createdBy: "Admin", creationDate: "11/01/2021", approvalStatus: "Approved", details: "This festival is celebrate for." },
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
        const colorClass = status === 'Approved' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700';
        return (
            <span className={`px-2 py-1 rounded text-xs font-medium ${colorClass}`}>{status}</span>
        );
    };

    const [columnDefs] = useState<any[]>([
        { checkboxSelection: true, headerCheckboxSelection: true, width: 80 },
        { field: "holidayName", headerName: "Holiday Name", width: 200 },
        { field: "shift", headerName: "Shift", width: 100 },
        { field: "date", headerName: "Date", width: 100 },
        { field: "holidayType", headerName: "Holiday Type", width: 130 },
        { field: "createdBy", headerName: "Created By", width: 130 },
        { field: "creationDate", headerName: "Creation Date", width: 120 },
        { field: "approvalStatus", headerName: "Approval Status", width: 150, cellRenderer: statusCellRenderer },
        { field: "details", headerName: "Details", width: 250 },
        { headerName: "Actions", width: 120, cellRenderer: actionCellRenderer },
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
                {!isMobile ? <h1 className="text-xl font-bold">All Holidays</h1> :
                    <Typography className="text-sm font-bold whitespace-nowrap">All Holidays</Typography>}
                <NavigateNextOutlinedIcon fontSize="small" />
                <HomeOutlinedIcon fontSize="small" />
                <NavigateNextOutlinedIcon fontSize="small" />
                <Typography fontSize={"small"}>HR</Typography>
                <NavigateNextOutlinedIcon fontSize="small" />
                <Typography fontSize={"small"}>All Holidays</Typography>
            </div>

            <div className="bg-sky-100 py-4 dark:bg-sky-900 rounded-lg shadow">
                <div className="flex items-center justify-between flex-wrap gap-2 px-4">
                    {!isMobile && <Typography className="text-lg">All Holidays</Typography>}

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
                    <AgGridReact<IHolidayRecord>
                        rowData={rowData.filter(row =>
                            row.holidayName.toLowerCase().includes(searchText.toLowerCase()) ||
                            row.shift.toLowerCase().includes(searchText.toLowerCase()) ||
                            row.holidayType.toLowerCase().includes(searchText.toLowerCase()) ||
                            row.approvalStatus.toLowerCase().includes(searchText.toLowerCase())
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

export default Holidays;
