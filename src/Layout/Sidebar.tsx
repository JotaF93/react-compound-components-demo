import { useContext } from 'react';
import { LayoutContext } from './context';
import type { SidebarProps } from './types';

function Sidebar({
	children,
	className = '',
	position = 'left',
}: SidebarProps) {
	const context = useContext(LayoutContext);

	if (!context) {
		throw new Error('Layout.Sidebar must be used within Layout');
	}

	const { sidebarCollapsed } = context;

	return (
		<aside
			className={`layout-sidebar layout-sidebar--${position} ${className}`}
			data-collapsed={sidebarCollapsed}>
			<div className='layout-sidebar__content'>{children}</div>
		</aside>
	);
}

export default Sidebar;
