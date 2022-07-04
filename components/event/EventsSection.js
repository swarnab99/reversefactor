/* eslint-disable @next/next/no-img-element */
import { FiCheck } from 'react-icons/fi';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { RichText } from 'prismic-reactjs';
import { CustomLink, DocLink } from '../../utils/prismicHelpers';

const EventsSection = ({ slice }) => {
	// console.log(slice);
	const { heading } = slice?.primary;
	return (
		<section className='wrapper bg-light'>
			<div className='overflow-hidden'>
				<div className='container pt-14 pt-md-16'>
					<div className='row'>
						<div className='col-xl-7 col-xxl-6 mx-auto text-center'>
							<h2 className='display-5 text-center mt-2 mb-10'>
								{heading[0]?.text}
							</h2>
						</div>
					</div>
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
							<EventItem key={index} data={item} />
						))}
					</Carousel>
				</div>
			</div>
		</section>
	);
};

const EventItem = ({ data }) => {
	const { title, image, details, button_link, button_text } = data;
	return (
		<div className='row gx-lg-8 gx-xl-12 gy-10 align-items-center'>
			<div className='col-lg-6'>
				<img
					className='img-fluid rounded shadow-lg d-flex ms-auto'
					src={image?.url}
					alt={image?.alt}
				/>
			</div>

			<div className='col-lg-6 text-start'>
				<h2 className='mb-3'>{title[0]?.text}</h2>
				<RichText render={details} serializeHyperlink={CustomLink} />

				<DocLink link={button_link}>
					<span className='btn btn-primary mt-4'>{button_text[0]?.text}</span>
				</DocLink>
			</div>
		</div>
	);
};

export default EventsSection;
