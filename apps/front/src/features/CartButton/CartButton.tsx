import Fab from '@mui/material/Fab';
import CartIcon from '@mui/icons-material/ShoppingCart';

export default function CartButton() {
	return (
		<Fab color="secondary" aria-label="edit">
			<CartIcon />
		</Fab>
	);
}
