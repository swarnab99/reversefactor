/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import Link from 'next/link';
import {
	FaFacebookF,
	FaYoutube,
	FaLinkedin,
	FaInstagram,
	FaTwitter,
	FaHeart,
} from 'react-icons/fa';
import Airtable from 'airtable';

const base = new Airtable({
	apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY,
}).base(process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID);

const Footer = () => {
	const [formData, setFormData] = useState({
		email: '',
	});
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [success, setSuccess] = useState(false);

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
		setError(null);
		setSuccess(false);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		try {
			const data = await base('Newsletter').create([
				{
					fields: {
						Email: formData.email,

						Source: location.href,
						Status: 'Todo',
					},
				},
			]);

			// console.log(data);

			setFormData({
				email: '',
			});
			setSuccess(true);
			setLoading(false);
		} catch (error) {
			setError(error);
			console.log(error);
			setLoading(false);
		}
	};

	return (
		<footer className='bg-navy text-inverse mt-10'>
			<div className='container pt-10 pt-md-12 pb-10 pb-md-0'>
				<div className='d-lg-flex flex-row align-items-lg-center'>
					<h3 className='display-4 mb-6 mb-lg-0 pe-lg-20 pe-xl-22 pe-xxl-25 text-white'>
						Join our mission by removing medicine from your life.
					</h3>
					<Link href='/contact'>
						<a className='btn btn-primary mb-0 text-nowrap'>
							Contact Us to Know More
						</a>
					</Link>
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
								<a href='https://www.linkedin.com/company/14545715'>
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
							<a href='mailto:health@reversefactor.in'>
								health@reversefactor.in
							</a>
							<br />
							<a href='tel:+917001848624'>8100-550-660</a>
						</div>
					</div>

					<div className='col-md-4 col-lg-2'>
						<div className='widget'>
							<h4 className='widget-title text-white mb-3'>Learn More</h4>
							<ul className='list-unstyled  mb-0'>
								<li>
									<Link href='/about-reverse-factor'>
										<a>About Us</a>
									</Link>
								</li>
								<li>
									<Link href='/services'>
										<a>Our Plans</a>
									</Link>
								</li>
								<li>
									<Link href='/reversal-stories'>
										<a>Reversal Stories</a>
									</Link>
								</li>
								<li>
									<Link href='/terms-and-conditions'>
										<a>Terms of Use</a>
									</Link>
								</li>
								<li>
									<Link href='/privacy-policy'>
										<a>Privacy Policy</a>
									</Link>
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
										onSubmit={handleSubmit}
										className='validate dark-fields'>
										<div>
											<div className='mc-field-group input-group form-floating'>
												<input
													name='email'
													value={formData.email}
													onChange={handleChange}
													type='email'
													className='required email form-control'
													placeholder='Email Address'
													required
												/>
												<label>Email Address</label>
												<input
													type='submit'
													value='Join'
													name='subscribe'
													className='btn btn-primary'
												/>
											</div>
											<div id='mce-responses2' className='clear'>
												<div className='response' id='mce-success-response2'>
													{error && (
														<div className='col-lg-12 col-md-12 col-sm-12 mb-4'>
															<p className='text-danger text-center h5'>
																{error.message}
															</p>
														</div>
													)}
													{success && (
														<div className='col-lg-12 col-md-12 col-sm-12 mb-4'>
															<p className='text-success text-center h5'>
																Thanks, you will receive updates from us.
															</p>
														</div>
													)}
												</div>
											</div>

											<div className='clear'></div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
					<div className='pt-12'>
						<div className='text-center pb-2'>
							<p>
								Copyright © {new Date().getFullYear()} Reverse Factor{' '}
								<span className='d-none d-md-inline px-1'>| </span>
								<span className='d-block d-md-inline'>All rights reserved</span>
							</p>
						</div>

						{/* ========== FAVFLY ========= */}
						<div className='favfly'>
							<div className='divider-icon m-0 mt-4 border-0 position-relative'>
								<i className='fa color-rose'>
									<FaHeart />
								</i>
							</div>
							<a
								target='_blank'
								rel='noreferrer'
								title='Best digital marketing company in kolkata'
								href='https://favfly.com?ref=reversefactor.in'
								className='container py-3 font-weight-bold d-block'>
								Growing with Favfly
							</a>
						</div>

						<style jsx>{`
							.favfly {
								letter-spacing: 1px;
							}
							.favfly a {
								color: #35a146;
							}
							.divider-icon:before {
								left: 0;
							}
							.divider-icon:before,
							.divider-icon:after {
								position: absolute;
								top: 50%;
								content: '';
								border-top: 2px solid #4c4d50;
								width: calc(50% - 30px);
							}
							.divider-icon i {
								position: absolute;
								top: 50%;
								left: 50%;
								-webkit-transform: translate(-50%, -50%);
								-ms-transform: translate(-50%, -50%);
								transform: translate(-50%, -50%);
								font-size: 18px;
								color: #35a146;
							}
							.divider-icon:after {
								right: 0;
							}
							.divider-icon:before,
							.divider-icon:after {
								position: absolute;
								top: 50%;
								content: '';
								border-top: 2px solid #4c4d50;
								width: calc(50% - 30px);
							}
							@media only screen and (min-width: 768px) {
								.favfly {
									text-align: center;
								}
							}
						`}</style>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
