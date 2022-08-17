import CartIcon from '../../assets/CartIcon';

const Product = ({title, brand, image, price}) => {
	return (
		<div className="w-80 shadow-xl rounded-lg m-2 cursor-pointer hover:translate-y-0.5 transition-all duration-300 ease-in-out hover:shadow-xl">
			<div
				className="h-48 w-11/12 m-auto mt-2 p-4 bg-cover bg-center"
				style={{
					backgroundImage: `url('https://dummyjson.com/image/i/products/2/thumbnail.jpg')`,
				}}
			>
				{/* TODO: add offer label */}
			</div>
			<div className="flex flex-col items-center p-4">
				<h3 className="font-bold mt-1">iphone X</h3>
				<p className="text-xs mt-1">Apple</p>
				<h3 className="font-semibold mt-3">&#x20B9;46,999</h3>
				<button className="mt-2 flex items-center justify-center py-2 px-4 w-full rounded-sm border-2 border-teal-800 focus:ring-1 ring-teal-700">
					Add to cart <CartIcon h={6} w={4} ml={2} />
				</button>
				<button className="mt-2	 w-full p-2 bg-teal-700 rounded-sm text-white hover:bg-teal-800">
					Buy now
				</button>
			</div>
		</div>
	);
};
export default Product;
