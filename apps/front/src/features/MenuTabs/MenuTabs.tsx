import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import useMenuTabs from './useMenuTabs';
import { CategoryType } from '../../types/category';

export default function MenuTabs() {
	const { categories, selectedCategoryId, handleChange } = useMenuTabs();

	return (
		<Box sx={{ width: '100%' }}>
			<Tabs
				value={selectedCategoryId}
				onChange={handleChange}
				textColor="secondary"
				indicatorColor="secondary"
				aria-label="Categories"
			>
				{categories.map((category: CategoryType) => {
					return (
						<Tab value={category.id} label={category.name} key={category.id} />
					);
				})}
			</Tabs>
		</Box>
	);
}
