import { RichText } from 'prismic-reactjs';

const CtaHeadingSection = ({ slice }) => {
	// console.log(slice);
	const { heading } = slice?.primary;
	return (
		<section>
			<div className='container mt-14'>
				<div className='col-lg-10 mx-auto'>
					<div className='display-2 text-center'>
						<RichText render={heading} />
					</div>
				</div>
			</div>
		</section>
	);
};

export default CtaHeadingSection;
