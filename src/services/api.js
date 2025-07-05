import axios from "axios";
import { getToken, removeToken } from "./authService";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:7007/api/v1";

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach token to every request if available
apiClient.interceptors.request.use(
  (config) => {
    const token = getToken && getToken();
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    // If data is FormData, remove Content-Type to let browser set it with boundary
    if (config.data instanceof FormData) {
      delete config.headers["Content-Type"];
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// Handle token expiration globally
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (
      error.response &&
      error.response.status === 401 &&
      error.response.data?.message?.toLowerCase().includes("expired")
    ) {
      removeToken();
      if (typeof window !== "undefined") {
        window.location.href = "/auth/login?expired=1";
      }
    }
    return Promise.reject(error);
  }
);

export default apiClient;
