import { createSlice } from "@reduxjs/toolkit";
import 'react-toastify/dist/ReactToastify.css';
import { product } from "../data";

const initialState = {
    product : product
};
const roosterSlice = createSlice({
    name: "rooster",
    initialState,
    reducers: {
        // You can add reducers here if neede
    }
});

// Selector function to get the product array from the state
export const selectProducts = (state) => state.rooster.product;

export default roosterSlice.reducer;