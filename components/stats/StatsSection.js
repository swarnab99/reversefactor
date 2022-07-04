/* eslint-disable @next/next/no-img-element */
import { DocLink } from '../../utils/prismicHelpers';

const StatsSection = ({ slice }) => {
	// console.log(slice);
	const { heading, description, button_link, button_text } = slice?.primary;
	return (
		<section className='container mt-14'>
			<div className='row gx-lg-8 gx-xl-12 gy-10 gy-lg-0'>
				<div className='col-lg-4'>
					<h2 className='display-4 mb-3 pe-xl-10'>{heading[0]?.text}</h2>
					<p className='mb-0 pe-xxl-10'>{description[0]?.text}</p>

					<DocLink link={button_link}>
						<span className='btn btn-outline-primary btn-sm mt-4'>
							{button_text[0]?.text}
						</span>
					</DocLink>
				</div>

				<div className='col-lg-8 mt-lg-2'>
					<div className='row align-items-center counter-wrapper gy-6 text-center'>
						{slice?.items?.map((item, index) => (
							<StatItem key={index} data={item} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

const StatItem = ({ data }) => {
	const { icon, value, details } = data;
	return (
		<div className='col-md-4'>
			<img
				src={icon?.url}
				alt={icon?.alt}
				className='icon-svg icon-svg-md text-primary mb-3'
			/>
			<h3 className='counter'>{value[0]?.text}</h3>
			<p>{details[0]?.text}</p>
		</div>
	);
};

export default StatsSection;
