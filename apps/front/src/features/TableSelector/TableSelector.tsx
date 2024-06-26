import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import useTableSelector from './useTableSelector';
import { TableType } from '../../types/table';

export default function TableSelector() {
	const { tables, selectedTableId, handleChange } = useTableSelector();

	return (
		<Box sx={{ minWidth: 120, mt: '20px', mb: '20px' }}>
			<FormControl fullWidth>
				<InputLabel id="select-table">Table</InputLabel>
				<Select
					labelId="select-label"
					id="select"
					value={String(selectedTableId)}
					label="Table"
					onChange={handleChange}
				>
					<MenuItem value={-1}>{''}</MenuItem>
					{tables.map((table: TableType) => {
						return (
							<MenuItem key={table.id} value={table.id}>
								{table.name}
							</MenuItem>
						);
					})}
				</Select>
			</FormControl>
		</Box>
	);
}
