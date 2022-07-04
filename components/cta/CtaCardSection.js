import { DocLink } from '../../utils/prismicHelpers';

const CtaCardSection = ({ slice }) => {
	// console.log(slice);
	const { heading, button_text, button_link } = slice?.primary;
	return (
		<section className='wrapper bg-light'>
			<div className='container pt-14 pt-md-16'>
				<div className='row'>
					<div className='col-xl-10 mx-auto'>
						<div
							className='card image-wrapper bg-full bg-image bg-overlay bg-overlay-400'
							style={{
								backgroundImage: `url(https://images.prismic.io/reversefactor/d61cc4ea-83f4-4edf-baa9-c8e99b7aa178_bg3.jpeg?auto=compress,format)`,
							}}>
							<div className='card-body p-6 p-md-11 d-lg-flex flex-row align-items-lg-center justify-content-md-between text-center text-lg-start'>
								<h3 className='display-6 mb-6 mb-lg-0 pe-lg-10 pe-xl-5 pe-xxl-18 text-white'>
									{heading[0]?.text}
								</h3>
								<DocLink link={button_link}>
									<span className='btn btn-white rounded-pill mb-0 text-nowrap'>
										{button_text[0]?.text}
									</span>
								</DocLink>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CtaCardSection;
