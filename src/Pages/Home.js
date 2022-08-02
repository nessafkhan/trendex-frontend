import NavBar from '../Components/Navbar/NavBar';
import ProductsRow from '../Components/Products/ProductsRow';
const Home = () => {
	return (
		<>
			<NavBar />
			<section className="mt-24">
				<ProductsRow />
			</section>
		</>
	);
};

export default Home;
