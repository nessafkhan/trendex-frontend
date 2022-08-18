import { sliderItems } from '../../dummyData';
import Slide from './Slide';

const BannerWrapper = (props) => {
	return (
		<div
			className="flex transition-all"
			style={{ transform: `translateX(${props.slideIndex * -100}vw)` }}
		>
			{sliderItems.map((item) => {
				return (
					<Slide
						key={item.id}
						bg={item.bg}
						title={item.title}
						description={item.desc}
						image={item.img}
					/>
				);
			})}
		</div>
	);
};

export default BannerWrapper;
