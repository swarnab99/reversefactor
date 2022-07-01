/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
const WorkshopsSection = ({ heading, image, title }) => {
	return (
		<section className='wrapper bg-light'>
			<div className='overflow-hidden'>
				<div className='container pt-14 pt-md-16'>
					<div className='row'>
						<div className='col-xl-7 col-xxl-6 mx-auto text-center'>
							<h2 className='display-5 text-center mt-2 mb-10'>{heading}</h2>
						</div>
					</div>

					<div className='col-lg-10 mx-auto'>
						<div className='pb-2 row '>
							<WorkshopItem image={image} title={title} />
							<WorkshopItem image={image} title={title} />
							<WorkshopItem image={image} title={title} />
							<WorkshopItem image={image} title={title} />
						</div>
					</div>
					<div className='text-center'>
						<a href='#' className='btn btn-outline-primary btn-sm mt-4'>
							Load More
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

const WorkshopItem = ({ image, title }) => {
	return (
		<div className='col-6 px-4 mb-6'>
			<article>
				<div className='card'>
					<figure className='card-img-top overlay overlay-1'>
						<img src={image} alt='' />
					</figure>
					<div className='card-body p-1 px-3'>
						<div className='post-header'>
							<h4 className='h5 mt-1 mb-1 text-center'>{title}</h4>
						</div>

						{/* <div className='post-footer'>
							<ul className='post-meta d-flex mb-0'>
								<li className='post-date'>
									<i className='uil uil-calendar-alt'></i>
									<span>14 Apr 2022</span>
								</li>
								<li className='post-comments'>
									<a href='#'>
										<i className='uil uil-comment'></i>4
									</a>
								</li>
							</ul>
						</div> */}
					</div>
				</div>
			</article>
		</div>
	);
};

export default WorkshopsSection;
