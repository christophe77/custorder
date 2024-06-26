import { useAppSelector } from '../../store/hooks';

const useService = () => {
	const { selectedTableId } = useAppSelector((state) => state.table);

	return { selectedTableId };
};
export default useService;
