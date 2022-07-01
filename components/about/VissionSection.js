/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
const VissionSection = () => {
	return (
		<section className='wrapper bg-light'>
			<div className='container pt-14 pt-md-16'>
				<div className='row gy-10 gy-sm-13 gx-md-8 gx-xl-12 align-items-center'>
					<div className='col-lg-6'>
						<div className='row gx-md-5 gy-5'>
							<div className='col-12'>
								<figure className='rounded mx-5'>
									<img
										src='./assets/img/photos/g8.jpg'
										srcSet='./assets/img/photos/g8@2x.jpg 2x'
										alt=''
									/>
								</figure>
							</div>

							<div className='col-md-6'>
								<figure className='rounded'>
									<img
										src='./assets/img/photos/g9.jpg'
										srcSet='./assets/img/photos/g9@2x.jpg 2x'
										alt=''
									/>
								</figure>
							</div>

							<div className='col-md-6'>
								<figure className='rounded'>
									<img
										src='./assets/img/photos/g10.jpg'
										srcSet='./assets/img/photos/g10@2x.jpg 2x'
										alt=''
									/>
								</figure>
							</div>
						</div>
					</div>

					<div className='col-lg-6'>
						<h2 className='fs-16 text-uppercase text-muted mb-3'>
							What Makes Us Different?
						</h2>
						<h3 className='display-3 mb-10'>Life at Reverse Factor</h3>
						<p>
							Etiam porta sem malesuada magna mollis euismod. Praesent commodo
							cursus magna vel consectetur purus sit amet fermentum. Donec
							ullamcorper nulla non metus auctor fringilla. Nullam id dolor id
							nibh ultricies. Cras mattis consectetur purus amet fermentum. Cras
							mattis consectetur purus amet fermentum.
						</p>
						<p>
							Vestibulum id ligula porta felis euismod semper. Cras mattis
							consectetur purus sit amet fermentum. Donec ullamcorper nulla non
							metus auctor fringilla. Nullam id dolor id nibh ultricies. Cras
							mattis consectetur purus amet fermentum.
						</p>
					</div>
				</div>

				<div className='row gx-md-8 gx-xl-12 gy-6 mt-8'>
					<div className='col-lg-4'>
						<h3>Our Mission</h3>
						<p>
							Etiam porta sem malesuada magna mollis euismod. Praesent commodo
							cursus magna vel consectetur purus sit amet fermentum. Donec
							ullamcorper nulla non metus auctor fringilla. Nullam id dolor id
							nibh ultricies. Cras mattis consectetur purus amet fermentum.
						</p>
						<h6 className='me-2'>Successfully Reversing:</h6>{' '}
						<span className='badge text-dark bg-pale-yellow me-2'>Gastric</span>
						<span className='badge text-dark bg-pale-red me-2'>Diabetes</span>
						<span className='badge text-dark bg-pale-green me-2'>Thyroid</span>
						<span className='badge text-dark bg-pale-blue me-2'>Bloating</span>
						<span className='badge text-dark bg-pale-sky me-2'>Cancer</span>
						<span className='badge text-dark bg-pale-purple me-2'>Acidity</span>
						<span className='badge text-dark bg-pale-fuchsia me-2'>
							Acidity
						</span>
						<span className='badge text-dark bg-pale-grape me-2'>
							Heart Disease
						</span>
						<span className='badge text-dark bg-pale-violet me-2'>
							Cholesterol
						</span>
					</div>

					<div className='col-lg-4'>
						<h3>Our Vission</h3>
						<p>
							Vestibulum id ligula porta felis euismod semper. Cras mattis
							consectetur purus sit amet fermentum. Donec ullamcorper nulla non
							metus auctor fringilla. Nullam id dolor id nibh ultricies. Cras
							mattis consectetur purus amet fermentum.
						</p>
						<ul className='icon-list bullet-bg bullet-soft-primary mb-0'>
							<li>
								<i className=''>&gt;</i>Aenean eu leo quam pellentesque.
							</li>
							<li>
								<i className=''>&gt;</i>Nullam quis risus eget urna mollis.
							</li>
							<li>
								<i className=''>&gt;</i>Donec id elit non mi porta gravida.
							</li>
							<li>
								<i className=''>&gt;</i>Fusce dapibus tellus ac commodo.
							</li>
						</ul>
					</div>

					<div className='col-lg-4'>
						<h3>Founder's Note</h3>
						<p>
							Vestibulum id ligula porta felis euismod semper. Cras mattis
							consectetur purus sit amet fermentum. Donec ullamcorper nulla non
							metus auctor fringilla. Nullam id dolor id nibh ultricies. Cras
							mattis consectetur purus amet fermentum.
						</p>
						<p>
							Etiam porta sem malesuada magna mollis euismod. Praesent commodo
							cursus magna vel consectetur purus sit amet fermentum. Donec
							ullamcorper nulla non metus auctor fringilla.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default VissionSection;
