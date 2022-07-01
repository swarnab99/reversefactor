import CtaFormSection from '../components/cta/CtaFormSection';
import CtaSection from '../components/cta/CtaSection';
import SecondaryHeroSection from '../components/hero/SecondaryHeroSection';
import PricingSection from '../components/pricing/PricingSection';
import ServicesSection from '../components/service/ServicesSection';

const ServicesPage = () => {
	return (
		<>
			<SecondaryHeroSection
				title='Reverse Factor Reversal Services'
				details='We have helped and inspired more than 4000 people to reverse their lifestyle diseases and become medication free.'
				button_text='Contact Us'
			/>
			<ServicesSection show />
			<CtaSection />
			<PricingSection />
			<CtaFormSection />
		</>
	);
};

export default ServicesPage;
