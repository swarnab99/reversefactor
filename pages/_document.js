/* eslint-disable @next/next/no-css-tags */
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html lang='en'>
				<Head>
					{/* ===== CSS FILES ===== */}
					<link rel='stylesheet' href='/assets/css/plugins.css' />
					<link rel='stylesheet' href='/assets/css/style.css' />
					<link rel='stylesheet' href='/assets/css/colors/aqua.css' />
					<link
						rel='stylesheet'
						href='/assets/css/fonts/dm.css'
						as='style'></link>

					{/* ===== FONT ===== */}
					<link rel='preconnect' href='https://fonts.googleapis.com' />
					<link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
					<link
						href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap'
						rel='stylesheet'
					/>

					{/* ===== PREFETCH ===== */}
					<link rel='preconnect' href='https://images.prismic.io/' />
					<link rel='dns-prefetch' href='https://images.prismic.io/' />

					{/* FAVICONS */}
					<link
						rel='apple-touch-icon'
						sizes='180x180'
						href='/apple-touch-icon.png'
					/>
					<link
						rel='icon'
						type='image/png'
						sizes='32x32'
						href='/favicon-32x32.png'
					/>
					<link
						rel='icon'
						type='image/png'
						sizes='16x16'
						href='/favicon-16x16.png'
					/>
					<link rel='manifest' href='/site.webmanifest' />
					<link rel='mask-icon' href='/safari-pinned-tab.svg' color='#00a300' />
					<meta name='msapplication-TileColor' content='#ffffff' />
					<meta name='theme-color' content='#ffffff' />

					{/* SCRIPTS */}
					<script
						async
						defer
						src={`https://static.cdn.prismic.io/prismic.js?new=true&repo=${process.env.PRISMIC_ID}`}></script>
					<script
						defer
						data-domain={`${process.env.PRISMIC_ID}.in`}
						src='https://plausible.io/js/plausible.js'></script>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
