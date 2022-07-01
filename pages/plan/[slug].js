import SecondaryHeroSection from '../../components/hero/SecondaryHeroSection';
import VideoFeaturesSection from '../../components/feature/VideoFeaturesSection';
import FeaturesSection from '../../components/feature/FeaturesSection';
import CtaSection from '../../components/cta/CtaSection';
import TestimonialsSections from '../../components/testimonial/TestimonialsSection';
import CtaCardSection from '../../components/cta/CtaCardSection';
import FaqSection from '../../components/faq/FaqSection';

const ServicePage = () => {
	return (
		<>
			<SecondaryHeroSection
				title='Reverse Your Diabetes with Us'
				details='Our approach helps people lower blood sugar and lose weight, even while eliminating the need for medications, including insulin.'
				button_text='Book an Appointment'
			/>
			<VideoFeaturesSection />
			<FeaturesSection
				subheading='Our Strengths'
				heading='Why Reverse Factor Works for You ?'
			/>
			<CtaSection />
			<TestimonialsSections />
			<CtaCardSection />
			<FaqSection />
		</>
	);
};

export default ServicePage;
