import type { ReactNode } from 'react';

// Context Types
export interface LayoutContextType {
	sidebarCollapsed: boolean;
	setSidebarCollapsed: (collapsed: boolean) => void;
	theme: 'light' | 'dark';
	setTheme: (theme: 'light' | 'dark') => void;
}

// Component Props Types
export interface LayoutProps {
	children: ReactNode;
	defaultSidebarCollapsed?: boolean;
	defaultTheme?: 'light' | 'dark';
	className?: string;
}

export interface HeaderProps {
	children: ReactNode;
	className?: string;
	showSidebarToggle?: boolean;
}

export interface SidebarProps {
	children: ReactNode;
	className?: string;
	position?: 'left' | 'right';
}

export interface MainProps {
	children: ReactNode;
	className?: string;
}

export interface FooterProps {
	children: ReactNode;
	className?: string;
}
