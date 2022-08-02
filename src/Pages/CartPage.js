import CartItemList from '../Components/Cart/CartItemList';
import NavBar from '../Components/Navbar/NavBar';
import CartTotalCard from '../Components/Cart/CartTotalCard';

const CartPage = () => {
	return (
		<>
			<NavBar />
			<section className="flex mt-24">
				<CartItemList />
				<CartTotalCard />
			</section>
		</>
	);
};
export default CartPage;
