import CtaFormSection from '../components/cta/CtaFormSection';
import CtaSection from '../components/cta/CtaSection';
import SecondaryHeroSection from '../components/hero/SecondaryHeroSection';
import StoriesSection from '../components/testimonial/StoriesSection';

const ReversalStories = () => {
	return (
		<>
			<SecondaryHeroSection
				title='4000+ People Are Living Disease Free Life With Us, Are You?'
				details='Inspiring stories of people who took that first step & positively
							changed their health for better future.'
				button_text='Learn More How It Works'
			/>
			<StoriesSection />
			<CtaSection center={true} />
			<StoriesSection />
			<CtaFormSection />
		</>
	);
};

export default ReversalStories;
