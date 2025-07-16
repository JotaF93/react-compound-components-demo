import type { CardContentProps } from './types';

function Content({ children, className = '', style = {} }: CardContentProps) {
	return (
		<div className={`card-content ${className}`} style={style}>
			{children}
		</div>
	);
}

export default Content;
