import ArrowPrev from '../../assets/ArrowPrev';
import ArrowNext from '../../assets/ArrowNext';
import BannerWrapper from './BannerWrapper';
const Banner = () => {
	return (
		<div className="mt-20 width-full h-screen flex items-center justify-between relative overflow-hidden">
			<ArrowPrev direction={'left'} />
			<BannerWrapper />
			<ArrowNext direction={'right'} />
		</div>
	);
};

export default Banner;
