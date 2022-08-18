import Banner from '../Components/Banner/Banner';
import NavBar from '../Components/Navbar/NavBar';
import ProductList from '../Components/Product/ProductList';
const Home = () => {
	return (
		<>
			<NavBar />
			<section>
				<Banner />
				<ProductList />
			</section>
		</>
	);
};

export default Home;
