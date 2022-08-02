import { Link } from 'react-router-dom';

const Login = () => {
	return (
		<section className="w-1/2 m-auto">
			<div className="flex flex-col items-center justify-center h-screen">
				<div className="p-4 rounded-sm shadow-xl">
					<h3 class="text-teal-700 mb-7 text-xl font-bold text-center">
						Login to your account
					</h3>

					<form action="">
						<div className="mt-2 text-gray-500">
							<label>
								Email
								<br />
								<input
									type="email"
									placeholder="Enter your email"
									className="bg-gray-200 h-7 p-4 rounded-sm"
									required
								/>{' '}
							</label>
						</div>
						<div className="mt-4 text-gray-500">
							<label>
								Password
								<br />
								<input
									type="Password"
									placeholder="Enter your password"
									className="bg-gray-200 h-7 p-4 rounded-sm"
									required
								/>{' '}
							</label>
						</div>
						<div className="mt-8">
							<h3 className="text-center text-sm text-gray-500">
								or sign in with
							</h3>
							<div className="flex flex-cols flex-wrap mt-4">
								<button
									type="button"
									className="py-2.5 w-full text-center rounded-lg shadow-md text-teal-700 hover:text-teal-800 hover:shadow-lg"
								>
									Google
								</button>
								<button
									type="button"
									className="py-2.5 w-full mt-3 text-center rounded-lg shadow-md text-teal-700 hover:text-teal-800 hover:shadow-lg"
								>
									Facebook
								</button>
							</div>
						</div>

						<button
							type="submit"
							className="p-2 mt-10 bg-teal-700 w-full text-white rounded-sm hover:bg-teal-800"
						>
							Login
						</button>
					</form>
					<Link to="/signup">
						<h3 className="mt-5 text-sky-400 text-center hover:text-sky-500">
							Don't have an account?
						</h3>
					</Link>
				</div>
			</div>
		</section>
	);
};
export default Login;
