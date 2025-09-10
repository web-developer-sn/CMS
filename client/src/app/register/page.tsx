"use client";
import * as React from 'react'
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { registerRequest } from "../redux/actions/authActions";
import { RootState } from "../redux/store";
import { useRouter } from "next/navigation";
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import axios from 'axios';
export default function Register() {
  const dispatch = useDispatch();
  const { loading, error, type } = useSelector((state: RootState) => state.auth);
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  // const onSubmit = (data: any) => {
  //   dispatch(registerRequest(data.name, data.email, data.password, data.role));

  //   if (type === "REGISTER_SUCCESS") {
  //     router.push('/login')
  //   }
  // };

  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/";
  const onSubmit = async (data: any) => {
    let res = await axios.post(`${API_BASE_URL}/api/auth/register`, { name: data?.name, email: data?.email, password: data?.password, role: data?.role });
    console.log("user", res)
    if (res.data?.action === "success") {
      router.push("/login")
    }
  };

  return (

    <div className="min-h-screen w-full flex flex-col md:flex-row">
      {/* Left Side - Image */}
      <div className="w-full md:w-1/2 h-1/2 md:h-screen">
        <img
          src="/bg-01.png"
          alt="ChitChat Logo"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full md:w-1/2 h-1/2 md:h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white p-6">
          <h2 className="text-2xl font-semibold text-center text-sky-600 mb-4">Register</h2>
          {error && <p className="text-red-500 text-sm text-center mb-3">{error}</p>}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div className="relative">
              <div className="absolute top-0 left-0 p-3">
                <PersonIcon sx={{ color: "gray", fontWeight: "400" }} /> {/* Material Icon for name */}
              </div>
              <input
                {...register("name")}
                type="text"
                placeholder="Full Name"
                className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            <div className="relative">
              <div className="absolute top-0 left-0 p-3">
                <EmailIcon sx={{ color: "gray", fontWeight: "400" }} /> {/* Material Icon for email */}
              </div>
              <input
                {...register("email")}
                type="email"
                placeholder="Email"
                className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            <div className="relative">
              <div className="absolute top-0 left-0 p-3">
                <LockIcon sx={{ color: "gray", fontWeight: "400" }} /> {/* Material Icon for password */}
              </div>
              <input
                {...register("password")}
                type="password"
                placeholder="Password"
                className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            <div className="relative">
              <div className="absolute top-0 left-0 p-3">
                <AdminPanelSettingsOutlinedIcon sx={{ color: "gray", fontWeight: "400" }} /> {/* Material Icon for role */}
              </div>
              <select
                {...register("role")}
                className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              >
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
                <option value="admin">Admin</option>
              </select>
            </div>


            <button
              type="submit"
              className="w-full py-3 bg-sky-600 text-white rounded-lg hover:bg-sky-600 transition-all duration-300"
            >
              {loading ? "Registering..." : "Register"}
            </button>
          </form>

          <div className="mt-4 text-center">
            <p className="text-sm text-gray-500">Already have an account? <button
              onClick={() => router.push("/login")}
              className="mt-2 text-sky-500 font-semibold hover:text-sky-700 hover:underline transition-all duration-300 ease-in-out"
            >
              Login
            </button></p>

          </div>
        </div>
      </div>
    </div>

  );
}