'use client';

import React, { useState } from 'react';
import { Sheet, FormLabel, Typography, AccordionGroup, Accordion, AccordionSummary, ListItemContent, AccordionDetails, Stack, FormControl, Drawer } from '@mui/joy';
import { Menu, Home, Users, Book, Settings } from 'lucide-react';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import { Avatar, useMediaQuery } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import FaceOutlinedIcon from '@mui/icons-material/FaceOutlined';
import AirlineSeatIndividualSuiteOutlinedIcon from '@mui/icons-material/AirlineSeatIndividualSuiteOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import GiteOutlinedIcon from '@mui/icons-material/GiteOutlined';
import CalendarViewMonthOutlinedIcon from '@mui/icons-material/CalendarViewMonthOutlined';
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined';
import PowerSettingsNewOutlinedIcon from '@mui/icons-material/PowerSettingsNewOutlined';
import AdmissionInquiry from './frountOffice/AdmitionInq';
import VisitorsBook from './frountOffice/visitorsBook';
import Complaints from './frountOffice/Complaints';
import AllTeachers from './teachers/AllTeachers';
import AddTeacher from './teachers/AddTeacher';
import EditTeacher from './teachers/EditTeacher';
import AboutTeacher from './teachers/AboutTeacher';
import TeacherTimeTable from './teachers/TeacherTimeTable';
import AssignedTeacher from './teachers/AssignTeacher';
import AllStudents from './students/AllStudents';
import AddStudents from './students/AddStudents';
import EditStudents from './students/EditStudents';
import StudentAttendance from './students/StudentsAttendance';
import AllCourses from './courses/AllCourses';
import AddCourse from './courses/AddCourse';
import EditCourse from './courses/EditCourse';
import AllLibraryAsset from './library/AllLibraryAssets';
import AddLibraryAsset from './library/AddLibraryAsset';
import EditLibraryAsset from './library/EditLibraryAsset';
import BookStatus from './library/BookStatus';
import AllDepartment from './department/AllDepartment';
import AddDepartments from './department/AddDepartment';
import EditDepartments from './department/EditDepartment';
import AllStaff from './staff/AllStaff';
import AddStaff from './staff/AddStaff';
import EditStaff from './staff/EditStaff';
import StaffAttendance from './staff/staffAttendance';
import AllHolidays from './Holidays/AllHoliday';
import AddHoliday from './Holidays/AddHoliday';
import EditHoliday from './Holidays/EditHoliday';
import AllFees from './Fees/AllFees';
import AddFees from './Fees/AddFees';
import EditFees from './Fees/EditFees';
import FeesType from './Fees/FeesType';
import FeesDiscount from './Fees/FeesDiscount';
import FeesReceipt from './Fees/feeReceipt';
import ClassList from './class/ClassList';
import ClassTimeTable from './class/ClassTimeTable';
import RoomList from './hostel/RoomList';
import RoomType from './hostel/RoomType';
import EmployeeLeaveRequests from './humanResources/EmployeLeaveRequests';
import EmployeeLeaveBalance from './humanResources/EmployeeLeaveBalance';
import LeaveTypes from './humanResources/LeaveTypes';
import Holidays from './humanResources/Holidays';
import TodaysAttendance from './humanResources/Today\'sAttendance';
import EmployeeSalary from './humanResources/EmployeeSalary';
import Payslip from './humanResources/Payslip';
import TeacherDashBoard from '../TeacherDashboard/Dashboard';
import StudentDashMain from '../studentDashboard/StudentDashMain';
import StudentDashboard from '../studentDashboard/Dashboard';
import { useDispatch } from 'react-redux';
import { logout } from '@/app/redux/actions/authActions';
import { useRouter } from "next/navigation";

const AdminDashMain = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedSubMenu, setSelectedSubMenu] = useState<string | null>("Teacher Dashboard");
  const isMobile = useMediaQuery('(max-width: 768px)');
  const Logaout = () => {
    alert("success")
    dispatch(logout());
    router.push("/login")

  }
  const menuItems = [
    {
      label: 'Dashboard', icon: <DashboardCustomizeOutlinedIcon fontSize={"small"} />, path: '#', subMenus: [
        { label: 'Teacher Dashboard' },
        { label: 'Student Dashboard' }
      ]
    },
    {
      label: 'Frount Office', icon: <HomeWorkOutlinedIcon fontSize={"small"} />, path: '#', subMenus: [
        { label: 'Admission Inquiry' },
        { label: 'Visitor Book' },
        { label: "Complaints" }
      ]
    },
    {
      label: 'Teachers', icon: <PersonOutlinedIcon fontSize={"small"} />, path: '#', subMenus: [
        { label: 'All Teacher' },
        { label: 'Add Teacher' },
        { label: "Edit Teacher" },
        { label: "About Teacher" },
        { label: "Teacher Timetable" },
        { label: "Assign Class Teacher" }
      ]
    },
    {
      label: 'Students', icon: <PeopleOutlinedIcon fontSize={"small"} />, path: '#', subMenus: [
        { label: 'All Student' },
        { label: 'Add Student' },
        { label: "Edit Student" },
        { label: "About Student" },
        { label: "Student Attendance" },
      ]
    },
    {
      label: 'Courses', icon: <SchoolOutlinedIcon fontSize={"small"} />, path: '#', subMenus: [
        { label: 'All Course' },
        { label: 'Add Course' },
        { label: "Edit Course" },
        { label: "About Course" },
      ]
    },
    {
      label: 'Library', icon: <LocalLibraryOutlinedIcon fontSize={"small"} />, path: '#', subMenus: [
        { label: 'All Library Assets' },
        { label: 'Add Library Assets' },
        { label: "Edit Library Assets" },
        { label: "Book Status" },
      ]
    },
    {
      label: 'Departments', icon: <BusinessOutlinedIcon fontSize={"small"} />, path: '#', subMenus: [
        { label: 'All Departments' },
        { label: 'Add Departments' },
        { label: "Edit Departments" },
      ]
    },
    {
      label: 'Staff', icon: <FaceOutlinedIcon fontSize={"small"} />, path: '#', subMenus: [
        { label: 'All Staff' },
        { label: 'Add Staff' },
        { label: "Edit Staff" },
        { label: "About Staff" },
        { label: "Staff Attendance" },
      ]
    },
    {
      label: 'Holiday', icon: <AirlineSeatIndividualSuiteOutlinedIcon fontSize={"small"} />, path: '#', subMenus: [
        { label: 'All Holiday' },
        { label: 'Add Holiday' },
        { label: "Edit Holiday" },
      ]
    },
    {
      label: 'Fees', icon: <MonetizationOnOutlinedIcon fontSize={"small"} />, path: '#', subMenus: [
        { label: 'All Fees' },
        { label: 'Add Fees' },
        { label: "Edit Fees" },
        { label: "Fees Type" },
        { label: "Fees Discount" },
        { label: "Fees Receipt" },
      ]
    },
    {
      label: 'Class', icon: <CalendarViewMonthOutlinedIcon fontSize={"small"} />, path: '#', subMenus: [
        { label: 'Class List' },
        { label: 'Class Timetable' },
      ]
    },
    {
      label: 'Hostel', icon: <GiteOutlinedIcon fontSize={"small"} />, path: '#', subMenus: [
        { label: 'Room List' },
        { label: 'Room Types' },
      ]
    },
    {
      label: 'Human Resources', icon: <ManageAccountsOutlinedIcon fontSize={"small"} />, path: '#', subMenus: [
        { label: 'Emp Leave Req' },
        { label: 'Emp Leave Balance' },
        { label: "Leave Types" },
        { label: "Holidays" },
        { label: "Today's Attendance" },
        { label: 'Attendance Details' },
        { label: 'Attendance Sheet' },
        { label: "Employee Salary" },
        { label: "Payslip" },
      ]
    },
    { label: 'Logout', icon: <PowerSettingsNewOutlinedIcon fontSize={"small"} />, path: '#' },
  ];

  const renderMenu = () => (
    <Sheet
      className={`bg-white dark:bg-slate-800 transition-all duration-300 ${collapsed ? 'w-16' : 'w-64'} flex flex-col`}
    >
      <div className="flex items-center justify-between p-4">
        {!collapsed && (
          <div className="flex items-center gap-4">
            <img src="logo1.png" alt="Logo" className="w-8 h-8" />
            <h1 className="text-xl font-bold text-sky-600">Smart</h1>
          </div>
        )}
        {collapsed && (
          <div className="flex items-center gap-4">
            <img src="logo1.png" alt="Logo" className="w-8 h-8" />
          </div>
        )}
      </div>

      <AccordionGroup
        disableDivider
        className="flex-1 p-2 space-y-2"
        sx={{
          overflow: 'auto',
          maxWidth: 400,
          [`& .accordion-indicator`]: {
            transition: '0.2s',
          },
          [`& button[aria-expanded="true"]`]: {
            backgroundColor: '#0284C7',
            color: '#ffffff',
          },
          [`& button[aria-expanded="false"]:hover`]: {
            backgroundColor: 'primary.softBg',
            color: 'inherit',
          },
          [`& button[aria-expanded="true"] .accordion-label`]: {
            color: '#ffffff !important',
          },
          [`& button[aria-expanded="true"] svg`]: {
            color: '#ffffff !important',
          },
          [`& button[aria-expanded="true"] .accordion-indicator.add`]: {
            display: 'none',
          },
          [`& button[aria-expanded="false"] .accordion-indicator.remove`]: {
            display: 'none',
          },
          [`& button[aria-expanded="true"]:hover`]: {
            backgroundColor: '#0284C7',
            color: '#ffffff',
          },
        }}
      >
        {!collapsed && (
          <div className="flex flex-col items-center text-center gap-1">
            <Avatar
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH6jA3i35aN3YEfmMQxG-QWQkl_09EEeEiBh9YL8L0pk7-DkdwgmDX8yo&s"
              alt="User Avatar"
              sx={{ borderRadius: 2, width: 150, height: 150 }}
            />
            <FormLabel className="font-semibold">Pushpanjali Gupta</FormLabel>
            <p className="text-sm text-gray-500 dark:text-gray-300">Admin</p>
          </div>
        )}

        {menuItems.map((item, index) => (
          <Accordion
            key={index}
            component="a"
            href={item.path}
            sx={{
              borderRadius: 2,
              overflow: 'hidden',
              mb: 1,
              transition: 'all 0.3s ease',
              '&:hover': {
                boxShadow: 'md',
                transform: 'translateY(-1px)',
              },
              '& .MuiAccordionSummary-root': { borderRadius: 0 },
              '& .MuiAccordionDetails-root': { borderRadius: 0 },
            }}
          >
            <AccordionSummary
              className="accordion-summary"
              indicator={
                !collapsed && item.label !== 'Logout' && (
                  <span className="flex items-center" >
                    <AddIcon fontSize="small" className="accordion-indicator add" />
                    <RemoveIcon fontSize="small" className="accordion-indicator remove" />
                  </span>
                )
              }
            >
              <div className="min-w-[40px] flex justify-center items-center text-xl">
                {item.icon}
              </div>
              {!collapsed && (
                <ListItemContent >
                  <Typography level="title-md" className="accordion-label" >
                    {item.label}
                  </Typography>
                </ListItemContent>
              )}
            </AccordionSummary>

            {item.subMenus && !collapsed && (
              <AccordionDetails >
                <Stack spacing={1.5}>
                  {item.subMenus.map((sub, subIndex) => (
                    <FormControl
                      key={subIndex}
                      orientation="horizontal"
                      sx={{ pl: '36px', cursor: 'pointer' }}
                      onClick={() => {
                        setSelectedSubMenu(sub.label);
                        if (isMobile) setDrawerOpen(false);

                      }}
                    >
                      <FormLabel
                        className={`text-left flex items-center gap-2 hover:text-sky-600 ${selectedSubMenu === sub.label ? 'text-sky-600 font-semibold' : ''
                          }`}
                      >
                        {selectedSubMenu === sub.label && (
                          <NavigateNextOutlinedIcon fontSize="small" />
                        )}
                        <p>{sub.label}</p>
                      </FormLabel>
                    </FormControl>
                  ))}
                </Stack>
              </AccordionDetails>
            )}
          </Accordion>
        ))}
      </AccordionGroup>

    </Sheet>

  );

  return (
    <div className="flex h-screen">
      {!isMobile && (
        renderMenu()
      )}
      {isMobile && (
        <Drawer
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          size="sm"
          anchor="left"
          sx={{ zIndex: 1300 }}
        >
          {renderMenu()}
        </Drawer>
      )}
      <div className="flex-1 flex flex-col">
        <nav className="w-full h-16 bg-white dark:bg-slate-800 shadow flex items-center justify-between px-4 md:px-8">
          <div className="flex items-center gap-2">
            <button
              className="flex items-center rounded-full gap-2 hover:bg-gray-100 dark:hover:bg-slate-700 p-2 transition-colors"
              onClick={() => {
                if (isMobile) setDrawerOpen(true);
                else setCollapsed(!collapsed);
              }}
            >
              <Menu />
            </button>
          </div>

          <div className="flex items-center gap-4">
            <FullscreenIcon className="w-6 h-6 text-gray-700 dark:text-white cursor-pointer hover:text-sky-600 transition-colors" />
            <NotificationsActiveOutlinedIcon className="w-6 h-6 text-gray-700 dark:text-white cursor-pointer hover:text-sky-600 transition-colors" />
            <button className="flex items-center rounded-full gap-2 hover:bg-gray-100 dark:hover:bg-slate-700 p-1 transition-colors">
              <Avatar
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH6jA3i35aN3YEfmMQxG-QWQkl_09EEeEiBh9YL8L0pk7-DkdwgmDX8yo&s"
                alt="User Avatar"
                className="w-8 h-8"
              />
              <span className="text-sm font-medium text-gray-800 dark:text-white">Pushpanjali Gupta</span>
            </button>
          </div>
        </nav>

        <main className="overflow-auto flex-1 bg-sky-50 dark:bg-sky-900">
          {selectedSubMenu === "Teacher Dashboard" && (
            <TeacherDashBoard />
          )}
          {selectedSubMenu === "Student Dashboard" && (
            <StudentDashboard />
          )}
          {selectedSubMenu === "Admission Inquiry" && (
            <AdmissionInquiry />
          )}
          {selectedSubMenu === "Visitor Book" && (
            <VisitorsBook />
          )}
          {selectedSubMenu === "Complaints" && (
            <Complaints />
          )}
          {selectedSubMenu === "All Teacher" && (
            <AllTeachers />
          )}
          {selectedSubMenu === "Add Teacher" && (
            <AddTeacher />
          )}
          {selectedSubMenu === "Edit Teacher" && (
            <EditTeacher />
          )}
          {selectedSubMenu === "About Teacher" && (
            <AboutTeacher />
          )}
          {selectedSubMenu === "Teacher Timetable" && (
            <TeacherTimeTable />
          )}
          {selectedSubMenu === "Assign Class Teacher" && (
            <AssignedTeacher />
          )}
          {selectedSubMenu === "All Student" && (
            <AllStudents />
          )}
          {selectedSubMenu === "Add Student" && (
            <AddStudents />
          )}
          {selectedSubMenu === "Edit Student" && (
            <EditStudents />
          )}
          {selectedSubMenu === "Student Attendance" && (
            <StudentAttendance />
          )}
          {selectedSubMenu === "All Course" && (
            <AllCourses />
          )}
          {selectedSubMenu === "Add Course" && (
            <AddCourse />
          )}
          {selectedSubMenu === "Edit Course" && (
            <EditCourse />
          )}
          {selectedSubMenu === "All Library Assets" && (
            <AllLibraryAsset />
          )}
          {selectedSubMenu === "Add Library Assets" && (
            <AddLibraryAsset />
          )}
          {selectedSubMenu === "Edit Library Assets" && (
            <EditLibraryAsset />
          )}
          {selectedSubMenu === "Book Status" && (
            <BookStatus />
          )}
          {selectedSubMenu === "All Departments" && (
            <AllDepartment />
          )}
          {selectedSubMenu === "Add Departments" && (
            <AddDepartments />
          )}
          {selectedSubMenu === "Edit Departments" && (
            <EditDepartments />
          )}
          {selectedSubMenu === "All Staff" && (
            <AllStaff />
          )}
          {selectedSubMenu === "Add Staff" && (
            <AddStaff />
          )}
          {selectedSubMenu === "Edit Staff" && (
            <EditStaff />
          )}
          {selectedSubMenu === "Staff Attendance" && (
            <StaffAttendance />
          )}
          {selectedSubMenu === "All Holiday" && (
            <AllHolidays />
          )}
          {selectedSubMenu === "Add Holiday" && (
            <AddHoliday />
          )}
          {selectedSubMenu === "Edit Holiday" && (
            <EditHoliday />
          )}
          {selectedSubMenu === "All Fees" && (
            <AllFees />
          )}
          {selectedSubMenu === "Add Fees" && (
            <AddFees />
          )}
          {selectedSubMenu === "Edit Fees" && (
            <EditFees />
          )}
          {selectedSubMenu === "Fees Type" && (
            <FeesType />
          )}
          {selectedSubMenu === "Fees Discount" && (
            <FeesDiscount />
          )}
          {selectedSubMenu === "Fees Receipt" && (
            <FeesReceipt />
          )}
          {selectedSubMenu === "Class List" && (
            <ClassList />
          )}
          {selectedSubMenu === "Class Timetable" && (
            <ClassTimeTable />
          )}
          {selectedSubMenu === "Room List" && (
            <RoomList />
          )}
          {selectedSubMenu === "Room Types" && (
            <RoomType />
          )}
          {selectedSubMenu === "Emp Leave Req" && (
            <EmployeeLeaveRequests />
          )}
          {selectedSubMenu === "Emp Leave Balance" && (
            <EmployeeLeaveBalance />
          )}
          {selectedSubMenu === "Leave Types" && (
            <LeaveTypes />
          )}
          {selectedSubMenu === "Holidays" && (
            <Holidays />
          )}
          {selectedSubMenu === "Today's Attendance" && (
            <TodaysAttendance />
          )}
          {selectedSubMenu === "Employee Salary" && (
            <EmployeeSalary />
          )}
          {selectedSubMenu === "Payslip" && (
            <Payslip />
          )}
        </main>
      </div>
    </div>
  );
}

export default AdminDashMain
