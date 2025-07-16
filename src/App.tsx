import Layout from './Layout';
import './App.css';
import Accordion from './Accordion';
import Card from './Card';

function App() {
	return (
		<Layout defaultTheme='light' defaultSidebarCollapsed={false}>
			<Layout.Header>
				<span>Mi aplicación con Compound omponents</span>
			</Layout.Header>

			<Layout.Sidebar>
				<nav>
					<h3
						style={{
							color: 'var(--text-primary)',
							marginBottom: '1rem',
							fontSize: '0.875rem',
							fontWeight: '600',
							textTransform: 'uppercase',
							letterSpacing: '0.05em',
						}}>
						Navegación
					</h3>

					<a href='#dashboard' className='layout-nav-item active'>
						<span className='layout-nav-item__icon'>📊</span>
						<span className='layout-nav-item__text'>Dashboard</span>
					</a>

					<a href='#users' className='layout-nav-item'>
						<span className='layout-nav-item__icon'>👥</span>
						<span className='layout-nav-item__text'>Usuarios</span>
					</a>

					<a href='#products' className='layout-nav-item'>
						<span className='layout-nav-item__icon'>📦</span>
						<span className='layout-nav-item__text'>Productos</span>
					</a>

					<a href='#analytics' className='layout-nav-item'>
						<span className='layout-nav-item__icon'>📈</span>
						<span className='layout-nav-item__text'>Analytics</span>
					</a>

					<a href='#settings' className='layout-nav-item'>
						<span className='layout-nav-item__icon'>⚙️</span>
						<span className='layout-nav-item__text'>Configuración</span>
					</a>
				</nav>
			</Layout.Sidebar>

			<Layout.Main>
				<div>
					<h1
						style={{
							fontSize: '2rem',
							fontWeight: '700',
							marginBottom: '1rem',
							color: 'var(--text-primary)',
						}}>
						Dashboard Principal
					</h1>

					<div
						style={{
							display: 'grid',
							gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
							gap: '1.5rem',
							marginBottom: '2rem',
						}}>
						<Card>
							<Card.Header>Ventas Totales</Card.Header>
							<Card.Value color='#10b981'>$124,500</Card.Value>
							<Card.Description>+12% desde el mes pasado</Card.Description>
						</Card>

						<Card>
							<Card.Header>Usuarios Activos</Card.Header>
							<Card.Value color='#3b82f6'>2,847</Card.Value>
							<Card.Description>+5% desde la semana pasada</Card.Description>
						</Card>

						<Card className='card--warning'>
							<Card.Header>Pedidos Pendientes</Card.Header>
							<Card.Value color='#f59e0b'>47</Card.Value>
							<Card.Description>Requieren atención</Card.Description>
						</Card>
					</div>

					<Card padding='lg'>
						<Card.Header style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
							Actividad Reciente
						</Card.Header>
						<Card.Content>
							<p>• Usuario Juan Pérez realizó una compra de $89.99</p>
							<p>• Nuevo producto "Smartphone XYZ" agregado al catálogo</p>
							<p>• Actualización de inventario completada</p>
							<p>• Reporte mensual generado automáticamente</p>
						</Card.Content>
					</Card>
				</div>

				<Accordion>
					<Accordion.Item index={0}>
						<Accordion.Header>
							<span>Accordion Item 1</span>
						</Accordion.Header>
						<Accordion.Body>
							<p>Accordion Item 1</p>
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item index={1}>
						<Accordion.Header>
							<span>Accordion Item 2</span>
						</Accordion.Header>
						<Accordion.Body>
							<p>Accordion Item 2</p>
						</Accordion.Body>
					</Accordion.Item>
				</Accordion>
			</Layout.Main>

			<Layout.Footer>
				<p>© 2024 Mi Aplicación Dashboard. Todos los derechos reservados.</p>
				<a href='https://github.com/JotaF93/react-compound-components-demo'>
					GitHub Repository
				</a>
			</Layout.Footer>
		</Layout>
	);
}

export default App;
