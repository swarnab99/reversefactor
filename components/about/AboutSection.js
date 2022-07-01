/* eslint-disable @next/next/no-img-element */

const AboutSection = ({ title, subtitle, details, button_text, image }) => {
	return (
		<section className='container'>
			<div className='row gx-lg-8 gx-xl-12 gy-10 mt-12 align-items-center'>
				<div className='col-lg-6'>
					<h2 className='display-4 mb-3'>{title}</h2>
					<p className='lead fs-lg'>{subtitle}</p>
					<p className='mb-6'>{details}</p>
					<div className='mt-3'>
						<a href='#' className='btn btn-primary mt-2'>
							{button_text}
						</a>
					</div>
				</div>
				<div className='col-md-8 col-lg-6 position-relative'>
					<div
						className='shape bg-soft-primary rounded-circle rellax w-20 h-20'
						style={{ top: '-2rem', left: '-1.9rem' }}></div>
					<figure className='rounded'>
						<img src={image} alt='' />
					</figure>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
