"use client";

import React, { useMemo, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-theme-quartz.css";
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { Search, Plus, RefreshCw, Download, Edit, Trash2 } from "lucide-react";
import { Typography } from "@mui/joy";
import { useMediaQuery } from "@mui/material";

interface IFeeType {
    feeTypeName: string;
    category: string;
    description: string;
    amount: number;
    applicableClasses: string;
    frequency: string;
    status: string;
    createdBy: string;
    createdDate: string;
}

const FeesType = () => {
    const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);
    const isMobile = useMediaQuery('(max-width: 768px)');
    const [searchText, setSearchText] = useState("");

    const [rowData] = useState<IFeeType[]>([
        { feeTypeName: "Tuition Fee", category: "Academic", description: "Fee for academic tuition services", amount: 15000, applicableClasses: "Class 1-10", frequency: "Monthly", status: "Inactive", createdBy: "Admin", createdDate: "11/01/2024" },
        { feeTypeName: "Transport Fee", category: "Miscellaneous", description: "Fee for student transport services", amount: 5000, applicableClasses: "Class 1-12", frequency: "Monthly", status: "Active", createdBy: "Admin", createdDate: "10/15/2024" },
        { feeTypeName: "Library Fee", category: "Academic", description: "Fee for library maintenance", amount: 2000, applicableClasses: "Class 6-12", frequency: "Annually", status: "Active", createdBy: "Admin", createdDate: "09/20/2024" },
        { feeTypeName: "Sports Fee", category: "Extracurricular", description: "Fee for sports activities and facilities", amount: 3000, applicableClasses: "Class 1-10", frequency: "Annually", status: "Inactive", createdBy: "Admin", createdDate: "08/10/2024" },
        { feeTypeName: "Lab Fee", category: "Academic", description: "Fee for science lab usage and equipment", amount: 4000, applicableClasses: "Class 9-12", frequency: "Annually", status: "Active", createdBy: "Admin", createdDate: "07/25/2024" },
        { feeTypeName: "Examination Fee", category: "Academic", description: "Fee for conducting exams", amount: 2500, applicableClasses: "Class 1-12", frequency: "Annually", status: "Active", createdBy: "Admin", createdDate: "06/01/2024" },
        { feeTypeName: "Development Fee", category: "Academic", description: "Fee for school infrastructure development", amount: 10000, applicableClasses: "Class 1-12", frequency: "Quarterly", status: "Inactive", createdBy: "Admin", createdDate: "05/15/2024" },
        { feeTypeName: "Hostel Fee", category: "Miscellaneous", description: "Fee for boarding and lodging in the school hostel", amount: 50000, applicableClasses: "Class 6-12", frequency: "Quarterly", status: "Active", createdBy: "Admin", createdDate: "04/01/2024" },
        { feeTypeName: "Maintenance Fee", category: "Miscellaneous", description: "Fee for general school maintenance", amount: 2000, applicableClasses: "Class 1-12", frequency: "Annually", status: "Active", createdBy: "Admin", createdDate: "03/15/2024" },
        { feeTypeName: "Cultural Activities Fee", category: "Extracurricular", description: "Fee for participation in cultural events", amount: 1500, applicableClasses: "Class 1-12", frequency: "Annually", status: "Active", createdBy: "Admin", createdDate: "02/10/2024" },
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
        { checkboxSelection: true, headerCheckboxSelection: true, width: 40 },
        { field: "feeTypeName", headerName: "Fee Type Name", width: 160 },
        { field: "category", headerName: "Category", width: 140 },
        { field: "description", headerName: "Description", width: 250 },
        { field: "amount", headerName: "Amount", width: 100 },
        { field: "applicableClasses", headerName: "Applicable Classes", width: 140 },
        { field: "frequency", headerName: "Frequency", width: 100 },
        { field: "status", headerName: "Status", width: 100, cellRenderer: statusCellRenderer },
        { field: "createdBy", headerName: "Created By", width: 110 },
        { field: "createdDate", headerName: "Created Date", width: 120 },
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
                {!isMobile ? <h1 className="text-xl font-bold">Fees Type</h1> :
                    <Typography className="text-sm font-bold whitespace-nowrap">Fees Type</Typography>}
                <NavigateNextOutlinedIcon fontSize="small" />
                <HomeOutlinedIcon fontSize="small" />
                <NavigateNextOutlinedIcon fontSize="small" />
                <Typography fontSize={"small"}>Fees</Typography>
                <NavigateNextOutlinedIcon fontSize="small" />
                <Typography fontSize={"small"}>Fees Type</Typography>
            </div>

            <div className="bg-sky-100 py-4 dark:bg-sky-900 rounded-lg shadow">
                <div className="flex items-center justify-between flex-wrap gap-2 px-4">
                    {!isMobile && <Typography className="text-lg">Fees Type</Typography>}

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
                    <AgGridReact<IFeeType>
                        rowData={rowData.filter(row =>
                            row.feeTypeName.toLowerCase().includes(searchText.toLowerCase()) ||
                            row.category.toLowerCase().includes(searchText.toLowerCase()) ||
                            row.description.toLowerCase().includes(searchText.toLowerCase()) ||
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

export default FeesType;
