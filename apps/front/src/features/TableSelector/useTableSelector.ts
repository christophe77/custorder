import { SelectChangeEvent } from '@mui/material/Select';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { changeSelectedTable } from '../../store/reducers/tableSlice';

const useTableSelector = () => {
	const dispatch = useAppDispatch();
	const { tables, selectedTableId } = useAppSelector((state) => state.table);

	const handleChange = (event: SelectChangeEvent) => {
		dispatch(changeSelectedTable(Number(event.target.value)));
	};
	return { tables, selectedTableId, handleChange };
};
export default useTableSelector;
