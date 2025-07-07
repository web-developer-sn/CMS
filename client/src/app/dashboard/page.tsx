'use client';

import React, { useEffect, useState } from 'react';
import AdminDashMain from './AdminDash/AdminDashMain';
import TeacherDashMain from './TeacherDashboard/TeacherDashMain';
import StudentDashMain from './studentDashboard/StudentDashMain';
import withAuth from '../components/auth/withAuth';

const Dashboard = () => {

  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedRole = localStorage.getItem('role');
      console.log("Raw localStorage role:", storedRole);
      if (storedRole) {
        setRole(storedRole.trim());
      } else {
        setRole('');
      }
    }
  }, []);

  console.log("State role:", role);

  if (role === null) {
    return <div>Loading... (Waiting for role)</div>;
  }

  return (
    <div>
      {role === 'admin' && <AdminDashMain />}
      {role === 'teacher' && <TeacherDashMain />}
      {role === 'student' && <StudentDashMain />}
      {role !== 'admin' && role !== 'teacher' && role !== 'student' && (
        <div>Unknown role: "{role}"</div>
      )}
    </div>
  );
};

export default withAuth(Dashboard) 
