import { createSlice } from "@reduxjs/toolkit";
import 'react-toastify/dist/ReactToastify.css';
import { chick } from "../data";

const initialState = {
      chick : chick
};
const chickSlice = createSlice({
    name: "chick",
    initialState,
    reducers: {
        // You can add reducers here if needed
    }
});

// Selector function to get the product array from the state
export const selectProducts = (state) => state.chick.chick;

export default chickSlice.reducer;