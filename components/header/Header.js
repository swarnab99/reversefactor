/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
	return (
		<header className='wrapper'>
			<nav
				className='navbar navbar-expand-lg classic transparent navbar-light _fixed _navbar-stick _position-fixed'
				style={{ top: 0 }}>
				<div className='container-fluid flex-lg-row flex-nowrap align-items-center'>
					<div className='navbar-brand w-100'>
						<Link href='/'>
							<a>
								<img
									src='https://reversefactor.in/images/rf-logo.png'
									width={200}
									alt=''
								/>
							</a>
						</Link>
					</div>
					<div className='navbar-collapse offcanvas offcanvas-nav offcanvas-start'>
						<div className='offcanvas-header d-lg-none'>
							<h3 className='text-white fs-30 mb-0'>Sandbox</h3>
							<button
								type='button'
								className='btn-close btn-close-white'
								data-bs-dismiss='offcanvas'
								aria-label='Close'></button>
						</div>
						<div className='offcanvas-body ms-lg-auto d-flex flex-column h-100'>
							<ul className='navbar-nav'>
								<MenuItem />
								{/* <li className='nav-item dropdown'>
									<a
										className='nav-link dropdown-toggle'
										href='#'
										data-bs-toggle='dropdown'>
										Blog
									</a>
									<ul className='dropdown-menu'>
										<li className='nav-item'>
											<a className='dropdown-item' href='blog.html'>
												Blog without Sidebar
											</a>
										</li>
										<li className='nav-item'>
											<a className='dropdown-item' href='blog2.html'>
												Blog with Sidebar
											</a>
										</li>
										<li className='nav-item'>
											<a className='dropdown-item' href='blog3.html'>
												Blog with Left Sidebar
											</a>
										</li>
									</ul>
								</li> */}
							</ul>

							<div className='offcanvas-footer d-lg-none'>
								<div>
									<a
										href='cdn-cgi/l/email-protection.html#b1d7d8c3c2c59fddd0c2c5f1d4dcd0d8dd9fd2dedc'
										className='link-inverse'>
										<span
											className='__cf_email__'
											data-cfemail='bbd2d5ddd4fbded6dad2d795d8d4d6'>
											[email&#160;protected]
										</span>
									</a>
									<br /> 00 (123) 456 78 90 <br />
									<nav className='nav social social-white mt-4'>
										<a href='#'>
											<i className='uil uil-twitter'></i>
										</a>
										<a href='#'>
											<i className='uil uil-facebook-f'></i>
										</a>
										<a href='#'>
											<i className='uil uil-dribbble'></i>
										</a>
										<a href='#'>
											<i className='uil uil-instagram'></i>
										</a>
										<a href='#'>
											<i className='uil uil-youtube'></i>
										</a>
									</nav>
								</div>
							</div>
						</div>
					</div>

					<div className='navbar-other ms-lg-4'>
						<ul className='navbar-nav flex-row align-items-center ms-auto'>
							<li className='nav-item d-none d-md-block'>
								<a href='#' className='btn btn-sm btn-primary rounded'>
									Get Appointment
								</a>
							</li>
							<li className='nav-item d-lg-none'>
								<button className='hamburger offcanvas-nav-btn'>
									<span></span>
								</button>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
};

const MenuItem = ({ onClose }) => {
	const router = useRouter();
	return (
		<ul onClick={onClose} className='navbar-nav'>
			<LinkItem text='Home' link='/' active={router.pathname == '/'} />
			<LinkItem
				text='About'
				link='/about-reverse-factor'
				active={router.pathname == '/about-reverse-factor'}
			/>
			<LinkItem
				text='How It Works'
				link='/how-it-works'
				active={router.pathname == '/how-it-works'}
			/>
			<LinkItem
				text='Reversal Stories'
				link='/reversal-stories'
				active={router.pathname == '/reversal-stories'}
			/>
			<LinkItem
				text='Services'
				link='/services'
				active={router.pathname == '/services'}
			/>
			<LinkItem
				text='Presence'
				link='/our-presence'
				active={router.pathname == '/our-presence'}
			/>
			<LinkItem
				text='Products'
				link='/products'
				active={router.pathname == '/products'}
			/>
			<LinkItem text='Blog' link='/blog' active={router.pathname == '/blog'} />
			<LinkItem
				text='Contact'
				link='/contact'
				active={router.pathname == '/contact'}
			/>
		</ul>
	);
};

const LinkItem = ({ text, link, active }) => {
	return (
		<li className='nav-item'>
			<Link href={link}>
				<a className={`nav-link ${active ? 'active' : ''}`}>{text}</a>
			</Link>
		</li>
	);
};

export default Header;
