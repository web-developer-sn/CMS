import { useState, useEffect } from "react";

const useAuthToken = () => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedToken = localStorage.getItem("token");
      setToken(storedToken && storedToken !== "null" ? storedToken : null);
    }
  }, []);

  return token;
};

export default useAuthToken;
