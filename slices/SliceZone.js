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
	SecondaryHeroSection,
	CtaHeadingSection,
	DetailedAboutUsSection,
	TeamSection,
	FeaturesSection,
	ProcessSection,
	CtaCardSection,
	FaqSection,
	StoriesSection,
	PricingSection,
	GallerySection,
	WorkshopsSection,
	EventsSection,
	ProductsSection,
	ContactSection,
	VideoFeaturesSection,
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
				case 'secondary_hero_section':
					return <SecondaryHeroSection slice={slice} key={`slice-${index}`} />;
				case 'cta_heading_section':
					return <CtaHeadingSection slice={slice} key={`slice-${index}`} />;
				case 'team_section':
					return <TeamSection slice={slice} key={`slice-${index}`} />;
				case 'features_section':
					return <FeaturesSection slice={slice} key={`slice-${index}`} />;
				case 'process_section':
					return <ProcessSection slice={slice} key={`slice-${index}`} />;
				case 'cta_card_section':
					return <CtaCardSection slice={slice} key={`slice-${index}`} />;
				case 'faq_section':
					return <FaqSection slice={slice} key={`slice-${index}`} />;
				case 'client_stories_section':
					return <StoriesSection slice={slice} key={`slice-${index}`} />;
				case 'pricing_section':
					return <PricingSection slice={slice} key={`slice-${index}`} />;
				case 'media_section':
					return <GallerySection slice={slice} key={`slice-${index}`} />;
				case 'workshops_section':
					return <WorkshopsSection slice={slice} key={`slice-${index}`} />;
				case 'upcoming__events_section':
					return <EventsSection slice={slice} key={`slice-${index}`} />;
				case 'products_section':
					return <ProductsSection slice={slice} key={`slice-${index}`} />;
				case 'contact_section':
					return <ContactSection slice={slice} key={`slice-${index}`} />;
				case 'video_features_section':
					return <VideoFeaturesSection slice={slice} key={`slice-${index}`} />;
				case 'detailed_about_us_section':
					return (
						<DetailedAboutUsSection slice={slice} key={`slice-${index}`} />
					);
				default:
					return null;
			}
		})}
	</>
);

export default SliceZone;
