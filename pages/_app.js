import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress
import Script from 'next/script';

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

			<Script
				strategy='lazyOnload'
				src={`https://www.googletagmanager.com/gtag/js?id=G-F1YWGEZZHD`}
			/>
			<Script id='google-analytics' strategy='lazyOnload'>
				{`
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());

					gtag('config', 'G-F1YWGEZZHD');
				`}
			</Script>

			<Script id='tawk.to' strategy='lazyOnload'>
				{`var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
					(function(){
						var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
						s1.async=true;
						s1.src='https://embed.tawk.to/62cc19e97b967b117998febc/1g7mkaen6';
						s1.charset='UTF-8';
						s1.setAttribute('crossorigin','*');
						s0.parentNode.insertBefore(s1,s0);
					})();
				`}
			</Script>
		</>
	);
}

export default MyApp;
