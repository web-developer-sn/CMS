"use client";

import React, { useMemo, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-theme-quartz.css";
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { Search, Plus, RefreshCw, Download, Edit, Trash2 } from "lucide-react";
import { Typography } from "@mui/joy";
import { useMediaQuery } from "@mui/material";

const BookStatus = () => {
    const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);
    const isMobile = useMediaQuery('(max-width: 768px)');
    const [searchText, setSearchText] = useState("");

    const [rowData] = useState([
        { bookId: 101, bookName: "Introduction to Algorithms", status: "Available", dateUpdated: "11/20/2024", lastCheckedOut: "", dueDate: "", checkedOutBy: "", reservedBy: "", condition: "Good", returnDate: "" },
        { bookId: 102, bookName: "Data Structures in C", status: "Checked Out", dateUpdated: "11/18/2024", lastCheckedOut: "11/17/2024", dueDate: "11/24/2024", checkedOutBy: "Student-001", reservedBy: "", condition: "Good", returnDate: "" },
        { bookId: 103, bookName: "Advanced Mathematics", status: "Reserved", dateUpdated: "11/19/2024", lastCheckedOut: "", dueDate: "", checkedOutBy: "", reservedBy: "Student-002", condition: "Excellent", returnDate: "" },
        { bookId: 104, bookName: "Physics for Engineers", status: "Under Repair", dateUpdated: "11/15/2024", lastCheckedOut: "", dueDate: "", checkedOutBy: "", reservedBy: "", condition: "Damaged", returnDate: "" },
        { bookId: 105, bookName: "History of Modern Art", status: "Lost", dateUpdated: "11/12/2024", lastCheckedOut: "10/01/2024", dueDate: "10/08/2024", checkedOutBy: "Student-003", reservedBy: "", condition: "Good", returnDate: "" },
        { bookId: 106, bookName: "Artificial Intelligence", status: "Available", dateUpdated: "11/22/2024", lastCheckedOut: "", dueDate: "", checkedOutBy: "", reservedBy: "", condition: "Good", returnDate: "" },
        { bookId: 107, bookName: "The Art of War", status: "Checked Out", dateUpdated: "11/10/2024", lastCheckedOut: "11/05/2024", dueDate: "11/12/2024", checkedOutBy: "Student-004", reservedBy: "", condition: "Good", returnDate: "" },
        { bookId: 108, bookName: "The Philosophy of Science", status: "Under Repair", dateUpdated: "11/13/2024", lastCheckedOut: "", dueDate: "", checkedOutBy: "", reservedBy: "", condition: "Damaged", returnDate: "" },
        { bookId: 109, bookName: "Quantum Mechanics", status: "Available", dateUpdated: "11/21/2024", lastCheckedOut: "", dueDate: "", checkedOutBy: "", reservedBy: "", condition: "Excellent", returnDate: "" },
        { bookId: 110, bookName: "The Complete Works of Shakespeare", status: "Checked Out", dateUpdated: "11/18/2024", lastCheckedOut: "11/10/2024", dueDate: "11/17/2024", checkedOutBy: "Student-005", reservedBy: "", condition: "Good", returnDate: "" },
    ]);

    const statusCellRenderer = (params: any) => {
        let bgColor = "";
        let textColor = "";

        switch (params.value) {
            case "Available":
                bgColor = "bg-green-100";
                textColor = "text-green-700";
                break;
            case "Checked Out":
                bgColor = "bg-purple-100";
                textColor = "text-purple-700";
                break;
            case "Reserved":
                bgColor = "bg-blue-100";
                textColor = "text-blue-700";
                break;
            case "Under Repair":
                bgColor = "bg-yellow-100";
                textColor = "text-yellow-700";
                break;
            case "Lost":
                bgColor = "bg-orange-100";
                textColor = "text-orange-700";
                break;
            default:
                bgColor = "bg-gray-100";
                textColor = "text-gray-700";
        }

        return (
            <span className={`px-2 py-1 rounded text-xs ${bgColor} ${textColor}`}>
                {params.value}
            </span>
        );
    };

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
        { checkboxSelection: true, headerCheckboxSelection: true, width: 30 },
        { field: "bookId", headerName: "Book ID", width: 100 },
        { field: "bookName", headerName: "Book Name", width: 200 },
        { field: "status", headerName: "Status", width: 90, cellRenderer: statusCellRenderer },
        { field: "dateUpdated", headerName: "Date Updated", width: 120 },
        { field: "lastCheckedOut", headerName: "Last Checked Out", width: 140 },
        { field: "dueDate", headerName: "Due Date", width: 120 },
        { field: "checkedOutBy", headerName: "Checked Out By", width: 130 },
        { field: "reservedBy", headerName: "Reserved By", width: 120 },
        { field: "condition", headerName: "Condition", width: 120 },
        { field: "returnDate", headerName: "Return Date", width: 120 },
        { headerName: "Actions", width: 90, cellRenderer: actionCellRenderer },
    ]);

    const defaultColDef = useMemo(() => ({
        sortable: true,
        filter: true,
        resizable: true,
        cellStyle: { display: 'flex', alignItems: 'center' }
    }), []);

    return (
        <div className="p-0">
            <div className="flex py-8 items-center">
                {!isMobile ? <h1 className="text-xl font-bold">All Assets</h1> :
                    <Typography className="text-sm font-bold whitespace-nowrap">All Assets</Typography>}
                <NavigateNextOutlinedIcon fontSize="small" />
                <HomeOutlinedIcon fontSize="small" />
                <NavigateNextOutlinedIcon fontSize="small" />
                <Typography fontSize={"small"}>Library</Typography>
                <NavigateNextOutlinedIcon fontSize="small" />
                <Typography fontSize={"small"}>All Assets</Typography>
            </div>

            <div className="bg-sky-100 py-4 dark:bg-sky-900 rounded-lg shadow">
                <div className="flex items-center justify-between">
                    {!isMobile && <Typography className="text-lg px-4">All Assets</Typography>}

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
                    <AgGridReact
                        rowData={rowData.filter(row =>
                            row.bookId.toString().includes(searchText.toLowerCase()) ||
                            row.bookName.toLowerCase().includes(searchText.toLowerCase()) ||
                            row.checkedOutBy.toLowerCase().includes(searchText.toLowerCase())
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

export default BookStatus;
