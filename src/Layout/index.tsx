import LayoutComponent from './Layout';
import Header from './Header';
import Sidebar from './Sidebar';
import Main from './Main';
import Footer from './Footer';

// Create compound component with proper typing
const Layout = Object.assign(LayoutComponent, {
	Header,
	Sidebar,
	Main,
	Footer,
});

export default Layout;

// Export individual components if needed
export { Header, Sidebar, Main, Footer };

// Export types
export type {
	LayoutProps,
	HeaderProps,
	SidebarProps,
	MainProps,
	FooterProps,
	LayoutContextType,
} from './types';
