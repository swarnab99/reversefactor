/* eslint-disable @next/next/no-img-element */

const TeamSection = ({ slice }) => {
	// console.log(slice);
	const { heading } = slice?.primary;
	return (
		<section className='wrapper bg-light'>
			<div className='container pt-14 pt-md-16'>
				<div className='row mb-3'>
					<div className='col-md-10 col-xl-9 col-xxl-7 mx-auto text-center'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 409.6 356.2'
							data-inject-url='https://sandbox.elemisthemes.com/assets/img/icons/lineal/team.svg'
							className='svg-inject icon-svg icon-svg-md mb-4'>
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
						<h2 className='display-4 mb-3 '>{heading[0]?.text}</h2>
					</div>
				</div>

				<div className='position-relative'>
					<div
						className='shape rounded-circle bg-soft-yellow rellax w-16 h-16'
						style={{ bottom: '0.5rem', right: '-1.7rem' }}></div>
					<div
						className='shape rounded-circle bg-line red rellax w-16 h-16'
						style={{ top: '0.5rem', left: '-1.7rem' }}></div>
					<div className='container mb-6'>
						<div className='row'>
							{slice?.items?.map((item, index) => (
								<TeamItem key={index} data={item} />
							))}
						</div>
					</div>
				</div>
			</div>

			<style jsx>{`
				.container {
					z-index: 9;
					position: relative;
				}
			`}</style>
		</section>
	);
};

const TeamItem = ({ data }) => {
	const { image, name, role } = data;
	return (
		<div className='col-lg-3'>
			<div className='item-inner'>
				<div className='card'>
					<div className='card-body'>
						<img
							className='rounded-circle w-100 mb-4'
							src={image?.url}
							alt={image?.alt}
						/>
						<h4 className='mb-1'>{name[0]?.text}</h4>
						<div className='meta mb-2'>{role[0]?.text}</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TeamSection;
