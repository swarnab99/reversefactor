const Topbar = () => {
	return (
		<div
			className='alert bg-primary text-white alert-dismissible fade show rounded-0 mb-0 text-lg-center'
			role='alert'>
			<div className='container'>
				<div className='alert-inner p-0'>
					<span className='badge badge-lg bg-white text-primary text-uppercase rounded me-2'>
						Update
					</span>{' '}
					New version of our product is finally{' '}
					<a href='#' className='alert-link link-white hover'>
						{' '}
						here
					</a>
					!
				</div>
			</div>

			<button
				type='button'
				className='btn-close'
				data-bs-dismiss='alert'
				aria-label='Close'></button>
		</div>
	);
};

export default Topbar;
