/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { RichText } from 'prismic-reactjs';
import { CustomLink } from '../../utils/prismicHelpers';

const TestimonialsSections = ({ slice }) => {
	// console.log(slice);
	const { heading, subheading } = slice?.primary;
	return (
		<section className='wrapper pt-14 bg-light'>
			<div className='container'>
				<div className='row mb-3'>
					<div className='col-md-10 col-lg-12 col-xl-10 col-xxl-9 mx-auto text-center'>
						<h3 className='fs-15 text-uppercase text-muted mb-3'>
							{subheading[0]?.text}
						</h3>
						<h2 className='display-4 mb-10 px-xl-10'>{heading[0]?.text}</h2>
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
						<TestimonialItem key={index} data={item} />
					))}
				</Carousel>
			</div>
		</section>
	);
};

const TestimonialItem = ({ data }) => {
	const { image, name, review, location, reversed_disease } = data;
	const colors = [
		'bg-pale-yellow',
		'bg-pale-red',
		'bg-pale-green',
		'bg-pale-blue',
		'bg-pale-orange',
		'bg-pale-leaf',
		'bg-pale-aqua',
		'bg-pale-navy',
	];
	// console.log(reversed_disease);
	const [viewMore, setViewMore] = useState(false);
	return (
		<div className='row gx-lg-8 gx-xl-0 align-items-center'>
			<div className='col-lg-5 col-xl-4 offset-xl-1 d-lg-flex position-relative'>
				<div
					className='shape rounded-circle bg-soft-primary rellax w-21 h-21'
					data-rellax-speed='1'
					style={{ top: `7rem`, left: `1rem` }}></div>
				<figure>
					<img src={image?.url} alt={image?.alt} className='rounded' />
				</figure>
			</div>

			<div className='col-lg-6 col-xl-6 col-xxl-5 offset-xl-1'>
				<div className='swiper-container dots-start dots-closer mt-6 mb-6'>
					<div className='swiper'>
						<div className='swiper-wrapper'>
							<div className='swiper-slide'>
								<blockquote className='icon fs-lg client-story'>
									<div
										className={`text-start details mb-4 ${
											viewMore ? '' : 'ellipsis2'
										}`}>
										<div className='short'>
											<RichText
												render={review}
												serializeHyperlink={CustomLink}
											/>
										</div>
										<button
											onClick={() => setViewMore(!viewMore)}
											className='small d-block border-0 bg-light p-0 text-primary'>
											{viewMore ? 'read less' : 'read more'}&gt;
										</button>
									</div>
									<div className='blockquote-details'>
										<div className='info ps-0'>
											<h5 className='mb-1'>{name[0]?.text}</h5>
											<p className='mb-0'>{location[0]?.text}</p>
											{reversed_disease?.[0] && (
												<div className='mt-4 d-flex align-items-start justify-content-start'>
													<h6 className='me-2'>Reversed:</h6>
													{reversed_disease?.map((item, index) => (
														<span
															key={index}
															className={`badge text-dark me-2 ${colors[index]}`}>
															{item?.text}
														</span>
													))}
												</div>
											)}
										</div>
									</div>
								</blockquote>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TestimonialsSections;
