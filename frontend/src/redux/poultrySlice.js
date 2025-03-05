import { createSlice } from "@reduxjs/toolkit";
import 'react-toastify/dist/ReactToastify.css';
import { poultry } from "../data";

const initialState = {
    data : poultry
};
const poultrySlice = createSlice({
    name: "poultry",
    initialState,
    reducers: {
        // You can add reducers here if neede
    }
});

// Selector function to get the product array from the state
export const selectProducts = (state) => state.poultry.data;

export default poultrySlice.reducer;