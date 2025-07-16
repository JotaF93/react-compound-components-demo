import { useState } from 'react';
import type { LayoutProps, LayoutContextType } from './types';
import { LayoutContext } from './context';
import './Layout.css';

function Layout({
	children,
	defaultSidebarCollapsed = false,
	defaultTheme = 'light',
	className = '',
}: LayoutProps) {
	const [sidebarCollapsed, setSidebarCollapsed] = useState<boolean>(
		defaultSidebarCollapsed
	);
	const [theme, setTheme] = useState<'light' | 'dark'>(defaultTheme);

	const contextValue: LayoutContextType = {
		sidebarCollapsed,
		setSidebarCollapsed,
		theme,
		setTheme,
	};

	return (
		<LayoutContext.Provider value={contextValue}>
			<div
				className={`layout layout--${theme} ${className}`}
				data-sidebar-collapsed={sidebarCollapsed}>
				{children}
			</div>
		</LayoutContext.Provider>
	);
}

export default Layout;
