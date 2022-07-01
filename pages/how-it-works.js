import AboutSection from '../components/about/AboutSection';
import FeaturesSection from '../components/feature/FeaturesSection';
import CtaSection from '../components/cta/CtaSection';
import SecondaryHeroSection from '../components/hero/SecondaryHeroSection';
import ProcessSection from '../components/process/ProcessSection';
import WhyUsSection from '../components/feature/WhyUsSection';
import CtaCardSection from '../components/cta/CtaCardSection';
import FaqSection from '../components/faq/FaqSection';

const HowItWorksPage = () => {
	return (
		<>
			<SecondaryHeroSection
				title='Reverse Your Disease & Live a Healthy Life'
				details='As per WHO, more than 60% of the deaths in India are attributed to chronic lifestyle diseases such as coronary artery diseases, cancers, diabetes, high blood pressure, fatty liver and many more.'
				button_text='Get a Free Appointment'
			/>
			<WhyUsSection
				subheading='Problem Statements'
				heading=''
				details=''
				button_text=''
			/>
			{/* <AboutSection
				title='Nutri-genomics - Science behind Reverse Factor'
				subtitle=''
				details='Nutri-genomics is a science studying the relationship between nutrition & our genes. At Reverse Factor, we understand how our food can have an impact on our gene expression which in turn can lead to either creating good health or inviting more disease. Food is our best medicine when it comes to reversing lifestyle diseases.'
				button_text='Read More'
				image='https://healthylifecapetown.co.za/wp-content/uploads/2018/05/nutrigenetic-vs-nutrigenomics-illustration.png'
			/> */}
			<FeaturesSection
				subheading='Our Strengths'
				heading='Why Reverse Factor Works for You ?'
			/>
			<CtaSection />
			<ProcessSection />
			<CtaCardSection />
			<FaqSection />
		</>
	);
};

export default HowItWorksPage;
