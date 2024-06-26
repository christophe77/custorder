import CartButton from '../../features/CartButton/CartButton';
import MenuTabs from '../../features/MenuTabs/MenuTabs';
import Products from '../../features/Products/Products';
import TableSelector from '../../features/TableSelector/TableSelector';
import useService from './useService';

export default function Service() {
	const { selectedTableId } = useService();

	return (
		<>
			<TableSelector />
			{selectedTableId !== -1 && (
				<>
					<MenuTabs />
					<Products />
					<CartButton />
				</>
			)}
		</>
	);
}
