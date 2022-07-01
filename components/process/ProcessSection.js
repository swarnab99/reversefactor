const ProcessSection = () => {
	return (
		<section className='wrapper bg-light'>
			<div className='container pt-14 pt-md-16 text-center'>
				<h3 className='fs-15 text-uppercase text-muted mb-3'>
					Patient Journey
				</h3>
				<h2 className='display-4 mb-8'>
					Follow 6 Simple Steps to be Disease Free
				</h2>

				<div className='row gx-lg-8 gx-xl-12 gy-6 process-wrapper line mt-1'>
					<ProcessItem index='01' title='Assessment' />
					<ProcessItem index='02' title='Planning' />
					<ProcessItem index='03' title='Coaching Support' />
					<ProcessItem index='04' title='Live Sessions' />
					<ProcessItem index='05' title='Knowledge Sessions' />
					<ProcessItem index='06' title='Live Disease-free!' />
				</div>
			</div>
		</section>
	);
};

const ProcessItem = ({ index, title }) => {
	return (
		<div className='col-md-2 col-lg-2 px-1 text-center'>
			<span className='icon btn btn-circle btn-lg btn-soft-primary disabled mb-4'>
				<span className='number'>{index}</span>
			</span>
			<h4 className='mb-1'>{title}</h4>
			<p className='mb-0 small'>
				Duis mollis gravida commodo id luctus erat porttitor ligula.
			</p>
		</div>
	);
};

export default ProcessSection;
