"use client";

import * as React from "react";
import { loginRequest } from "@/redux/actions/authActions";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockIcon from "@mui/icons-material/Lock";
import { Link } from "@mui/material";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import Image from "next/image";

interface ILoginForm {
  email: string;
  password: string;
  role: string;
}

export default function Login() {

  const { register, handleSubmit } = useForm<ILoginForm>();
  const router = useRouter();
  const dispatch = useAppDispatch();

  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  const onSubmit = (data: ILoginForm) => {
    dispatch(
      loginRequest({
        email: data.email,
        password: data.password,
        role: data.role,
      })
    );
  };

 
  React.useEffect(() => {
    if (isAuthenticated) {
      router.push("/dashboard");
    }
  }, [isAuthenticated, router]);

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row">

      {/* Left Image */}
      <div className="relative w-full md:w-1/2 h-64 md:h-screen">
        <Image
          src="/bg-01.png"
          alt="Education"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Right Login */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">

          <h2 className="text-2xl font-semibold text-center text-sky-600 mb-4">
            Login
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

            {/* Email */}
            <div className="relative">
              <div className="absolute top-3 left-3">
                <LockIcon sx={{ color: "gray" }} />
              </div>

              <input
                {...register("email")}
                type="email"
                placeholder="Email"
                className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            {/* Password */}
            <div className="relative">
              <div className="absolute top-3 left-3">
                <LockIcon sx={{ color: "gray" }} />
              </div>

              <input
                {...register("password")}
                type="password"
                placeholder="Password"
                className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            {/* Role */}
            <div className="relative">
              <div className="absolute top-3 left-3">
                <AdminPanelSettingsOutlinedIcon sx={{ color: "gray" }} />
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

            {/* Remember + Forgot */}
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <input type="checkbox" />
                <p className="text-gray-600">Remember Me</p>
              </div>

              <Link href="#" className="text-blue-500 hover:underline">
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition"
            >
              Login
            </button>

          </form>

          <div className="mt-4 text-center text-sm">
            <p className="text-gray-600">
              Don't have an account?
              <button
                onClick={() => router.push("/register")}
                className="ml-1 text-blue-500 font-semibold hover:underline"
              >
                Register
              </button>
            </p>
          </div>

        </div>
      </div>

    </div>
  );
}