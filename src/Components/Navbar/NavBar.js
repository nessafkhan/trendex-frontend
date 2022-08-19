import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Search from '../../assets/Search';
import Menu from '../../assets/Menu';
import CartIcon from '../../assets/CartIcon';

const NavBar = () => {
	const [showItems, setshowItems] = useState(false);
	const [user, setUser] = useState(true);
	const menuTogglerHandler = () => setshowItems(false);
	return (
		<nav className="top-0 fixed z-10 w-full flex justify-around items-center bg-white h-20 shadow-sm">
			<NavLink to="/">
				<h3 className="self-center text-xl font-semibold">trendex</h3>
			</NavLink>
			<button
				onClick={menuTogglerHandler}
				data-collapse-toggle="navbar-default"
				type="button"
				className="md:hidden order-2 hover:bg-gray-100 focus:outline-none"
				aria-controls="navbar-default"
				aria-expanded="false"
			>
				<Menu />
			</button>
			<div className="hidden md:block md:w-auto" id="navbar-default">
				<ul className="flex items-center">
					<li className="block py-2 px-5 text-md font-medium  hover:text-teal-800">
						<NavLink to="/">Home</NavLink>
					</li>
					<li className="block py-2 px-5 text-md font-medium hover:text-teal-800">
						<NavLink to="/featured">Featured</NavLink>
					</li>
					<li className="block py-2 px-5 text-md font-medium hover:text-eal-800">
						<select
							name="categories"
							id="categories"
							className="bg-white cursor-pointer focus:outline-none hover:text-teal-800"
						>
							<option value="">Categories</option>
							<option value="jeans">Jeans</option>
							<option value="shirts">Shirts</option>
							<option value="trousers">Trousers</option>
							<option value="jackets">Jackets</option>
						</select>
					</li>
					<li></li>
				</ul>
			</div>
			<form>
				<div className="flex items-center bg-gray-100 rounded-full p-1 h-7 focus-within:ring-2 ring-teal-700">
					<Search className="ml-2" />
					<input
						className="focus:outline-none bg-inherit w-40"
						placeholder="Search here..."
					/>
				</div>
			</form>
			{!user && (
				<div className="hidden md:block md:w-auto">
					<NavLink to="login">
						<button className="text-white text-center text-sm font-meduim bg-teal-700 px-5 py-2.5 mr-5 rounded-md focus:ring-2 focus:ring-teal-700 ring-offset-1 hover:bg-teal-800">
							Login
						</button>
					</NavLink>
					<NavLink to="signup">
						<button className="text-teal-700 text-center text-sm font-semibold px-5 py-2 rounded-md border-2 border-teal-700 focus:ring-2 focus:ring-teal-700 hover:text-teal-800 border-teal-800">
							Create new account
						</button>
					</NavLink>
				</div>
			)}

			{user && (
				<div className="flex items-center">
					<div className="relative inline-block hover:text-teal-800">
						<NavLink to="/cart">
							<CartIcon h={7} w={7} ml={0} />
							<span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-semibold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
								9+
							</span>
						</NavLink>
					</div>
					<div className="ml-6 rounded-full bg-teal-700 text-md text-white p-1 cursor-pointer hover:bg-teal-800">
						NK
					</div>
				</div>
			)}
		</nav>
	);
};
export default NavBar;
