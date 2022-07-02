/* eslint-disable @next/next/no-img-element */
import { RichText } from 'prismic-reactjs';
import { CustomLink } from '../../utils/prismicHelpers';

const FeaturedSection = ({ slice }) => {
	// console.log(slice);
	const { heading, description } = slice?.primary;
	return (
		<section className='container'>
			<div className='row gx-lg-8 gx-xl-12 gy-10 gy-lg-0 mt-7 mt-md-10 mt-lg-18'>
				<div className='col-lg-4'>
					<h2 className='display-4 mb-3 pe-xxl-5'>{heading[0]?.text}</h2>
					<div className='lead fs-lg mb-0 pe-xxl-5'>
						<RichText render={description} serializeHyperlink={CustomLink} />
					</div>
				</div>

				<div className='col-lg-8'>
					<div className='row row-cols-2 row-cols-md-4 gx-0 gx-md-8 gx-xl-12 gy-11 mt-n10'>
						{slice?.items?.map((item, index) => (
							<FeaturedItem key={index} data={item} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

const FeaturedItem = ({ data }) => {
	const { image } = data;
	return (
		<div className='col'>
			<figure className='px-4 px-lg-3 px-xxl-5'>
				<img src={image?.url} alt={image?.alt} />
			</figure>
		</div>
	);
};

export default FeaturedSection;
