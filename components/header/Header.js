/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  FaFacebookF,
  FaYoutube,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="wrapper">
      <nav
        className="navbar navbar-expand-lg classic transparent navbar-light fixed navbar-stick position-fixed bg-white"
        style={{ top: 0 }}
      >
        <div className="container-fluid flex-lg-row flex-nowrap align-items-center">
          <div className="navbar-brand w-100">
            <Link href="/">
              <a>
                <img
                  src="https://images.prismic.io/reversefactor/9873bf14-7b5d-44b3-931c-b1e20e8d693b_rf-logo.png"
                  width={200}
                  alt=""
                />
              </a>
            </Link>
          </div>
          <div
            className={`navbar-collapse offcanvas offcanvas-nav offcanvas-start ${
              showMenu ? "show" : ""
            }`}
          >
            <div className="offcanvas-header pb-0 d-lg-none">
              <h3 className="text-white fs-30 mb-0 invisible">ReverseFactor</h3>
              <button
                type="button"
                className="btn-close btn-close-white"
                onClick={() => setShowMenu(false)}
              ></button>
            </div>
            <div className="offcanvas-body ms-lg-auto d-flex flex-column h-100">
              <ul className="navbar-nav" onClick={() => setShowMenu(false)}>
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

              <div className="offcanvas-footer d-lg-none">
                <div>
                  <a
                    href="mailto:health@reversefactor.in"
                    className="link-inverse"
                  >
                    <span className="__cf_email__">
                      health@reversefactor.in
                    </span>
                  </a>
                  <br /> 8100-550-660 <br />
                  <nav className="nav social social-white mt-4">
                    <a href="https://www.facebook.com/ReverseFactor/">
                      <i>
                        <FaFacebookF />
                      </i>
                    </a>
                    <a href="https://www.youtube.com/channel/UCEm7GOYabdB1WskmOFY4yIg?view_as=subscriber">
                      <i>
                        <FaYoutube />
                      </i>
                    </a>
                    <a href="https://www.linkedin.com/company/14545715/admin/">
                      <i>
                        <FaLinkedin />
                      </i>
                    </a>
                    <a href="https://www.instagram.com/reverse_factor/">
                      <i>
                        <FaInstagram />
                      </i>
                    </a>
                    <a href="https://twitter.com/reverse_factor?lang=en">
                      <i>
                        <FaTwitter />
                      </i>
                    </a>
                  </nav>
                </div>
              </div>
            </div>
          </div>

          <div className="navbar-other ms-lg-4">
            <ul className="navbar-nav flex-row align-items-center ms-auto">
              {/* <li className='nav-item d-none d-md-block'>
								<a
									href='https://api.whatsapp.com/send?phone=+917001848624&text=Hi,%20Reverse%20Factor. I want to schedule an appointment.'
									target='_blank'
									rel='noreferrer'
									className='btn btn-sm btn-primary rounded'>
									Get Appointment
								</a>
							</li> */}
              <li className="nav-item d-lg-none">
                <button
                  className="hamburger offcanvas-nav-btn"
                  onClick={() => setShowMenu(true)}
                >
                  <span></span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <style jsx>{`
        .show {
          visibility: visible !important;
          height: 100vh !important;
        }
      `}</style>
    </header>
  );
};

const MenuItem = ({ onClose }) => {
  const router = useRouter();
  return (
    <ul onClick={onClose} className="navbar-nav">
      <LinkItem text="Home" link="/" active={router.pathname == "/"} />
      <LinkItem
        text="About"
        link="/about-reverse-factor"
        active={router.pathname == "/about-reverse-factor"}
      />
      <LinkItem
        text="How It Works"
        link="/how-it-works"
        active={router.pathname == "/how-it-works"}
      />
      <LinkItem
        text="Reversal Stories"
        link="/reversal-stories"
        active={router.pathname == "/reversal-stories"}
      />
      <LinkItem
        text="Mind Body Medicine"
        link="/mind-body-medicine"
        active={router.pathname == "/mind-body-medicine"}
      />
      <LinkItem
        text="Services"
        link="/services"
        active={router.pathname == "/services"}
      />
      <LinkItem
        text="Presence"
        link="/our-presence"
        active={router.pathname == "/our-presence"}
      />
      <LinkItem
        text="Products"
        link="/products"
        active={router.pathname == "/products"}
      />
      <LinkItem text="Blog" link="/blog" active={router.pathname == "/blog"} />
      <LinkItem
        text="Contact"
        link="/contact"
        active={router.pathname == "/contact"}
      />
    </ul>
  );
};

const LinkItem = ({ text, link, active }) => {
  return (
    <>
      <li className="nav-item">
        <Link href={link}>
          <a className={`nav-link ${active ? "active" : ""}`}>{text}</a>
        </Link>
      </li>
      <style jsx>{`
        @media (min-width: 992px) {
          .nav-link {
            padding-right: 0.5rem !important;
            padding-left: 0.5rem !important;
          }
        }
      `}</style>
    </>
  );
};

export default Header;
