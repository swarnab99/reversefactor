import { RichText } from 'prismic-reactjs';
import { CustomLink, DocLink } from '../../utils/prismicHelpers';

const SecondaryHeroSection = ({ slice }) => {
	// console.log(slice);
	const { heading, description, button_text, button_link, background_image } =
		slice?.primary;

	return (
		<section
			className='wrapper image-wrapper bg-image bg-overlay text-white'
			style={{
				backgroundImage: `url(${background_image?.url})`,
			}}>
			<div className='container pt-19 pt-md-20 pb-18 pb-md-15 text-center'>
				<div className='row'>
					<div className='col-md-8 mx-auto'>
						<h1 className='display-1 text-white mb-3'>{heading[0]?.text}</h1>
						<div className='lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10'>
							<RichText render={description} serializeHyperlink={CustomLink} />
						</div>
						{button_text[0]?.text && (
							<DocLink link={button_link}>
								<span className='btn btn-primary mt-2'>
									{button_text[0]?.text}
								</span>
							</DocLink>
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
