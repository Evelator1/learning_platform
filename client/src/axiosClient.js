import axios from 'axios'

export const  axiosClient = axios.create({
    baseUrl: import.meta.env.VITE_BE_URL,
    withCredentials:true}
)