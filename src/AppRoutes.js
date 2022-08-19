import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import SignupPage from './Pages/SignupPage';
import LoginPage from './Pages/LoginPage';
import CartPage from './Pages/CartPage';
import ProductDetailPage from './Pages/ProductDetailPage';
import NotFound404 from './Pages/NotFound404';


const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="signup" element={<SignupPage />} />
			<Route path="login" element={<LoginPage />} />
			<Route path="cart" element={<CartPage />} />
			<Route path='product' element={<ProductDetailPage/>}/>
			<Route path="*" element={<NotFound404 />} />
		</Routes>
	);
};
export default AppRoutes;
