/* eslint-disable @next/next/no-img-element */

const ServicesSection = ({ show }) => {
	return (
		<section className='wrapper bg-light'>
			<div className='container pt-10 pt-md-14'>
				<div className='row text-center'>
					<div className='col-md-12 col-lg-10 mx-auto'>
						<h2 className='fs-16 text-uppercase text-muted mb-3'>
							We Reverse Chronic Diseases with the help of Modern Science
						</h2>
						<h3 className='display-4 mb-10 px-xl-10'>
							Popular Reversal Programs at Reverse Factor
						</h3>
					</div>
				</div>

				<div className='position-relative'>
					<div
						className='shape rounded-circle bg-soft-blue rellax w-16 h-16'
						// style='bottom: -0.5rem; right: -2.2rem; z-index: 0'
						style={{ bottom: '-0.5rem', right: '-2.2rem', zIndex: 0 }}></div>
					<div
						className='shape bg-dot primary rellax w-16 h-17'
						// style='top: -0.5rem; left: -2.5rem; z-index: 0'
						style={{ top: '-0.5rem', left: '-2.5rem', zIndex: 0 }}></div>
					<div className='row gx-md-5 gy-5 text-center'>
						<ServiceItem title='Diabetes Reversal' />
						<ServiceItem title='Heart Disease Reversal' />
						<ServiceItem title='Fatty Liver' />
						<ServiceItem title='Kidney Care' />
						<ServiceItem title='Cancer Care' />
						<ServiceItem title='Pregnancy Care' />
						<ServiceItem title='Hormonal Imbalance' />
						<ServiceItem title='Gut Health' />
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
				{/* <div className='text-center mt-5'>
					<a href='#' className='btn btn-outline-primary mt-2'>
						View All Reversal Programs
					</a>
				</div> */}
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

const ServiceItem = ({ title }) => {
	return (
		<div className='col-md-6 col-xl-3'>
			<div className='card shadow-lg'>
				<div className='card-body'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 512 454.6'
						data-inject-url='https://sandbox.elemisthemes.com/assets/img/icons/lineal/chat-2.svg'
						className='svg-inject icon-svg icon-svg-md text-green mb-3'>
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
					<h4>{title}</h4>
					<p className='mb-2'>
						Nulla vitae elit libero, a pharetra augue. Donec id elit non mi
						porta gravida at eget metus cras justo.
					</p>
					<a href='#' className='_more hover link-green'>
						View Plan
					</a>
				</div>
			</div>
		</div>
	);
};

export default ServicesSection;
