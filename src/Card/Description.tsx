import type { CardDescriptionProps } from './types';

function Description({
	children,
	className = '',
	style = {},
}: CardDescriptionProps) {
	return (
		<p className={`card-description ${className}`} style={style}>
			{children}
		</p>
	);
}

export default Description;
