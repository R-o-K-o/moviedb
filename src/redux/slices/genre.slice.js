import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    loading: true,
    genres: [],
};

const genreSlice = createSlice({
    name: 'genreSlice',
    initialState,
    reducers: {},
    extraReducers: {}
});

const {reducer: genreReducer} = genreSlice;

const genreActions = {

};

export {genreReducer, genreActions};