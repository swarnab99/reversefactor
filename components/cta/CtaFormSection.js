/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import Airtable from 'airtable';

const base = new Airtable({
	apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY,
}).base(process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID);

const CtaFormSection = ({ slice }) => {
	// console.log(slice);
	const { heading, description } = slice?.primary;

	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		city: '',
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
			const data = await base('Appointment Queries').create([
				{
					fields: {
						Name: formData.name,
						Email: formData.email,
						Phone: formData.phone,
						City: formData.city,
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
				city: '',
				message: '',
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
		<section className='wrapper bg-light'>
			<div className='container pt-14 pt-md-16'>
				<div className='card bg-soft-primary'>
					<div className='card-body p-4 p-md-12'>
						<div className='row gx-md-8 gx-xl-12 gy-10'>
							<div className='col-lg-6'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 512 395.7'
									data-inject-url='https://sandbox.elemisthemes.com/assets/img/icons/lineal/email.svg'
									className='svg-inject icon-svg icon-svg-sm mb-4'>
									<path
										className='lineal-stroke'
										d='M483.6 395.7H53.3C23.9 395.7 0 371.9 0 342.4V53.3C0 23.9 23.9 0 53.3 0h405.4C488.1 0 512 23.9 512 53.3v222.8c0 7.9-6.4 14.2-14.2 14.2s-14.2-6.4-14.2-14.2V53.3c0-13.7-11.1-24.8-24.8-24.8H53.3c-13.7 0-24.8 11.1-24.8 24.8v289.2c0 13.7 11.1 24.8 24.8 24.8h430.3c7.9.2 14.1 6.7 13.8 14.6-.2 7.5-6.3 13.6-13.8 13.8z'></path>
									<path
										className='lineal-fill'
										d='M497.8 53.3L256 236.4 14.2 53.3c0-21.6 17.5-39.1 39.1-39.1h405.4c21.6 0 39.1 17.5 39.1 39.1z'></path>
									<path
										className='lineal-stroke'
										d='M256 250.6c-3.1 0-6.1-1-8.6-2.9L5.6 64.6C2.1 61.9 0 57.7 0 53.3 0 23.9 23.9 0 53.3 0h405.4C488.1 0 512 23.9 512 53.3c0 4.4-2.1 8.6-5.6 11.3L264.6 247.7c-2.5 1.9-5.5 2.9-8.6 2.9zM29.3 46.8L256 218.6 482.7 46.8c-2.9-10.9-12.8-18.4-24-18.4H53.3c-11.3.1-21.1 7.6-24 18.4zm454.2 348.7c-3.1 0-6.1-1-8.6-2.9l-99.6-75.4c-6.3-4.7-7.5-13.7-2.7-19.9 4.7-6.3 13.7-7.5 19.9-2.7l99.6 75.4c6.3 4.7 7.5 13.7 2.8 19.9-2.7 3.6-6.9 5.7-11.4 5.6zm-449-4.6c-7.9 0-14.2-6.4-14.2-14.2 0-4.5 2.1-8.7 5.6-11.4l93.5-70.8c6.3-4.7 15.2-3.5 19.9 2.7 4.7 6.3 3.5 15.2-2.7 19.9L43.1 388c-2.5 1.9-5.5 2.9-8.6 2.9z'></path>
								</svg>
								<h2 className='display-4 mb-3 pe-lg-10'>{heading[0]?.text}</h2>
								<p className='lead pe-lg-12 mb-0'>{description[0]?.text}</p>
							</div>

							<div className='col-lg-6'>
								<form
									className='contact-form needs-validation'
									onSubmit={handleSubmit}>
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
												<label htmlFor='frm_name'>Name *</label>
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
												<label htmlFor='frm_email'>Email *</label>
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
												<label htmlFor='frm_email'>Phone *</label>
											</div>
										</div>
										<div className='col-md-6'>
											<div className='form-floating mb-4'>
												<input
													type='text'
													name='city'
													value={formData.city}
													onChange={handleChange}
													className='form-control'
													placeholder='City'
													required
												/>
												<label htmlFor='frm_email'>City *</label>
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
													style={{ height: '150px' }}
													required></textarea>
												<label htmlFor='frm_message'>Message *</label>
											</div>
										</div>

										<div className='col-12'>
											<button
												type='submit'
												className='btn btn-outline-primary btn-send mb-3'
												value='Send message'>
												{loading ? 'Sending...' : 'Submit'}
											</button>
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
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CtaFormSection;
