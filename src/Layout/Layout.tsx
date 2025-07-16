import { useState, useEffect } from 'react';
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

	// Cerrar sidebar al hacer clic en el overlay
	const handleOverlayClick = () => {
		setSidebarCollapsed(true);
	};

	// Cerrar sidebar con tecla Escape
	useEffect(() => {
		const handleEscape = (event: KeyboardEvent) => {
			if (event.key === 'Escape' && !sidebarCollapsed) {
				setSidebarCollapsed(true);
			}
		};

		document.addEventListener('keydown', handleEscape);
		return () => document.removeEventListener('keydown', handleEscape);
	}, [sidebarCollapsed]);

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
				{/* Overlay para mobile - solo visible en pantallas pequeñas */}
				<div
					className='layout-overlay'
					onClick={handleOverlayClick}
					aria-hidden='true'
				/>
			</div>
		</LayoutContext.Provider>
	);
}

export default Layout;
