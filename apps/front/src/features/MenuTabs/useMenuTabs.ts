import { SyntheticEvent } from 'react';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { changeSelectedCategory } from '../../store/reducers/categorySlice';

const useMenuTabs = () => {
	const dispatch = useAppDispatch();
	const { categories, selectedCategoryId } = useAppSelector(
		(state) => state.category,
	);

	const handleChange = (_event: SyntheticEvent, newCategoryId: number) => {
		dispatch(changeSelectedCategory(newCategoryId));
	};
	return { categories, selectedCategoryId, handleChange };
};
export default useMenuTabs;
