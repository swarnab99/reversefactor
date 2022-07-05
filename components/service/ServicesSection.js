/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { RichText } from 'prismic-reactjs';
import { CustomLink, DocLink } from '../../utils/prismicHelpers';

const ServicesSection = ({ slice, show }) => {
	// console.log(slice);
	const { heading, subheading } = slice?.primary;
	return (
		<section className='wrapper pt-14 bg-light'>
			<div className='container'>
				<div className='row text-center'>
					<div className='col-md-12 col-lg-10 mx-auto'>
						<h3 className='fs-16 text-uppercase text-muted mb-3'>
							{subheading[0]?.text}
						</h3>
						<h2 className='display-4 mb-10 px-xl-10'>{heading[0]?.text}</h2>
					</div>
				</div>

				<div className='position-relative'>
					<div
						className='shape rounded-circle bg-soft-blue rellax w-16 h-16'
						style={{ bottom: '-0.5rem', right: '-2.2rem', zIndex: 0 }}></div>
					<div
						className='shape bg-dot primary rellax w-16 h-17'
						style={{ top: '-0.5rem', left: '-2.5rem', zIndex: 0 }}></div>
					<div className='row gx-md-5 gy-5 text-center'>
						{slice?.items?.map((item, index) => (
							<ServiceItem key={index} data={item} />
						))}
					</div>
				</div>
				{show && (
					<div className='mt-12'>
						<div className='mt-4  '>
							<h6 className='me-2'>Other Reversal Programs:</h6>{' '}
							<div className='row'>
								<div className='col-3'>
									<BadgeItem title='Acid Reflux' color='red' />
									<BadgeItem title='Acidity' color='red' />
									<BadgeItem title='Acne' color='red' />
									<BadgeItem title='Alzheimer' color='red' />
									<BadgeItem title='Ankylosing Spondylitis' color='red' />
									<BadgeItem title='Anxiety' color='red' />
									<BadgeItem title='Arthritis' color='red' />
									<BadgeItem title='Asthma' color='red' />
									<BadgeItem title='Backache' color='red' />
									<BadgeItem title='Bloating' color='red' />
									<BadgeItem title='Body Pain' color='red' />
									<BadgeItem title='Brain Issues' color='red' />
									<BadgeItem title='Bloating' color='red' />
									<BadgeItem title='COPD' color='red' />
								</div>
								<div className='col-3'>
									<BadgeItem title='Chronic Kidney Disease' color='green' />
									<BadgeItem title='Constipation' color='green' />
									<BadgeItem title='Depression' color='green' />
									<BadgeItem title='Diabetes' color='green' />
									<BadgeItem title='Eczema' color='green' />
									<BadgeItem title='Epilepsy' color='green' />
									<BadgeItem title='Fatty Liver' color='green' />
									<BadgeItem title='Fibromyalgia' color='green' />
									<BadgeItem title='Frozen Shoulder' color='green' />
									<BadgeItem title='Gastritis' color='green' />
									<BadgeItem title='Gout' color='green' />
									<BadgeItem title='Hairfall' color='green' />
									<BadgeItem title='Headache' color='green' />
								</div>
								<div className='col-3'>
									<BadgeItem title='Acid Reflux' color='yellow' />
									<BadgeItem title='Acidity' color='yellow' />
									<BadgeItem title='Acne' color='yellow' />
									<BadgeItem title='Alzheimer' color='yellow' />
									<BadgeItem title='Ankylosing Spondylitis' color='yellow' />
									<BadgeItem title='Anxiety' color='yellow' />
									<BadgeItem title='Arthritis' color='yellow' />
									<BadgeItem title='Asthma' color='yellow' />
									<BadgeItem title='Backache' color='yellow' />
									<BadgeItem title='Bloating' color='yellow' />
									<BadgeItem title='Body Pain' color='yellow' />
									<BadgeItem title='Brain Issues' color='yellow' />
									<BadgeItem title='Bloating' color='yellow' />
									<BadgeItem title='COPD' color='yellow' />
								</div>
								<div className='col-3'>
									<BadgeItem title='Acid Reflux' color='sky' />
									<BadgeItem title='Acidity' color='sky' />
									<BadgeItem title='Acne' color='sky' />
									<BadgeItem title='Alzheimer' color='sky' />
									<BadgeItem title='Ankylosing Spondylitis' color='sky' />
									<BadgeItem title='Anxiety' color='sky' />
									<BadgeItem title='Arthritis' color='sky' />
									<BadgeItem title='Asthma' color='sky' />
									<BadgeItem title='Backache' color='sky' />
									<BadgeItem title='Bloating' color='sky' />
									<BadgeItem title='Body Pain' color='sky' />
									<BadgeItem title='Brain Issues' color='sky' />
									<BadgeItem title='Bloating' color='sky' />
									<BadgeItem title='COPD' color='sky' />
								</div>
							</div>
						</div>
					</div>
				)}
				<div className='text-center mt-5'>
					<Link href='/services	'>
						<a className='btn btn-outline-primary mt-2'>
							View All Reversal Programs
						</a>
					</Link>
				</div>
			</div>
		</section>
	);
};

const BadgeItem = ({ title, color }) => {
	return (
		<div>
			<span className={`badge  text-dark bg-pale-${color} me-2 mb-1`}>
				{title}
			</span>
		</div>
	);
};

const ServiceItem = ({ data }) => {
	const { icon, title, details, link } = data;
	return (
		<div className='col-md-6 col-xl-3'>
			<div className='card shadow-lg'>
				<div className='card-body'>
					<img
						src={icon?.url}
						alt={icon?.alt}
						className='icon-svg icon-svg-md text-green mb-3'
					/>
					<h4>{title[0]?.text}</h4>
					<div className='mb-2'>
						<RichText render={details} serializeHyperlink={CustomLink} />
					</div>
					<DocLink link={link}>
						<span href='#' className='hover link-green'>
							View Plan
						</span>
					</DocLink>
				</div>
			</div>
		</div>
	);
};

export default ServicesSection;
