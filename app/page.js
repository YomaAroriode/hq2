import Header from './ui/header';
import Hero from './ui/hero';
import SectionOne from './ui/section1';
import SectionTwo from './ui/section2';
import SectionThree from './ui/section3';
import SectionFour from './ui/section4';
import SectionSix from './ui/section6';
import Testimonials from './ui/testimonials';
import Footer from './ui/footer';

export default function Home() {
	return (
		<>
			<Header />
			<Hero />
			<SectionOne />
			<SectionTwo />
			<SectionThree />
			<SectionFour />
			<Testimonials />
			<SectionSix />
			<Footer />
		</>
	);
}
