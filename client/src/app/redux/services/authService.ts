import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/";

export const registerUserAPI = async (name: string, email: string, password: string, role: string) => {
  const response = await axios.post(`${API_BASE_URL}/api/auth/register`, { name, email, password, role });
  return response.data;
};

export const loginUserAPI = async (email: string, password: string, role: string) => {
  const response = await axios.post(
    `${API_BASE_URL}/api/auth/login`,
    { email, password, role },
    { withCredentials: true } // ✅ THIS IS MUST
  );
  return response.data;
};

