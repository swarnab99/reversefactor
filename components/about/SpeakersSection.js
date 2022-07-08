/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { RichText } from 'prismic-reactjs';
import { CustomLink } from '../../utils/prismicHelpers';
import FsLightbox from 'fslightbox-react';
import lozad from 'lozad';

const SpeakersSection = ({ slice }) => {
	// console.log(slice);
	const { heading } = slice?.primary;

	const [sources, setSources] = useState([]);
	// ===== SLIDE STATE =====
	const [lightboxController, setLightboxController] = useState({
		toggler: false,
		slide: 1,
	});
	// ===== HANDLE SLIDE NUMBER =====
	const openLightboxOnSlide = (number) => {
		setLightboxController({
			toggler: !lightboxController.toggler,
			slide: number,
		});
	};
	// ===== GET STRUCTURED SOURCES =====
	useEffect(() => {
		const observer = lozad('.lozad', {
			rootMargin: '100px 0px', // syntax similar to that of CSS Margin
		});
		observer.observe();

		let tempSources = [];
		slice.items.map((item) => {
			item.video_link.link_type == 'Web'
				? tempSources.push(item?.video_link?.url)
				: tempSources.push(item?.image?.url);
		});
		setSources(tempSources);
		return () => {
			setSources([]);
		};
	}, [slice]);
	return (
		<section className='wrapper bg-light'>
			<div className='container pt-14 pt-md-16'>
				<div className='row mb-3'>
					<div className='col-md-10 col-lg-12 col-xl-10 col-xxl-9 mx-auto text-center'>
						<h2 className='display-4 mb-10 px-xl-10'>{heading[0]?.text}</h2>
					</div>
				</div>
				<div className='row grid-view gx-md-8 gx-xl-10 gy-8 gy-lg-0'>
					{/* ===== Desktop Only ===== */}
					<Splide
						options={{
							rewind: true,
							perPage: 4,
							height: '25rem',
							gap: '2rem',
						}}
						className='d-none d-lg-block'
						aria-label='Our Eminent Speakers'>
						{slice?.items?.map((item, index) => (
							<SplideSlide key={index}>
								<SpeakerItem
									data={item}
									index={index}
									openLightboxOnSlide={openLightboxOnSlide}
								/>
							</SplideSlide>
						))}
					</Splide>

					{/* ===== Tablet Only ===== */}
					<Splide
						options={{
							rewind: true,
							perPage: 2,
							height: '25rem',
							gap: '2rem',
						}}
						className='d-none d-md-block d-lg-none'
						aria-label='Our Eminent Speakers'>
						{slice?.items?.map((item, index) => (
							<SplideSlide key={index}>
								<SpeakerItem
									data={item}
									index={index}
									openLightboxOnSlide={openLightboxOnSlide}
								/>
							</SplideSlide>
						))}
					</Splide>
					{/* ===== Mobile Only ===== */}
					<Splide
						options={{
							rewind: true,
							perPage: 1,
							height: '25rem',
							gap: '2rem',
						}}
						className='d-md-none'
						aria-label='Our Eminent Speakers'>
						{slice?.items?.map((item, index) => (
							<SplideSlide key={index}>
								<SpeakerItem
									data={item}
									index={index}
									openLightboxOnSlide={openLightboxOnSlide}
								/>
							</SplideSlide>
						))}
					</Splide>
				</div>
			</div>

			<FsLightbox
				toggler={lightboxController.toggler}
				sources={sources}
				slide={lightboxController.slide}
			/>
		</section>
	);
};

const SpeakerItem = ({ data, index, openLightboxOnSlide }) => {
	const { image, name, video_link, details } = data;
	return (
		<div
			className=''
			onClick={() => {
				if (video_link?.url) {
					openLightboxOnSlide(index + 1);
				}
			}}>
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
					<div className='card-body px-5 py-4 pb-0'>
						<h4 className='mb-1'>{name[0]?.text}</h4>
						<div className='mb-0 small'>
							<RichText render={details} serializeHyperlink={CustomLink} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SpeakersSection;
