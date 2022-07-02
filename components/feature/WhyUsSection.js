/* eslint-disable @next/next/no-img-element */
import { RichText } from 'prismic-reactjs';
import { CustomLink, DocLink } from '../../utils/prismicHelpers';

const WhyUsSection = ({ slice }) => {
	// console.log(slice);
	const { subheading, heading, description, button_text, button_link } =
		slice?.primary;

	return (
		<section className='wrapper bg-light'>
			<div className='container pt-14 pt-md-16'>
				<div className='row gx-lg-8 gx-xl-12 gy-10 align-items-center'>
					<div className='col-lg-5'>
						<h3 className='fs-15 text-uppercase text-muted mb-3'>
							{subheading[0]?.text}
						</h3>
						<h2 className='display-4 mb-5'>{heading[0]?.text}</h2>
						<RichText render={description} serializeHyperlink={CustomLink} />

						<DocLink link={button_link}>
							<span href='#' className='btn btn-primary mt-3'>
								{button_text[0]?.text}
							</span>
						</DocLink>
					</div>
					<div className='col-lg-7 order-lg-2'>
						<div className='row gx-md-5 gy-5'>
							{slice?.items?.map((item, index) => (
								<WhyItem key={index} data={item} index={index} />
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

const WhyItem = ({ data, index }) => {
	const { icon, title, details } = data;
	const itemClasses = [
		'col-md-5 offset-md-1 align-self-end',
		'col-md-6 align-self-end',
		'col-md-5',
		'col-md-6 align-self-start',
	];
	const itemColors = [
		'card bg-pale-yellow',
		'card bg-pale-red',
		'card bg-pale-leaf',
		'card bg-pale-primary',
	];
	return (
		<div className={itemClasses[index]}>
			<div className={itemColors[index]}>
				<div className='card-body'>
					<img
						src={icon?.url}
						alt={icon?.alt}
						className='icon-svg icon-svg-md text-yellow mb-3'
					/>
					<h4>{title[0]?.text}</h4>
					<p className='mb-0'>{details[0]?.text}</p>
				</div>
			</div>
		</div>
	);
};

// Are you facing the same problems?
// Why conventional treatements do not works -
// Only addresses symptoms of the disease
// No Patient-centric Plans
// No real change
// Negligible focus of lifestyle

export default WhyUsSection;
