/* eslint-disable @next/next/no-img-element */

const HeroSection = () => {
	return (
		<section className='mt-5'>
			<div className='container pt-14 pt-md-14'>
				<div className='row gx-lg-0 gx-xl-8 gy-10 gy-md-13 gy-lg-0 align-items-center'>
					{/* <div className='col-md-8 offset-md-2 col-lg-6 offset-lg-1 position-relative order-lg-2'>
						<div
							className='shape bg-dot primary rellax w-17 h-19'
							data-rellax-speed='1'
							// style='top: -1.7rem; left: -1.5rem;'
							style={{ top: '-1.7rem', left: '-1.5rem' }}></div>
						<div
							className='shape rounded bg-soft-primary rellax d-md-block'
							// style='bottom: -1.8rem; right: -0.8rem; width: 85%; height: 90%;'
							style={{
								bottom: '-1.8rem',
								right: '-0.8rem',
								width: '85%',
								height: '90%',
							}}></div>
						<figure className='rounded'>
							<img src='assets/img/photos/about7.jpg' alt='' />
						</figure>
					</div> */}

					{/* <div className='col-lg-5 mt-lg-n10 text-center text-lg-start'>
						<h1 className='display-1 mb-5'>
							We Believe Chronic Diseases are Reversible and Preventable
						</h1>
						<p className='lead fs-25 lh-sm mb-7 px-md-10 px-lg-0'>
							Reverse your chronic diseases with the{' '}
							<strong className='underline'>right food & lifestyle</strong>.
						</p>
						<div className='d-flex justify-content-center justify-content-lg-start'>
							<span>
								<a href='#' className='btn btn-lg btn-primary me-2'>
									Learn More
								</a>
							</span>
							<span>
								<a href='#' className='btn btn-lg btn-outline-primary'>
									Get Appointment
								</a>
							</span>
						</div>
					</div> */}

					<div className='col-lg-10 mx-auto text-center '>
						<h1 className='display-1 mb-5'>
							We Believe Chronic Diseases are Reversible and Preventable
						</h1>
						<p className='lead fs-25 lh-sm mb-7 px-md-10 px-lg-0'>
							Reverse your chronic diseases with the{' '}
							<strong className='underline'>right food & lifestyle</strong>.
						</p>
						<div className='d-flex justify-content-center'>
							<span>
								<a href='#' className='btn btn-lg btn-primary me-2'>
									Learn More
								</a>
							</span>
							<span>
								<a href='#' className='btn btn-lg btn-outline-primary'>
									Get Appointment
								</a>
							</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
