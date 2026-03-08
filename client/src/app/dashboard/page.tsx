'use client'

import * as React from 'react'
import AdminDashMain from './AdminDash/AdminDashMain'
import TeacherDashMain from './TeacherDashboard/TeacherDashMain'
import StudentDashMain from './studentDashboard/StudentDashMain'
import Loader from '../lib/loader'
import ProtectedRoute from '../components/ProtectedRoute'
import { useAppSelector } from '@/redux/hooks'

const Dashboard = () => {

  const user = useAppSelector((state) => state.auth.user)
  const loading = useAppSelector((state) => state.auth.loading)

  const role = user?.role;
  console.log("role", role, user,loading);
  if (loading) {
    return <Loader />
  }

  // if (!role) {
  //   return <Loader />
  // }

  return (
    <ProtectedRoute>
      <div>
        {role === 'admin' && <AdminDashMain user={user}/>}
        {role === 'teacher' && <TeacherDashMain user={user} />}
        {role === 'student' && <StudentDashMain user={user} />}

        {!['admin','teacher','student'].includes(role) && (
          <div>Unknown role: "{role}"</div>
        )}
      </div>
    </ProtectedRoute>
  )
}

export default React.memo(Dashboard)