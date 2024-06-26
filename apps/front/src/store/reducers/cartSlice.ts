import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { ProductType } from '../../types/product';

interface CartState {
	cart: ProductType[];
    count : number
}

const initialState: CartState = {
	cart: [],
    count : 0
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addProductToCart: (state, action: PayloadAction<number>) => {
			console.log('add product');
		},
		removeProductFromCart: (state, action: PayloadAction<number>) => {
			console.log('remove product');
		},
	},
});

export const {addProductToCart, removeProductFromCart} = cartSlice.actions;

export const cart = (state: RootState) => state.cart;

export default cartSlice.reducer;
