// -- Prismic API endpoint
// Determines which repository to query and fetch data from
// Configure your site's access point here
export const apiEndpoint = `https://${process.env.PRISMIC_ID}.cdn.prismic.io/api/v2`;

// -- Access Token if the repository is not public
// Generate a token in your dashboard and configure it here if your repository is private
export const accessToken = process.env.PRISMIC_ACCESS_TOKEN;

// -- Link resolution rules
// Manages the url links to internal Prismic documents
export const linkResolver = (doc) => {
	if (doc.type === 'home_page') return '/';
	else if (doc.type === 'about_page') return '/about-reverse-factor';
	else if (doc.type === 'contact_page') return '/contact';
	else if (doc.type === 'how_it_works_page') return '/how-it-works';
	else if (doc.type === 'our_presence_page') return '/our-presence';
	else if (doc.type === 'products_page') return '/products';
	else if (doc.type === 'reversal_stories_page') return '/reversal-stories';
	else if (doc.type === 'services_page') return '/services';
	else if (doc.type === 'blogs_page') return '/blog';
	else if (doc.type === 'blog_post') return `/${doc.uid}`;
	else if (doc.type === 'service_page') return `/plan/${doc.uid}`;
	else if (doc.type === 'mind_body_medicine') return `/journey-to-oneness`;
	// ===== FOR EXTERNAL LINK =====
	else if (doc.link_type === 'Web') return doc?.url;
	return '/';
};

// Additional helper function for Next/Link component
export const hrefResolver = (doc) => {
	if (doc.type === 'home_page') return '/';
	else if (doc.type === 'about_page') return '/about-reverse-factor';
	else if (doc.type === 'contact_page') return '/contact';
	else if (doc.type === 'how_it_works_page') return '/how-it-works';
	else if (doc.type === 'our_presence_page') return '/our-presence';
	else if (doc.type === 'products_page') return '/products';
	else if (doc.type === 'reversal_stories_page') return '/reversal-stories';
	else if (doc.type === 'services_page') return '/services';
	else if (doc.type === 'blogs_page') return '/blog';
	else if (doc.type === 'blog_post') return `/[slug]`;
	else if (doc.type === 'service_page') return `/plan/[slug]`;
	else if (doc.type === 'mind_body_medicine') return `/journey-to-oneness`;
	// ===== FOR EXTERNAL LINK =====
	else if (doc.link_type === 'Web') return doc?.url;
	return '/';
};
