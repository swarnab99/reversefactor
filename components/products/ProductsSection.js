/* eslint-disable @next/next/no-img-element */

const ProductsSection = ({ slice }) => {
	// console.log(slice);
	const { heading } = slice?.primary;
	return (
		<section className='wrapper bg-light'>
			<div className='container py-10'>
				<div className='row align-items-center mb-10 position-relative zindex-1'>
					<div className='col-md-8 col-lg-9 col-xl-8 col-xxl-7 pe-xl-20'>
						<h2 className='display-6'>{heading[0]?.text}</h2>
					</div>

					<div className='col-md-4 col-lg-3 ms-md-auto text-md-end mt-5 mt-md-0'>
						<div className='form-select-wrapper'>
							<select className='form-select'>
								<option value='popularity'>Show All Products</option>
								<option value='rating'>Seeds & Herbs</option>
								<option value='rating'>Other</option>
							</select>
						</div>
					</div>
				</div>

				<div className='grid grid-view projects-masonry shop mb-13'>
					<div className='row gx-md-8 gy-10 gy-md-13 isotope'>
						{slice?.items?.map((item, index) => (
							<ProductItem key={index} data={item} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

const ProductItem = ({ data }) => {
	const { title, image, selling_price, mrp } = data;
	return (
		<div className='project item col-md-6 col-xl-3'>
			<figure className='rounded mb-2'>
				<img src={image?.url} alt={image?.alt} />
				{/* <a
					className='item-like'
					href='#'
					data-bs-toggle='white-tooltip'
					title='Add to wishlist'>
					<i className='uil uil-heart'></i>
				</a>
				<a
					className='item-view'
					href='#'
					data-bs-toggle='white-tooltip'
					title='Quick view'>
					<i className='uil uil-eye'></i>
				</a> */}
				<a href='#' className='item-cart'>
					Query on Whatsapp
				</a>
				<span
					className='avatar bg-pink text-white w-10 h-10 position-absolute text-uppercase fs-13'
					// style='top: 1rem; left: 1rem;'
				>
					<span>Sale!</span>
				</span>
			</figure>
			<div className='post-header'>
				<h2 className='post-title h3 fs-22'>
					<a href='shop-product.html' className='link-dark'>
						{title[0]?.text}
					</a>
				</h2>
				<p className='price'>
					<del>
						<span className='amount'>₹{mrp}</span>
					</del>{' '}
					<ins>
						<span className='amount'>₹{selling_price}</span>
					</ins>
				</p>
			</div>
		</div>
	);
};

export default ProductsSection;
