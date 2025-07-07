"use client";

import React, { useMemo, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-theme-quartz.css";
import NavigateNextOutlinedIcon from "@mui/icons-material/NavigateNextOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { Search, Plus, RefreshCw, Download, Edit, Trash2 } from "lucide-react";
import { Typography, Avatar } from "@mui/joy";
import { useMediaQuery } from "@mui/material";

interface IEmployeeSalaryRecord {
    image: string;
    employeeName: string;
    email: string;
    department: string;
    salary: string;
    bonus: string;
    deductions: string;
    netSalary: string;
}

const EmployeeSalary = () => {
    const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);
    const isMobile = useMediaQuery('(max-width: 768px)');
    const [searchText, setSearchText] = useState("");

    const [rowData] = useState<IEmployeeSalaryRecord[]>([
        { image: "image", employeeName: "John Doe", email: "test@email.com", department: "Mathematics", salary: "$2,574", bonus: "$200", deductions: "$100", netSalary: "$2,674" },
        { image: "image", employeeName: "Sarah Smith", email: "test@email.com", department: "Science", salary: "$3,587", bonus: "$300", deductions: "$150", netSalary: "$3,737" },
        { image: "image", employeeName: "Rajesh", email: "test@email.com", department: "History", salary: "$7,897", bonus: "$500", deductions: "$200", netSalary: "$8,197" },
        { image: "image", employeeName: "Jay Soni", email: "test@email.com", department: "Technology", salary: "$2,697", bonus: "$150", deductions: "$80", netSalary: "$2,767" },
        { image: "image", employeeName: "Rajesh", email: "test@email.com", department: "Science", salary: "$6,587", bonus: "$400", deductions: "$200", netSalary: "$6,787" },
        { image: "image", employeeName: "John Doe", email: "test@email.com", department: "English", salary: "$8,256", bonus: "$600", deductions: "$250", netSalary: "$8,606" },
        { image: "image", employeeName: "Cara Stevens", email: "test@email.com", department: "Health Center", salary: "$7,112", bonus: "$350", deductions: "$150", netSalary: "$7,312" },
        { image: "image", employeeName: "Jay Soni", email: "test@email.com", department: "Health Center", salary: "$8,256", bonus: "$500", deductions: "$300", netSalary: "$8,456" },
        { image: "image", employeeName: "Angelica Ramos", email: "test@email.com", department: "Library", salary: "$7,758", bonus: "$450", deductions: "$200", netSalary: "$8,008" },
        { image: "image", employeeName: "Airi Satou", email: "test@email.com", department: "Management", salary: "$6,665", bonus: "$350", deductions: "$150", netSalary: "$6,865" },
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

    const nameCellRenderer = (params: any) => (
        <div className="flex items-center space-x-2">
            <Avatar src="/default-profile.png" alt="Employee" size="sm" />
            <span>{params.value}</span>
        </div>
    );

    const [columnDefs] = useState<any[]>([
        { checkboxSelection: true, headerCheckboxSelection: true, width: 80 },
        { field: "employeeName", headerName: "Employee Name", minWidth: 250, cellRenderer: nameCellRenderer },
        { field: "email", headerName: "Email", width: 180 },
        { field: "department", headerName: "Department", minWidth: 140 },
        { field: "salary", headerName: "Salary", width: 120 },
        { field: "bonus", headerName: "Bonus", width: 120 },
        { field: "deductions", headerName: "Deductions", width: 120 },
        { field: "netSalary", headerName: "Net Salary", width: 120 },
        { headerName: "Actions", minWidth: 150, cellRenderer: actionCellRenderer },
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
                {!isMobile ? <h1 className="text-xl font-bold">Employee Salary</h1> :
                    <Typography className="text-sm font-bold whitespace-nowrap">Employee Salary</Typography>}
                <NavigateNextOutlinedIcon fontSize="small" />
                <HomeOutlinedIcon fontSize="small" />
                <NavigateNextOutlinedIcon fontSize="small" />
                <Typography fontSize={"small"}>HR</Typography>
                <NavigateNextOutlinedIcon fontSize="small" />
                <Typography fontSize={"small"}>Employee Salary</Typography>
            </div>

            <div className="bg-sky-100 py-4 dark:bg-sky-900 rounded-lg shadow">
                <div className="flex items-center justify-between flex-wrap gap-2 px-4">
                    {!isMobile && <Typography className="text-lg">Employee Salary</Typography>}

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
                    <AgGridReact<IEmployeeSalaryRecord>
                        rowData={rowData.filter(row =>
                            row.employeeName.toLowerCase().includes(searchText.toLowerCase()) ||
                            row.email.toLowerCase().includes(searchText.toLowerCase()) ||
                            row.department.toLowerCase().includes(searchText.toLowerCase())
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

export default EmployeeSalary;
