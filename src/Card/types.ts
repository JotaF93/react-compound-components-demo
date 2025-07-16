import type { ReactNode, CSSProperties } from 'react';

// Component Props Types
export interface CardProps {
	children: ReactNode;
	className?: string;
	style?: CSSProperties;
	padding?: 'sm' | 'md' | 'lg';
}

export interface CardHeaderProps {
	children: ReactNode;
	className?: string;
	style?: CSSProperties;
}

export interface CardValueProps {
	children: ReactNode;
	className?: string;
	style?: CSSProperties;
	color?: string;
	size?: 'sm' | 'md' | 'lg' | 'xl';
}

export interface CardDescriptionProps {
	children: ReactNode;
	className?: string;
	style?: CSSProperties;
}

export interface CardContentProps {
	children: ReactNode;
	className?: string;
	style?: CSSProperties;
}
