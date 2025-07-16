import { useContext } from 'react';
import { LayoutContext } from './context';
import type { FooterProps } from './types';

function Footer({ children, className = '' }: FooterProps) {
	const context = useContext(LayoutContext);

	if (!context) {
		throw new Error('Layout.Footer must be used within Layout');
	}

	return (
		<footer className={`layout-footer ${className}`}>
			<div className='layout-footer__content'>{children}</div>
		</footer>
	);
}

export default Footer;
