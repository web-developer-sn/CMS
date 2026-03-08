'use client'

import * as React from 'react'
import AdminDashMain from './AdminDash/AdminDashMain'
import TeacherDashMain from './TeacherDashboard/TeacherDashMain'
import StudentDashMain from './studentDashboard/StudentDashMain'
import Loader from '../lib/loader'
import ProtectedRoute from '../components/ProtectedRoute'
import { useAppSelector } from '@/redux/hooks'
import { useRouter } from 'next/navigation'

const Dashboard = () => {
  const router=useRouter();
  const user = useAppSelector((state) => state.auth.user)
  const loading = useAppSelector((state) => state.auth.loading)

  const role = user?.role;
  console.log("role", role, user,loading);
  if (loading) {
    return <Loader />
  }

  

  return (
    <ProtectedRoute>
      <div>
        {role === 'admin' && <AdminDashMain user={user}/>}
        {role === 'teacher' && <TeacherDashMain user={user} />}
        {role === 'student' && <StudentDashMain user={user} />}

        {!['admin','teacher','student'].includes(role) && (
         <div className="flex justify-center md:justify-start">
  <button
    onClick={() => router.push("/login")}
    className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
  >
    Login
  </button>
</div>
        )}
      </div>
    </ProtectedRoute>
  )
}

export default React.memo(Dashboard)
