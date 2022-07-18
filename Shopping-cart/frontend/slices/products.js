import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	products: []
};

const slice = createSlice({
	name: "products",
	initialState,
	reducers: {
		setProducts(state, action) {
			state.products = action.payload
		},
	}
})

export const { setProducts } = slice.actions;

export default slice.reducer;