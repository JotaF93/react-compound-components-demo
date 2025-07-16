import type { CardValueProps } from './types';

function Value({
	children,
	className = '',
	style = {},
	color,
	size = 'lg',
}: CardValueProps) {
	const combinedStyle = {
		...style,
		...(color && { color }),
	};

	return (
		<p
			className={`card-value card-value--${size} ${className}`}
			style={combinedStyle}>
			{children}
		</p>
	);
}

export default Value;
