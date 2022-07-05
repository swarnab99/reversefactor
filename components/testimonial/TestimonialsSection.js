/* eslint-disable @next/next/no-img-element */
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
	const { image, name, review, location } = data;
	return (
		<div className='row gx-lg-8 gx-xl-0 align-items-center'>
			<div className='col-lg-5 col-xl-4 offset-xl-1 d-lg-flex position-relative'>
				<div
					className='shape rounded-circle bg-soft-primary rellax w-21 h-21'
					data-rellax-speed='1'
					style={{ top: `7rem`, left: `1rem` }}></div>
				<figure>
					<img src={image?.url} alt={image?.alt} />
				</figure>
			</div>

			<div className='col-lg-6 col-xl-6 col-xxl-5 offset-xl-1'>
				<div className='swiper-container dots-start dots-closer mt-6 mb-6'>
					<div className='swiper'>
						<div className='swiper-wrapper'>
							<div className='swiper-slide'>
								<blockquote className='icon fs-lg'>
									<div className='text-start'>
										<RichText render={review} serializeHyperlink={CustomLink} />
									</div>
									<div className='blockquote-details'>
										<div className='info ps-0'>
											<h5 className='mb-1'>{name[0]?.text}</h5>
											<p className='mb-0'>{location[0]?.text}</p>
										</div>
									</div>
								</blockquote>
							</div>

							<div className='swiper-slide'>
								<blockquote className='icon fs-lg'>
									<p>
										“Vivamus sagittis lacus vel augue laoreet rutrum faucibus
										dolor auctor. Vestibulum ligula porta felis euismod semper.
										Cras justo odio consectetur nulla dapibus curabitur blandit
										faucibus.”
									</p>
									<div className='blockquote-details'>
										<div className='info ps-0'>
											<h5 className='mb-1'>Cory Zamora</h5>
											<p className='mb-0'>Marketing Specialist</p>
										</div>
									</div>
								</blockquote>
							</div>

							<div className='swiper-slide'>
								<blockquote className='icon fs-lg'>
									<p>
										“Vivamus sagittis lacus vel augue laoreet rutrum faucibus
										dolor auctor. Vestibulum ligula porta felis euismod semper.
										Cras justo odio consectetur nulla dapibus curabitur blandit
										faucibus.”
									</p>
									<div className='blockquote-details'>
										<div className='info ps-0'>
											<h5 className='mb-1'>Jyoti Karwa</h5>
											<p className='mb-0'>Assam, India</p>
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
