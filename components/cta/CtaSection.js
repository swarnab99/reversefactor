import { DocLink } from '../../utils/prismicHelpers';

const CtaSection = ({ slice, center }) => {
	// console.log(slice);
	const { heading, subheading, background_image, button_text, button_link } =
		slice?.primary;
	return (
		<section
			className={`wrapper image-wrapper bg-image bg-overlay mt-16 ${
				center && 'text-center'
			}`}
			data-image-src='assets/img/photos/bg1.jpg'
			style={{ backgroundImage: `url(${background_image?.url})` }}>
			<div className='container py-18'>
				<div className='row'>
					<div className={`col-lg-8 ${center && 'mx-auto'}`}>
						<h3 className='fs-16 text-uppercase text-line text-white mb-3'>
							{subheading[0]?.text}
						</h3>
						<h2
							className={`display-4 mb-6 text-white ${!center && 'pe-xxl-18'}`}>
							{heading[0]?.text}
						</h2>

						<DocLink link={button_link}>
							<span className='btn btn-white rounded mb-0 text-nowrap'>
								{button_text[0]?.text}
							</span>
						</DocLink>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CtaSection;
