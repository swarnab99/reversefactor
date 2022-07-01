import SecondaryHeroSection from '../components/hero/SecondaryHeroSection';
import AboutSection from '../components/about/AboutSection';
import StatsSection from '../components/stats/StatsSection';
import CtaSection from '../components/cta/CtaSection';
import VissionSection from '../components/about/VissionSection';
import TeamSection from '../components/about/TeamSection';
import CtaFormSection from '../components/cta/CtaFormSection';

const AboutUsPage = () => {
	return (
		<>
			<SecondaryHeroSection
				title='About Reverse Factor'
				title2='Our Mission is to provide you the absolute control of your health'
				details='Reverse Factor firmly believes that Chronic Diseases are reversible and preventable with right lifestyle interventions.'
				button_text='Join our Mission'
			/>
			<section>
				<div className='container mt-14'>
					<div className='col-lg-10 mx-auto'>
						<h2 className='display-2 text-center'>
							We Help People To Get{' '}
							<span className='underline-3 style-2 yellow'>
								A Medication Free Life!
							</span>{' '}
							Join Us Today
						</h2>
					</div>
				</div>
			</section>
			<AboutSection
				title='What is Reverse Factor?'
				subtitle='We are the only healthtech start-up in India that helps people reverse lifestyle diseases with the help of right food as well as thoughts & emotions.'
				details='RF team has proved it through innumerable case studies that there are curative natural foods for every disease. With a one point mission to reverse disease and revive life, Reverse Factor team lead by top disease reversal expert Mr. Karan Kakkad are putting their heart and soul to create a drug free and disease free world, simply by spreading awareness about the role of mind and nutrition in the prevention, treatment and reversal of lifestyle diseases.'
				button_text='Learn More How It Works'
				image='/assets/img/photos/about10.jpg'
			/>
			<VissionSection />
			<CtaSection />
			<StatsSection />
			<TeamSection />
			<CtaFormSection />
		</>
	);
};

export default AboutUsPage;
