import CartIcon from "../../assets/CartIcon";
 
 const Product = () => {
	return (
		<div className="w-80 bg-gray-200 shadow-lg rounded-lg m-2 cursor-pointer hover:translate-y-0.5 transition-all duration-300 ease-in-out hover:shadow-xl">
			<div
				className="h-48 w-11/12 m-auto mt-2 p-4 bg-cover bg-center"
				style={{
					backgroundImage: `url('https://images.pexels.com/photos/7989741/pexels-photo-7989741.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')`,
				}}
			>
				{/* TODO: add offer label */}
			</div>
			<div className="flex flex-col items-center p-4">
				<h3 className="font-bold mt-1">Pixel6 256GB</h3>
				<p className="text-xs mt-1">Google</p>
				<h3 className="font-semibold mt-3">&#x20B9; 43,999</h3>
				<button className="mt-2 flex items-center justify-center py-2 px-4 w-full rounded-sm border-2 border-teal-800 focus:ring-1 ring-teal-700">
					Add to cart{' '}
					<CartIcon h={6} w={4} ml={2} />
				</button>
				<button className="mt-2	 w-full p-2 bg-teal-700 rounded-sm text-white hover:bg-teal-800">
					Buy now
				</button>
			</div>
		</div>
	);
};
export default Product;
