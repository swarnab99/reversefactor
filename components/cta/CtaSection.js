const CtaSection = ({ center }) => {
	return (
		<section
			className={`wrapper image-wrapper bg-image bg-overlay mt-16 ${
				center && 'text-center'
			}`}
			data-image-src='assets/img/photos/bg1.jpg'
			style={{ backgroundImage: `url(https://i.ibb.co/WkBmvZf/bg1.jpg)` }}>
			<div className='container py-18'>
				<div className='row'>
					<div className={`col-lg-8 ${center && 'mx-auto'}`}>
						<h3 className='fs-16 text-uppercase text-line text-white mb-3'>
							Get a Free Counselling
						</h3>
						<h2
							className={`display-4 mb-6 text-white ${!center && 'pe-xxl-18'}`}>
							We have helped and inspired more than 4000+ people worldwide to
							reverse their lifestyle diseases.
						</h2>
						<a href='#' className='btn btn-white rounded mb-0 text-nowrap'>
							Call Now: 81005 50660
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CtaSection;
