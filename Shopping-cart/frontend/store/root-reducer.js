import { combineReducers } from '@reduxjs/toolkit';
import userReducer from '../slices/user';
import cartReducer from '../slices/cart';
import productsReducer from '../slices/products';

export const rootReducer = combineReducers({
	user: userReducer,
	cart: cartReducer,
	products: productsReducer
});
