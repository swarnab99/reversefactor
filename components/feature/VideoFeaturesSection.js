/* eslint-disable @next/next/no-img-element */
import { FaPlay } from 'react-icons/fa';

const VideoFeaturesSection = () => {
	return (
		<section className='wrapper bg-light'>
			<div className='container pt-14 pt-md-16'>
				<div className='row gy-10 gy-sm-13 gx-lg-3 align-items-center mb-10'>
					<div className='col-md-8 col-lg-6 position-relative'>
						<a
							href='./assets/media/movie.mp4'
							className='btn btn-circle btn-primary btn-play ripple mx-auto mb-5 position-absolute'
							// style='top:50%; left: 50%; transform: translate(-50%,-50%); z-index:3;'
							style={{
								top: '50%',
								left: '50%',
								transform: 'translate(-50%, -50%)',
								zIndex: 3,
							}}
							data-glightbox=''>
							<i>
								<FaPlay className='p-1' />
							</i>
						</a>
						<div
							className='shape rounded bg-soft-green rellax d-md-block'
							data-rellax-speed='0'
							// style='bottom: -1.8rem; right: -1.5rem; width: 85%; height: 90%; transform: translate3d(0px, 0px, 0px);'
							style={{
								bottom: '-1.8rem',
								right: '-1.5rem',
								width: '85%',
								height: '90%',
								transform: 'translate3d(0px, 0px, 0px)',
							}}></div>
						<figure className='rounded'>
							<img
								src='https://sandbox.elemisthemes.com/assets/img/photos/about8.jpg'
								alt=''
							/>
						</figure>
					</div>

					<div className='col-lg-5 col-xl-4 offset-lg-1'>
						<h2 className='display-4 mb-7'>
							3 main questions asked by Diabetic Patients
						</h2>
						<div className='d-flex flex-row mb-5'>
							<div>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 339.8 409.6'
									data-inject-url='https://sandbox.elemisthemes.com/assets/img/icons/lineal/shield.svg'
									className='svg-inject icon-svg icon-svg-md text-yellow me-5'>
									<path
										className='lineal-stroke'
										d='M169.9 409.6c-5.5 0-10.9-1.2-15.8-3.5C107.8 384.8 0 327.5 0 255.5V72.1c0-10.7 8.7-19.4 19.4-19.5 2.1 0 4.2.3 6.1 1 9.2 3.1 18.9 4.7 28.6 4.6 31.5.1 60.7-16.3 76.9-43.3C136.6 5.7 146.6 0 157.4 0h25c10.8.1 20.8 5.7 26.4 14.9 16.2 27 45.4 43.4 76.9 43.3 9.7 0 19.4-1.6 28.6-4.6 10.2-3.4 21.2 2.1 24.6 12.3.7 2 1 4.1 1 6.1v48c0 6.5-5.3 11.8-11.7 11.8-6.5 0-11.8-5.3-11.8-11.7V77.6c-10 2.8-20.3 4.2-30.6 4.2-39.7.2-76.5-20.6-97-54.6-1.3-2.2-3.7-3.6-6.3-3.6h-25c-2.6 0-5 1.4-6.3 3.6-20.5 34-57.3 54.8-97 54.6-10.3 0-20.6-1.4-30.6-4.2v178c0 47.7 72.5 98 140.4 129.3 3.8 1.7 8.2 1.7 12 0 67.9-31.3 140.4-81.6 140.4-129.3v-74.9c0-6.5 5.3-11.8 11.8-11.7 6.5 0 11.7 5.3 11.7 11.7v74.9c0 72-107.8 129.3-154.1 150.6-5 2.2-10.4 3.4-15.9 3.4z'></path>
									<path
										className='lineal-fill'
										d='M156 269l-62.2-31.1c-11.8-5.9-16.6-20.2-10.7-32 5.9-11.8 20.2-16.6 32-10.7l44.9 22.5 56.6-70.7c8.2-10.3 23.2-12 33.5-3.7 10.3 8.2 12 23.2 3.7 33.5l-68.6 85.8c-6.9 8.8-19.1 11.5-29.2 6.4z'></path>
									<path
										className='lineal-stroke'
										d='M166.7 283.3c-5.5 0-11-1.3-15.9-3.8l-62.2-31.1c-17.6-8.8-24.7-30.2-15.9-47.8s30.2-24.7 47.8-15.9l36.4 18.2 50.6-63.3c12.3-15.4 34.7-17.9 50.1-5.6 15.4 12.3 17.9 34.7 5.6 50.1l-68.6 85.8c-6.8 8.5-17.1 13.4-27.9 13.4zm-62.2-78.8c-6.7 0-12.1 5.4-12.1 12.1 0 4.6 2.6 8.8 6.7 10.8l62.2 31.1c5.1 2.6 11.3 1.2 14.9-3.3l68.6-85.8c4.3-5.1 3.7-12.8-1.4-17.1-5.1-4.3-12.8-3.7-17.1 1.4-.1.2-.3.3-.4.5l-56.6 70.7c-3.5 4.3-9.5 5.6-14.4 3.2L110 205.6c-1.7-.7-3.6-1.1-5.5-1.1z'></path>
								</svg>
							</div>
							<div>
								<h4 className='mb-1'>What Problems Can Diabetes Cause?</h4>
								<p className='mb-0'>
									Diabetes can cause Eye problems, Foot problems, Heart attack,
									Kidney problems, Nerve damage etc.
								</p>
							</div>
						</div>
						<div className='d-flex flex-row mb-5'>
							<div>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 409.6 353.3'
									data-inject-url='https://sandbox.elemisthemes.com/assets/img/icons/lineal/loading.svg'
									className='svg-inject icon-svg icon-svg-md text-red me-5'>
									<path
										className='lineal-stroke'
										d='M176.6 353.3c-46.9 0-91.9-18.6-125-51.8-68.9-68.9-68.9-181 0-249.9 69-69 180.9-69 249.9 0 24 24 40.5 54.3 47.7 87.5.4 1.9.8 3.9 1.2 6.2l2.7 14.8c1.1 6.2-3 12.2-9.3 13.3-.7.1-1.3.2-2 .2h-51c-5.4 0-10-3.7-11.2-9l-2.1-9.9C265.3 99 210.1 63.8 154.4 76.1s-90.9 67.4-78.6 123.2c7.9 35.6 33.9 64.4 68.6 75.8 3 1 6.1 1.8 9.1 2.5 6.2 1.4 10 7.5 8.6 13.7-1.4 6.2-7.5 10-13.7 8.6-3.7-.9-7.5-1.9-11.1-3.1C71 275 34.9 203.4 56.8 137c6.2-18.7 16.6-35.7 30.5-49.7 49.2-49.3 129-49.5 178.4-.3 17.3 17.2 29.2 39 34.3 62.9l.2.9h28.1l-.2-1.4c-.4-2-.7-3.8-1.1-5.4C308.9 60.9 226.9 8.3 143.8 26.4c-28.8 6.3-55.2 20.7-76 41.5-60 60-60 157.6 0 217.6 41 41.1 101.7 55.5 156.9 37.4L206 290.3c-3-5.6-.9-12.5 4.6-15.5 5.3-2.9 12-1.1 15.2 4.1l25.6 44.4c3.2 5.5 1.3 12.5-4.2 15.6-.6.4-1.3.7-2 .9l-10.8 3.7c-18.6 6.5-38.1 9.8-57.8 9.8z'></path>
									<path
										className='lineal-fill'
										d='M236.6 160.7l80.8 140 80.8-140H236.6z'></path>
									<path
										className='lineal-stroke'
										d='M317.4 312.1c-4.1 0-7.9-2.2-9.9-5.7l-80.8-140c-3.2-5.5-1.3-12.5 4.2-15.6 1.7-1 3.7-1.5 5.7-1.5h161.6c6.3 0 11.4 5.1 11.4 11.4 0 2-.5 4-1.5 5.7l-80.8 140c-2.1 3.6-5.9 5.7-9.9 5.7zm-61-140l61 105.7 61-105.7h-122z'></path>
								</svg>
							</div>
							<div>
								<h4 className='mb-1'>
									Can I reverse my Diabetes without Medicine?
								</h4>
								<p className='mb-0'>
									Yes you can, and Reverse Factor is here to help you.
								</p>
							</div>
						</div>

						<div className='d-flex flex-row'>
							<div>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 512 465.5'
									data-inject-url='https://sandbox.elemisthemes.com/assets/img/icons/lineal/savings.svg'
									className='svg-inject icon-svg icon-svg-md text-green me-5'>
									<path
										className='lineal-stroke'
										d='M156.8 465.5c-9.9 0-24.2-4.8-56.2-40.6-16.2-18.2-29.5-36-30.1-36.8-.4-.5-.7-1-1-1.6-6.1-11-9.3-23.3-9.3-35.8v-90.9c0-7.9 6.4-14.4 14.3-14.4h116c16.5 0 32.4 6.5 44.2 18.1l59.4 58.5c17.2 17.2 17.3 45.1.1 62.3s-45.1 17.3-62.3.1L172.7 325c-5.9 0-15.5-.1-23.1-.1l-10.8-.1c-7.9 0-14.3-6.5-14.3-14.4s6.5-14.3 14.4-14.3h.1l10.8.1c6.8 0 14.1.1 19.6.1h6.9c4.2 0 8.5.1 12.7 4.3l63.5 63.5c6 6 15.7 6 21.7 0s6-15.7 0-21.7L214.6 284c-6.4-6.3-15-9.9-24-9.8H88.9v76.5c0 7.4 1.8 14.6 5.2 21.1 2.6 3.5 13.6 17.9 26.5 32.4 25.5 28.8 35.2 32.2 36.5 32.6h155.1c10.6 0 22.9-5.5 34.6-11.2 9.9-4.8 83.3-54.6 127.3-84.9l.7-.5c8.2-5.1 10.7-15.8 5.6-23.9-4.9-7.9-15.2-10.5-23.3-6L350 381.4c-6.6 4.4-15.5 2.6-19.9-4-4.4-6.6-2.6-15.5 4-19.9l107.5-71.3c.2-.1.3-.2.5-.3 21.8-13.1 50.1-6 63.2 15.8 12.9 21.6 6.2 49.6-15.2 62.8-13.3 9.2-115.8 79.6-130.8 86.9-14.7 7.1-30.5 14.1-47.1 14.1H156.8z'></path>
									<path
										className='lineal-fill'
										d='M14.4 242.2h84.2v189.6H14.4z'></path>
									<path
										className='lineal-stroke'
										d='M98.5 446.1H14.4c-7.9 0-14.4-6.4-14.4-14.4V242.2c0-7.9 6.4-14.4 14.3-14.4h84.1c7.9 0 14.3 6.4 14.3 14.4v189.6c.1 7.9-6.3 14.3-14.2 14.3zm-69.8-28.7h55.4V256.5H28.7v160.9zM273 214.2c-59.2 0-107.1-48-107.1-107.1C165.9 47.9 213.9 0 273.1 0c59.1 0 107.1 48 107.1 107.1-.1 59.1-48.1 107.1-107.2 107.1zm0-185.5c-43.3 0-78.4 35.1-78.4 78.4s35.1 78.4 78.4 78.4c43.3 0 78.4-35.1 78.4-78.4-.1-43.3-35.1-78.3-78.4-78.4z'></path>
									<circle
										className='lineal-fill'
										cx='348.9'
										cy='178.6'
										r='92.8'></circle>
									<path
										className='lineal-stroke'
										d='M348.9 285.7c-59.1 0-107.1-47.9-107.1-107.1 0-59.1 47.9-107.1 107.1-107.1S456 119.4 456 178.6c-.1 59.1-48 107-107.1 107.1zm0-185.5c-43.3 0-78.4 35.1-78.4 78.4S305.7 257 349 257s78.4-35.1 78.4-78.4c-.1-43.3-35.2-78.4-78.5-78.4z'></path>
									<path
										className='lineal-stroke'
										d='M345.4 224.9c-15.5-.5-28.2-8.5-28.2-16.8 0-4.4 3.9-10.9 8.8-10.9 5.4 0 9.8 7.6 19.4 9.3v-20.9c-11.9-4.5-25.9-10.1-25.9-26.6s12.1-24.3 25.9-26.2v-3.6c0-1.8 2.1-3.5 4.9-3.5 2.5 0 4.9 1.7 4.9 3.5v3.2c8 .3 23.1 2.3 23.1 11.2 0 3.5-2.3 10.6-8 10.6-4.3 0-6.7-4.1-15.1-4.8v18.9c11.8 4.4 25.5 10.5 25.5 27.9 0 16-10.4 25.7-25.5 28.2v3.8c0 1.8-2.5 3.5-4.9 3.5-2.9 0-4.9-1.7-4.9-3.5v-3.3zm1.3-59.7v-15.4c-5.8 1.2-8.3 4.1-8.3 7.2 0 3.8 3.4 6.1 8.3 8.2zm7.2 23.9v17.3c4.4-1 7.9-3.5 7.9-8.1 0-4.3-3.2-7-7.9-9.2z'></path>
								</svg>
							</div>
							<div>
								<h4 className='mb-1'>Is it Expensive?</h4>
								<p className='mb-0'>
									No, we provide a low cost option. Consult us today for free.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default VideoFeaturesSection;
