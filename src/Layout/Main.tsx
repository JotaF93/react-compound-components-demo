import { useContext } from 'react';
import { LayoutContext } from './context';
import type { MainProps } from './types';

function Main({ children, className = '' }: MainProps) {
	const context = useContext(LayoutContext);

	if (!context) {
		throw new Error('Layout.Main must be used within Layout');
	}

	return (
		<main className={`layout-main ${className}`}>
			<div className='layout-main__content'>{children}</div>
		</main>
	);
}

export default Main;
