import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Login from './Pages/Login';

const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
            <Route path="signup" element={<Signup />} />
            <Route path="login" element={<Login />} />
		</Routes>
	);
};
export default AppRoutes;
