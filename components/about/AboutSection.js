/* eslint-disable @next/next/no-img-element */
import { RichText } from 'prismic-reactjs';
import { CustomLink, DocLink } from '../../utils/prismicHelpers';

const AboutSection = ({ slice }) => {
	// console.log(slice);
	const { heading, description, image, lead_text, button_link, button_text } =
		slice?.primary;
	return (
		<section className='container'>
			<div className='row gx-lg-8 gx-xl-12 gy-10 mt-12 align-items-center'>
				<div className='col-lg-6'>
					<h2 className='display-4 mb-3'>{heading[0]?.text}</h2>
					<p className='lead fs-lg'>{lead_text[0]?.text}</p>
					<div className='mb-6'>
						<RichText render={description} serializeHyperlink={CustomLink} />
					</div>
					<div className='mt-3'>
						<DocLink link={button_link}>
							<span href='#' className='btn btn-primary mt-2'>
								{button_text[0]?.text}
							</span>
						</DocLink>
					</div>
				</div>
				<div className='col-md-8 col-lg-6 position-relative'>
					<div
						className='shape bg-soft-primary rounded-circle rellax w-20 h-20'
						style={{ top: '-2rem', left: '-1.9rem' }}></div>
					<figure className='rounded'>
						<img src={image?.url} alt={image?.alt} />
					</figure>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
