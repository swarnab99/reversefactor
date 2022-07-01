/* eslint-disable @next/next/no-img-element */
import { FiPlayCircle } from 'react-icons/fi';

const StoriesSection = () => {
	return (
		<section className='pt-10'>
			<div className='container'>
				<StoryItem image='https://images.prismic.io/reversefactor/f81a5bdb-c68a-450c-b8b7-4d84c23d2102_team.avif?auto=compress,format' />
				<StoryItem
					image='https://images.prismic.io/reversefactor/e0aa45ff-c69a-42e2-ac47-cc8608211b62_female.jpeg?auto=compress,format'
					even={true}
					video={true}
				/>
				<StoryItem image='https://images.prismic.io/reversefactor/763d8cb2-6999-4322-a4b0-50b8ca584118_family.jpeg?auto=compress,format' />
			</div>
		</section>
	);
};

const StoryItem = ({ image, even, video }) => {
	return (
		<div className='row gx-lg-8 gx-xl-0 align-items-center mt-3'>
			<div className='col-lg-3 offset-lg-1 d-none d-lg-flex position-relative'>
				<figure>
					<img className='img-fluid rounded' src={image} alt='' />

					{video && (
						<i className='video-icon'>
							<FiPlayCircle />
						</i>
					)}
				</figure>
			</div>

			<div className={`col-lg-6 offset-lg-1 ${even && 'order-first'}`}>
				<div className='swiper-container dots-start dots-closer mt-6 mb-6'>
					<div className='swiper'>
						<div className='swiper-wrapper'>
							<div className='swiper-slide'>
								<h3>Gastric issues & body pains have completely disappeared</h3>
								<blockquote className='icon fs-lg'>
									<p>
										“ I am really grateful to the entire team of Reverse Factor
										for guiding me to the correct lifestyle which helped me to
										overcome my gastric problem & body pain, which were my
										health issues since last 10 years....{' '}
										<button className='small border-0 bg-light text-primary'>
											read more&gt;
										</button>
									</p>
									<div className='blockquote-details'>
										<div className='info ps-0'>
											<h5 className='mb-1'>Jyoti Karwa</h5>
											<p className='mb-0'>Assam, India</p>
											<div className='mt-4 d-flex align-items-start justify-content-center'>
												<h6 className='me-2'>Reversed:</h6>{' '}
												<span className='badge text-dark bg-pale-yellow me-2'>
													Gastric
												</span>
												<span className='badge text-dark bg-pale-red me-2'>
													Diabetes
												</span>
												<span className='badge text-dark bg-pale-green me-2'>
													Thyroid
												</span>
												<span className='badge text-dark bg-pale-blue me-2'>
													Bloating
												</span>
											</div>
										</div>
									</div>
								</blockquote>
							</div>
						</div>
					</div>
				</div>
			</div>

			<style jsx>{`
				.video-icon {
					position: absolute;
					left: 20px;
					top: 10px;
					font-size: 1.4rem;
					color: #fff;
				}
			`}</style>
		</div>
	);
};

export default StoriesSection;
