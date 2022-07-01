/* eslint-disable @next/next/no-img-element */
import { FiCheck } from 'react-icons/fi';

const PricingSection = () => {
	return (
		<section className='wrapper bg-light'>
			<div className='container pt-14 pt-md-16'>
				<div className='row'>
					<div className='col-lg-10 col-xl-9 col-xxl-8 mx-auto text-center'>
						<h2 className='fs-15 text-uppercase text-muted mb-3'>Our Plans</h2>
						<h3 className='display-4 mb-15 mb-md-6 px-lg-10'>
							We offer great prices, quality service for your health.
						</h3>
					</div>
				</div>

				<div className='pricing-wrapper position-relative'>
					<div
						className='shape bg-dot primary rellax w-16 h-18'
						data-rellax-speed='1'
						// style='top: 2rem; right: -2.4rem;'
						style={{ top: '2rem', right: '-2.4rem' }}></div>
					<div
						className='shape rounded-circle bg-line red rellax w-18 h-18 d-none d-lg-block'
						data-rellax-speed='1'
						// style='bottom: 0.5rem; left: -2.5rem;'
						style={{ bottom: '0.5rem', left: '-2.5rem' }}></div>

					<div className='row gy-6 mt-3 mt-md-5'>
						<div className='col-md-6 col-lg-4'>
							<div className='pricing card text-center'>
								<div className='card-body'>
									{/* <img
										src='./assets/img/icons/lineal/shopping-basket.svg'
										className='svg-inject icon-svg icon-svg-md text-primary mb-3'
										alt=''
									/> */}
									<h4 className='card-title'>2 MONTHS REVERSAL PROGRAM</h4>
									<div className='prices text-dark'>
										<div className='price price-show'>
											<span className='price-currency'>₹</span>
											<span className='price-value'>4,720</span>{' '}
											<span className='price-duration'>mo</span>
										</div>
									</div>

									<ul className='icon-list bullet-bg bullet-soft-primary mt-7 mb-8 text-start options'>
										<li>
											<i>
												<FiCheck />
											</i>
											<span>
												<strong>2</strong> Health Charts
											</span>
										</li>
										<li>
											<i>
												<FiCheck />
											</i>
											<span>Health Officer Support Over Call & WhatsApp</span>
										</li>
										<li>
											<i>
												<FiCheck />
											</i>
											<span>Monthly Consultations</span>
										</li>
										<li>
											<i>
												<FiCheck />
											</i>
											<span>Package amount inclusive of 18% GST</span>
										</li>
									</ul>
									<a href='#' className='btn btn-primary rounded-pill'>
										Choose Plan
									</a>
								</div>
							</div>
						</div>

						<div className='col-md-6 col-lg-4 popular'>
							<div className='pricing card text-center bg-soft-green'>
								<div className='card-body'>
									<h4 className='card-title'>4 MONTHS REVERSAL PROGRAM</h4>
									<div className='prices text-dark'>
										<div className='price price-show'>
											<span className='price-currency'>₹</span>
											<span className='price-value'>3,540</span>{' '}
											<span className='price-duration'>mo</span>
										</div>
									</div>

									<ul className='icon-list bullet-bg bullet-soft-primary mt-7 mb-8 text-start options'>
										<li>
											<i>
												<FiCheck />
											</i>
											<span>
												<strong>4</strong> Health Charts
											</span>
										</li>
										<li>
											<i>
												<FiCheck />
											</i>
											<span>Health Officer Support Over Call & WhatsApp</span>
										</li>
										<li>
											<i>
												<FiCheck />
											</i>
											<span>Monthly Consultations</span>
										</li>
										<li>
											<i>
												<FiCheck />
											</i>
											<span>Package amount inclusive of 18% GST</span>
										</li>
									</ul>
									<a href='#' className='btn btn-primary rounded-pill'>
										Choose Plan
									</a>
								</div>
							</div>
						</div>

						<div className='col-md-6 offset-md-3 col-lg-4 offset-lg-0'>
							<div className='pricing card text-center'>
								<div className='card-body'>
									<h4 className='card-title'>6 MONTHS REVERSAL PROGRAM</h4>
									<div className='prices text-dark'>
										<div className='price price-show'>
											<span className='price-currency'>₹</span>
											<span className='price-value'>2,950</span>{' '}
											<span className='price-duration'>mo</span>
										</div>
									</div>

									<ul className='icon-list bullet-bg bullet-soft-primary mt-7 mb-8 text-start options'>
										<li>
											<i>
												<FiCheck />
											</i>
											<span>
												<strong>6</strong> Health Charts
											</span>
										</li>
										<li>
											<i>
												<FiCheck />
											</i>
											<span>Health Officer Support Over Call & WhatsApp</span>
										</li>
										<li>
											<i>
												<FiCheck />
											</i>
											<span>Monthly Consultations</span>
										</li>
										<li>
											<i>
												<FiCheck />
											</i>
											<span>Package amount inclusive of 18% GST</span>
										</li>
									</ul>
									<a href='#' className='btn btn-primary rounded-pill'>
										Choose Plan
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PricingSection;
