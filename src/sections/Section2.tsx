import GridContainer from '@/components/Containers/GridContainer';
import SectionContainer from '@/components/Containers/SectionContainer';
import React from 'react';
import Shape from '/public/shapes1.png';
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export default function Section2() {
	return (
		<SectionContainer>
			<GridContainer className='flex gap-32 lg:flex-row flex-col-reverse lg:text-start text-center items-center'>
				<Image src={Shape} alt='shapes' />
				<div className='flex flex-col justify-around gap-4 '>
					<div>
						<p className='text-lg font-medium tracking-[3px] mb-2 '>
							CUSTUMERS
						</p>
						<div className='relative'>
							<h1 className='font-bold text-5xl '>
								<span className='text-purple-600'>Target </span>
								<span className='bg-[#BE185D]  '>cus</span>tomers with our
								powerful AI kit
							</h1>
						</div>
					</div>
					<p className='lg:w-4/5'>
						Scelerisque auctor dolor diam tortor, fames faucibus non interdum
						nunc. Ultrices nibh sapien elit gravida ac, rutrum molestie
						adipiscing lacinia.
					</p>
					<a
						href='#'
						className='font-medium  flex items-center gap-4 lg:justify-start justify-center'>
						Discover Ideas <FaArrowRight />
					</a>
				</div>
			</GridContainer>
		</SectionContainer>
	);
}
