import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {genreService} from "../../services";

const initialState = {
    loading: true,
    genres: [],
    page: null
};

const getAll = createAsyncThunk(
    'genreSlice/getAll',
    async () => {
        const {data} = await genreService.getAll();
        return data;
    }
);

const genreSlice = createSlice({
    name: 'genreSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                const {genres, page} = action.payload
                state.genres = genres;
                state.page = page;
            })
    }
});

const {reducer: genreReducer} = genreSlice;

const genreActions = {
    getAll,
};

export {genreReducer, genreActions};