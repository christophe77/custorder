import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { ProductType } from '../../types/product';

interface ProductState {
	products: ProductType[];
}

const initialState: ProductState = {
	products: [
		{
			id: 1,
			categoryId: 1,
			name: 'Empanadas de carne',
			description: 'Empanadas de boeuf',
			picture: '/images/empanadas.jpeg',
			price: '3.50',
			qtyAvailable: 10,
		},
		{
			id: 2,
			categoryId: 1,
			name: 'Empanadas de pollo',
			description: 'Empanadas de poulet',
			picture: '/images/empanadas.jpeg',
			price: '3.50',
			qtyAvailable: 10,
		},
		{
			id: 3,
			categoryId: 1,
			name: 'Empanadas de queso',
			description: 'Empanadas de fromage',
			picture: '/images/empanadas.jpeg',
			price: '3.50',
			qtyAvailable: 10,
		},
		{
			id: 4,
			categoryId: 1,
			name: 'Choripan',
			description: 'Saucisse non piquante dans du pain frais',
			picture: '/images/choripan.jpg',
			price: '3.50',
			qtyAvailable: 10,
		},
		{
			id: 5,
			categoryId: 1,
			name: 'Ceviche de pescado',
			description:
				"Cabillaud cru mariné dans du jus de citron vert avec du persil et de l'oignon",
			picture: '/images/ceviche-de-pescado.jpg',
			price: '3.50',
			qtyAvailable: 10,
		},
		{
			id: 6,
			categoryId: 0,
			name: 'Coca Cola 33cl',
			description:
				"Cabillaud cru mariné dans du jus de citron vert avec du persil et de l'oignon",
			picture: '/images/coca-cola.png',
			price: '3.50',
			qtyAvailable: 10,
		},
		{
			id: 7,
			categoryId: 0,
			name: 'Sprite 33cl',
			description:
				"Cabillaud cru mariné dans du jus de citron vert avec du persil et de l'oignon",
			picture: '/images/sprite.jpg',
			price: '3.50',
			qtyAvailable: 10,
		},
	],
};

export const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {
		editProduct: (state, action: PayloadAction<number>) => {
			console.log('edit product');
		},
		addProduct: (state, action: PayloadAction<number>) => {
			console.log('add product');
		},
		removeProduct: (state, action: PayloadAction<number>) => {
			console.log('remove product');
		},
	},
});

export const { editProduct, addProduct, removeProduct } = productSlice.actions;

export const product = (state: RootState) => state.product;

export default productSlice.reducer;
