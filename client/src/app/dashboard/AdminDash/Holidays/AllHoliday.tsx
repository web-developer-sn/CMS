"use client";

import React, { useMemo, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-theme-quartz.css";
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { Search, Plus, RefreshCw, Download, Edit, Trash2 } from "lucide-react";
import { Typography } from "@mui/joy";
import { useMediaQuery } from "@mui/material";

interface IHoliday {
    title: string;
    startDate: string;
    endDate: string;
    type: string;
    description: string;
    location: string;
    createdAt: string;
    updatedAt: string;
    recurring: string;
    status: string;
}

const AllHolidays = () => {
    const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);
    const isMobile = useMediaQuery('(max-width: 768px)');
    const [searchText, setSearchText] = useState("");

    const [rowData] = useState<IHoliday[]>([
        { title: "New Year's Day", startDate: "02/22/2019", endDate: "02/25/2019", type: "Public Holiday", description: "A celebration marking the start of the new year.", location: "Global", createdAt: "12/01/2018", updatedAt: "01/01/2019", recurring: "No", status: "Active" },
        { title: "Memorial Day", startDate: "02/12/2019", endDate: "02/17/2019", type: "Public Holiday", description: "Lorem Ipsum is simply dummy text.", location: "Global", createdAt: "12/01/2018", updatedAt: "01/01/2019", recurring: "Yes", status: "Active" },
        { title: "Christmas Day", startDate: "12/20/2019", endDate: "01/01/2020", type: "Public Holiday", description: "Lorem Ipsum is simply dummy text.", location: "Global", createdAt: "12/01/2018", updatedAt: "01/01/2019", recurring: "No", status: "Active" },
        { title: "Annual Function", startDate: "01/26/2019", endDate: "02/01/2019", type: "Holiday By College", description: "Lorem Ipsum is simply dummy text.", location: "School", createdAt: "12/01/2018", updatedAt: "01/01/2019", recurring: "Yes", status: "Active" },
        { title: "New Year's Day", startDate: "02/01/2019", endDate: "02/02/2019", type: "Public Holiday", description: "Lorem Ipsum is simply dummy text.", location: "Global", createdAt: "12/01/2018", updatedAt: "01/01/2019", recurring: "No", status: "Active" },
        { title: "Earth Day", startDate: "02/23/2019", endDate: "02/26/2019", type: "Public Holiday", description: "Lorem Ipsum is simply dummy text.", location: "Global", createdAt: "12/01/2018", updatedAt: "01/01/2019", recurring: "Yes", status: "Active" },
        { title: "Army Day", startDate: "02/20/2019", endDate: "02/22/2019", type: "Public Holiday", description: "Lorem Ipsum is simply dummy text.", location: "Global", createdAt: "12/01/2018", updatedAt: "01/01/2019", recurring: "No", status: "Active" },
        { title: "Freedom Day", startDate: "02/17/2019", endDate: "02/19/2019", type: "Public Holiday", description: "Lorem Ipsum is simply dummy text.", location: "Global", createdAt: "12/01/2018", updatedAt: "01/01/2019", recurring: "Yes", status: "Active" },
        { title: "Annual Function", startDate: "02/14/2019", endDate: "02/15/2019", type: "Holiday By College", description: "Lorem Ipsum is simply dummy text.", location: "School", createdAt: "12/01/2018", updatedAt: "01/01/2019", recurring: "Yes", status: "Active" },
        { title: "Diwali", startDate: "02/23/2019", endDate: "02/27/2019", type: "Public Holiday", description: "Lorem Ipsum is simply dummy text.", location: "Global", createdAt: "12/01/2018", updatedAt: "01/01/2019", recurring: "No", status: "Active" },
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

    const [columnDefs] = useState<any[]>([
        { headerCheckboxSelection: true, checkboxSelection: true, width: 40 },
        { field: "title", headerName: "Title", minWidth: 140, flex: 1.2 },
        { field: "startDate", headerName: "Start Date", minWidth: 110, flex: 1 },
        { field: "endDate", headerName: "End Date", minWidth: 110, flex: 1 },
        { field: "type", headerName: "Type", minWidth: 120, flex: 1.2 },
        { field: "description", headerName: "Description", minWidth: 200, flex: 1.5 },
        { field: "location", headerName: "Location", minWidth: 90, flex: 1 },
        { field: "createdAt", headerName: "Created At", minWidth: 110, flex: 1 },
        { field: "updatedAt", headerName: "Updated At", minWidth: 110, flex: 1 },
        { field: "recurring", headerName: "Recurring", minWidth: 90, flex: 0.8 },
        { field: "status", headerName: "Status", minWidth: 80, flex: 0.8 },
        { headerName: "Actions", minWidth: 90, flex: 0.8, cellRenderer: actionCellRenderer },
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
                {!isMobile ? <h1 className="text-xl font-bold">All Holiday</h1> :
                    <Typography className="text-sm font-bold whitespace-nowrap">All Holiday</Typography>}
                <NavigateNextOutlinedIcon fontSize="small" />
                <HomeOutlinedIcon fontSize="small" />
                <NavigateNextOutlinedIcon fontSize="small" />
                <Typography fontSize={"small"}>Fees</Typography>
                <NavigateNextOutlinedIcon fontSize="small" />
                <Typography fontSize={"small"}>All Holiday</Typography>
            </div>

            <div className="bg-sky-100 py-4 dark:bg-sky-900 rounded-lg shadow">
                <div className="flex items-center justify-between flex-wrap gap-2 px-4">
                    {!isMobile && <Typography className="text-lg">Holidays</Typography>}

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
                    <AgGridReact<IHoliday>
                        rowData={rowData.filter(row =>
                            row.title.toLowerCase().includes(searchText.toLowerCase()) ||
                            row.type.toLowerCase().includes(searchText.toLowerCase()) ||
                            row.description.toLowerCase().includes(searchText.toLowerCase()) ||
                            row.location.toLowerCase().includes(searchText.toLowerCase())
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

export default AllHolidays;
