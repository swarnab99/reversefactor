import SecondaryHeroSection from '../components/hero/SecondaryHeroSection';
import ProductsSection from '../components/products/ProductsSection';

const ProductsPage = () => {
	return (
		<>
			<SecondaryHeroSection
				title='Browse our premium products'
				details='From seeds, herbs, supplements to your daily care needs, we have covered it all for you.'
				button_text=''
			/>
			<ProductsSection />
		</>
	);
};

export default ProductsPage;
