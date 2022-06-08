import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services";

const initialState = {
    loading: true,
    movies: [],
    error: null,
    totalPages: null
};

const getAll = createAsyncThunk(
    'movieSlice/getAll',
    async ({page, genreId}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAll(page, genreId);
            return data;
        }
        catch (e) {
            return rejectWithValue({status: e.message});
        }
    }
);

const search = createAsyncThunk(
    'movieSlice/search',
    async ({query}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.searchMovie(query);
            return data;
        }
        catch (e) {
            return rejectWithValue({status: e.message});
        }
    }
);

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                const {results, total_pages} = action.payload;
                state.movies = results;
                state.totalPages = total_pages;
                state.loading = false;
            })
            .addCase(getAll.rejected, (state, action) => {
                const {status} = action.payload;
                state.error = status;
            })

            .addCase(search.fulfilled, (state, action) => {
                const {results} = action.payload;
                state.movies = results;
            })
            .addCase(search.rejected, (state, action) => {
                const {status} = action.payload;
                state.error = status;
            })
    }
});

const {reducer: movieReducer} = movieSlice;

const movieActions = {
    getAll,
    search,
};

export {movieReducer, movieActions};