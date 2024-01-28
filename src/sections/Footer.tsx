import GridContainer from '@/components/Containers/GridContainer';
import SectionContainer from '@/components/Containers/SectionContainer';
import React from 'react';
import {
	FaFacebook,
	FaFacebookF,
	FaInstagram,
	FaLinkedin,
	FaLinkedinIn,
	FaTwitter,
	FaYoutube,
} from 'react-icons/fa';

export default function Footer() {
	return (
		<SectionContainer className='bg-white text-black border-t-2 border-slate-200'>
			<GridContainer>
				<div className='flex lg:border-b-2 border-slate-200 lg:flex-row flex-col'>
					<h1 className='font-bold text-3xl mr-48'>weeb</h1>
					<div className='lg:flex justify-between flex-1 pb-12 hidden'>
						<ul className='gap-6 flex flex-col'>
							<li className='text-zinc-400 font-medium'>PRODUCT</li>
							<li className='font-normal'>Pricing</li>
							<li className='font-normal'>Overview</li>
							<li className='font-normal'>Browse</li>
							<li className='font-normal'>Accessibility</li>
							<li className='font-normal'>Five</li>
						</ul>
						<ul className='gap-6 flex flex-col'>
							<li className='text-zinc-400 font-medium'>SOLUTIONS</li>
							<li className='font-normal'>Pricing</li>
							<li className='font-normal'>Overview</li>
							<li className='font-normal'>Browse</li>
							<li className='font-normal'>Accessibility</li>
						</ul>
						<ul className='gap-6 flex flex-col'>
							<li className='text-zinc-400 font-medium'>RESOURCES</li>
							<li className='font-normal'>Pricing</li>
							<li className='font-normal'>Overview</li>
							<li className='font-normal'>Browse</li>
						</ul>
						<ul className='gap-6 flex flex-col'>
							<li className='text-zinc-400 font-medium'>COMPANY</li>
							<li className='font-normal'>Pricing</li>
							<li className='font-normal'>Overview</li>
							<li className='font-normal'>Browse</li>
							<li className='font-normal'>Accessibility</li>
							<li className='font-normal'>Five</li>
						</ul>
					</div>
				</div>
				<div className='flex lg:flex-row flex-col justify-between py-12 items-center gap-8 lg:gap-0'>
					<span className='text-slate-900'>
						@ 2023 Weeb, Inc. All rights reserved.
					</span>
					<ul className='flex text-2xl gap-4 lg:justify-start justify-around '>
						<li>
							<FaYoutube />
						</li>

						<li>
							<FaFacebookF />
						</li>
						<li>
							<FaTwitter />
						</li>
						<li>
							<FaInstagram />
						</li>
						<li>
							<FaLinkedinIn />
						</li>
					</ul>
				</div>
			</GridContainer>
		</SectionContainer>
	);
}
