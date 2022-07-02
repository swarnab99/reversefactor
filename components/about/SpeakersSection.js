/* eslint-disable @next/next/no-img-element */
import { RichText } from 'prismic-reactjs';
import { CustomLink } from '../../utils/prismicHelpers';

const SpeakersSection = ({ slice }) => {
	console.log(slice);
	const { heading } = slice?.primary;
	return (
		<section className='wrapper bg-light'>
			<div className='container pt-14 pt-md-16'>
				<div className='row mb-3'>
					<div className='col-md-10 col-lg-12 col-xl-10 col-xxl-9 mx-auto text-center'>
						<h2 className='display-4 mb-10 px-xl-10'>{heading[0]?.text}</h2>
					</div>
				</div>

				<div className='row grid-view gx-md-8 gx-xl-10 gy-8 gy-lg-0'>
					{slice?.items?.map((item, index) => (
						<SpeakerItem key={index} data={item} />
					))}
				</div>
			</div>
		</section>
	);
};

const SpeakerItem = ({ data }) => {
	const { image, name, video_link, details } = data;
	return (
		<div className='col-md-6 col-lg-3'>
			<div className='position-relative'>
				<div
					className='shape rounded bg-soft-blue rellax d-md-block'
					style={{
						bottom: '-0.75rem',
						right: '-0.75rem',
						width: '98%',
						height: '98%',
						zIndex: 0,
					}}></div>
				<div className='card'>
					<figure className='card-img-top'>
						<img className='img-fluid' src={image?.url} alt={image?.alt} />
					</figure>
					<div className='card-body px-6 py-5'>
						<h4 className='mb-1'>{name[0]?.text}</h4>
						<div className='mb-0'>
							<RichText render={details} serializeHyperlink={CustomLink} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SpeakersSection;
