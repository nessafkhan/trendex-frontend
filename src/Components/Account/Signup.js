import { Link } from 'react-router-dom';

const Signup = () => {
	return (
		<section className="w-1/2 m-auto">
			<div className="flex flex-col items-center justify-center h-screen shadow-xl">
				<h3 class="text-teal-700 mb-3 text-xl font-bold text-center">
					Create your account
				</h3>

				<form action="">
					<div className="text-gray-500 mt-3">
						<label>
							Username
							<br />
							<input
								type="text"
								name="username"
								placeholder="Enter username"
								className="bg-gray-200 h-7 p-4 rounded-sm"
								required
							/>{' '}
						</label>
					</div>
					<div className="text-gray-500 mt-2">
						<label>
							Phone
							<br />
							<input
								type="tel"
								name="phone"
								placeholder="Enter phone number"
								className="bg-gray-200 h-7 p-4 rounded-sm"
								required
							/>{' '}
						</label>
					</div>
					<div className="text-gray-500 mt-2">
						<label>
							Email
							<br />
							<input
								type="email"
								name="email"
								placeholder="Enter email"
								className="bg-gray-200 h-7 p-4 rounded-sm"
								required
							/>{' '}
						</label>
					</div>

					<div className="text-gray-500 mt-2">
						<label>
							Password
							<br />
							<input
								type="Password"
								name="password"
								placeholder="Enter password"
								className="bg-gray-200 h-7 p-4 rounded-sm"
								required
							/>{' '}
						</label>
					</div>
					<div className="text-gray-500 mt-2">
						<label>
							Confirm password
							<br />
							<input
								type="email"
								name="confirm-password"
								placeholder="Re-enter password"
								className="bg-gray-200 h-7 p-4 rounded-sm"
								required
							/>{' '}
						</label>
					</div>
					<div className="">
						<h3 className="text-center text-sm text-gray-500 mt-6">
							or create account with
						</h3>
						<div className="flex flex-wrap mt-1">
							<button
								type="button"
								className="py-2.5 w-1/2 text-center rounded-lg shadow-lg text-teal-700 hover:text-teal-800 hover:shadow-xl"
							>
								Google
							</button>
							<button
								type="button"
								className="py-2.5 w-1/2 text-center rounded-lg shadow-lg text-teal-700 hover:text-teal-800 hover:shadow-xl"
							>
								Facebook
							</button>
						</div>
					</div>

					<button
						type="submit"
						className="p-2 mt-3 bg-teal-700 w-full text-white rounded-sm hover:bg-teal-800"
					>
						Create Account
					</button>
				</form>
				<Link to="login">
					<h3 className="text-sky-400 mt-3 text-center hover:text-sky-500">
						Already have an account?
					</h3>
				</Link>
			</div>
		</section>
	);
};
export default Signup;
