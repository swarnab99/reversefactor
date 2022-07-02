/* eslint-disable @next/next/no-img-element */

const FeaturedSection = () => {
	return (
		<section className='container'>
			<div className='row gx-lg-8 gx-xl-12 gy-10 gy-lg-0 mt-7 mt-md-10 mt-lg-18'>
				<div className='col-lg-4'>
					<h2 className='display-4 mb-3 pe-xxl-5'>You Are in Good Company</h2>
					<p className='lead fs-lg mb-0 pe-xxl-5'>
						We <span className='underline'>bring solutions</span> to make life
						easier for our customers.
					</p>
				</div>

				<div className='col-lg-8'>
					<div className='row row-cols-2 row-cols-md-4 gx-0 gx-md-8 gx-xl-12 gy-11 mt-n10'>
						<div className='col'>
							<figure className='px-4 px-lg-3 px-xxl-5'>
								<img src='https://i.ibb.co/gmBh9np/logo.png' alt='' />
							</figure>
						</div>

						<div className='col'>
							<figure className='px-4 px-lg-3 px-xxl-5'>
								<img src='assets/img/brands/c2.png' alt='' />
							</figure>
						</div>

						<div className='col'>
							<figure className='px-4 px-lg-3 px-xxl-5'>
								<img src='assets/img/brands/c3.png' alt='' />
							</figure>
						</div>

						<div className='col'>
							<figure className='px-4 px-lg-3 px-xxl-5'>
								<img src='assets/img/brands/c4.png' alt='' />
							</figure>
						</div>

						<div className='col'>
							<figure className='px-4 px-lg-3 px-xxl-5'>
								<img src='assets/img/brands/c5.png' alt='' />
							</figure>
						</div>

						<div className='col'>
							<figure className='px-4 px-lg-3 px-xxl-5'>
								<img src='assets/img/brands/c6.png' alt='' />
							</figure>
						</div>

						<div className='col'>
							<figure className='px-4 px-lg-3 px-xxl-5'>
								<img src='assets/img/brands/c7.png' alt='' />
							</figure>
						</div>

						<div className='col'>
							<figure className='px-4 px-lg-3 px-xxl-5'>
								<img src='assets/img/brands/c8.png' alt='' />
							</figure>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FeaturedSection;
