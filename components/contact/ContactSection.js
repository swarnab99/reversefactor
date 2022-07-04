import { FiPhone, FiMail, FiGlobe } from 'react-icons/fi';
import {
	FaFacebookF,
	FaYoutube,
	FaLinkedin,
	FaInstagram,
	FaTwitter,
} from 'react-icons/fa';

const ContactSection = ({ slice }) => {
	// console.log(slice);
	const { heading } = slice?.primary;
	return (
		<section className='wrapper mt-14'>
			<div className='container'>
				<div className='mb-10 text-center'>
					<h2 className='display-4 mb-3 '>{heading[0]?.text}</h2>
				</div>
				<div className='row'>
					<div className='col-xl-10 mx-auto'>
						<div className='row gy-10 gx-lg-8 gx-xl-12'>
							<div className='col-lg-8'>
								<form
									className='contact-form needs-validation'
									method='post'
									action='./assets/php/contact.php'
									noValidate>
									<div className='messages'></div>
									<div className='row gx-4'>
										<div className='col-md-6'>
											<div className='form-floating mb-4'>
												<input
													id='form_name'
													type='text'
													name='name'
													className='form-control'
													placeholder='Jane'
													required
												/>
												<label htmlFor='form_name'>Full Name *</label>
											</div>
										</div>

										<div className='col-md-6'>
											<div className='form-floating mb-4'>
												<input
													id='form_phone'
													type='tel'
													name='phone'
													className='form-control'
													placeholder='Doe'
													required
												/>
												<label htmlFor='form_phone'>Phone *</label>
											</div>
										</div>

										<div className='col-md-6'>
											<div className='form-floating mb-4'>
												<input
													id='form_email'
													type='email'
													name='email'
													className='form-control'
													placeholder='jane.doe@example.com'
													required
												/>
												<label htmlFor='form_email'>Email *</label>
											</div>
										</div>

										<div className='col-md-6'>
											<div className='form-select-wrapper mb-4'>
												<select
													className='form-select'
													id='form-select'
													name='department'
													required>
													<option selected disabled value=''>
														Select a department
													</option>
													<option value='Sales'>Sales</option>
													<option value='Marketing'>Marketing</option>
													<option value='Customer Support'>
														Customer Support
													</option>
												</select>
											</div>
										</div>

										<div className='col-12'>
											<div className='form-floating mb-4'>
												<textarea
													id='form_message'
													name='message'
													className='form-control'
													placeholder='Your message'
													style={{ height: '150px' }}
													required></textarea>
												<label htmlFor='form_message'>Message *</label>
											</div>
										</div>

										<div className='col-12'>
											<input
												type='submit'
												className='btn btn-primary rounded-pill btn-send mb-3'
												value='Send message'
											/>
											<p className='text-muted'>
												<strong>*</strong> These fields are required.
											</p>
										</div>
									</div>
								</form>
							</div>

							<div className='col-lg-4'>
								<div className='d-flex flex-row'>
									<div>
										<div className='icon text-primary fs-28 me-4 mt-n1 pt-1'>
											<i>
												<FiPhone />
											</i>
										</div>
									</div>
									<div>
										<h5 className='mb-1'>Phone</h5>
										<p>+91 8100-550-660</p>
									</div>
								</div>
								<div className='d-flex flex-row'>
									<div>
										<div className='icon text-primary fs-28 me-4 mt-n1 pt-1'>
											<i>
												<FiMail />
											</i>
										</div>
									</div>
									<div>
										<h5 className='mb-1'>Email</h5>
										<p> health@reversefactor.in</p>
									</div>
								</div>
								<div className='d-flex flex-row'>
									<div>
										<div className='icon text-primary fs-28 me-4 mt-n1 pt-1'>
											<i>
												<FiGlobe />
											</i>
										</div>
									</div>
									<div>
										<h5 className='mb-1'>Community</h5>
										<div className='social'>
											<a href='#'>
												<i className=''>
													<FaFacebookF />
												</i>
											</a>
											<a href='#'>
												<i className=''>
													<FaYoutube />
												</i>
											</a>
											<a href='#'>
												<i className=''>
													<FaLinkedin />
												</i>
											</a>
											<a href='#'>
												<i className=''>
													<FaInstagram />
												</i>
											</a>
											<a href='#'>
												<i className=''>
													<FaTwitter />
												</i>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<style jsx>{`
				.social a {
					width: 20px;
				}
			`}</style>
		</section>
	);
};

export default ContactSection;
