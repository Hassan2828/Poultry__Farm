import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialState = {
    cart: [],
    total: 0,
};

const cartSystem = createSlice({
    name: "cart",
    initialState, 
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;
            console.log("hiiiii",action);

            const existingItemIndex = state.cart.findIndex((cartItem) => cartItem.id === item.id);
            if (existingItemIndex >= 0) {
                state.cart[existingItemIndex].quantity += 1;
            } else {
                state.cart.push({ ...item, quantity: 1 }); 
            }
            state.total += item.price

            toast.success("Item added to cart");
        },
        removeFromCart: (state, action) => {
            const itemId = action.payload;
            const index = state.cart.findIndex((item) => item.id === itemId);
            
            if (index >= 0) {
                state.quantity--;
                state.total -= state.cart[index].price;
                state.cart.splice(index, 1);
                
                localStorage.setItem("cart", JSON.stringify(state.cart));
                localStorage.setItem("total", JSON.stringify(state.total));
                localStorage.setItem("quantity", JSON.stringify(state.quantity));
                
                toast.success("Item removed from cart");
            }
        },
        increaseQuantity: (state, action) => {
            console.log("hiiiii",action);

            const index = state.cart.findIndex((item) => item.id === action.payload.id); 
            if (index >= 0) {
                state.cart[index].quantity += 1;
                state.total += state.cart[index].price; 
            }
            console.log("hsdkj",index);
        },
        decreaseQuantity: (state, action) => {
            const index = state.cart.findIndex((item) => item.id === action.payload.id); 
            if (index >= 0 && state.cart[index].quantity > 1) {
                state.cart[index].quantity -= 1;
                // state.total -= state.cart[index].price; //hassan
            } else if (state.cart[index].quantity === 1) {
                state.cart = state.cart.filter((item) => item.id !== action.payload.id);
                // state.quantity--;   //hassan 
                // state.total -= state.cart[index].price; // comment
            }
        },
        resetCart: (state) => {
            state.cart = [];
            state.quantity = 0;
            state.total = 0;

            localStorage.removeItem("cart");
            localStorage.removeItem("total");
            localStorage.removeItem("quantity");
            
            toast.success("Cart has been reset");
        },
    }
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, resetCart } = cartSystem.actions;
export default cartSystem.reducer;