import axios from "axios";
const API_URL: string = process.env.VUE_APP_API_URL;

export const httpService = axios.create({
    baseURL: API_URL,
    // headers: {
    //     "Content-Type": "application/json",
    // },
});
