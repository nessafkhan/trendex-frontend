const CartTotalCard = () => {
	return (
		<div className="right-0 fixed w-1/2 shadow-lg rounded-lg sm:m-auto w-2/5">
			<h2 className="text-center font-semibold text-gray-500 sm:font-bold">PRICE DETAILS</h2>
			<table className="w-full">
				<tbody>
					<tr className="border-b">
						<td className="px-3 py-2  font-medium text-gray-900 sm:px-6 py-4">
							Price(2 items)
						</td>
						<td className="px-3 py-3 text-gray-900 sm:px-6 py-4">
							&#x20B9;43,999
						</td>
					</tr>
					<tr className="border-b">
						<td className="px-3 py-2 font-medium text-gray-900 sm:px-6 py-4">
							Delivery Charges
						</td>
						<td className="px-3 py-2 text-green-700 sm:px-6 py-4">FREE</td>
					</tr>
					<tr className="border-b">
						<td className="px-3 py-2 font-medium text-gray-900 sm:px-6 py-4">
							Discount
						</td>
						<td className="px-3 py-2 text-green-700 sm:px-6 py-4">
							-&#x20B9;1999
						</td>
					</tr>
				</tbody>
				<tfoot>
					<tr className="">
						<td className="px-3 py-2 font-bold text-gray-900 sm:px-6 py-4">
							Total Amount
						</td>
						<td className="px-3 py-2 font-bold text-gray-900 sm:px-6 py-4">
							&#x20B9;42000
						</td>
					</tr>
				</tfoot>
			</table>
		</div>
	);
};
export default CartTotalCard;
