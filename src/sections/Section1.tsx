import GridContainer from '@/components/Containers/GridContainer';
import SectionContainer from '@/components/Containers/SectionContainer';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Shape from '/public/shapes.png';
import Image from 'next/image';

export default function Section1() {
	return (
		<SectionContainer>
			<GridContainer className='flex gap-20 lg:flex-row flex-col lg:text-start text-center'>
				<div className='flex flex-col justify-around gap-4 '>
					<div>
						<p className='text-lg font-bold tracking-[3px] mb-2'>DISCORVER</p>
						<h1 className='font-bold text-5xl'>
							<span className='text-purple-600'>Unlimited</span> ideas for your
							next great projects
						</h1>
					</div>
					<p className='lg:w-4/5'>
						Scelerisque auctor dolor diam tortor, fames faucibus non interdum
						nunc. Ultrices nibh sapien elit gravida ac, rutrum molestie
						adipiscing lacinia.
					</p>
					<a
						href='#'
						className='font-medium  flex items-center gap-4 lg:justify-start justify-center'>
						Discover Ideas
						<FaArrowRight />
					</a>
				</div>
				<Image src={Shape} alt='shapes' />
			</GridContainer>
		</SectionContainer>
	);
}
