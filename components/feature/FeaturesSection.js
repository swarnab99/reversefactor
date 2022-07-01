/* eslint-disable @next/next/no-img-element */

const FeaturesSection = ({ subheading, heading }) => {
	return (
		<section className='wrapper bg-light'>
			<div className='container pt-14 pt-md-16'>
				<div className='row text-center'>
					<div className='col-md-10 offset-md-1 col-lg-8 offset-lg-2'>
						<h3 className='fs-15 text-uppercase text-muted mb-3'>
							{subheading}
						</h3>
						<h2 className='display-4 mb-9 px-xl-11'>{heading}</h2>
					</div>
				</div>

				<div className='row gx-lg-8 gx-xl-12 gy-8'>
					<div className='col-md-6 col-lg-4'>
						<div className='d-flex flex-row'>
							<div>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 409.6 409.6'
									data-inject-url='https://sandbox.elemisthemes.com/assets/img/icons/lineal/check.svg'
									className='svg-inject icon-svg icon-svg-sm text-pink me-4'>
									<path
										className='lineal-stroke'
										d='M204.8 409.6C91.9 409.6 0 317.7 0 204.8c0-49.9 18.2-98.1 51.2-135.5 4.4-5 12-5.5 17-1.1s5.5 12 1.1 17c-29.1 33-45.2 75.5-45.2 119.5 0 99.6 81.1 180.7 180.7 180.7s180.7-81.1 180.7-180.7S304.4 24.1 204.8 24.1c-27.3-.1-54.2 6.1-78.7 18-6 2.9-13.2.4-16.1-5.6-2.9-6-.4-13.2 5.6-16.1C143.4 6.9 173.9-.1 204.8 0c112.9 0 204.8 91.9 204.8 204.8s-91.9 204.8-204.8 204.8z'></path>
									<path
										className='lineal-fill'
										d='M349.4 204.8c0 79.8-64.7 144.6-144.6 144.6S60.2 284.6 60.2 204.8 125 60.2 204.8 60.2 349.4 125 349.4 204.8z'></path>
									<path
										className='lineal-stroke'
										d='M204.8 361.4c-86.4 0-156.6-70.2-156.6-156.6S118.4 48.2 204.8 48.2s156.6 70.2 156.6 156.6-70.2 156.6-156.6 156.6zm0-289.1c-73.1 0-132.5 59.4-132.5 132.5s59.4 132.5 132.5 132.5 132.5-59.5 132.5-132.5S277.9 72.3 204.8 72.3z'></path>
									<path
										className='lineal-stroke'
										d='M200.9 246.7c-8.8 0-17.2-3.5-23.5-9.7L145 204.5c-4.7-4.7-4.7-12.3 0-17s12.3-4.7 17 0l32.5 32.5c3.6 3.5 9.3 3.5 12.8 0l49.8-49.9c4.7-4.7 12.3-4.7 17 0s4.7 12.3 0 17L224.4 237c-6.2 6.2-14.7 9.7-23.5 9.7z'></path>
								</svg>
							</div>
							<div>
								<h4 className='mb-1'>Address the root cause</h4>
								<p className='mb-0'>
									Duis mollis gravida commodo id luctus erat porttitor ligula,
									eget lacinia odio sem aget elit nullam quis risus eget.
								</p>
							</div>
						</div>
					</div>

					<div className='col-md-6 col-lg-4'>
						<div className='d-flex flex-row'>
							<div>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 409.6 356.2'
									data-inject-url='https://sandbox.elemisthemes.com/assets/img/icons/lineal/team.svg'
									className='svg-inject icon-svg icon-svg-sm text-purple me-4'>
									<path
										className='lineal-fill'
										d='M265.2 180.7H144.4v-17.6c0-33.3 27-60.4 60.4-60.4s60.4 27 60.4 60.4v17.6z'></path>
									<path
										className='lineal-stroke'
										d='M265.2 191.7H144.4c-6.1 0-11.1-5-11.1-11.1V163c-.5-39.5 31.1-71.8 70.6-72.3s71.8 31.1 72.3 70.6v19.3c0 6.2-4.9 11.1-11 11.1zm-109.7-22.1h98.6v-6.5c.4-27.2-21.4-49.6-48.6-50s-49.6 21.4-50 48.6v7.9z'></path>
									<path
										className='lineal-fill'
										d='M250.4 56.7c0 25.2-20.4 45.6-45.6 45.6s-45.6-20.4-45.6-45.6 20.4-45.6 45.6-45.6c25.2 0 45.6 20.4 45.6 45.6z'></path>
									<path
										className='lineal-stroke'
										d='M204.8 113.3c-31.3 0-56.7-25.4-56.7-56.7S173.5-.1 204.8-.1s56.7 25.4 56.7 56.7c-.1 31.3-25.4 56.7-56.7 56.7zm0-91.2c-19.1 0-34.5 15.4-34.5 34.5s15.4 34.5 34.5 34.5 34.5-15.4 34.5-34.5c0-19-15.5-34.4-34.5-34.5zm193.7 334.1H296.8c-6.1 0-11.1-5-11.1-11.1v-14.8c0-34.2 27.8-62 62-62 6.1-.2 11.2 4.6 11.4 10.7s-4.6 11.2-10.7 11.4h-.7c-22 0-39.8 17.8-39.8 39.8v3.8h79.6v-3.7c0-3.2-.4-6.5-1.2-9.6-1.4-6 2.3-11.9 8.3-13.3 5.8-1.4 11.7 2.2 13.2 8 1.2 4.9 1.8 9.9 1.8 14.9v14.8c0 6.1-4.9 11.1-11.1 11.1z'></path>
									<path
										className='lineal-stroke'
										d='M347.6 290.5c-27.3 0-49.5-22.2-49.5-49.5s22.2-49.5 49.5-49.5 49.5 22.2 49.5 49.5-22.2 49.5-49.5 49.5zm0-76.9c-15.1 0-27.3 12.3-27.3 27.4 0 15.1 12.3 27.3 27.4 27.3S375 256 375 241c0-15.1-12.3-27.3-27.4-27.4zM112.8 356.2H11.1c-6.1 0-11.1-5-11.1-11.1v-14.8c0-34.2 27.8-62 62-62 6.1.2 10.9 5.3 10.7 11.4-.2 5.9-4.9 10.6-10.7 10.7-22 0-39.8 17.8-39.8 39.8v3.8h79.6v-3.7c0-3.2-.4-6.5-1.2-9.6-1.5-5.9 2.2-11.9 8.1-13.4s11.9 2.2 13.4 8.1c1.2 4.9 1.8 9.9 1.8 14.9v14.8c.1 6.1-4.9 11.1-11.1 11.1.1 0 .1 0 0 0z'></path>
									<path
										className='lineal-stroke'
										d='M61.9 290.5c-27.3 0-49.5-22.2-49.5-49.5s22.2-49.5 49.5-49.5 49.5 22.2 49.5 49.5-22.1 49.5-49.5 49.5zm0-76.9c-15.1 0-27.3 12.2-27.3 27.4 0 15.1 12.2 27.4 27.4 27.4 15.1 0 27.3-12.2 27.3-27.3 0-15.2-12.3-27.4-27.4-27.5zm142.9 72.1c-6.1 0-11.1-5-11.1-11.1v-56.4c-.2-6.1 4.6-11.2 10.7-11.4 6.1-.2 11.2 4.6 11.4 10.7v57.1c.1 6.2-4.9 11.1-11 11.1z'></path>
									<path
										className='lineal-stroke'
										d='M279.5 285.7H130.1c-6.1.2-11.2-4.6-11.4-10.7s4.6-11.2 10.7-11.4h150.2c6.1-.2 11.2 4.6 11.4 10.7s-4.6 11.2-10.7 11.4h-.8z'></path>
								</svg>
							</div>
							<div>
								<h4 className='mb-1'>Patient-centric Plans</h4>
								<p className='mb-0'>
									Duis mollis gravida commodo id luctus erat porttitor ligula,
									eget lacinia odio sem aget elit nullam quis risus eget.
								</p>
							</div>
						</div>
					</div>

					<div className='col-md-6 col-lg-4'>
						<div className='d-flex flex-row'>
							<div>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 409.6 391.2'
									data-inject-url='https://sandbox.elemisthemes.com/assets/img/icons/lineal/clock-3.svg'
									className='svg-inject icon-svg icon-svg-sm text-red me-4'>
									<path
										className='lineal-fill'
										d='M148.9 61.3C136 24.4 95.7 4.9 58.8 17.8S2.4 71.1 15.3 108c6.5 18.5 20.3 33.5 38.3 41.4 15.9-42.8 51.3-75.5 95.3-88.1z'></path>
									<path
										className='lineal-stroke'
										d='M53.5 160.7c-1.6 0-3.1-.4-4.6-1C7.5 141.4-11.3 93 7 51.5s66.8-60.3 108.2-42c20.8 9.2 36.9 26.6 44.4 48.1 2.1 5.9-1 12.3-6.9 14.4-.2.1-.4.1-.6.2-40.5 11.6-73.1 41.7-87.9 81.1-1.8 4.5-6 7.4-10.7 7.4zM82.1 25.2c-32.8 0-59.5 26.6-59.5 59.5 0 19.4 9.5 37.7 25.4 48.8C65.2 97.2 95.8 69 133.4 54.7c-10.7-18.3-30.2-29.5-51.3-29.5z'></path>
									<path
										className='lineal-fill'
										d='M327.5 13.9c-30.1 0-56.9 19-66.8 47.5 44 12.6 79.4 45.2 95.4 88.1 35.8-15.8 52-57.6 36.2-93.3-11.3-25.8-36.7-42.3-64.8-42.3z'></path>
									<path
										className='lineal-stroke'
										d='M356.1 160.7c-4.7 0-8.9-2.9-10.6-7.4-14.8-39.5-47.4-69.6-87.9-81.2-6-1.7-9.5-8-7.8-14 .1-.2.1-.4.2-.6C264.9 14.7 311.7-7.9 354.5 7S420 68.8 405 111.7c-7.5 21.5-23.6 38.9-44.4 48.1-1.4.6-2.9.9-4.5.9zM276.2 54.6c37.6 14.3 68.1 42.5 85.4 78.8 26.9-18.8 33.5-55.9 14.7-82.8s-55.9-33.5-82.8-14.7c-7.1 4.9-13 11.3-17.3 18.7zm-79.4 176c-3.1 0-6.1-.7-8.8-2.1l-45.1-22.6c-5.6-2.8-7.8-9.6-5-15.2s9.6-7.8 15.2-5l43.3 21.6 57.4-57.4c4.4-4.4 11.6-4.4 16 0s4.4 11.6 0 16l-58.9 58.9c-3.8 3.7-8.8 5.8-14.1 5.8z'></path>
									<path
										className='lineal-stroke'
										d='M204.8 391.2c-96.8 0-175.6-78.8-175.6-175.6S108 39.9 204.8 39.9c69.8 0 133 41.3 161 105.2 2.5 5.7-.1 12.4-5.9 14.9s-12.4-.1-14.9-5.9c-24.4-55.7-79.4-91.7-140.2-91.7-84.4 0-153 68.6-153 153s68.6 153 153 153 153-68.6 153-153c-.2-6.2 4.7-11.5 11-11.6 6.2-.2 11.5 4.7 11.6 11v.7c0 96.9-78.8 175.7-175.6 175.7z'></path>
									<path
										className='lineal-stroke'
										d='M287.1 281.5c-1.9 0-3.7-.5-5.4-1.4l-102.4-55.7c-5.5-3-7.5-9.8-4.5-15.3s9.8-7.5 15.3-4.5l102.5 55.7c5.5 3 7.5 9.8 4.5 15.3-2 3.6-5.8 5.9-10 5.9zm-82.3-178.4c-6.2 0-11.3-5-11.3-11.3V51.2c0-6.2 5.1-11.3 11.3-11.3s11.3 5.1 11.3 11.3v40.5c0 6.3-5 11.3-11.3 11.4zm0 288.1c-6.2 0-11.3-5.1-11.3-11.3v-40.5c0-6.2 5.1-11.3 11.3-11.3s11.3 5.1 11.3 11.3v40.5c0 6.2-5 11.3-11.3 11.3zm164.3-164.3h-40.5c-6.2.2-11.5-4.7-11.6-11-.2-6.2 4.7-11.5 11-11.6h41.2c6.2.2 11.2 5.4 11 11.6-.3 6-5.1 10.8-11.1 11zm-288.1 0H40.5c-6.2-.2-11.2-5.4-11-11.6.2-6 5-10.8 11-11H81c6.2.2 11.2 5.4 11 11.6-.2 6-5 10.8-11 11z'></path>
									<path
										className='lineal-stroke'
										d='M241.2 62.5c-6.2 0-11.3-5.1-11.3-11.3V27.9c0-2.9-2.4-5.3-5.3-5.3H185c-2.9 0-5.3 2.4-5.3 5.3v23.4c0 6.2-5.1 11.3-11.3 11.3s-11.3-5.1-11.3-11.3V27.9C157.1 12.5 169.6 0 185 0h39.6c15.4 0 27.9 12.5 27.9 27.9v23.4c-.1 6.2-5.1 11.2-11.3 11.2z'></path>
								</svg>
							</div>
							<div>
								<h4 className='mb-1'>Long term and sustainability</h4>
								<p className='mb-0'>
									Duis mollis gravida commodo id luctus erat porttitor ligula,
									eget lacinia odio sem aget elit nullam quis risus eget.
								</p>
							</div>
						</div>
					</div>

					<div className='col-md-6 col-lg-4'>
						<div className='d-flex flex-row'>
							<div>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 441.4 512'
									className='svg-inject icon-svg icon-svg-sm text-yellow me-4'>
									<path
										className='lineal-fill'
										d='M254.9 457c-14.9-8.1-24.1-23.7-24.1-40.6V285.6c26.5 11.1 57.1 4.9 77.1-15.6-19-26.2-49.3-41.6-81.6-41.6H115.7c-55.7 0-100.9 45.2-100.9 100.9v167.9h312.4v-.8L254.9 457z'></path>
									<path
										className='lineal-stroke'
										d='M426.6 270.8c-8.2 0-14.8 6.6-14.9 14.8v130.7c0 11.5-6.3 22.1-16.4 27.6l-66.7 36.3-66.6-36.3c-10.1-5.5-16.4-16.1-16.4-27.6V305c4.1.6 8.2.9 12.3.9 1.3 0 2.5 0 3.8-.1h1c1.1-.1 2.2-.1 3.4-.2l1.6-.2 1.6-.2c15-2 29.3-8 41.1-17.5l1.1-.9 1.3-1.1c.9-.7 1.7-1.5 2.5-2.2l.4-.4c1-.9 1.9-1.8 2.8-2.7 3.8-3.9 7.2-8.1 10.1-12.6 7.2 10.9 16.8 19.9 28 26.5 7.1 4.1 16.2 1.8 20.3-5.3 4.1-7.1 1.8-16.2-5.3-20.3-10-5.9-17.9-14.8-22.6-25.5-2.4-5.4-7.7-8.8-13.6-8.9h-13.5c-5.9 0-11.2 3.5-13.6 8.9-.5 1-.9 2-1.4 3-12.8-12.4-28.4-21.7-45.4-27.2 17.4-16.5 27.2-39.4 27.2-63.3V87.5c-.2-8.2-7-14.7-15.2-14.5-7.9.2-14.3 6.6-14.5 14.5v68.3c0 31.6-25.5 57.4-57.1 57.8h-62c-31.6-.5-57-26.2-57-57.8V87.5c0-31.9 25.9-57.8 57.8-57.8h60.5c8.2-.2 14.7-7 14.5-15.2-.2-7.9-6.6-14.3-14.5-14.5h-60.5C92.5.1 53.3 39.2 53.3 87.5v68.3c0 23.9 9.8 46.8 27.2 63.3C32.6 234.5.1 279 0 329.3v167.9c0 8.2 6.6 14.8 14.8 14.8h313.9c2.5 0 4.9-.6 7.1-1.8l73.8-40.2c19.6-10.7 31.9-31.3 31.9-53.6V285.6c-.1-8.2-6.7-14.8-14.9-14.8zM29.7 482.3v-153c.1-47.5 38.5-85.9 86-86h40.4v144.1c0 8.2 6.6 14.8 14.8 14.8s14.8-6.6 14.8-14.8V243.3h40.4c22.6 0 44.3 9 60.4 24.8-6.3 3.9-13.3 6.4-20.6 7.5h.1c-1.1.2-2.3.3-3.5.4l-.6.1c-1.2.1-2.5.1-3.7.1h-.2c-7.3 0-14.6-1.4-21.4-4.3-7.5-3.2-16.3.3-19.4 7.9-.8 1.8-1.2 3.8-1.2 5.8v130.7c0 22.4 12.2 42.9 31.8 53.7l22.6 12.3H29.7z'></path>
									<path
										className='lineal-stroke'
										d='M327.2 405.9c-2.5 0-5-.6-7.2-1.9l-24.9-13.9c-7.2-4-9.7-13-5.7-20.2s13-9.7 20.2-5.7l15.7 8.7 34.1-30.1c6.1-5.4 15.5-4.9 21 1.3 5.4 6.1 4.9 15.5-1.3 21l-42 37.1c-2.8 2.4-6.3 3.7-9.9 3.7z'></path>
								</svg>
							</div>
							<div>
								<h4 className='mb-1'>Constant support and monitoring</h4>
								<p className='mb-0'>
									Duis mollis gravida commodo id luctus erat porttitor ligula,
									eget lacinia odio sem aget elit nullam quis risus eget.
								</p>
							</div>
						</div>
					</div>

					<div className='col-md-6 col-lg-4'>
						<div className='d-flex flex-row'>
							<div>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 512 512'
									data-inject-url='https://sandbox.elemisthemes.com/assets/img/icons/lineal/target.svg'
									className='svg-inject icon-svg icon-svg-sm text-aqua me-4'>
									<circle
										className='lineal-fill'
										cx='283.8'
										cy='283.8'
										r='143'></circle>
									<path
										className='lineal-stroke'
										d='M283.8 441.8c-87.1 0-158-70.9-158-158s70.9-158 158-158 158 70.9 158 158-70.9 158-158 158zm0-286.1c-70.7 0-128.1 57.3-128.1 128.1S213 411.9 283.8 411.9s128.1-57.3 128.1-128.1c-.1-70.7-57.4-128-128.1-128.1z'></path>
									<path
										className='lineal-fill'
										d='M283.8 210.5c40.5 0 73.3 32.8 73.3 73.3s-32.8 73.3-73.3 73.3-73.3-32.8-73.3-73.3'></path>
									<path
										className='lineal-stroke'
										d='M283.8 372.1c-48.7-.1-88.2-39.5-88.2-88.3.2-8.2 7.1-14.8 15.3-14.5 7.9.2 14.3 6.6 14.5 14.5 0 32.2 26.1 58.4 58.4 58.4s58.4-26.1 58.4-58.4-26.1-58.4-58.4-58.4c-8.2-.2-14.8-7.1-14.5-15.3.2-7.9 6.6-14.3 14.5-14.5 48.7-.5 88.7 38.6 89.2 87.3s-38.6 88.7-87.3 89.2h-1.9z'></path>
									<path
										className='lineal-fill'
										d='M107.9 55.1l-5.3 47.5-47.5 5.3-40.2-40.1 52.9-52.9z'></path>
									<path
										className='lineal-stroke'
										d='M283.8 55.7c-55.3 0-108.8 20.1-150.4 56.7l-15.2-15.2 4.5-40.4c.5-4.5-1.1-9-4.3-12.2L78.3 4.4c-5.8-5.8-15.3-5.8-21.1 0L4.4 57.2c-5.8 5.8-5.8 15.3 0 21.1l40.1 40.1c2.8 2.8 6.6 4.4 10.6 4.4.5 0 1.1 0 1.6-.1l40.4-4.5 15.2 15.2c-36.6 41.5-56.7 95-56.7 150.4C55.7 409.6 158 512 283.8 512c66.2 0 129.1-28.7 172.4-78.7 5.6-6.1 5.1-15.6-1-21.1s-15.6-5.1-21.1 1l-.5.5c-37.7 43.4-92.3 68.4-149.8 68.4-109.3 0-198.3-89-198.3-198.3 0-47.4 17-93.3 48-129.2l140.2 140.2c5.8 5.8 15.3 5.8 21.1 0s5.8-15.3 0-21.1L154.6 133.5c35.9-31 81.8-48 129.2-48 109.4 0 198.3 89 198.3 198.3 0 8.3 6.7 14.9 14.9 14.9s14.9-6.7 14.9-14.9C512 158 409.6 55.7 283.8 55.7zM36.1 67.8l31.7-31.7 24.5 24.5-3.2 28.5-28.5 3.2-24.5-24.5z'></path>
								</svg>
							</div>
							<div>
								<h4 className='mb-1'>Detailed Analysis of Lifestyle</h4>
								<p className='mb-0'>
									Duis mollis gravida commodo id luctus erat porttitor ligula,
									eget lacinia odio sem aget elit nullam quis risus eget.
								</p>
							</div>
						</div>
					</div>

					<div className='col-md-6 col-lg-4'>
						<div className='d-flex flex-row'>
							<div>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 512 454.6'
									data-inject-url='https://sandbox.elemisthemes.com/assets/img/icons/lineal/chat-2.svg'
									className='svg-inject icon-svg icon-svg-sm text-green me-4'>
									<path
										className='lineal-fill'
										d='M131.5 126.8h249V15.2H15.2v256.3h116.3z'></path>
									<path
										className='lineal-stroke'
										d='M496.8 194.4c-8.4 0-15.2 6.8-15.2 15.2v158.3h-29.7c-8.4 0-15.2 6.8-15.2 15.2 0 .5 0 1.1.1 1.6l2.8 27.2-75.7-42.1c-2.3-1.3-4.8-1.9-7.4-1.9H146.7V142h233.8c8.4 0 15.2-6.8 15.2-15.2V15.2c0-8.4-6.8-15.2-15.2-15.2H15.2C6.8 0 0 6.8 0 15.2v256.3c0 8.4 6.8 15.2 15.2 15.2h101v96.4c0 8.4 6.8 15.2 15.2 15.2h221l97.8 54.3c7.3 4.1 16.6 1.4 20.7-5.9 1.5-2.7 2.2-5.9 1.8-9l-4.1-39.5h28.1c8.4 0 15.2-6.8 15.2-15.2V209.6c.1-8.4-6.7-15.2-15.1-15.2zM30.4 256.3V30.4h334.8v81.2H131.5c-8.4 0-15.2 6.8-15.2 15.2v129.5H30.4z'></path>
									<path
										className='lineal-stroke'
										d='M413.8 223.6H214.4c-8.4 0-15.2-6.8-15.2-15.2s6.8-15.2 15.2-15.2h199.4c8.4 0 15.2 6.8 15.2 15.2s-6.8 15.2-15.2 15.2zm0 85.9H214.4c-8.4 0-15.2-6.8-15.2-15.2S206 279 214.4 279h199.4c8.4 0 15.2 6.8 15.2 15.2s-6.8 15.3-15.2 15.3z'></path>
								</svg>
							</div>
							<div>
								<h4 className='mb-1'>Consultation with an Expert</h4>
								<p className='mb-0'>
									Duis mollis gravida commodo id luctus erat porttitor ligula,
									eget lacinia odio sem aget elit nullam quis risus eget.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FeaturesSection;
