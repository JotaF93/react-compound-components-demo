import { useContext } from 'react';
import { LayoutContext } from './context';
import type { HeaderProps } from './types';

function Header({
	children,
	className = '',
	showSidebarToggle = true,
}: HeaderProps) {
	const context = useContext(LayoutContext);

	if (!context) {
		throw new Error('Layout.Header must be used within Layout');
	}

	const { sidebarCollapsed, setSidebarCollapsed, theme, setTheme } = context;

	const toggleSidebar = () => {
		setSidebarCollapsed(!sidebarCollapsed);
	};

	const toggleTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light');
	};

	return (
		<header className={`layout-header ${className}`}>
			<div className='layout-header__content'>
				{showSidebarToggle && (
					<button
						onClick={toggleSidebar}
						className='layout-header__sidebar-toggle'
						aria-label={
							sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'
						}>
						<span className='hamburger'>
							<span></span>
							<span></span>
							<span></span>
						</span>
					</button>
				)}

				<div className='layout-header__main'>{children}</div>

				<button
					onClick={toggleTheme}
					className='layout-header__theme-toggle'
					aria-label={`Switch to ${
						theme === 'light' ? 'dark' : 'light'
					} theme`}>
					{theme === 'light' ? '🌙' : '☀️'}
				</button>
			</div>
		</header>
	);
}

export default Header;
