import ContactSection from '../components/contact/ContactSection';
import SecondaryHeroSection from '../components/hero/SecondaryHeroSection';

const ContactPage = () => {
	return (
		<>
			<SecondaryHeroSection
				title='Contact Reverse Factor'
				details='Whether it be details regarding your conditions, or a confusion about nutrition to combat these conditions, simply reach out to us with your questions & we’ll get back to you.'
				button_text='Join our Mission'
			/>
			<ContactSection />
		</>
	);
};

export default ContactPage;
