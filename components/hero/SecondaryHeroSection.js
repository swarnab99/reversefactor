const SecondaryHeroSection = ({ title, details, button_text }) => {
	return (
		<section
			className='wrapper image-wrapper bg-image bg-overlay text-white'
			style={{
				backgroundImage: `url(https://images.prismic.io/reversefactor/39fd02b6-ac72-411d-84bf-6d0179342e9c_hero-group.jpeg?auto=compress,format)`,
			}}>
			<div className='container pt-19 pt-md-20 pb-18 pb-md-15 text-center'>
				<div className='row'>
					<div className='col-md-8 mx-auto'>
						<h1 className='display-1 text-white mb-3'>{title}</h1>
						<p className='lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10'>
							{details}
						</p>
						{button_text && (
							<a href='#' className='btn btn-primary mt-2'>
								{button_text}
							</a>
						)}
					</div>
				</div>
			</div>

			<style jsx>{`
				.bg-overlay:before {
					background-color: rgba(30, 34, 40, 0.6);
				}
			`}</style>
		</section>
	);
};

export default SecondaryHeroSection;
