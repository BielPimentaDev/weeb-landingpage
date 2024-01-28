import React from 'react';

interface ButtonInterface {
	title: string;
}

export default function Button(props: ButtonInterface) {
	return (
		<button className='bg-purple-600 py-2 px-7 rounded-lg font-medium'>
			{props.title}
		</button>
	);
}
