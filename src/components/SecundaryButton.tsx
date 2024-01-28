import React from 'react';

interface ButtonInterface {
	title: string;
}

export default function SecundaryButton(props: ButtonInterface) {
	return (
		<button className='border-2 border-white py-2 px-7 rounded-lg font-medium'>
			{props.title}
		</button>
	);
}
