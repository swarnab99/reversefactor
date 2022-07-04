/* eslint-disable @next/next/no-img-element */
import { FiPlayCircle } from 'react-icons/fi';
import { RichText } from 'prismic-reactjs';
import { CustomLink } from '../../utils/prismicHelpers';

const StoriesSection = ({ slice }) => {
	// console.log(slice);
	return (
		<section className='pt-10'>
			<div className='container'>
				{slice?.items?.map((item, index) => (
					<StoryItem key={index} data={item} even={index % 2 == 0} />
				))}
			</div>
		</section>
	);
};

const StoryItem = ({ data, even }) => {
	const {
		image,
		details,
		location,
		name,
		reversed_disease,
		title,
		video_link,
	} = data;
	const colors = [
		'bg-pale-yellow',
		'bg-pale-red',
		'bg-pale-green',
		'bg-pale-blue',
		'bg-pale-orange',
		'bg-pale-leaf',
		'bg-pale-aqua',
		'bg-pale-navy',
	];
	return (
		<div className='row gx-lg-8 gx-xl-0 align-items-center mt-3'>
			<div className='col-lg-3 offset-lg-1 d-none d-lg-flex position-relative'>
				<figure>
					<img
						className='img-fluid rounded'
						src={image?.url}
						alt={image?.alt}
					/>

					{video_link && (
						<i className='video-icon'>
							<FiPlayCircle />
						</i>
					)}
				</figure>
			</div>

			<div className={`col-lg-6 offset-lg-1 ${even && 'order-first'}`}>
				<div className='swiper-container dots-start dots-closer mt-6 mb-6'>
					<div className='swiper'>
						<div className='swiper-wrapper'>
							<div className='swiper-slide client-story'>
								<h3>{title[0]?.text}</h3>
								<blockquote className='icon fs-lg'>
									<div className='cmb-0 mb-4 details'>
										<RichText
											render={details}
											serializeHyperlink={CustomLink}
										/>{' '}
										<button className='small border-0 bg-light text-primary'>
											read more&gt;
										</button>
									</div>

									<div className='blockquote-details'>
										<div className='info ps-0'>
											<h5 className='mb-1'>{name[0]?.text}</h5>
											<p className='mb-0'>{location[0]?.text}</p>
											<div className='mt-4 d-flex align-items-start justify-content-center'>
												<h6 className='me-2'>Reversed:</h6>{' '}
												<div className='badges'></div>
												{reversed_disease?.map((item, index) => (
													<span
														key={index}
														className={`badge text-dark me-2 ${colors[index]}`}>
														{item?.text}
													</span>
												))}
											</div>
										</div>
									</div>
								</blockquote>
							</div>
						</div>
					</div>
				</div>
			</div>

			<style jsx>{`
				.video-icon {
					position: absolute;
					left: 20px;
					top: 10px;
					font-size: 1.4rem;
					color: #fff;
				}
			`}</style>
		</div>
	);
};

export default StoriesSection;
