import { configureStore } from '@reduxjs/toolkit';
import categorySlice from './reducers/categorySlice';
import productSlice from './reducers/productSlice';
import tableSlice from './reducers/tableSlice';
import cartSlice from './reducers/cartSlice';

export const store = configureStore({
	reducer: {
		category: categorySlice,
		product: productSlice,
		table: tableSlice,
		cart : cartSlice
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
