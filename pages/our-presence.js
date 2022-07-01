import GallerySection from '../components/gallery/GallerySection';
import WorkshopSection from '../components/workshop/WorkshopsSection';
import SecondaryHeroSection from '../components/hero/SecondaryHeroSection';
import StatsSection from '../components/stats/StatsSection';
import AboutSection from '../components/about/AboutSection';
import HighlightsSection from '../components/feature/HighlightsSection';
import EventsSection from '../components/event/EventsSection';

const OurPresence = () => {
	return (
		<>
			<SecondaryHeroSection
				title='Our Presence'
				details='Our journey in helping people become free from their lifestyle diseases.'
				button_text='Invite Us For Seminar'
			/>
			<StatsSection />
			<HighlightsSection image='https://i.ibb.co/brXS76N/reverse-factor-presents.png' />
			<EventsSection />
			<WorkshopSection
				heading='Workshops'
				image='https://i.ibb.co/0CXYhBy/1-3.png'
				title="Millenium Mam's , Kolkata"
			/>
			<GallerySection
				heading='Media'
				image='https://drop.ndtv.com/albums/NEWS/Newspaper_Headl_637422389732143887/637422389752796611.jpeg'
				title="World Woman's Day"
			/>
			<AboutSection
				title='Karan Kakkad'
				subtitle='Founder & CEO of Reverse Factor'
				details='Karan Kakkad is an International Nutrigenomics & Disease Reversal expert based in India. He is an expert in Holistic Nutrition and also associated with American Fitness Professionals & Associates (AFPA). His passion in Medical Nutrition led to the birth of Reverse Factor which is backed by an extensive research in the field of Nutrigenomics - The scientific study of the interaction of nutrition and genes.'
				button_text='Invite For Seminars'
				image='https://reversefactor.in/images/karan-kaka.png'
			/>
		</>
	);
};

export default OurPresence;
