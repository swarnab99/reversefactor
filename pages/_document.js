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
					{/* <link
						href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css'
						rel='stylesheet'
						integrity='sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC'
						crossOrigin='anonymous'
					/> */}
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
