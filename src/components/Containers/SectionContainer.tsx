import React from 'react';
import { twMerge } from 'tailwind-merge';

interface ContainerProps {
	children: React.ReactNode;
	className?: string;
}

export default function SectionContainer(props: ContainerProps) {
	const defaultClass = 'lg:py-16 py-12';
	const mergedClass = twMerge(defaultClass, props.className);
	return <div className={mergedClass}>{props.children}</div>;
}
