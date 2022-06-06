import axios from "axios";

import {API_TOKEN, API_URL} from "../constants";

export const axiosService = axios.create({
    baseURL: API_URL,
    headers: {
        Authorization: `Bearer ${API_TOKEN}`
    }
});