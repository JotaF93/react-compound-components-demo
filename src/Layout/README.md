# Layout Compound Components

Sistema de compound components para layouts de página basado en el patrón de diseño del accordion. Proporciona una interfaz flexible y reutilizable para crear layouts de aplicaciones web.

## 🎯 Características

- **Compound Components Pattern**: Siguiendo el mismo patrón de diseño del accordion
- **Theme Support**: Soporte para temas claro y oscuro
- **Responsive Design**: Adaptable a diferentes tamaños de pantalla
- **Sidebar Collapsible**: Sidebar que se puede contraer/expandir
- **TypeScript**: Completamente tipado con TypeScript
- **Clean Code**: Código separado en módulos para mejor mantenimiento

## 📁 Estructura de Archivos

```
Layout/
├── index.tsx          # Exportaciones principales
├── types.ts           # Interfaces TypeScript
├── context.tsx        # Context de React
├── Layout.tsx         # Componente principal
├── Header.tsx         # Componente Header
├── Sidebar.tsx        # Componente Sidebar
├── Main.tsx          # Componente Main
├── Footer.tsx        # Componente Footer
├── Layout.css        # Estilos CSS
└── README.md         # Documentación
```

## 🚀 Uso Básico

```tsx
import Layout from './Layout';

function App() {
	return (
		<Layout defaultTheme='light' defaultSidebarCollapsed={false}>
			<Layout.Header>
				<span>Mi Aplicación</span>
			</Layout.Header>

			<Layout.Sidebar>
				<nav>{/* Contenido del sidebar */}</nav>
			</Layout.Sidebar>

			<Layout.Main>
				<div>{/* Contenido principal */}</div>
			</Layout.Main>

			<Layout.Footer>
				<p>© 2024 Mi Aplicación</p>
			</Layout.Footer>
		</Layout>
	);
}
```

## 📖 API Components

### Layout (Componente Principal)

**Props:**

- `children`: ReactNode - Componentes hijos
- `defaultTheme?`: 'light' | 'dark' - Tema por defecto (default: 'light')
- `defaultSidebarCollapsed?`: boolean - Estado inicial del sidebar (default: false)
- `className?`: string - Clases CSS adicionales

### Layout.Header

**Props:**

- `children`: ReactNode - Contenido del header
- `className?`: string - Clases CSS adicionales
- `showSidebarToggle?`: boolean - Mostrar botón de toggle del sidebar (default: true)

**Características:**

- Botón automático para contraer/expandir sidebar
- Botón de cambio de tema (claro/oscuro)
- Responsive design

### Layout.Sidebar

**Props:**

- `children`: ReactNode - Contenido del sidebar
- `className?`: string - Clases CSS adicionales
- `position?`: 'left' | 'right' - Posición del sidebar (default: 'left')

**Características:**

- Se contrae automáticamente en pantallas pequeñas
- Soporte para navegación con iconos
- Animaciones suaves

### Layout.Main

**Props:**

- `children`: ReactNode - Contenido principal
- `className?`: string - Clases CSS adicionales

**Características:**

- Área de contenido principal
- Scroll automático si es necesario
- Responsive design

### Layout.Footer

**Props:**

- `children`: ReactNode - Contenido del footer
- `className?`: string - Clases CSS adicionales

## 🎨 Clases CSS Disponibles

### Para Navegación en Sidebar:

```css
.layout-nav-item          /* Item de navegación */
/* Item de navegación */
.layout-nav-item.active   /* Item activo */
.layout-nav-item__icon    /* Icono del item */
.layout-nav-item__text; /* Texto del item */
```

### Variables CSS (Theming):

```css
--bg-primary      /* Color de fondo principal */
--bg-secondary    /* Color de fondo secundario */
--bg-accent       /* Color de acento */
--text-primary    /* Color de texto principal */
--text-secondary  /* Color de texto secundario */
--border-color    /* Color de bordes */
--shadow          /* Sombra */
```

## 🌟 Ejemplo Completo con Navegación

```tsx
<Layout defaultTheme='light'>
	<Layout.Header>
		<span>Dashboard</span>
	</Layout.Header>

	<Layout.Sidebar>
		<nav>
			<h3>Navegación</h3>

			<a href='#dashboard' className='layout-nav-item active'>
				<span className='layout-nav-item__icon'>📊</span>
				<span className='layout-nav-item__text'>Dashboard</span>
			</a>

			<a href='#users' className='layout-nav-item'>
				<span className='layout-nav-item__icon'>👥</span>
				<span className='layout-nav-item__text'>Usuarios</span>
			</a>

			<a href='#settings' className='layout-nav-item'>
				<span className='layout-nav-item__icon'>⚙️</span>
				<span className='layout-nav-item__text'>Configuración</span>
			</a>
		</nav>
	</Layout.Sidebar>

	<Layout.Main>
		<h1>Contenido Principal</h1>
		<p>Aquí va el contenido de la página...</p>
	</Layout.Main>

	<Layout.Footer>
		<p>© 2024 Mi Aplicación</p>
	</Layout.Footer>
</Layout>
```

## 📱 Responsive Behavior

- **Desktop**: Layout de 3 columnas con sidebar visible
- **Tablet**: Layout adaptado con sidebar contraído por defecto
- **Mobile**: Sidebar se convierte en overlay deslizable

## 🎯 Principios de Clean Code Aplicados

1. **Separación de Responsabilidades**: Cada componente tiene una responsabilidad específica
2. **Single Responsibility Principle**: Cada archivo maneja una sola funcionalidad
3. **DRY**: No repetición de código mediante el uso de contexto compartido
4. **Composición sobre Herencia**: Uso de compound components para flexibilidad
5. **Tipado Fuerte**: TypeScript para prevenir errores en tiempo de compilación
6. **Naming Conventions**: Nombres descriptivos y consistentes
7. **Modularidad**: Código organizado en módulos reutilizables

## 🔄 Context API

El sistema utiliza React Context para compartir estado entre componentes:

```tsx
interface LayoutContextType {
	sidebarCollapsed: boolean;
	setSidebarCollapsed: (collapsed: boolean) => void;
	theme: 'light' | 'dark';
	setTheme: (theme: 'light' | 'dark') => void;
}
```

Todos los componentes hijos tienen acceso a este contexto para:

- Alternar el estado del sidebar
- Cambiar entre temas claro y oscuro
- Mantener sincronización de estado

## 🎨 Customización

Puedes personalizar los estilos sobrescribiendo las variables CSS o agregando clases personalizadas:

```css
.layout--light {
	--bg-primary: #ffffff;
	--text-primary: #212529;
	/* más variables... */
}

.layout--dark {
	--bg-primary: #1a1a1a;
	--text-primary: #f7fafc;
	/* más variables... */
}
```

## ✅ Beneficios del Patrón Compound Components

1. **Flexibilidad**: Los desarrolladores pueden componer el layout como necesiten
2. **Reutilización**: Componentes reutilizables en diferentes contextos
3. **Mantenibilidad**: Código organizado y fácil de mantener
4. **Type Safety**: TypeScript proporciona autocompletado y verificación de tipos
5. **Consistencia**: API uniforme y predecible
6. **Extensibilidad**: Fácil de extender con nuevos componentes
