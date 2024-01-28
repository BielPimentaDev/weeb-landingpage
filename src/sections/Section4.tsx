import GridContainer from '@/components/Containers/GridContainer';
import SectionContainer from '@/components/Containers/SectionContainer';
import Image from 'next/image';
import React from 'react';
import Mobile from '/public/mobile.png';
import Profile from '/public/profile.png';
import { FaArrowRight } from 'react-icons/fa';

export default function Section4() {
	return (
		<SectionContainer className='bg-purple-800'>
			<GridContainer className='flex lg:flex-row flex-col items-center lg:gap-16 px-0 lg:text-start text-center'>
				<div className='flex flex-col  lg:gap-4 '>
					<div>
						<p className='text-lg font-medium tracking-[3px] mb-2 '>
							TESTIMONIALS
						</p>
						<div className='relative'>
							<h1 className='font-bold text-5xl '>
								<span className='underline decoration-purple-400'>Big app</span>{' '}
								got to the next level
							</h1>
						</div>
					</div>

					<a
						href='#'
						className='font-medium  flex items-center gap-4 lg:justify-start justify-center lg:mt-8 my-4'>
						View Case Study <FaArrowRight />
					</a>
				</div>
				<Image
					src={Mobile}
					alt='mobile'
					className=' lg:w-[500px] max-w-[300px]'
				/>
				<div className='w-3/5'>
					<p>
						“Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra
						orci dui consequat turpis scelerisque faucibus.”
					</p>
					<div className='flex gap-2 items-center mt-4'>
						<Image
							src={Profile}
							alt='profile picture'
							className='lg:max-w-16'
						/>
						<div>
							<p className='text-sm font-medium'>Rwanda Melflor</p>
							<p className='text-sm '>Co-founder Bigapp</p>
						</div>
					</div>
				</div>
			</GridContainer>
		</SectionContainer>
	);
}
