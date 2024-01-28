import GridContainer from '@/components/Containers/GridContainer';
import SectionContainer from '@/components/Containers/SectionContainer';
import Image from 'next/image';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Post1 from '/public/post-1.png';
import Post2 from '/public/post-2.png';
import Post3 from '/public/post-3.png';

const posts = [
	{
		image: <Image src={Post1} alt='post1' />,
		title: 'Wild Horse Event',
		subtitle: 'Design Thinking',
		linkName: 'Buy Tickets',
	},
	{
		image: <Image src={Post2} alt='post2' />,
		title: 'Music & Colors',
		subtitle: 'Festival',
		linkName: 'Buy Tickets',
	},
	{
		image: <Image src={Post3} alt='post3' />,
		title: 'Happy Father’s Day',
		subtitle: 'Bootcamp',
		linkName: 'Buy Tickets',
	},
];

export default function Section6() {
	return (
		<SectionContainer className='bg-white text-black'>
			<GridContainer>
				<div className='flex justify-between lg:flex-row flex-col text-center items-center mb-12 lg:mb-0'>
					<h1 className='font-bold lg:text-5xl text-4xl mb-6'>
						Design events near your
					</h1>
					<a
						href='#'
						className='fle items-center gap-4 text-purple-400 font-medium '>
						Explore Events <FaArrowRight />
					</a>
				</div>
				<ul className='flex justify-between gap-12 lg:flex-row flex-col'>
					{posts.map((post, index) => {
						return (
							<li key={index}>
								<div className='relative'>
									<div>
										<span className='font-medium absolute p-1 px-2 text-sm bg-purple-100 text-purple-800 rounded-lg top-3 left-3'>
											{post.subtitle}
										</span>
									</div>
									{post.image}
								</div>
								<div className='mt-6'>
									<div>
										<p className=' text-sm font-medium'>{post.subtitle}</p>
										<h2 className='text-4xl font-bold'>{post.title}</h2>
									</div>
									<a
										href='#'
										className='mt-4 flex items-center gap-4 text-purple-400 font-medium '>
										{post.linkName} <FaArrowRight />
									</a>
								</div>
							</li>
						);
					})}
				</ul>
			</GridContainer>
		</SectionContainer>
	);
}
