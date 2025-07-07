"use client";

import React, { useMemo, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-theme-quartz.css";
import NavigateNextOutlinedIcon from "@mui/icons-material/NavigateNextOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { Search, Plus, RefreshCw, Download, Edit, Trash2 } from "lucide-react";
import { Typography } from "@mui/joy";
import { useMediaQuery } from "@mui/material";

interface IRoomRecord {
    roomType: string;
    roomCategory: string;
    capacity: number;
    price: number;
    roomArea: number;
    condition: string;
    roomCode: string;
    createdDate: string;
    status: string;
    maxOccupants: number;
}

const RoomType = () => {
    const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);
    const isMobile = useMediaQuery('(max-width: 768px)');
    const [searchText, setSearchText] = useState("");

    const [rowData] = useState<IRoomRecord[]>([
        { roomType: "Single", roomCategory: "Regular", capacity: 1, price: 1000, roomArea: 200, condition: "Good", roomCode: "SGL", createdDate: "01/10/2024", status: "Active", maxOccupants: 1 },
        { roomType: "Double", roomCategory: "Economy", capacity: 2, price: 1500, roomArea: 250, condition: "Good", roomCode: "DBL", createdDate: "02/05/2024", status: "Active", maxOccupants: 2 },
        { roomType: "Triple", roomCategory: "Regular", capacity: 3, price: 1800, roomArea: 300, condition: "Needs Repair", roomCode: "TRL", createdDate: "03/15/2024", status: "Inactive", maxOccupants: 3 },
        { roomType: "Quad", roomCategory: "Premium", capacity: 4, price: 2200, roomArea: 400, condition: "Excellent", roomCode: "QD", createdDate: "04/10/2024", status: "Active", maxOccupants: 4 },
        { roomType: "Single", roomCategory: "VIP", capacity: 1, price: 2000, roomArea: 220, condition: "Good", roomCode: "SGL-VIP", createdDate: "05/01/2024", status: "Active", maxOccupants: 1 },
        { roomType: "Double", roomCategory: "Economy", capacity: 2, price: 1400, roomArea: 240, condition: "Good", roomCode: "DBL-ECO", createdDate: "06/18/2024", status: "Active", maxOccupants: 2 },
        { roomType: "Triple", roomCategory: "Standard", capacity: 3, price: 1700, roomArea: 280, condition: "Good", roomCode: "TRL-STND", createdDate: "07/02/2024", status: "Active", maxOccupants: 3 },
        { roomType: "Single", roomCategory: "Standard", capacity: 1, price: 1100, roomArea: 180, condition: "Good", roomCode: "SGL-STND", createdDate: "08/12/2024", status: "Active", maxOccupants: 1 },
        { roomType: "Double", roomCategory: "Premium", capacity: 2, price: 2500, roomArea: 300, condition: "Excellent", roomCode: "DBL-PRM", createdDate: "09/05/2024", status: "Active", maxOccupants: 2 },
        { roomType: "Quad", roomCategory: "Economy", capacity: 4, price: 1800, roomArea: 350, condition: "Good", roomCode: "QD-ECO", createdDate: "10/01/2024", status: "Active", maxOccupants: 4 },
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
        { checkboxSelection: true, headerCheckboxSelection: true, width: 70 },
        { field: "roomType", headerName: "Room Type", width: 120 },
        { field: "roomCategory", headerName: "Room Category", width: 140 },
        { field: "capacity", headerName: "Capacity", width: 100 },
        { field: "price", headerName: "Price", width: 100 },
        { field: "roomArea", headerName: "Room Area", width: 120 },
        { field: "condition", headerName: "Condition", width: 120 },
        { field: "roomCode", headerName: "Room Code", width: 120 },
        { field: "createdDate", headerName: "Created Date", width: 120 },
        { field: "status", headerName: "Status", width: 120, cellRenderer: statusCellRenderer },
        { field: "maxOccupants", headerName: "Max Occupants", width: 130 },
        { headerName: "Actions", width: 100, cellRenderer: actionCellRenderer },
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
                {!isMobile ? <h1 className="text-xl font-bold">Room Type</h1> :
                    <Typography className="text-sm font-bold whitespace-nowrap">Room Type</Typography>}
                <NavigateNextOutlinedIcon fontSize="small" />
                <HomeOutlinedIcon fontSize="small" />
                <NavigateNextOutlinedIcon fontSize="small" />
                <Typography fontSize={"small"}>Hostel</Typography>
                <NavigateNextOutlinedIcon fontSize="small" />
                <Typography fontSize={"small"}>Room Type</Typography>
            </div>

            <div className="bg-sky-100 py-4 dark:bg-sky-900 rounded-lg shadow">
                <div className="flex items-center justify-between flex-wrap gap-2 px-4">
                    {!isMobile && <Typography className="text-lg">Room Type</Typography>}

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
                    <AgGridReact<IRoomRecord>
                        rowData={rowData.filter(row =>
                            row.roomType.toLowerCase().includes(searchText.toLowerCase()) ||
                            row.roomCategory.toLowerCase().includes(searchText.toLowerCase()) ||
                            row.condition.toLowerCase().includes(searchText.toLowerCase()) ||
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

export default RoomType;
