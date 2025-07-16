import type { CardProps } from './types';
import './Card.css';

function Card({
	children,
	className = '',
	style = {},
	padding = 'md',
}: CardProps) {
	return (
		<div className={`card card--padding-${padding} ${className}`} style={style}>
			{children}
		</div>
	);
}

export default Card;
