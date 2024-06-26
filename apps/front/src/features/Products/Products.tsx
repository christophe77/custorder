import { Grid } from '@mui/material';
import useProducts from './useProducts';
import { ProductType } from '../../types/product';
import Product from '../Product/Product';

export default function Products() {
	const { productsToShow } = useProducts();
	return (
		<Grid
			container
			sx={{
				mt: '30px',
			}}
			spacing={2}
		>
			{productsToShow.map((product: ProductType) => (
				<Grid item xs={6} sm={4} md={3} key={product.id}>
					<Product product={product} />
				</Grid>
			))}
		</Grid>
	);
}
