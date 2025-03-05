import { createSlice } from "@reduxjs/toolkit";
import 'react-toastify/dist/ReactToastify.css';
import { desiegg } from "../data";

const initialState = {
    data: desiegg
};

const eggSlice = createSlice({
    name: "eggs",
    initialState,
    reducers: {
        // You can add reducers here if needed
    }
});

// Selector function to get the product array from the state
export const getData = (state) => state.eggs.data;

export default eggSlice.reducer;