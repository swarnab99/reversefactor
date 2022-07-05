/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import { RichText } from 'prismic-reactjs';
import { CustomLink } from '../../utils/prismicHelpers';

const DetailedAboutUsSection = ({ slice }) => {
	// console.log(slice);
	const { heading, description, subheading, image_1, image_2, image_3 } =
		slice?.primary;
	const [viewMore, setViewMore] = useState(false);
	return (
		<section className='wrapper bg-light'>
			<div className='container pt-14 pt-md-16'>
				<div className='row gy-10 gy-sm-13 gx-md-8 gx-xl-12 align-items-center'>
					<div className='col-lg-6'>
						<div className='row gx-md-5 gy-5'>
							<div className='col-12'>
								<figure className='rounded mx-5'>
									<img src={image_1?.url} alt={image_1?.alt} />
								</figure>
							</div>

							<div className='col-md-6'>
								<figure className='rounded'>
									<img src={image_2?.url} alt={image_2?.alt} />
								</figure>
							</div>

							<div className='col-md-6'>
								<figure className='rounded'>
									<img src={image_3?.url} alt={image_3?.alt} />
								</figure>
							</div>
						</div>
					</div>

					<div className='col-lg-6'>
						<h3 className='fs-16 text-uppercase text-muted mb-3'>
							{subheading[0]?.text}
						</h3>
						<h2 className='display-3 mb-10'>{heading[0]?.text}</h2>
						<RichText render={description} serializeHyperlink={CustomLink} />
					</div>
				</div>

				<div className='row gx-md-8 gx-xl-12 gy-6 mt-8'>
					{slice?.items?.map((item, index) => (
						<div
							key={index}
							className={`col-lg-4 ${viewMore ? '' : '_note-text'}`}>
							{/* ===== Just remove the _ from _note-text ===== */}
							<h3>{item?.title[0]?.text}</h3>
							<div onClick={() => setViewMore(!viewMore)}>
								<RichText
									render={item?.details}
									serializeHyperlink={CustomLink}
								/>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default DetailedAboutUsSection;
