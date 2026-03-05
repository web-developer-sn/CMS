"use client"

import { ReactNode, useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Loader from "../lib/loader"

interface ProtectedRouteProps {
  children: ReactNode
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {

  const router = useRouter()
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    const token = localStorage.getItem("token")

    if (!token) {
      router.replace("/login")
    }

    setLoading(false)

  }, [router])

  if (loading) {
    return <Loader />
  }

  return <>{children}</>
}

export default ProtectedRoute