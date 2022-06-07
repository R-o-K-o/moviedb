import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services";

const initialState = {
    loading: true,
    movies: [],
};

const getAll = createAsyncThunk(
    'movieSlice/getAll',
    async ({genreId}) => {
        const {data} = await movieService.getAll(genreId);
        return data;
    }
);

const search = createAsyncThunk(
    'movieSlice/search',
    async ({query}) => {
        const {data} = await movieService.searchMovie(query);
        return data;
    }
);

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                const {results} = action.payload;
                state.movies = results;
                state.loading = false;
            })
            .addCase(search.fulfilled, (state, action) => {
                const {results} = action.payload;
                state.movies = results;
            })
    }
});

const {reducer: movieReducer} = movieSlice;

const movieActions = {
    getAll,
    search,
};

export {movieReducer, movieActions};