/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';

import ProductModal from '../modal/ProductModal';

const ProductsSection = ({ slice }) => {
	// console.log(slice);
	const { heading } = slice?.primary;
	const [activeProduct, setActiveProduct] = useState(null);

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
							<ProductItem
								key={index}
								data={item}
								index={index}
								changeActive={(val) => setActiveProduct(val)}
							/>
						))}
					</div>
				</div>
			</div>

			{activeProduct != null && (
				<ProductModal
					product={slice?.items[activeProduct]}
					onClose={() => setActiveProduct(null)}
				/>
			)}
		</section>
	);
};

const ProductItem = ({ data, index, changeActive }) => {
	const { title, image, selling_price, mrp } = data;
	return (
		<div className='project item col-md-6 col-xl-3'>
			<figure className='rounded mb-2'>
				<img
					src={
						image?.url ||
						'https://images.prismic.io/reversefactor/7f031a62-18d1-499e-93be-560e42bc4681_product_placeholder.png'
					}
					alt={image?.alt}
				/>
				<span className='item-cart'>Query on Whatsapp</span>
			</figure>
			<div onClick={() => changeActive(index)} className='post-header'>
				<h2 className='post-title h3 fs-22'>{title[0]?.text}</h2>
				<p className='price'>
					{mrp && (
						<del>
							<span className='amount'>₹{mrp}</span>
						</del>
					)}
					{selling_price && (
						<ins>
							<span className='amount'>₹{selling_price}</span>
						</ins>
					)}
				</p>
			</div>
		</div>
	);
};

export default ProductsSection;
