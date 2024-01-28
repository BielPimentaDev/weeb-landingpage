import React from 'react';
import { twMerge } from 'tailwind-merge';

interface GridContainerProps {
	children: React.ReactNode;
	className?: string;
}

export default function GridContainer(props: GridContainerProps) {
	const defaultClass = 'w-full max-w-[1240px] mx-auto lg:px-16 px-2';
	const mergedClass = twMerge(defaultClass, props.className);
	return <div className={mergedClass}>{props.children}</div>;
}
