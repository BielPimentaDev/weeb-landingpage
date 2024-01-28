import Link from 'next/link';
import React from 'react';
import GridContainer from './Containers/GridContainer';
import Button from './Button';
import { RiMenu4Line } from 'react-icons/ri';

export default function Header() {
	return (
		<header className='my-6 '>
			<GridContainer className='flex text-white justify-between items-center p-4  shadow-inner bg-white/5  rounded-xl w-full  lg:w-3/4 text-sm '>
				<h1 className='font-bold text-3xl'>weeb</h1>

				<nav className='lg:flex hidden flex-1 ml-6 gap-4 text-white/670 '>
					<Link href='#'>About Us</Link>
					<Link href='#'>Solutions</Link>
					<Link href='#'>Pricing</Link>
					<Link href='#'>Resources</Link>
				</nav>
				<div className='lg:flex hidden gap-6 items-center'>
					<Link href='#'> Log In</Link>
					<Button title='Join Now' />
				</div>
				<RiMenu4Line className='text-3xl block lg:hidden' />
			</GridContainer>
		</header>
	);
}
