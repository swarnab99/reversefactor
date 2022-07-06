/* eslint-disable @next/next/no-img-element */
import { RichText } from 'prismic-reactjs';
import { CustomLink } from '../../utils/prismicHelpers';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const WorkshopModal = ({ workshop, onClose }) => {
	// console.log(workshop);
	const { title, image1, image2, image3, image4, image5, video_link, details } =
		workshop;
	return (
		<div className='modal fade show d-block overlay-bg' id='exampleModal'>
			<div
				style={{ maxWidth: '1200px' }}
				className='modal-dialog modal-dialog-centered'>
				<div className='modal-content'>
					<div className='modal-header py-3 px-4'>
						<h5 className='modal-title' id='exampleModalLabel'>
							{title[0]?.text}
						</h5>
						<button
							onClick={onClose}
							type='button'
							className='close btn text-dark'>
							<span aria-hidden='true'>X</span>
						</button>
					</div>
					<div className='modal-body pt-0 px-4 pb-4'>
						<div className='row'>
							<div className='col-md-6'>
								<Carousel
									emulateTouch={false}
									swipeable={false}
									autoPlay
									interval={3500}
									infiniteLoop
									showArrows={true}
									showIndicators
									showThumbs={false}>
									<img
										src={image1?.url}
										alt={image1?.alt}
										className='img-fluid rounded'
									/>
									<img
										src={image2?.url}
										alt={image2?.alt}
										className='img-fluid rounded'
									/>
									<img
										src={image3?.url}
										alt={image3?.alt}
										className='img-fluid rounded'
									/>
									<img
										src={image4?.url}
										alt={image4?.alt}
										className='img-fluid rounded'
									/>
									<img
										src={image5?.url}
										alt={image5?.alt}
										className='img-fluid rounded'
									/>
								</Carousel>
							</div>
							<div className='col-md-6'>
								<RichText render={details} serializeHyperlink={CustomLink} />
							</div>
						</div>
					</div>
				</div>
			</div>

			<style jsx>{`
				.overlay-bg {
					background-color: rgb(0 0 0 / 50%);
				}
			`}</style>
		</div>
	);
};

export default WorkshopModal;
