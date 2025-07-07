"use client";

import React, { useMemo, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-theme-quartz.css";
import NavigateNextOutlinedIcon from "@mui/icons-material/NavigateNextOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { Search, Plus, RefreshCw, Download, Edit, Trash2 } from "lucide-react";
import { Typography, Avatar } from "@mui/joy";
import { useMediaQuery } from "@mui/material";

interface IEmployeeLeaveRecord {
    employeeName: string;
    previousBalance: number;
    currentBalance: number;
    totalBalance: number;
    usedLeave: number;
    acceptedLeave: number;
    rejectedLeave: number;
    expiredLeave: number;
    carryOverBalance: number;
}

const EmployeeLeaveBalance = () => {
    const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);
    const isMobile = useMediaQuery('(max-width: 768px)');
    const [searchText, setSearchText] = useState("");

    const [rowData] = useState<IEmployeeLeaveRecord[]>([
        { employeeName: "John Deo", previousBalance: 10, currentBalance: 15, totalBalance: 25, usedLeave: 15, acceptedLeave: 10, rejectedLeave: 2, expiredLeave: 5, carryOverBalance: 5 },
        { employeeName: "Sarah Smith", previousBalance: 10, currentBalance: 15, totalBalance: 25, usedLeave: 15, acceptedLeave: 10, rejectedLeave: 2, expiredLeave: 5, carryOverBalance: 5 },
        { employeeName: "Edna Gilbert", previousBalance: 10, currentBalance: 15, totalBalance: 25, usedLeave: 15, acceptedLeave: 10, rejectedLeave: 2, expiredLeave: 5, carryOverBalance: 5 },
        { employeeName: "Shelia Osterberg", previousBalance: 10, currentBalance: 15, totalBalance: 25, usedLeave: 15, acceptedLeave: 10, rejectedLeave: 2, expiredLeave: 5, carryOverBalance: 5 },
        { employeeName: "Barbara Garland", previousBalance: 10, currentBalance: 15, totalBalance: 25, usedLeave: 15, acceptedLeave: 10, rejectedLeave: 2, expiredLeave: 5, carryOverBalance: 5 },
        { employeeName: "Sarah Smith", previousBalance: 10, currentBalance: 15, totalBalance: 25, usedLeave: 15, acceptedLeave: 10, rejectedLeave: 2, expiredLeave: 5, carryOverBalance: 5 },
        { employeeName: "Marie Brodsky", previousBalance: 10, currentBalance: 15, totalBalance: 25, usedLeave: 15, acceptedLeave: 10, rejectedLeave: 2, expiredLeave: 5, carryOverBalance: 5 },
        { employeeName: "Kara Thompson", previousBalance: 10, currentBalance: 15, totalBalance: 25, usedLeave: 15, acceptedLeave: 10, rejectedLeave: 2, expiredLeave: 5, carryOverBalance: 5 },
        { employeeName: "Joseph Nye", previousBalance: 10, currentBalance: 15, totalBalance: 25, usedLeave: 15, acceptedLeave: 10, rejectedLeave: 2, expiredLeave: 5, carryOverBalance: 5 },
        { employeeName: "Ricardo Wendler", previousBalance: 10, currentBalance: 15, totalBalance: 25, usedLeave: 15, acceptedLeave: 10, rejectedLeave: 2, expiredLeave: 5, carryOverBalance: 5 },
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

    const employeeCellRenderer = (params: any) => {
        return (
            <div className="flex items-center space-x-2">
                <Avatar src="/default-profile.png" alt={params.value} size="sm" />
                <span>{params.value}</span>
            </div>
        );
    };

    const [columnDefs] = useState<any[]>([
        { checkboxSelection: true, headerCheckboxSelection: true, width: 80 },
        { field: "employeeName", headerName: "Employee Name", width: 200, cellRenderer: employeeCellRenderer },
        { field: "previousBalance", headerName: "Previous Balance", width: 140 },
        { field: "currentBalance", headerName: "Current Balance", width: 140 },
        { field: "totalBalance", headerName: "Total Balance", width: 120 },
        { field: "usedLeave", headerName: "Used Leave", width: 120 },
        { field: "acceptedLeave", headerName: "Accepted Leave", width: 120 },
        { field: "rejectedLeave", headerName: "Rejected Leave", width: 120 },
        { field: "expiredLeave", headerName: "Expired Leave", width: 120 },
        { field: "carryOverBalance", headerName: "Carry Over Balance", width: 140 },
        { headerName: "Actions", width: 90, cellRenderer: actionCellRenderer },
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
                {!isMobile ? <h1 className="text-xl font-bold">Employee Leave Balance</h1> :
                    <Typography className="text-sm font-bold whitespace-nowrap">Employee Leave Balance</Typography>}
                <NavigateNextOutlinedIcon fontSize="small" />
                <HomeOutlinedIcon fontSize="small" />
                <NavigateNextOutlinedIcon fontSize="small" />
                <Typography fontSize={"small"}>HR</Typography>
                <NavigateNextOutlinedIcon fontSize="small" />
                <Typography fontSize={"small"}>Leave Balance</Typography>
            </div>

            <div className="bg-sky-100 py-4 dark:bg-sky-900 rounded-lg shadow">
                <div className="flex items-center justify-between flex-wrap gap-2 px-4">
                    {!isMobile && <Typography className="text-lg">Employee Leave Balance</Typography>}

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
                    <AgGridReact<IEmployeeLeaveRecord>
                        rowData={rowData.filter(row =>
                            row.employeeName.toLowerCase().includes(searchText.toLowerCase())
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

export default EmployeeLeaveBalance;
