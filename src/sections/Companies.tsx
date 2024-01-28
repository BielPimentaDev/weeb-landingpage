import GridContainer from '@/components/Containers/GridContainer';
import SectionContainer from '@/components/Containers/SectionContainer';
import React from 'react';
import Company1 from '/public/company1.png';
import Company2 from '/public/company2.png';
import Company3 from '/public/company3.png';
import Company4 from '/public/company4.png';
import Company5 from '/public/company5.png';
import Image from 'next/image';

export default function Companies() {
	return (
		<SectionContainer>
			<GridContainer className='text-center'>
				<h1 className='font-bold text-5xl'>Join Leading Companies</h1>
				<ul className=' my-20 lg:px-14 grid lg:flex lg:justify-around grid-rows-3 grid-cols-2 place-items-center  place-content-center gap-4 gap-x-0'>
					<li className='flex items-center gap-2 '>
						<Image src={Company1} alt='company 1' />
						<h3 className='font-medium'>SmartFinder</h3>
					</li>
					<li className='flex items-center gap-2 '>
						<Image src={Company2} alt='company 1' />
						<h3 className='font-medium'>Zoomerr</h3>
					</li>
					<li className='flex items-center gap-2 '>
						<Image src={Company3} alt='company 1' />
						<h3 className='font-medium'>SHELLS</h3>
					</li>
					<li className='flex items-center gap-2 '>
						<Image src={Company4} alt='company 1' />
						<h3 className='font-medium'>WAVES</h3>
					</li>
					<li className='flex items-center gap-2 col-span-2'>
						<Image src={Company5} alt='company 1' />
						<h3 className='font-medium'>ArtVenue</h3>
					</li>
				</ul>
			</GridContainer>
		</SectionContainer>
	);
}
