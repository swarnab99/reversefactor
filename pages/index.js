import AboutSection from '../components/about/AboutSection';
import SpeakersSection from '../components/about/SpeakersSection';
import BlogsSection from '../components/blog/BlogsSection';
import CtaFormSection from '../components/cta/CtaFormSection';
import CtaSection from '../components/cta/CtaSection';
import WhyUsSection from '../components/feature/WhyUsSection';
import FeaturedSection from '../components/featured/FeaturedSection';
import HeroSection from '../components/hero/HeroSection';
import ServicesSection from '../components/service/ServicesSection';
import StatsSection from '../components/stats/StatsSection';
import TestimonialsSections from '../components/testimonial/TestimonialsSection';
import HighlightsSection from '../components/feature/HighlightsSection';

const IndexPage = () => {
	return (
		<>
			<HeroSection />
			<FeaturedSection />
			<AboutSection
				title='Who Are We?'
				subtitle='Reverse Factor exists because we believe that chronic diseases are reversible & preventable.'
				details='We have helped and inspired more than 4000 people to reverse their lifestyle diseases and become medication free. Our patients come with multiple health issues like diabetes, fatty liver, high blood pressure, heart disease, obesity, PCOD, high cholesterol & many more.'
				button_text='Learn More How It Works'
				image='https://i.ibb.co/M7FFWss/about10.jpg'
			/>
			<StatsSection />
			<ServicesSection />
			<CtaSection />
			<TestimonialsSections />
			<CtaSection />
			<WhyUsSection />
			<HighlightsSection image='https://i.ibb.co/WtvWhXN/reverse-factor2.png' />
			<SpeakersSection />
			<CtaFormSection />
			<BlogsSection />
		</>
	);
};

export default IndexPage;
