import baseAxios from "axios";

const axios = baseAxios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json"
  },
  withCredentials: true
});

export default axios;