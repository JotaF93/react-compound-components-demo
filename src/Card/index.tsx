import CardComponent from './Card';
import Header from './Header';
import Value from './Value';
import Description from './Description';
import Content from './Content';

// Create compound component with proper typing
const Card = Object.assign(CardComponent, {
	Header,
	Value,
	Description,
	Content,
});

export default Card;

// Export individual components if needed
export { Header, Value, Description, Content };

// Export types
export type {
	CardProps,
	CardHeaderProps,
	CardValueProps,
	CardDescriptionProps,
	CardContentProps,
} from './types';
