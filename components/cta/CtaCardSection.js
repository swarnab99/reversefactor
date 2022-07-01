const CtaCardSection = () => {
	return (
		<section className='wrapper bg-light'>
			<div className='container pt-14 pt-md-16'>
				<div className='row'>
					<div className='col-xl-10 mx-auto'>
						<div
							className='card image-wrapper bg-full bg-image bg-overlay bg-overlay-400'
							style={{
								backgroundImage: `url(https://sandbox.elemisthemes.com/assets/img/photos/bg3.jpg)`,
							}}>
							<div className='card-body p-6 p-md-11 d-lg-flex flex-row align-items-lg-center justify-content-md-between text-center text-lg-start'>
								<h3 className='display-6 mb-6 mb-lg-0 pe-lg-10 pe-xl-5 pe-xxl-18 text-white'>
									We are trusted by over 4000+ clients. Join the Health
									Revolution Now!
								</h3>
								<a
									href='#'
									className='btn btn-white rounded-pill mb-0 text-nowrap'>
									View Pricing
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CtaCardSection;
