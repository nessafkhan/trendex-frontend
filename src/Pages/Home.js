import Banner from '../Components/Banner/Banner';
import NavBar from '../Components/Navbar/NavBar';
import ProductRow from '../Components/Product/ProductRow';
const Home = () => {
	return (
		<>
			<NavBar/>
			<section>
				<Banner/>
				<ProductRow />
			</section>
		</>
	);
};

export default Home;
