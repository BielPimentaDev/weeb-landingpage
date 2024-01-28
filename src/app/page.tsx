import GridContainer from '@/components/Containers/GridContainer';
import Companies from '@/sections/Companies';
import Hero from '@/sections/Hero';
import Section1 from '@/sections/Section1';
import Section2 from '@/sections/Section2';
import Section3 from '@/sections/Section3';
import Section4 from '@/sections/Section4';
import Section6 from '@/sections/Section6';

export default function Home() {
	return (
		<main>
			<Hero />
			<Companies />
			<Section1 />
			<Section2 />
			<Section3 />
			<Section4 />
			<Section6 />
		</main>
	);
}
