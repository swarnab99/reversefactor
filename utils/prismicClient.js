import { createPrismicLink } from 'apollo-link-prismic';
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
	link: createPrismicLink({
		uri: `https://${process.env.PRISMIC_ID}.cdn.prismic.io/graphql`,
		accessToken: process.env.PRISMIC_ACCESS_TOKEN,
	}),
	cache: new InMemoryCache(),
});

export default client;