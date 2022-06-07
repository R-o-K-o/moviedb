import {axiosService} from "./axios.service";
import {urls} from "../constants";

export const movieService = {
    getAll: (genreId) => axiosService.get(urls.movies, {
        params: {
            with_genres: genreId,
        },
    }),
    getById: (id) => axiosService.get(`${urls.movie}/${id}`),
    getTrailer: (id) => axiosService.get(`${urls.movie}/${id}/videos`),
    getCast: (id) => axiosService.get(`${urls.movie}/${id}/credits`),
    searchMovie: (query) => axiosService.get(urls.search, {
        params: {
            query,
        }
    })
};