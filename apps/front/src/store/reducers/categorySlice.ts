import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { CategoryType } from '../../types/category';

interface CategoryState {
	categories: CategoryType[];
	selectedCategoryId: number;
}

const initialState: CategoryState = {
	categories: [
		{
			id: 0,
			name: 'drinks',
		},
		{
			id: 1,
			name: 'starters',
		},
		{
			id: 2,
			name: 'main courses',
		},
		{
			id: 3,
			name: 'desserts',
		},
	],
	selectedCategoryId: 0,
};

export const categorySlice = createSlice({
	name: 'category',
	initialState,
	reducers: {
		changeSelectedCategory: (state, action: PayloadAction<number>) => {
			state.selectedCategoryId = action.payload;
		},
	},
});

export const { changeSelectedCategory } = categorySlice.actions;

export const category = (state: RootState) => state.category;

export default categorySlice.reducer;
