const ProcessSection = ({ slice }) => {
	// console.log(slice);
	const { subheading, heading } = slice?.primary;
	return (
		<section className='wrapper bg-light'>
			<div className='container pt-14 pt-md-16 text-center'>
				<h3 className='fs-15 text-uppercase text-muted mb-3'>
					{subheading[0]?.text}
				</h3>
				<h2 className='display-4 mb-8'>{heading[0]?.text}</h2>
				<div className='row gx-lg-8 gx-xl-12 gy-6 process-wrapper line mt-1'>
					{slice?.items?.map((item, index) => (
						<ProcessItem key={index} index={index} data={item} />
					))}
				</div>
			</div>
		</section>
	);
};

const ProcessItem = ({ index, data }) => {
	const { title, details } = data;
	return (
		<div className='col-md-2 col-lg-2 px-1 text-center'>
			<span className='icon btn btn-circle btn-lg btn-soft-primary disabled mb-4'>
				<span className='number'>0{index + 1}</span>
			</span>
			<h4 className='mb-1'>{title[0]?.text}</h4>
			<p className='mb-0 small'>{details[0]?.text}</p>
		</div>
	);
};

export default ProcessSection;
