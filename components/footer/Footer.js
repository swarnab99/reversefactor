/* eslint-disable @next/next/no-img-element */
import {
	FaFacebookF,
	FaYoutube,
	FaLinkedin,
	FaInstagram,
	FaTwitter,
} from 'react-icons/fa';

const Footer = () => {
	return (
		<footer className='bg-navy text-inverse mt-10'>
			<div className='container pt-10 pt-md-12 pb-10 pb-md-12'>
				<div className='d-lg-flex flex-row align-items-lg-center'>
					<h3 className='display-4 mb-6 mb-lg-0 pe-lg-20 pe-xl-22 pe-xxl-25 text-white'>
						Join our mission by removing medicine from your life.
					</h3>
					<a href='#' className='btn btn-primary mb-0 text-nowrap'>
						Contact Us to Know More
					</a>
				</div>

				<hr className='mt-11 mb-12' />
				<div className='row gy-6 gy-lg-0'>
					<div className='col-md-4 col-lg-4 pe-5'>
						<div className='widget pe-4'>
							<h4 className='widget-title text-white mb-3'>Reverse Factor</h4>
							<p>
								Reverse Factor helps you take absolute control of your health,
								whether by losing a few kilos, living a healthy lifestyle, or
								simply making smarter and more informed choices about the food
								that enters your mouth.
							</p>
							<nav className='nav social social-white'>
								<a href='https://www.facebook.com/ReverseFactor/'>
									<i>
										<FaFacebookF />
									</i>
								</a>
								<a href='https://www.youtube.com/channel/UCEm7GOYabdB1WskmOFY4yIg?view_as=subscriber'>
									<i>
										<FaYoutube />
									</i>
								</a>
								<a href='https://www.linkedin.com/company/14545715/admin/'>
									<i>
										<FaLinkedin />
									</i>
								</a>
								<a href='https://www.instagram.com/reverse_factor/'>
									<i>
										<FaInstagram />
									</i>
								</a>
								<a href='https://twitter.com/reverse_factor?lang=en'>
									<i>
										<FaTwitter />
									</i>
								</a>
							</nav>
						</div>
					</div>

					<div className='col-md-4 col-lg-2'>
						<div className='widget'>
							<h4 className='widget-title text-white mb-3'>Get in Touch</h4>
							<a href='mailto:#'>health@reversefactor.in</a>
							<br /> +91 8100-550-660
						</div>
					</div>

					<div className='col-md-4 col-lg-2'>
						<div className='widget'>
							<h4 className='widget-title text-white mb-3'>Learn More</h4>
							<ul className='list-unstyled  mb-0'>
								<li>
									<a href='#'>About Us</a>
								</li>
								<li>
									<a href='#'>Our Porgrams</a>
								</li>
								<li>
									<a href='#'>Reversal Stories</a>
								</li>
								<li>
									<a href='#'>Terms of Use</a>
								</li>
								<li>
									<a href='#'>Privacy Policy</a>
								</li>
							</ul>
						</div>
					</div>

					<div className='col-md-12 col-lg-4'>
						<div className='widget'>
							<h4 className='widget-title text-white mb-3'>Our Newsletter</h4>
							<p className='mb-5'>
								Subscribe to our newsletter to get our news & deals delivered to
								you.
							</p>
							<div className='newsletter-wrapper'>
								<div id='mc_embed_signup2'>
									<form
										action='https://elemisfreebies.us20.list-manage.com/subscribe/post?u=aa4947f70a475ce162057838d&amp;id=b49ef47a9a'
										method='post'
										id='mc-embedded-subscribe-form2'
										name='mc-embedded-subscribe-form'
										className='validate dark-fields'
										target='_blank'>
										<div id='mc_embed_signup_scroll2'>
											<div className='mc-field-group input-group form-floating'>
												<input
													type='email'
													value=''
													name='EMAIL'
													className='required email form-control'
													placeholder='Email Address'
													id='mce-EMAIL2'
												/>
												<label>Email Address</label>
												<input
													type='submit'
													value='Join'
													name='subscribe'
													id='mc-embedded-subscribe2'
													className='btn btn-primary'
												/>
											</div>
											<div id='mce-responses2' className='clear'>
												<div
													className='response d-none'
													id='mce-error-response2'></div>
												<div
													className='response d-none'
													id='mce-success-response2'></div>
											</div>
											<div
												style={{ position: 'absolute', left: '-5000px' }}
												aria-hidden='true'>
												<input
													type='text'
													name='b_ddc180777a163e0f9f66ee014_4b1bcfa0bc'
													tabIndex='-1'
													value=''
												/>
											</div>
											<div className='clear'></div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
