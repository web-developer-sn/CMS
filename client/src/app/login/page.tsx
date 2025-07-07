"use client";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { loginRequest } from "../redux/actions/authActions";
import { RootState } from "../redux/store";
import { useRouter } from "next/navigation";
import LockIcon from '@mui/icons-material/Lock';
import { Link } from "@mui/material";
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
export default function Login() {
  const dispatch = useDispatch();
  const { loading, error, user } = useSelector((state: RootState) => state.auth);
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/dashboard");
    }
  }, [user, router]);


  const onSubmit = (data: any) => {
    debugger;
    dispatch(loginRequest(data.email, data.password, data?.role));
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
          <h2 className="text-2xl font-semibold text-center text-teal-600 mb-4">Login</h2>
          {error && <p className="text-red-500 text-sm text-center mb-3">{error}</p>}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div className="relative">
              <div className="absolute top-0 left-0 p-3">
                <LockIcon sx={{ color: "gray", fontWeight: "400" }} />
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
                <LockIcon sx={{ color: "gray", fontWeight: "400" }} />
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
                <AdminPanelSettingsOutlinedIcon sx={{ color: "gray", fontWeight: "400" }} />
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

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <input type="checkbox" />
                <p className="text-sm whitespace-nowrap text-gray-600">Remember Me</p>
              </div>
              <Link href="#" className="no-underline text-sm text-blue-500 hover:underline">
                Forget Password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-all duration-300"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <button
                onClick={() => router.push("/register")}
                className="mt-2 text-blue-500 font-semibold hover:text-blue-700 hover:underline transition-all duration-300 ease-in-out"
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
