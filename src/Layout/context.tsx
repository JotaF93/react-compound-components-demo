import { createContext } from 'react';
import type { LayoutContextType } from './types';

export const LayoutContext = createContext<LayoutContextType | undefined>(
	undefined
);
