const CartItem = () => {
	return (
		<div className="flex flex-wrap p-3 rounded-md sm:shadow-md mt-3">
			<div className="sm:ml-7">
				<img
					className="w-32 h-32 cursor-pointer"
					src="https://images.pexels.com/photos/7989741/pexels-photo-7989741.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100&w=100"
				/>
				<form className="mt-2">
					<button
						type="button"
						className="rounded-full px-3 py-1 border border-slate"
					>
						-
					</button>
					<input value={1} className="w-12 text-center" />
					<button
						type="button"
						className="rounded-full px-3 py-1 border border-slate"
					>
						+
					</button>
				</form>
			</div>
			<div className="sm:ml-4">
				<h3 className="font-medium text-sm cursor-pointer sm:font-semibold text-md hover:text-sky-700">
					Google Pixel6 256GB
				</h3>
				<p className="text-xs cursor-pointer sm:text-sm text-gray-500 hover:text-sky-700">
					Brand: Google
				</p>
				<h3 className="font-normal text-sm sm:mt-12 font-semibold text-lg">
					&#x20B9;43999
				</h3>
				<button className="px-1 py-1 text-red-300 border-1 border-slate-200 sm:mt-6 hover:text-red-400">
					REMOVE
				</button>
			</div>
		</div>
	);
};
export default CartItem;
