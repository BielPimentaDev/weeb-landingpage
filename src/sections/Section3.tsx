import GridContainer from '@/components/Containers/GridContainer';
import SectionContainer from '@/components/Containers/SectionContainer';
import React from 'react';
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Desktop from '/public/desktop.png';

export default function Section3() {
	return (
		<SectionContainer>
			<GridContainer className='flex gap-12 lg:flex-row flex-col lg:text-start text-center items-center'>
				<div className='flex flex-col  gap-4 '>
					<div>
						<p className='text-lg font-medium tracking-[3px] mb-2 '>
							POWERFULL
						</p>
						<div className='relative'>
							<h1 className='font-bold text-5xl '>
								All the tools you can imagine
							</h1>
						</div>
					</div>
					<p className='lg:w-4/5'>
						Scelerisque auctor dolor diam tortor, fames faucibus non interdum
						nunc. Ultrices nibh sapien elit gravida ac, rutrum molestie
						adipiscing lacinia.
					</p>
				</div>
				<Image
					src={Desktop}
					alt='shapes'
					className='lg:max-w-xl max-w-[340px]'
				/>
			</GridContainer>
		</SectionContainer>
	);
}
