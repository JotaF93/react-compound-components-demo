import type { CardHeaderProps } from './types';

function Header({ children, className = '', style = {} }: CardHeaderProps) {
	return (
		<h3 className={`card-header ${className}`} style={style}>
			{children}
		</h3>
	);
}

export default Header;
