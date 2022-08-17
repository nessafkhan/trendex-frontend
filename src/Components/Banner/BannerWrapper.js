import { sliderItems } from '../../dummyData';
import Slide from './Slide';

const BannerWrapper = (props) => {
	return (
		<div
			className="h-full flex transition-all"
			style={{ transform: `translateX(${props.slideIndex * -100}vw)` }}
		>
			<Slide />
		</div>
	);
};

export default BannerWrapper;
