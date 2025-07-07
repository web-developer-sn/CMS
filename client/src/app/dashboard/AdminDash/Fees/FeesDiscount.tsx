"use client";

import React, { useMemo, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-theme-quartz.css";
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { Search, Plus, RefreshCw, Download, Edit, Trash2 } from "lucide-react";
import { Typography } from "@mui/joy";
import { useMediaQuery } from "@mui/material";

interface IDiscount {
    discountType: string;
    amount: number;
    percentage: number;
    discountCode: string;
    startDate: string;
    endDate: string;
    appliedDate: string;
    status: string;
}

const FeesDiscount = () => {
    const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);
    const isMobile = useMediaQuery('(max-width: 768px)');
    const [searchText, setSearchText] = useState("");

    const [rowData] = useState<IDiscount[]>([
        { discountType: "Handicapped Discount", amount: 20, percentage: 10, discountCode: "handicap-disc", startDate: "01/01/2024", endDate: "12/31/2024", appliedDate: "01/15/2024", status: "Active" },
        { discountType: "Sibling Discount", amount: 30, percentage: 15, discountCode: "sibling-disc", startDate: "02/01/2024", endDate: "12/31/2024", appliedDate: "02/10/2024", status: "Inactive" },
        { discountType: "Merit-Based Discount", amount: 50, percentage: 25, discountCode: "merit-disc", startDate: "03/01/2024", endDate: "12/31/2024", appliedDate: "03/05/2024", status: "Active" },
        { discountType: "Financial Aid Discount", amount: 100, percentage: 50, discountCode: "financial-aid-disc", startDate: "01/01/2024", endDate: "12/31/2024", appliedDate: "01/10/2024", status: "Active" },
        { discountType: "Early Payment Discount", amount: 20, percentage: 5, discountCode: "early-payment-disc", startDate: "01/01/2024", endDate: "01/31/2024", appliedDate: "01/05/2024", status: "Inactive" },
        { discountType: "Scholarship Discount", amount: 200, percentage: 40, discountCode: "scholarship-disc", startDate: "04/01/2024", endDate: "12/31/2024", appliedDate: "04/10/2024", status: "Active" },
        { discountType: "Staff Discount", amount: 150, percentage: 20, discountCode: "staff-disc", startDate: "01/01/2024", endDate: "12/31/2024", appliedDate: "01/20/2024", status: "Active" },
        { discountType: "Sports Discount", amount: 75, percentage: 10, discountCode: "sports-disc", startDate: "02/01/2024", endDate: "12/31/2024", appliedDate: "02/15/2024", status: "Inactive" },
        { discountType: "Extracurricular Discount", amount: 50, percentage: 10, discountCode: "extracurricular-disc", startDate: "03/01/2024", endDate: "12/31/2024", appliedDate: "03/05/2024", status: "Active" },
        { discountType: "Alumni Discount", amount: 100, percentage: 25, discountCode: "alumni-disc", startDate: "01/01/2024", endDate: "12/31/2024", appliedDate: "01/15/2024", status: "Active" },
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
        { field: "discountType", headerName: "Discount Type", width: 190 },
        { field: "amount", headerName: "Amount", width: 130 },
        { field: "percentage", headerName: "Percentage", width: 130 },
        { field: "discountCode", headerName: "Discount Code", width: 170 },
        { field: "startDate", headerName: "Start Date", width: 130 },
        { field: "endDate", headerName: "End Date", width: 130 },
        { field: "appliedDate", headerName: "Applied Date", width: 130 },
        { field: "status", headerName: "Status", width: 130, cellRenderer: statusCellRenderer },
        { headerName: "Actions", width: 140, cellRenderer: actionCellRenderer },
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
                {!isMobile ? <h1 className="text-xl font-bold">Fees Discount</h1> :
                    <Typography className="text-sm font-bold whitespace-nowrap">Fees Discount</Typography>}
                <NavigateNextOutlinedIcon fontSize="small" />
                <HomeOutlinedIcon fontSize="small" />
                <NavigateNextOutlinedIcon fontSize="small" />
                <Typography fontSize={"small"}>Fees</Typography>
                <NavigateNextOutlinedIcon fontSize="small" />
                <Typography fontSize={"small"}>Fees Discount</Typography>
            </div>

            <div className="bg-sky-100 py-4 dark:bg-sky-900 rounded-lg shadow">
                <div className="flex items-center justify-between flex-wrap gap-2 px-4">
                    {!isMobile && <Typography className="text-lg">Fees Discount</Typography>}

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
                    <AgGridReact<IDiscount>
                        rowData={rowData.filter(row =>
                            row.discountType.toLowerCase().includes(searchText.toLowerCase()) ||
                            row.discountCode.toLowerCase().includes(searchText.toLowerCase()) ||
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

export default FeesDiscount;
