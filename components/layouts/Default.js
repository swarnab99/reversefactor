import Header from '../header/Header';
import Footer from '../footer/Footer';
import WhatsappButton from '../WhatsappButton';

const DefaultLayout = ({ children }) => {
	return (
		<main className='main-content'>
			<Header />
			<div className='main'>{children}</div>
			<Footer />
			<WhatsappButton number='+918100550660' text='Hi, Reverse Factor' />
		</main>
	);
};

export default DefaultLayout;
