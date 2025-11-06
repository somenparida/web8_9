import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // from .env file
  withCredentials: false, // set true if you use cookies for auth
});

export default API;
