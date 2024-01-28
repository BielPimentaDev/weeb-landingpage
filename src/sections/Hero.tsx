import Button from '@/components/Button';
import GridContainer from '@/components/Containers/GridContainer';
import SectionContainer from '@/components/Containers/SectionContainer';
import SecundaryButton from '@/components/SecundaryButton';
import Image from 'next/image';
import React from 'react';
import DesktopImage from '/public/desktop.png';

export default function Hero() {
	return (
		<SectionContainer>
			<GridContainer className='text-center flex flex-col items-center gap-6'>
				<div className='font-bold lg:text-7xl text-5xl flex lg:flex-row flex-col items-center'>
					<span className=''>
						Design{' '}
						<span className='lg:underline decoration-purple-600'>Faster</span>{' '}
						<span className='text-purple-600'> &</span>{' '}
					</span>
					<div className='  block relative lg:ml-3 '>
						<h1>Better</h1>
						<div className='w-full lg:h-2 h-1 bg-purple-600 absolute top-1  -z-10' />
					</div>
				</div>

				<p className='lg:w-2/3 '>
					Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
					suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices
					amet, dui sit suspendisse.
				</p>
				<div className='flex gap-4 items-center'>
					<Button title='Join Now' />
					<SecundaryButton title='View Demo' />
				</div>
				<Image
					src={DesktopImage}
					alt='desktop img'
					className='max-w-4xl mt-12 w-full'
				/>
			</GridContainer>
		</SectionContainer>
	);
}
