import Product from './Product';

const ProductsRow = () => {
	return (
		<div className="w-auto md:flex flex-wrap">
			<Product />
			<Product />
			<Product />
			<Product />
			<Product />
			<Product />
			<Product />
		</div>
	);
};
export default ProductsRow;
