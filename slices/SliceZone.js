import {
	HeroSection,
	FeaturedSection,
	AboutSection,
	StatsSection,
	ServicesSection,
	CtaSection,
	TestimonialsSections,
	WhyUsSection,
	HighlightsSection,
	SpeakersSection,
	CtaFormSection,
} from './';

const SliceZone = ({ sliceZone }) => (
	<>
		{sliceZone.map((slice, index) => {
			switch (slice.slice_type) {
				case 'hero_section':
					return <HeroSection slice={slice} key={`slice-${index}`} />;
				case 'featured_section':
					return <FeaturedSection slice={slice} key={`slice-${index}`} />;
				case 'about_section':
					return <AboutSection slice={slice} key={`slice-${index}`} />;
				case 'stats_section':
					return <StatsSection slice={slice} key={`slice-${index}`} />;
				case 'services_section':
					return <ServicesSection slice={slice} key={`slice-${index}`} />;
				case 'cta_section':
					return <CtaSection slice={slice} key={`slice-${index}`} />;
				case 'testimonial_section':
					return <TestimonialsSections slice={slice} key={`slice-${index}`} />;
				case 'why_section':
					return <WhyUsSection slice={slice} key={`slice-${index}`} />;
				case 'highlights_section':
					return <HighlightsSection slice={slice} key={`slice-${index}`} />;
				case 'speakers_section':
					return <SpeakersSection slice={slice} key={`slice-${index}`} />;
				case 'cta_form_section':
					return <CtaFormSection slice={slice} key={`slice-${index}`} />;
				default:
					return null;
			}
		})}
	</>
);

export default SliceZone;
