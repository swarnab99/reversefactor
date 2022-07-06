/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { FiEye, FiUser, FiCalendar } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import { RichText } from 'prismic-reactjs';
import Airtable from 'airtable';
import { linkResolver } from '../../prismic-configuration';
import dayjs from 'dayjs';
dayjs().format();
import countapi from 'countapi-js';

const base = new Airtable({
	apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY,
}).base(process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID);

const BlogPostSection = ({ blogPost }) => {
	// console.log(blogPost);
	const uid = blogPost?.uid;
	const { title, description, featured_image, published_date, body } =
		blogPost?.data;

	/* ===== COUNT & UPDATE NO. OF VIEWS ===== */
	const [views, setViews] = useState(0);
	useEffect(() => {
		countapi.hit(`${process.env.PRISMIC_ID}.com`, uid).then((result) => {
			result?.value && setViews(result.value);
		});
	}, [uid]);
	/* ===== END ===== */

	const [formData, setFormData] = useState({
		name: '',
		email: '',
		comment: '',
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
			const data = await base('Blog Queries').create([
				{
					fields: {
						Name: formData.name,
						Email: formData.email,
						Comment: formData.comment,

						Source: location.href,
						Status: 'Todo',
					},
				},
			]);

			// console.log(data);

			setFormData({
				name: '',
				email: '',
				comment: '',
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
		<>
			<section className='wrapper bg-soft-primary'>
				<div className='container pt-10 pb-19 pt-md-14 pb-md-20 text-center'>
					<div className='row'>
						<div className='col-md-10 col-xl-8 mx-auto'>
							<div className='post-header'>
								{/* <div className='post-category text-line'>
									<a href='#' className='hover' rel='category'>
										NUTRITION
									</a>
								</div> */}

								<h1 className='display-1 mt-8 mb-3'>{title[0]?.text}</h1>
								<p className='mb-3'>{description[0]?.text}</p>
								<ul className='post-meta mb-5'>
									<li className='post-date'>
										<i className=''>
											<FiCalendar />
										</i>
										<span> {dayjs(published_date).format('DD MMM, YYYY')}</span>
									</li>
									<li className='post-author'>
										<i className=''>
											<FiUser />
										</i>
										<span>By Admin</span>
									</li>
									<li className='post-likes'>
										<i className=''>
											<FiEye />
										</i>
										{views}
										<span> Views</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className='wrapper bg-light'>
				<div className='container pb-14 pb-md-16'>
					<div className='row'>
						<div className='col-lg-10 mx-auto p-0'>
							<div className='blog single mt-n17'>
								<div className='card'>
									<figure className='card-img-top'>
										<img src={featured_image?.url} alt={featured_image?.alt} />
									</figure>
									<div className='card-body p-2 px-lg-12 py-lg-10'>
										<div className='classic-view'>
											<article className='post'>
												<div className='post-content'>
													{body &&
														body.map((item, index) => (
															<DetailsBox key={index} postBlock={item} />
														))}
												</div>
												{/* <div className='post-footer d-md-flex flex-md-row justify-content-md-between align-items-center mt-8'>
													<div>
														<ul className='list-unstyled tag-list mb-0'>
															<li>
																<a
																	href='#'
																	className='btn btn-soft-ash btn-sm rounded-pill mb-0'>
																	Still Life
																</a>
															</li>
															<li>
																<a
																	href='#'
																	className='btn btn-soft-ash btn-sm rounded-pill mb-0'>
																	Urban
																</a>
															</li>
															<li>
																<a
																	href='#'
																	className='btn btn-soft-ash btn-sm rounded-pill mb-0'>
																	Nature
																</a>
															</li>
														</ul>
													</div>
												</div> */}
											</article>
										</div>

										<hr />
										<h3 className='mb-3'>
											Would you like to share your thoughts?
										</h3>
										<p className='mb-7'>
											We won't spam you. Required fields are marked *
										</p>
										<form onSubmit={handleSubmit} className='comment-form'>
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
												<label htmlFor='c-name'>Name *</label>
											</div>
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
												<label htmlFor='c-email'>Email*</label>
											</div>
											<div className='form-floating mb-4'>
												<textarea
													name='comment'
													value={formData.comment}
													onChange={handleChange}
													rows='3'
													className='form-control'
													placeholder='Type your comment here...'
													required
													style={{ height: '150px' }}></textarea>
												<label>Comment *</label>
											</div>
											<button
												type='submit'
												className='btn btn-primary rounded-pill mb-0'>
												{loading ? 'Sending...' : 'Submit'}
											</button>
										</form>
									</div>
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
													Thanks, for sharing your valuable thoughts.
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
		</>
	);
};

const DetailsBox = ({ postBlock }) => {
	// console.log(postBlock);
	return (
		<div className='post-block mx-auto p-0'>
			<RichText
				render={postBlock?.primary?.details}
				linkResolver={linkResolver}
			/>

			<div className='mb-5 row'>
				{postBlock?.items &&
					postBlock?.items.map((item, index) => (
						<div key={index} className='mb-4 col-md-6'>
							<img
								className='img-fluid lozad'
								data-src={item?.image?.url}
								alt={item?.image?.alt}
							/>
						</div>
					))}
			</div>
		</div>
	);
};

export default BlogPostSection;
