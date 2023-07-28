import axios from "axios";
//  console.log(import.meta.env.VITE_BE_URL);
export const axiosClient = axios.create({
  baseUrl: import.meta.env.VITE_BE_URL,
  withCredentials: true,
});
