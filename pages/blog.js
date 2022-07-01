import BlogsSection from '../components/blog/BlogsSection';
import SecondaryHeroSection from '../components/hero/SecondaryHeroSection';

const BlogsPage = () => {
	return (
		<>
			<SecondaryHeroSection
				title='Tips For Healthy Lifestyle'
				details='There are many effective things you can do to improve your health. Here are few health and nutrition tips that are actually based on good science.'
				button_text='Get An Appointment'
			/>
			<BlogsSection />
		</>
	);
};

export default BlogsPage;
