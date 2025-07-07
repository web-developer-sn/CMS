"use client";

import React, { useMemo, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-theme-quartz.css";
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { Search, Plus, RefreshCw, Download, Edit, Trash2 } from "lucide-react";
import { Typography } from "@mui/joy";
import { useMediaQuery } from "@mui/material";

const AllLibraryAsset = () => {
    const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);
    const isMobile = useMediaQuery('(max-width: 768px)');
    const [searchText, setSearchText] = useState("");

    const [rowData] = useState([
        { bookNumber: "B123451", title: "Web Programming", subject: "mathematics", purchaseDate: "02/25/2019", department: "civil", type: "news paper", status: "out of stock", lastBorrowed: "01/15/2022", borrower: "Jane Doe", shelf: "C3" },
        { bookNumber: "B123452", title: "Java Black Book", subject: "java", purchaseDate: "02/17/2019", department: "computer", type: "book", status: "in stock", lastBorrowed: "", borrower: "", shelf: "B2" },
        { bookNumber: "B123453", title: "Parallel Computing", subject: "networking", purchaseDate: "02/13/2019", department: "computer", type: "dvd", status: "out of stock", lastBorrowed: "", borrower: "", shelf: "C4" },
        { bookNumber: "B123454", title: "Politics Science", subject: "politics", purchaseDate: "02/01/2019", department: "computer", type: "book", status: "in stock", lastBorrowed: "", borrower: "", shelf: "B1" },
        { bookNumber: "B123455", title: "Networking", subject: "animation", purchaseDate: "02/02/2019", department: "mathematics", type: "cd", status: "out of stock", lastBorrowed: "", borrower: "", shelf: "D1" },
        { bookNumber: "B123456", title: "Time History", subject: "java", purchaseDate: "02/26/2019", department: "mechanical", type: "book", status: "issue", lastBorrowed: "03/10/2022", borrower: "John Smith", shelf: "A2" },
        { bookNumber: "B123457", title: "Politics", subject: "politics", purchaseDate: "02/22/2019", department: "civil", type: "book", status: "issue", lastBorrowed: "01/20/2022", borrower: "Alice Johnson", shelf: "B3" },
        { bookNumber: "B123458", title: "Networking", subject: "mathematics", purchaseDate: "02/19/2019", department: "computer", type: "book", status: "repair", lastBorrowed: "", borrower: "", shelf: "A3" },
        { bookNumber: "B123459", title: "Web Programming", subject: "networking", purchaseDate: "02/15/2019", department: "civil", type: "book", status: "issue", lastBorrowed: "02/25/2022", borrower: "Michael Brown", shelf: "C1" },
        { bookNumber: "B123510", title: "Computer Fundamentals", subject: "animation", purchaseDate: "02/27/2019", department: "mathematics", type: "book", status: "issue", lastBorrowed: "03/01/2022", borrower: "Emily Davis", shelf: "A4" },
    ]);

    const statusCellRenderer = (params: any) => {
        let bgColor = "";
        let textColor = "";

        switch (params.value) {
            case "in stock":
                bgColor = "bg-green-100";
                textColor = "text-green-700";
                break;
            case "out of stock":
                bgColor = "bg-orange-100";
                textColor = "text-orange-700";
                break;
            case "issue":
                bgColor = "bg-purple-100";
                textColor = "text-purple-700";
                break;
            case "repair":
                bgColor = "bg-yellow-100";
                textColor = "text-yellow-700";
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
        { checkboxSelection: true, headerCheckboxSelection: true, width: 60 },
        { field: "bookNumber", headerName: "Book No", width: 110 },
        { field: "title", headerName: "Title", width: 150 },
        { field: "subject", headerName: "Subject", width: 100 },
        { field: "purchaseDate", headerName: "Purchase Date", width: 110 },
        { field: "department", headerName: "Department", width: 150 },
        { field: "type", headerName: "Type", width: 80 },
        { field: "status", headerName: "Status", width: 110, cellRenderer: statusCellRenderer },
        { field: "lastBorrowed", headerName: "Last Borrowed", width: 140 },
        { field: "borrower", headerName: "Borrower Name", width: 150 },
        { field: "shelf", headerName: "Shelf Location", width: 140 },
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
                <Typography fontSize={"small"}>Assets</Typography>
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
                            row.bookNumber.toLowerCase().includes(searchText.toLowerCase()) ||
                            row.title.toLowerCase().includes(searchText.toLowerCase()) ||
                            row.subject.toLowerCase().includes(searchText.toLowerCase()) ||
                            row.borrower.toLowerCase().includes(searchText.toLowerCase())
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

export default AllLibraryAsset;
