import { useEffect } from 'react';
import lozad from 'lozad';
import { Client } from '../utils/prismicHelpers';
import { SliceZone } from '../slices';
import SEO from '../components/seo/SEO';

// import VissionSection from '../components/about/VissionSection';

const AboutUsPage = ({ doc }) => {
	// console.log(doc);
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
				url={`https://${process.env.NEXT_PUBLIC_PRISMIC_ID}.in/about-reverse-factor`}
			/>
			<SliceZone sliceZone={doc.data.body} />
		</>
	);
};

export async function getStaticProps({ preview = null, previewData = {} }) {
	const { ref } = previewData;
	const client = Client();
	const doc =
		(await client.getSingle('about_page', ref ? { ref } : null)) || {};

	if (doc.id == undefined) {
		return {
			props: null,
			notFound: true,
		};
	}

	return {
		props: {
			doc,
			preview,
		},
		revalidate: 60,
	};
}

export default AboutUsPage;
