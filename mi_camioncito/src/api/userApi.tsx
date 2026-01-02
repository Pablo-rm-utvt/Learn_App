import axios from "axios";

export const userApi = axios.create({
    baseURL: "http://mundoajolote.mx",
    timeout: 10000
})