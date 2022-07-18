import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isCartOpen: false,
	cartItems: []
};

const slice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		setCartItems(state, action) {
			state.cartItems = [...state.cartItems, action.payload]
		},
		setIsCartOpen(state, action) {
			state.isCartOpen = action.payload;
		},
	}
})

export const { setCartItems, setIsCartOpen } = slice.actions;

export default slice.reducer;