import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import SignupPage from './Pages/SignupPage';
import LoginPage from './Pages/LoginPage';

const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="signup" element={<SignupPage />} />
			<Route path="login" element={<LoginPage />} />
		</Routes>
	);
};
export default AppRoutes;
