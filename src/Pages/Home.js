import NavBar from '../Components/Navbar/NavBar';
import ProductsRow from '../Components/Products/ProductsRow';
const Home = () => {
	return (
		<>
			<NavBar />
			<section className="mt-7 mx-auto">
				<ProductsRow />
			</section>
		</>
	);
};

export default Home;
