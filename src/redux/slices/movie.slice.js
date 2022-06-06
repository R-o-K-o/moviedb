import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services";

const initialState = {
    loading: true,
    movies: [],
};

const getAll = createAsyncThunk(
    'movieSlice/getAll',
    async () => {
        const {data} = await movieService.getAll();
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
    }
});

const {reducer: movieReducer} = movieSlice;

const movieActions = {
    getAll,
};

export {movieReducer, movieActions};