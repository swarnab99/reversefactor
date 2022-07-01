/* eslint-disable @next/next/no-img-element */

const TestimonialsSections = () => {
	return (
		<section className='wrapper bg-light'>
			<div className='container py-14 py-lg-16 pb-lg-0'>
				<div className='row mb-3'>
					<div className='col-md-10 col-lg-12 col-xl-10 col-xxl-9 mx-auto text-center'>
						<h3 className='fs-15 text-uppercase text-muted mb-3'>
							Client Testimonials
						</h3>
						<h2 className='display-4 mb-10 px-xl-10'>
							4000+ Succesfull Reversals & Counting
						</h2>
					</div>
				</div>
				<div className='row gx-lg-8 gx-xl-0 align-items-center'>
					<div className='col-lg-5 col-xl-4 offset-xl-1 d-none d-lg-flex position-relative'>
						<div
							className='shape rounded-circle bg-soft-primary rellax w-21 h-21'
							data-rellax-speed='1'
							style={{ top: `7rem`, left: `1rem` }}></div>
						<figure>
							<img
								src='https://drhyman.com/wp-content/uploads/2020/01/jada-1.jpg'
								alt=''
							/>
						</figure>
					</div>

					<div className='col-lg-6 col-xl-6 col-xxl-5 offset-xl-1'>
						<div className='swiper-container dots-start dots-closer mt-6 mb-6'>
							<div className='swiper'>
								<div className='swiper-wrapper'>
									<div className='swiper-slide'>
										<blockquote className='icon fs-lg'>
											<p>
												“ I am really grateful to the entire team of Reverse
												Factor for guiding me to the correct lifestyle which
												helped me to overcome my gastric problem & body pain,
												which were my health issues since last 10 years...”
											</p>
											<div className='blockquote-details'>
												<div className='info ps-0'>
													<h5 className='mb-1'>Jyoti Karwa</h5>
													<p className='mb-0'>Assam, India</p>
												</div>
											</div>
										</blockquote>
									</div>

									<div className='swiper-slide'>
										<blockquote className='icon fs-lg'>
											<p>
												“Vivamus sagittis lacus vel augue laoreet rutrum
												faucibus dolor auctor. Vestibulum ligula porta felis
												euismod semper. Cras justo odio consectetur nulla
												dapibus curabitur blandit faucibus.”
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
												“Vivamus sagittis lacus vel augue laoreet rutrum
												faucibus dolor auctor. Vestibulum ligula porta felis
												euismod semper. Cras justo odio consectetur nulla
												dapibus curabitur blandit faucibus.”
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
			</div>
		</section>
	);
};

export default TestimonialsSections;
