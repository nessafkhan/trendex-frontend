const Product = () => {
	return (
		<div className="w-80 bg-gray-100 shadow-lg rounded-sm m-2 cursor-pointer hover:translate-y-0.5 transition-all duration-300 ease-in-out hover:shadow-xl">
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
					<svg
						className="ml-2 h-6 w-4"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
						/>
					</svg>
				</button>
				<button className="mt-2	 w-full p-2 bg-teal-700 rounded-sm text-white hover:bg-teal-800">
					Buy now
				</button>
			</div>
		</div>
	);
};
export default Product;
