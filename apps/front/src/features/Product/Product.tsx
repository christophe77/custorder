import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ProductType } from '../../types/product';

interface IProductProps {
	product: ProductType;
}
const Product = ({ product }: IProductProps) => {
	return (
		<Card sx={{ maxWidth: 345, mb: '30px' }}>
			<CardMedia
				sx={{ height: 140 }}
				image={product.picture}
				title={product.name}
			/>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{product.name}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{product.description}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					Quantity available : {product.qtyAvailable}
				</Typography>
			</CardContent>
			<CardActions>
				<Button size="small">Add</Button>
				<Button size="small">Remove</Button>
			</CardActions>
		</Card>
	);
};
export default Product;
