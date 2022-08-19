const Slide = ({ bg, image, title, description }) => {
	return (
		<div className={'w-screen flex'} style={{ backgroundColor: `#${bg}` }}>
			<div className="flex-1 sm:h-96">
				<img src={image} alt={title} />
			</div>
			<div className="flex-1  sm:flex flex-col items-center justify-center text-center">
				<h1 className="text-xl font-semibold sm:text-7xl">{title}</h1>
				<p className="text-lg my-2 tracking-normal leading-tight sm:text-xl font-medium my-7 tracking-wide">
					{description}
				</p>
				<button className="border-2 border-black text-black px-2 py-1 sm:px-4 py-2 hover:text-white hover:bg-black transition-all">
					Shop Now
				</button>
			</div>
		</div>
	);
};

export default Slide;
