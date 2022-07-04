/* eslint-disable @next/next/no-img-element */
import { RichText } from 'prismic-reactjs';
import { CustomLink } from '../../utils/prismicHelpers';

const FeaturesSection = ({ slice }) => {
	// console.log(slice);
	const { subheading, heading } = slice?.primary;
	return (
		<section className='wrapper bg-light'>
			<div className='container pt-14 pt-md-16'>
				<div className='row text-center'>
					<div className='col-md-10 offset-md-1 col-lg-8 offset-lg-2'>
						<h3 className='fs-15 text-uppercase text-muted mb-3'>
							{subheading[0]?.text}
						</h3>
						<h2 className='display-4 mb-9 px-xl-11'>{heading[0]?.text}</h2>
					</div>
				</div>

				<div className='row gx-lg-8 gx-xl-12 gy-8'>
					{slice?.items?.map((item, index) => (
						<FeatureItem key={index} data={item} />
					))}
				</div>
			</div>
		</section>
	);
};

const FeatureItem = ({ data }) => {
	const { icon, title, details } = data;
	return (
		<div className='col-md-6 col-lg-4'>
			<div className='d-flex flex-row'>
				<div>
					<img
						src={icon?.url}
						alt={icon?.alt}
						className='icon-svg icon-svg-sm text-pink me-4'
					/>
				</div>
				<div>
					<h4 className='mb-1'>{title[0]?.text}</h4>
					<div className='cmb-0'>
						<RichText render={details} serializeHyperlink={CustomLink} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default FeaturesSection;
