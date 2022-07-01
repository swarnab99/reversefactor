/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { FiEye, FiUser, FiCalendar } from 'react-icons/fi';

const BlogPostSection = () => {
	return (
		<>
			<section className='wrapper bg-soft-primary'>
				<div className='container pt-10 pb-19 pt-md-14 pb-md-20 text-center'>
					<div className='row'>
						<div className='col-md-10 col-xl-8 mx-auto'>
							<div className='post-header'>
								<div className='post-category text-line'>
									<a href='#' className='hover' rel='category'>
										NUTRITION
									</a>
								</div>

								<h1 className='display-1 mb-4'>
									27 Health and Nutrition Tips That Are Actually Evidence-Based
								</h1>
								<ul className='post-meta mb-5'>
									<li className='post-date'>
										<i className=''>
											<FiCalendar />
										</i>
										<span>5 May 2022</span>
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
										300
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
						<div className='col-lg-10 mx-auto'>
							<div className='blog single mt-n17'>
								<div className='card'>
									<figure className='card-img-top'>
										<img src='assets/img/photos/b1.jpg' alt='' />
									</figure>
									<div className='card-body'>
										<div className='classic-view'>
											<article className='post'>
												<div className='post-content mb-5'>
													<h2 className='h1 mb-4'>1. Limit sugary drinks</h2>
													<p>
														Sugary drinks like sodas, fruit juices, and
														sweetened teas are the primary source of added sugar
														in the American diet.
													</p>
													<p>
														Donec sed odio dui consectetur adipiscing elit.
														Etiam adipiscing tincidunt elit, eu convallis felis
														suscipit ut. Phasellus rhoncus tincidunt auctor.
														Nullam eu sagittis mauris. Donec non dolor ac elit
														aliquam tincidunt at at sapien. Aenean tortor
														libero, condimentum ac laoreet vitae, varius tempor
														nisi. Duis non arcu vel lectus urna mollis ornare
														vel eu leo.
													</p>
													<div className='row g-6 mt-3 mb-10'>
														<div className='col-md-6'>
															<figure className='hover-scale rounded cursor-dark'>
																<a
																	href='assets/img/photos/b8-full.jpg'
																	data-glightbox='title: Heading; description: Purus Vulputate Sem Tellus Quam'
																	data-gallery='post'>
																	{' '}
																	<img src='assets/img/photos/b8.jpg' alt='' />
																</a>
															</figure>
														</div>

														<div className='col-md-6'>
															<figure className='hover-scale rounded cursor-dark'>
																<a
																	href='assets/img/photos/b9-full.jpg'
																	data-glightbox
																	data-gallery='post'>
																	{' '}
																	<img src='assets/img/photos/b9.jpg' alt='' />
																</a>
															</figure>
														</div>

														<div className='col-md-6'>
															<figure className='hover-scale rounded cursor-dark'>
																<a
																	href='assets/img/photos/b10-full.jpg'
																	data-glightbox
																	data-gallery='post'>
																	{' '}
																	<img src='assets/img/photos/b10.jpg' alt='' />
																</a>
															</figure>
														</div>

														<div className='col-md-6'>
															<figure className='hover-scale rounded cursor-dark'>
																<a
																	href='assets/img/photos/b11-full.jpg'
																	data-glightbox
																	data-gallery='post'>
																	{' '}
																	<img src='assets/img/photos/b11.jpg' alt='' />
																</a>
															</figure>
														</div>
													</div>

													<p>
														Maecenas sed diam eget risus varius blandit sit amet
														non magna. Cum sociis natoque penatibus et magnis
														dis parturient montes, nascetur ridiculus mus. Donec
														sed odio dui. Nulla vitae elit libero, a pharetra
														augue. Maecenas faucibus mollis interdum. Donec id
														elit non mi porta gravida at eget metus. Nullam quis
														risus eget urna mollis ornare vel eu leo. Lorem
														ipsum dolor sit amet, consectetur adipiscing elit.
														Sed posuere consectetur est at lobortis. Cras mattis
														consectetur purus sit amet fermentum. Praesent
														commodo cursus magna.
													</p>
													<blockquote className='fs-lg my-8'>
														<p>
															Sed posuere consectetur est at lobortis. Lorem
															ipsum dolor sit amet, consectetur adipiscing elit.
															Duis mollis, est non commodo luctus, nisi erat
															porttitor ligula lacinia odio sem nec elit purus.
														</p>
														<footer className='blockquote-footer'>
															Very important person
														</footer>
													</blockquote>
													<h3 className='h2 mb-4'>
														Sit Vulputate Bibendum Purus
													</h3>
													<p>
														Fusce dapibus, tellus ac cursus commodo, tortor
														mauris condimentum nibh, ut fermentum massa justo
														sit amet risus. Aenean lacinia bibendum nulla sed
														consectetur. Cras mattis consectetur purus sit amet
														fermentum. Praesent commodo cursus magna, vel
														scelerisque nisl consectetur et. Vestibulum id
														ligula porta felis euismod semper.
													</p>
													<p>
														Fusce dapibus, tellus ac cursus commodo, tortor
														mauris condimentum nibh, ut fermentum massa justo
														sit amet risus. Donec sed odio dui. Cras justo odio,
														dapibus ac facilisis in, egestas eget quam. Fusce
														dapibus, tellus ac cursus commodo, tortor mauris
														condimentum nibh, ut fermentum massa justo sit amet
														risus. Sed posuere consectetur est at lobortis.
														Donec id elit non mi porta gravida at eget metus.
														Nulla vitae elit libero, a pharetra augue. Cum
														sociis natoque penatibus et magnis dis parturient
														montes, nascetur ridiculus mus. Fusce dapibus,
														tellus ac cursus commodo, tortor mauris condimentum
														nibh.
													</p>
												</div>

												<div className='post-footer d-md-flex flex-md-row justify-content-md-between align-items-center mt-8'>
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
												</div>
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

export default BlogPostSection;
