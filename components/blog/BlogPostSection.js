/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { FiEye, FiUser, FiCalendar } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import { RichText } from 'prismic-reactjs';
import { linkResolver } from '../../prismic-configuration';
import dayjs from 'dayjs';
dayjs().format();
import countapi from 'countapi-js';

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
										<form className='comment-form'>
											<div className='form-floating mb-4'>
												<input
													type='text'
													className='form-control'
													placeholder='Name*'
													id='c-name'
												/>
												<label htmlFor='c-name'>Name *</label>
											</div>
											<div className='form-floating mb-4'>
												<input
													type='email'
													className='form-control'
													placeholder='Email*'
													id='c-email'
												/>
												<label htmlFor='c-email'>Email*</label>
											</div>
											<div className='form-floating mb-4'>
												<input
													type='text'
													className='form-control'
													placeholder='Website'
													id='c-web'
												/>
												<label htmlFor='c-web'>Website</label>
											</div>
											<div className='form-floating mb-4'>
												<textarea
													name='textarea'
													className='form-control'
													placeholder='Comment'
													style={{ height: '150px' }}></textarea>
												<label>Comment *</label>
											</div>
											<button
												type='submit'
												className='btn btn-primary rounded-pill mb-0'>
												Submit
											</button>
										</form>
									</div>
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
