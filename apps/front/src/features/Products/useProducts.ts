import { useAppSelector } from '../../store/hooks';
import { ProductType } from '../../types/product';

const useProducts = () => {
	const { selectedCategoryId } = useAppSelector((state) => state.category);
	const { products } = useAppSelector((state) => state.product);
    
	const productsToShow =
		products.filter(
			(product: ProductType) => product.categoryId === selectedCategoryId,
		) || [];

	return { productsToShow };
};
export default useProducts;
