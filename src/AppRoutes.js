import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import SignupPage from './Pages/SignupPage';
import LoginPage from './Pages/LoginPage';
import NotFound404 from './Pages/NotFound404';
import CartPage from './Pages/CartPage';

const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="signup" element={<SignupPage />} />
			<Route path="login" element={<LoginPage />} />
			<Route path="cart" element={<CartPage />} />
			<Route path="*" element={<NotFound404 />} />
		</Routes>
	);
};
export default AppRoutes;
