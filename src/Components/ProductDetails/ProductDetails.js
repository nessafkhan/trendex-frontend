import CartIcon from '../../assets/CartIcon';

const ProductDetails = () => {
	return (
		<div className="flex mt-20 p-4 h-68 sm:p-12">
			<div className="flex-1 w-full">
				<img
					className="h-full sm:h-4/5 w-full"
					src="https://i.ibb.co/W5DDzgZ/pexels-melvin-buezo-2529148.jpg"
					alt=""
				/>
			</div>
			<div className="flex-1 w-full mx-2 h-full flex flex-col justify-between sm:mx-4 h-4/5">
				<div className="">
					<h3 className="font-bold text-lg sm:text-6xl">
						jordan Air
					</h3>
					<h6 className="text-sm text-gray-500 sm:mt-2 text-lg">
						Nike
					</h6>
					<p className="text-xs text-gray-900 leading-4 mt-1 sm:text-base">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua...
					</p>
					<h4 className="font-bold text-base my-3 sm:my-4 sm:text-2xl">
						&#x20B9;6999
					</h4>
				</div>
				<form className="">
					<button
						type="button"
						className="rounded-full px-3 py-1 border border-slate"
					>
						-
					</button>
					<input value={1} className="w-8 text-center" />
					<button
						type="button"
						className="rounded-full px-3 py-1 border border-slate"
					>
						+
					</button>
				</form>

				<button className="mt-8 text-sm flex items-center justify-center rounded-sm border-2 border-teal-800 sm:text-lg py-1 focus:ring-1 ring-teal-700">
					Add to cart <CartIcon h={6} w={4} ml={2} />
				</button>
				<button className="mt-2 px-2 py-1 bg-teal-700 rounded-sm text-sm text-white sm:text-lg py-2 hover:bg-teal-800">
					Buy now
				</button>
			</div>
		</div>
	);
};
export default ProductDetails;
