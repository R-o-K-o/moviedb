import {axiosService} from "./axios.service";
import {urls} from "../constants";

export const genreService = {
    getAll: () => axiosService.get(urls.genres),
};