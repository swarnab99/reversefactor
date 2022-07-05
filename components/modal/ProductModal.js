/* eslint-disable @next/next/no-img-element */
import { RichText } from 'prismic-reactjs';
import { CustomLink } from '../../utils/prismicHelpers';

const ProductModal = ({ product, onClose }) => {
	// console.log(product);
	const { title, image, details, selling_price, mrp } = product;
	return (
		<div className='modal fade show d-block overlay-bg' id='exampleModal'>
			<div
				style={{ maxWidth: '850px' }}
				className='modal-dialog modal-dialog-centered'>
				<div className='modal-content'>
					<div className='modal-header py-3 px-4'>
						<h5 className='modal-title' id='exampleModalLabel'>
							{title[0]?.text}{' '}
							<p className='price'>
								{mrp && (
									<del>
										<span className='amount'>₹{mrp}</span>
									</del>
								)}
								{selling_price && (
									<ins>
										<span className='amount ms-2'>₹{selling_price}</span>
									</ins>
								)}
							</p>
						</h5>

						<button
							onClick={onClose}
							type='button'
							className='close btn text-dark'>
							<span aria-hidden='true'>X</span>
						</button>
					</div>
					<div className='modal-body pt-0 px-4 pb-4'>
						<div className='row'>
							<div className='col-md-4'>
								<img
									src={
										image?.url ||
										'https://images.prismic.io/reversefactor/7f031a62-18d1-499e-93be-560e42bc4681_product_placeholder.png'
									}
									alt={image?.alt}
									className='img-fluid rounded'
								/>

								<button className='btn btn-primary btn-sm w-100 mb-5 mb-md-0'>
									Query on Whatsapp
								</button>
							</div>
							<div className='col-md-8'>
								<RichText render={details} serializeHyperlink={CustomLink} />
							</div>
						</div>
					</div>
				</div>
			</div>

			<style jsx>{`
				.overlay-bg {
					background-color: rgb(0 0 0 / 50%);
				}
			`}</style>
		</div>
	);
};

export default ProductModal;
