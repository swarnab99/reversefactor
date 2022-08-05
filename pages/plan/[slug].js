import { useEffect } from 'react';
import lozad from 'lozad';
import { Client } from '../../utils/prismicHelpers';
import { queryRepeatableDocuments } from '../../utils/queries';
import { SliceZone } from '../../slices';
import SEO from '../../components/seo/SEO';
import Footer from '../../components/footer/Footer';

// import SecondaryHeroSection from '../../components/hero/SecondaryHeroSection';
// import VideoFeaturesSection from '../../components/feature/VideoFeaturesSection';
// import FeaturesSection from '../../components/feature/FeaturesSection';
// import CtaSection from '../../components/cta/CtaSection';
// import TestimonialsSections from '../../components/testimonial/TestimonialsSection';
// import CtaCardSection from '../../components/cta/CtaCardSection';
// import FaqSection from '../../components/faq/FaqSection';

const ServicePage = ({ doc }) => {
	// ========== LOZAD INSTANTIATE ==========
	useEffect(() => {
		const observer = lozad('.lozad', {
			rootMargin: '100px 0px', // syntax similar to that of CSS Margin
		});
		observer.observe();
		return () => {};
	}, [doc?.uid]);
	// ========== END ==========
	return (
		<>
			<SEO
				doc={doc}
				url={`https://${process.env.NEXT_PUBLIC_PRISMIC_ID}.in/plan/${doc?.uid}`}
			/>
			<SliceZone sliceZone={doc.data.body} />
		</>
	);
};

export async function getStaticProps({
	preview = null,
	previewData = {},
	params,
}) {
	const { ref } = previewData;

	const client = Client();

	const doc =
		(await client.getByUID(
			'service_page',
			params.slug,
			ref ? { ref } : null
		)) || {};

	const footer =
		(await client.getSingle('footer_section', ref ? { ref } : null)) || {};

	if (doc.id == undefined) {
		return {
			props: null,
			notFound: true,
		};
	}

	return {
		props: {
			doc,
			footer,
			preview,
		},
		revalidate: 60,
	};
}

export default ServicePage;
