'use client';
import React, {  useState } from 'react';
import AdminDashMain from './AdminDash/AdminDashMain';
import TeacherDashMain from './TeacherDashboard/TeacherDashMain';
import StudentDashMain from './studentDashboard/StudentDashMain';
import Loader from '../lib/loader';
import ProtectedRoute from '../components/ProtectedRoute';

const Dashboard = () => {

  const [role] = useState<string | null>("student");

  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     const storedRole = localStorage.getItem('role');
  //     console.log("Raw localStorage role:", storedRole);
  //     if (storedRole) {
  //       setRole(storedRole.trim());
  //     } else {
  //       setRole('');
  //     }
  //   }
  // }, []);

  console.log("State role:", role);

  if (role === null) {
    return <Loader/>;
  }

  return (
    <ProtectedRoute>
    <div>
      {role === 'admin' && <AdminDashMain />}
      {role === 'teacher' && <TeacherDashMain />}
      {role === 'student' && <StudentDashMain />}
      {role !== 'admin' && role !== 'teacher' && role !== 'student' && (
        <div>Unknown role: &quot;{role}&quot;</div>
      )}
    </div>
    </ProtectedRoute>
  );
};

export default Dashboard
