const Slide = () => {
	return (
		<div className={`w-screen h-screen flex bg-cyan-200`}>
				<div className="h-full flex-1">
					<img
						src="https://i.ibb.co/0hGzhc9/freestocks-3-Q3ts-J01nc-unsplash.jpg"
						alt="SUMMER SALE"
					/>
				</div>
				<div className="flex p-4 items-center justify-center flex-col">
					<h1 className="text-7xl">SUMMER SALE</h1>
					<p className="">
						DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW
						ARRIVALS.
					</p>
					<button className="border-2 border-black text-black px-4 py-2 hover:text-white hover:bg-black transition-all">Shop Now</button>
			
			</div>
		</div>
	);
};

export default Slide;
