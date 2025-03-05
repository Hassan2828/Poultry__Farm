import { createSlice } from "@reduxjs/toolkit";
import 'react-toastify/dist/ReactToastify.css';
import { chickhome } from "../data";

const initialState = {
    data : chickhome
};
const homeSlice = createSlice({
    name: "home",
    initialState,
    reducers: {
        // You can add reducers here if needed
    }
});

// Selector function to get the product array from the state
export const selectProducts = (state) => state.home.data;

export default homeSlice.reducer;