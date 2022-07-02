/* eslint-disable @next/next/no-img-element */
const HighlightsSection = ({ image }) => {
	return (
		<div className='container pt-14 pt-md-16'>
			<div>
				<div className='row '>
					<div className=''>
						<img src={image} alt='' className='img-fluid rounded' />
					</div>

					<div className='col-lg-6 d-none'>
						<div className='p-10 p-md-11 p-lg-13'>
							<div
								className='swiper-container dots-closer mb-4 swiper-container-1'
								data-margin='30'
								data-dots='true'>
								<div className='swiper swiper-initialized swiper-horizontal swiper-pointer-events'>
									<div className='swiper-wrapper'>
										<div className='swiper-slide swiper-slide-active'>
											<div className='blockquote-details mb-3'>
												<div className='info ps-0'>
													<h5 className='mb-1'>
														Reversing Lifestyle Diseases Workshop
													</h5>
													<p className='mb-0'>Online - Zoom</p>
												</div>
											</div>
											<p>
												Vivamus sagittis lacus vel augue laoreet rutrum faucibus
												dolor auctor. Vestibulum ligula porta felis euismod
												semper. Cras justo odio.
											</p>
											<button className='btn btn-outline-primary btn-sm'>
												Know More
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HighlightsSection;
