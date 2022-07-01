/* eslint-disable @next/next/no-img-element */
import { FiCheck } from 'react-icons/fi';

const EventsSection = () => {
	return (
		<section className='wrapper bg-light'>
			<div className='overflow-hidden'>
				<div className='container pt-14 pt-md-16'>
					<div className='row'>
						<div className='col-xl-7 col-xxl-6 mx-auto text-center'>
							<h2 className='display-5 text-center mt-2 mb-10'>
								Upcoming Events
							</h2>
						</div>
					</div>
					<div className='row gx-lg-8 gx-xl-12 gy-10 align-items-center'>
						<div className='col-lg-6'>
							<img
								className='img-fluid rounded shadow-lg d-flex ms-auto'
								src='https://images.pexels.com/photos/1708936/pexels-photo-1708936.jpeg?cs=srgb&dl=pexels-icsa-1708936.jpg&fm=jpg'
								alt=''
							/>
						</div>

						<div className='col-lg-6'>
							<h2 className='mb-3'>The Key to Building Immunity & More</h2>
							<p>
								Etiam porta sem malesuada magna mollis euismod. Donec
								ullamcorper nulla non metus auctor fringilla. Morbi leo risus,
								porta ac consectetur ac, vestibulum at eros.
							</p>
							<ul className='icon-list bullet-bg bullet-soft-green'>
								<li>
									<i className=''>
										<FiCheck />
									</i>
									Aenean eu leo quam. Pellentesque ornare.
								</li>
								<li>
									<i className=''>
										<FiCheck />
									</i>
									Nullam quis risus eget urna mollis ornare.
								</li>
								<li>
									<i className=''>
										<FiCheck />
									</i>
									Donec id elit non mi porta gravida at eget.
								</li>
							</ul>
							<a href='#' className='btn btn-primary mt-2'>
								Enroll Now
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default EventsSection;
