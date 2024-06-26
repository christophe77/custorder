import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { TableType } from '../../types/table';

interface TableState {
	tables: TableType[];
	selectedTableId: number;
}

const initialState: TableState = {
	tables: [
		{
			id: 0,
			name: '1',
		},
		{
			id: 1,
			name: '2',
		},
		{
			id: 2,
			name: '3',
		},
		{
			id: 3,
			name: '4',
		},
	],
	selectedTableId: -1,
};

export const tableSlice = createSlice({
	name: 'table',
	initialState,
	reducers: {
		changeSelectedTable: (state, action: PayloadAction<number>) => {
			state.selectedTableId = action.payload;
		},
	},
});

export const { changeSelectedTable } = tableSlice.actions;

export const category = (state: RootState) => state.category;

export default tableSlice.reducer;
