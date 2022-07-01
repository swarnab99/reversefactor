import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress

import { DefaultSeo } from 'next-seo';
import DefaultLayout from '../components/layouts/Default';

//Binding events.
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
	const Layout = Component.Layout || DefaultLayout;
	return (
		<>
			<DefaultSeo
				defaultTitle={`Reverse Factor`}
				openGraph={{
					type: 'website',
					locale: 'en_IN',
					url: 'https://reversefactor.com/',
					site_name: 'reversefactor',
				}}
			/>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}

export default MyApp;
