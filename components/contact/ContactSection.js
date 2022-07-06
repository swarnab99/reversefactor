import { useState } from 'react';
import { FiPhone, FiMail, FiGlobe } from 'react-icons/fi';
import {
	FaFacebookF,
	FaYoutube,
	FaLinkedin,
	FaInstagram,
	FaTwitter,
} from 'react-icons/fa';
import { RichText } from 'prismic-reactjs';
import Airtable from 'airtable';
import { CustomLink } from '../../utils/prismicHelpers';

const base = new Airtable({
	apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY,
}).base(process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID);

const ContactSection = ({ slice }) => {
	// console.log(slice);
	const {
		heading,
		phone,
		email,
		facebook,
		youtube,
		linkedin,
		instagram,
		twitter,
	} = slice?.primary;

	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		department: '',
		message: '',
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
			const data = await base('Contact Queries').create([
				{
					fields: {
						Name: formData.name,
						Email: formData.email,
						Phone: formData.phone,
						Department: formData.department,
						Message: formData.message,

						Source: location.href,
						Status: 'Todo',
					},
				},
			]);

			// console.log(data);

			setFormData({
				name: '',
				email: '',
				phone: '',
				subject: '',
				department: '',
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
		<section className='wrapper mt-14'>
			<div className='container'>
				<div className='mb-10 text-center'>
					<h2 className='display-4 mb-3 '>{heading[0]?.text}</h2>
				</div>
				<div className='row'>
					<div className='col-xl-10 mx-auto'>
						<div className='row gy-10 gx-lg-8 gx-xl-12'>
							<div className='col-lg-8'>
								<form onSubmit={handleSubmit} className='contact-form'>
									<div className='messages'></div>
									<div className='row gx-4'>
										<div className='col-md-6'>
											<div className='form-floating mb-4'>
												<input
													type='text'
													name='name'
													value={formData.name}
													onChange={handleChange}
													placeholder='Name'
													className='form-control'
													required
												/>
												<label htmlFor='form_name'>Full Name *</label>
											</div>
										</div>

										<div className='col-md-6'>
											<div className='form-floating mb-4'>
												<input
													type='tel'
													name='phone'
													value={formData.phone}
													onChange={handleChange}
													className='form-control'
													placeholder='Phone'
													required
												/>
												<label htmlFor='form_phone'>Phone *</label>
											</div>
										</div>

										<div className='col-md-6'>
											<div className='form-floating mb-4'>
												<input
													type='email'
													name='email'
													value={formData.email}
													onChange={handleChange}
													className='form-control'
													placeholder='Email'
													required
												/>
												<label htmlFor='form_email'>Email *</label>
											</div>
										</div>

										<div className='col-md-6'>
											<div className='form-select-wrapper mb-4'>
												<select
													name='department'
													value={formData.department}
													onChange={handleChange}
													className='form-select'
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
													name='message'
													value={formData.message}
													onChange={handleChange}
													rows='3'
													className='form-control'
													placeholder='Type your message here...'
													required
													style={{ height: '150px' }}></textarea>
												<label htmlFor='form_message'>Message *</label>
											</div>
										</div>

										<div className='col-12'>
											<button
												type='submit'
												className='btn btn-primary rounded-pill btn-send mb-3'>
												{loading ? 'Sending...' : 'Submit'}
											</button>
											<p className='text-muted'>
												<strong>*</strong> These fields are required.
											</p>
										</div>
									</div>
								</form>
								<footer
									className={`notification-box mb-50 ${
										success ? 'show-success' : error ? 'show-error' : ''
									}`}>
									{error && (
										<div className='col-lg-12 col-md-12 col-sm-12 mb-4'>
											<p className='text-danger text-center h2'>
												{error.message}
											</p>
										</div>
									)}
									{success && (
										<div className='col-lg-12 col-md-12 col-sm-12 mb-4'>
											<p className='text-success text-center h2'>
												Thanks, we will contact you soon.
											</p>
										</div>
									)}
								</footer>
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
										<RichText render={phone} serializeHyperlink={CustomLink} />
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
										<RichText render={email} serializeHyperlink={CustomLink} />
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
											<a href={facebook?.url}>
												<i className=''>
													<FaFacebookF />
												</i>
											</a>
											<a href={youtube?.url}>
												<i className=''>
													<FaYoutube />
												</i>
											</a>
											<a href={linkedin?.url}>
												<i className=''>
													<FaLinkedin />
												</i>
											</a>
											<a href={instagram?.url}>
												<i className=''>
													<FaInstagram />
												</i>
											</a>
											<a href={twitter?.url}>
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
