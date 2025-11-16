import axios from "axios";

const axiosConfig = axios.create({
  baseURL: "https://xpenso-178l.onrender.com/api/v1.0",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// list of endpoints that do not require authorization header
const excludeEndpoints = [
  "/login",
  "/register",
  "/status",
  "/activate",
  "/health",
];

// request interceptor
axiosConfig.interceptors.request.use(
  (config) => {
    excludeEndpoints.some((endpoint) => config.url.includes(endpoint))
      ? config
      : (config.headers.Authorization = `Bearer ${localStorage.getItem(
          "token"
        )}`);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
