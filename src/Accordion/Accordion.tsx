// Accordion.tsx
import { createContext, useContext, useState, type ReactNode } from 'react';

// Tipos de contexto
interface AccordionContextType {
	openIndex: number | null;
	setOpenIndex: (index: number | null) => void;
}

const AccordionContext = createContext<AccordionContextType | undefined>(
	undefined
);

interface AccordionItemContextType {
	index: number;
}

const AccordionItemContext = createContext<
	AccordionItemContextType | undefined
>(undefined);

// Accordion principal
interface AccordionProps {
	children: ReactNode;
	defaultIndex?: number | null;
}

function Accordion({ children, defaultIndex = null }: AccordionProps) {
	const [openIndex, setOpenIndex] = useState<number | null>(defaultIndex);

	return (
		<AccordionContext.Provider value={{ openIndex, setOpenIndex }}>
			<div className='accordion'>{children}</div>
		</AccordionContext.Provider>
	);
}

// Accordion.Item
interface AccordionItemProps {
	index: number;
	children: ReactNode;
}

function Item({ index, children }: AccordionItemProps) {
	return (
		<AccordionItemContext.Provider value={{ index }}>
			<div className='accordion-item'>{children}</div>
		</AccordionItemContext.Provider>
	);
}

// Accordion.Header
interface AccordionHeaderProps {
	children: ReactNode;
}

function Header({ children }: AccordionHeaderProps) {
	const accordion = useContext(AccordionContext);
	const item = useContext(AccordionItemContext);

	if (!accordion || !item) {
		throw new Error('Accordion.Header debe usarse dentro de Accordion.Item');
	}

	const { openIndex, setOpenIndex } = accordion;
	const { index } = item;

	const isOpen = openIndex === index;

	const handleClick = () => {
		setOpenIndex(isOpen ? null : index);
	};

	return (
		<div
			onClick={handleClick}
			className={`accordion-header ${isOpen ? 'active' : ''}`}>
			{children}
		</div>
	);
}

// Accordion.Body
interface AccordionBodyProps {
	children: ReactNode;
}

function Body({ children }: AccordionBodyProps) {
	const accordion = useContext(AccordionContext);
	const item = useContext(AccordionItemContext);

	if (!accordion || !item) {
		throw new Error('Accordion.Body debe usarse dentro de Accordion.Item');
	}

	const { openIndex } = accordion;
	const { index } = item;

	return openIndex === index ? (
		<div className='accordion-body'>{children}</div>
	) : null;
}

// Asignación de subcomponentes
Accordion.Item = Item;
Accordion.Header = Header;
Accordion.Body = Body;

export default Accordion;
