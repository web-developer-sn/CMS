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
    roomNumber: string;
    roomType: string;
    floor: number;
    capacity: number;
    status: string;
    occupants: number;
    price: string;
    condition: string;
    assignedDate?: string;
    checkIn?: string;
    block: string;
}

const RoomList = () => {
    const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);
    const isMobile = useMediaQuery('(max-width: 768px)');
    const [searchText, setSearchText] = useState("");

    const [rowData] = useState<IRoomRecord[]>([
        { roomNumber: "101", roomType: "Single", floor: 1, capacity: 1, status: "Occupied", occupants: 1, price: "1000", condition: "Good", assignedDate: "08/01/2024", checkIn: "08/01/2024", block: "A Block" },
        { roomNumber: "102", roomType: "Double", floor: 1, capacity: 2, status: "Occupied", occupants: 2, price: "1500", condition: "Good", assignedDate: "08/01/2024", checkIn: "08/01/2024", block: "A Block" },
        { roomNumber: "103", roomType: "Triple", floor: 1, capacity: 3, status: "Vacant", occupants: 0, price: "1800", condition: "Needs Repair", block: "B Block" },
        { roomNumber: "104", roomType: "Single", floor: 2, capacity: 1, status: "Occupied", occupants: 1, price: "1000", condition: "Good", assignedDate: "08/10/2024", checkIn: "08/10/2024", block: "C Block" },
        { roomNumber: "105", roomType: "Double", floor: 2, capacity: 2, status: "Occupied", occupants: 2, price: "1200", condition: "Good", assignedDate: "09/01/2024", checkIn: "09/01/2024", block: "C Block" },
        { roomNumber: "106", roomType: "Triple", floor: 2, capacity: 3, status: "Vacant", occupants: 0, price: "1500", condition: "Good", block: "D Block" },
        { roomNumber: "107", roomType: "Single", floor: 3, capacity: 1, status: "Occupied", occupants: 1, price: "1100", condition: "Good", assignedDate: "07/15/2024", checkIn: "07/15/2024", block: "E Block" },
        { roomNumber: "108", roomType: "Double", floor: 3, capacity: 2, status: "Vacant", occupants: 0, price: "1400", condition: "Needs Repair", block: "F Block" },
        { roomNumber: "109", roomType: "Single", floor: 3, capacity: 1, status: "Occupied", occupants: 1, price: "1000", condition: "Good", assignedDate: "07/20/2024", checkIn: "07/20/2024", block: "A Block" },
        { roomNumber: "110", roomType: "Double", floor: 4, capacity: 2, status: "Occupied", occupants: 2, price: "1300", condition: "Good", assignedDate: "08/15/2024", checkIn: "08/15/2024", block: "B Block" },
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
        const colorClass = status === 'Occupied' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700';
        return (
            <span className={`px-2 py-1 rounded text-xs font-medium ${colorClass}`}>{status}</span>
        );
    };

    const [columnDefs] = useState<any[]>([
        { checkboxSelection: true, headerCheckboxSelection: true, width: 70 },
        { field: "roomNumber", headerName: "Room No", width: 130 },
        { field: "roomType", headerName: "Room Type", width: 100 },
        { field: "floor", headerName: "Floor", width: 80 },
        { field: "capacity", headerName: "Capacity", width: 110 },
        { field: "status", headerName: "Status", width: 110, cellRenderer: statusCellRenderer },
        { field: "occupants", headerName: "Occupants", width: 100 },
        { field: "price", headerName: "Price", width: 80 },
        { field: "condition", headerName: "Condition", width: 130 },
        { field: "assignedDate", headerName: "Assigned Date", width: 120 },
        { field: "checkIn", headerName: "Check In", width: 110 },
        { field: "block", headerName: "Block", width: 110 },
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
                {!isMobile ? <h1 className="text-xl font-bold">Room List</h1> :
                    <Typography className="text-sm font-bold whitespace-nowrap">Room List</Typography>}
                <NavigateNextOutlinedIcon fontSize="small" />
                <HomeOutlinedIcon fontSize="small" />
                <NavigateNextOutlinedIcon fontSize="small" />
                <Typography fontSize={"small"}>Hostel</Typography>
                <NavigateNextOutlinedIcon fontSize="small" />
                <Typography fontSize={"small"}>Room List</Typography>
            </div>

            <div className="bg-sky-100 py-4 dark:bg-sky-900 rounded-lg shadow">
                <div className="flex items-center justify-between flex-wrap gap-2 px-4">
                    {!isMobile && <Typography className="text-lg">Room List</Typography>}

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
                    '--ag-background-color': '#FFFFFF',
                    '--ag-foreground-color': 'rgb(51, 51, 51)',
                    '--ag-odd-row-background-color': 'rgba(0, 0, 0, 0.03)',
                    '--ag-header-column-resize-handle-color': 'rgb(150, 150, 150)',
                    '--ag-cell-horizontal-padding': '8px',
                } as React.CSSProperties}>
                    <AgGridReact<IRoomRecord>
                        rowData={rowData.filter(row =>
                            row.roomNumber.toLowerCase().includes(searchText.toLowerCase()) ||
                            row.roomType.toLowerCase().includes(searchText.toLowerCase()) ||
                            row.status.toLowerCase().includes(searchText.toLowerCase()) ||
                            row.condition.toLowerCase().includes(searchText.toLowerCase()) ||
                            row.block.toLowerCase().includes(searchText.toLowerCase())
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

export default RoomList;
