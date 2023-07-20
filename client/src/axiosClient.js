import axios from "axios";
// console.log(import.meta.env.VITE_BE_URL);
export const axiosClient = axios.create({
  baseUrl: "http://localhost:3010",
  withCredentials: true,
});
