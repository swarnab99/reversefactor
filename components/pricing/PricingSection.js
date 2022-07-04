/* eslint-disable @next/next/no-img-element */
import { FiCheck } from 'react-icons/fi';
import { DocLink } from '../../utils/prismicHelpers';

const PricingSection = ({ slice }) => {
	// console.log(slice);
	const { heading, subheading } = slice?.primary;
	return (
		<section className='wrapper bg-light'>
			<div className='container pt-14 pt-md-16'>
				<div className='row'>
					<div className='col-lg-10 col-xl-9 col-xxl-8 mx-auto text-center'>
						<h3 className='fs-15 text-uppercase text-muted mb-3'>
							{subheading[0]?.text}
						</h3>
						<h2 className='display-4 mb-15 mb-md-6 px-lg-10'>
							{heading[0]?.text}
						</h2>
					</div>
				</div>

				<div className='pricing-wrapper position-relative'>
					<div
						className='shape bg-dot primary rellax w-16 h-18'
						style={{ top: '2rem', right: '-2.4rem' }}></div>
					<div
						className='shape rounded-circle bg-line red rellax w-18 h-18 d-none d-lg-block'
						style={{ bottom: '0.5rem', left: '-2.5rem' }}></div>

					<div className='row gy-6 mt-3 mt-md-5'>
						{slice?.items?.map((item, index) => (
							<PricingItem key={index} data={item} index={index} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

const PricingItem = ({ data, index }) => {
	const { title, price, details, button_link } = data;
	return (
		<div className={`col-md-6 col-lg-4 ${index == 1 ? 'popular' : ''}`}>
			<div
				className={`pricing card text-center ${
					index == 1 ? 'bg-soft-green' : ''
				} `}>
				<div className='card-body'>
					<h4 className='card-title'>{title[0]?.text}</h4>
					<div className='prices text-dark'>
						<div className='price price-show'>
							<span className='price-currency'>₹</span>
							<span className='price-value'>{price[0]?.text}</span>{' '}
							<span className='price-duration'>mo</span>
						</div>
					</div>

					<ul className='icon-list bullet-bg bullet-soft-primary mt-7 mb-8 text-start options'>
						{details?.map((item, index) => (
							<li key={index}>
								<i>
									<FiCheck />
								</i>
								<span>{item?.text}</span>
							</li>
						))}
					</ul>
					<DocLink link={button_link}>
						<span className='btn btn-primary rounded-pill'>Choose Plan</span>
					</DocLink>
				</div>
			</div>
		</div>
	);
};

export default PricingSection;
