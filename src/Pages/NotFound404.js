import { Link } from 'react-router-dom';

const NotFound404 = () => {
	return (
		<section className="sm:w-1/2 m-auto">
			<div className="flex flex-col items-center justify-center h-screen">
				<div className="p-9 text-center">
					<h2 className="font-black text-2xl mb-3">4&#128565;4</h2>
					<p className="font-medium mb-3">
						Oops! Not found what you're looking for...
					</p>
					<Link to="/">
						<button className="px-4 py-2 mt-2 text-white bg-teal-700 rounded-md shadow-lg hover:bg-teal-800">
							Back to home
						</button>
					</Link>
				</div>
			</div>
		</section>
	);
};
export default NotFound404;
