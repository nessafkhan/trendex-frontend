import ArrowLeft from '../../assets/ArrowLeft';

const ArrowPrev = (props) => {
	return (
		<div
			style={{
				height: '50px',
				borderRadius: '100%',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				position: 'absolute',
				top: '0',
				bottom: '0',
				margin: 'auto',
				cursor: 'pointer',
				opacity: '0.5',
				zIndex: '2',
				left: `${props.direction === 'prev' && '10px'}`,
				
			}}
			onClick={(event) => props.onSlideIndexChanges(props.direction)}
		>
			<ArrowLeft />
		</div>
	);
};

export default ArrowPrev;
