/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { RichText } from 'prismic-reactjs';
import { CustomLink } from '../../utils/prismicHelpers';

const FaqSection = ({ slice }) => {
	// console.log(slice);
	const { heading, description } = slice?.primary;
	return (
		<section className='wrapper bg-light'>
			<div className='container pt-14 pt-md-16'>
				<h2 className='display-4 mb-3 text-center'>{heading[0]?.text}</h2>
				<p className='lead text-center mb-10 px-md-16 px-lg-0'>
					{description[0]?.text}
				</p>
				<div className='row'>
					{slice?.items?.map((item, index) => (
						<FaqItem key={index} data={item} />
					))}
				</div>
			</div>
		</section>
	);
};

const FaqItem = ({ data }) => {
	const { answer, question } = data;
	const [show, setShow] = useState(false);
	return (
		<div className='col-10 mx-auto mb-0'>
			<div className='accordion-wrapper'>
				<div className='card accordion-item'>
					<div className='card-header' id='accordion-heading-1-1'>
						<button className='collapsed' onClick={() => setShow(!show)}>
							<i className='icon-down'>
								<FiChevronDown />
							</i>
							{question[0]?.text}
						</button>
					</div>

					<div className={`collapse ${show ? 'show' : ''}`}>
						<div className='card-body'>
							<RichText render={answer} serializeHyperlink={CustomLink} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FaqSection;
