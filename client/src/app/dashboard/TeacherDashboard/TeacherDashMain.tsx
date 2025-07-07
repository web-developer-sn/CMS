'use client';

import { useState } from 'react';
import { Sheet, List, ListItem, ListItemButton, ListItemDecorator, Typography, Drawer } from '@mui/joy';
import { Avatar, useMediaQuery } from '@mui/material';
import { Menu } from 'lucide-react';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PowerSettingsNewOutlinedIcon from '@mui/icons-material/PowerSettingsNewOutlined';
import TeacherDashBoard from './Dashboard';
import Lectures from './Lectures';
import LeaveRequestTeacher from './LeaveRequest';
import ExamSchedule from './ExamSchedule';
import SettingTeacher from './Settings';
import { useDispatch } from 'react-redux';
import { logout } from '@/app/redux/actions/authActions';
import { useRouter } from "next/navigation";

const TeacherDashMain = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const [collapsed, setCollapsed] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const isMobile = useMediaQuery('(max-width: 768px)');
    const [drawerOpen, setDrawerOpen] = useState(false);

    const menuItems = [
        { label: 'Dashboard', icon: <DashboardCustomizeOutlinedIcon fontSize="small" />, path: '#' },
        { label: 'Lectures', icon: <MenuBookOutlinedIcon fontSize="small" />, path: '#' },
        { label: 'Leave Request', icon: <AssignmentTurnedInOutlinedIcon fontSize="small" />, path: '#' },
        { label: 'Exam Schedule', icon: <EventNoteOutlinedIcon fontSize="small" />, path: '#' },
        { label: 'Settings', icon: <SettingsOutlinedIcon fontSize="small" />, path: '#' },
        { label: 'Logout', icon: <PowerSettingsNewOutlinedIcon fontSize="small" />, path: '#' },
    ];
    const Logaout = () => {
        dispatch(logout());
        router.push("/login")

    }
    const renderMenu = () => (
        <Sheet className={`bg-white dark:bg-slate-800 transition-all duration-300 ${collapsed ? 'w-16' : 'w-64'} flex flex-col`}>
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

            {!collapsed && (
                <div className="flex flex-col items-center text-center gap-1 mb-4">
                    <Avatar
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH6jA3i35aN3YEfmMQxG-QWQkl_09EEeEiBh9YL8L0pk7-DkdwgmDX8yo&s"
                        alt="User Avatar"
                        sx={{ borderRadius: 2, width: 150, height: 150 }}
                    />
                    <Typography level="title-md" className="font-semibold">
                        Pushpanjali Gupta
                    </Typography>
                    <p className="text-sm text-gray-500 dark:text-gray-300">Teacher</p>
                </div>
            )}

            <List sx={{ flex: 1 }}>
                {menuItems.map((item, index) => (
                    <ListItem key={index} sx={{ borderRadius: 'md' }}>
                        <ListItemButton
                            onClick={() => {
                                setSelectedIndex(index);
                                if (isMobile) setDrawerOpen(false);
                                if (item?.label === "Logout") {
                                    Logaout()
                                }
                            }}
                            sx={{
                                borderRadius: 'md',
                                bgcolor: selectedIndex === index ? '#0284C7' : 'transparent',
                                color: selectedIndex === index ? 'white' : 'text.primary',
                                '& svg': {
                                    color: selectedIndex === index ? 'white' : 'text.primary',
                                },
                                '&:hover': {
                                    bgcolor: selectedIndex === index ? '#0284C7' : 'primary.softBg',
                                    color: selectedIndex === index ? 'white' : 'text.primary',
                                    '& svg': {
                                        color: selectedIndex === index ? 'white' : 'text.primary',
                                    },
                                },
                            }}
                        >
                            <ListItemDecorator>
                                {item.icon}
                            </ListItemDecorator>
                            {!collapsed && item.label}
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Sheet>
    );

    return (
        <div className="flex h-screen">
            {!isMobile && renderMenu()}
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

                <main className="overflow-auto flex-1 bg-sky-50 dark:bg-sky-900 p-4">
                    {menuItems[selectedIndex].label === "Dashboard" && (
                        <TeacherDashBoard />
                    )}
                    {menuItems[selectedIndex].label === "Lectures" && (
                        <Lectures />
                    )}
                    {menuItems[selectedIndex].label === "Leave Request" && (
                        <LeaveRequestTeacher />
                    )}
                    {menuItems[selectedIndex].label === "Exam Schedule" && (
                        <ExamSchedule />
                    )}
                    {menuItems[selectedIndex].label === "Settings" && (
                        <SettingTeacher />
                    )}
                    {menuItems[selectedIndex].label === "Logout" && (
                        <ExamSchedule />
                    )}
                </main>
            </div>
        </div>
    );
}

export default TeacherDashMain
