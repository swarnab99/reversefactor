/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { FiCalendar, FiEye } from 'react-icons/fi';

const BlogsSection = () => {
	return (
		<section className='wrapper bg-light'>
			<div className='container py-14 py-md-16'>
				<h2 className='display-4 mb-10 text-center'>Recent Blog Posts</h2>
				{/* <p className='lead fs-lg mb-10 text-center px-md-16 px-lg-21 px-xl-0'>
					Here are the latest tips from our blog that got the most attention.
				</p> */}
				<div className='row'>
					<BlogItem />
					<BlogItem />
					<BlogItem />
				</div>
			</div>
		</section>
	);
};

const BlogItem = () => {
	return (
		<div className='col-lg-4 mb-10'>
			<article>
				<figure className='overlay overlay-1 hover-scale rounded mb-5'>
					<a href='#'>
						<img src='./assets/img/photos/b4.jpg' alt='' />
					</a>
					<figcaption>
						<h5 className='from-top mb-0'>Read More</h5>
					</figcaption>
				</figure>
				<div className='post-header'>
					<h2 className='post-title h3 mt-1 mb-3'>
						<Link href='/new-habits'>
							<a className='link-dark'>12 Ways To Eliminate Stress At Work</a>
						</Link>
					</h2>
				</div>

				<div className='post-footer'>
					<ul className='post-meta'>
						<li className='post-date'>
							<i className=''>
								<FiCalendar />
							</i>
							14 Apr 2022
						</li>
						<li className='post-comments'>
							<i className=''>
								<FiEye />
							</i>
							400
						</li>
					</ul>
				</div>
			</article>
		</div>
	);
};

export default BlogsSection;
