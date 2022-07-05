/* eslint-disable @next/next/no-img-element */
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { DocLink } from '../../utils/prismicHelpers';

const HighlightsSection = ({ slice }) => {
	// console.log(slice);
	return (
		<div className='container pt-14 pt-md-16'>
			<div>
				<div className='row '>
					<Carousel
						emulateTouch={false}
						swipeable={false}
						autoPlay
						interval={3500}
						infiniteLoop
						showArrows={true}
						showIndicators
						showThumbs={false}>
						{slice?.items.map((item, index) => (
							<HighlightItem key={index} data={item} />
						))}
					</Carousel>
				</div>
			</div>
		</div>
	);
};

const HighlightItem = ({ data }) => {
	const { image, link } = data;
	return (
		<div className='col-12'>
			<DocLink link={link}>
				<img src={image?.url} alt={image?.alt} className='img-fluid rounded' />
			</DocLink>
		</div>
	);
};

export default HighlightsSection;
