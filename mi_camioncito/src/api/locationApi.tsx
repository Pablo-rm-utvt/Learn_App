import axios from "axios";

export const locationApi = axios.create({
    baseURL:"https://mundoajolote.mx"
});