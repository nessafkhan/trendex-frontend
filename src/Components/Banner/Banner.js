import ArrowPrev from './ArrowPrev';
import ArrowNext from './ArrowNext';
import BannerWrapper from './BannerWrapper';
import { useState } from 'react';
const Banner = () => {
	const [slideIndex, setSlideIndex] = useState(0);
	const handleClick = (direction) => {
		if (direction === 'prev') {
			setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
		} else {
			setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
		}
	};

	return (
		<div className="h-5/6 mt-20 sm:w-screen h-screen flex items-center justify-between relative overflow-hidden">
			<ArrowPrev direction={'prev'} onSlideIndexChanges={handleClick} />
			<BannerWrapper slideIndex={slideIndex} />
			<ArrowNext direction={'next'} onSlideIndexChanges={handleClick} />
		</div>	
	);
};

export default Banner;
