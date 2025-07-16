# React Compound Components Demo

Un proyecto de demostración que implementa el **patrón Compound Components** en React con TypeScript, siguiendo principios de **Clean Code** y diseño modular.

## 🌟 Características

- 🏗️ **Layout System**: Sistema completo de layout con header, sidebar, main y footer
- 🃏 **Card Components**: Tarjetas flexibles para mostrar información y métricas
- 🪗 **Accordion Components**: Componentes colapsibles para organizar contenido
- 🎨 **Dark/Light Theme**: Sistema de theming dinámico
- 📱 **Responsive Design**: Adaptable a todos los tamaños de pantalla
- 💻 **TypeScript**: Completamente tipado para mejor DX
- 🧹 **Clean Code**: Separación de responsabilidades y código modular

## 🎯 Patrón Compound Components

Este proyecto demuestra el poder del patrón **Compound Components**, permitiendo APIs intuitivas y flexibles:

```tsx
// Layout System
<Layout defaultTheme="light">
  <Layout.Header>Mi Aplicación</Layout.Header>
  <Layout.Sidebar>Navegación</Layout.Sidebar>
  <Layout.Main>Contenido</Layout.Main>
  <Layout.Footer>© 2024</Layout.Footer>
</Layout>

// Card System
<Card>
  <Card.Header>Ventas Totales</Card.Header>
  <Card.Value color="#10b981">$124,500</Card.Value>
  <Card.Description>+12% este mes</Card.Description>
</Card>

// Accordion System
<Accordion>
  <Accordion.Item index={0}>
    <Accordion.Header>Sección 1</Accordion.Header>
    <Accordion.Body>Contenido...</Accordion.Body>
  </Accordion.Item>
</Accordion>
```

## 🚀 Inicio Rápido

### Prerequisitos

- Node.js 18+
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/react-compound-components-demo.git

# Navegar al directorio
cd react-compound-components-demo

# Instalar dependencias
npm install
# o
yarn install

# Iniciar servidor de desarrollo
npm run dev
# o
yarn dev
```

Abre [http://localhost:5173](http://localhost:5173) para ver la aplicación.

## 📁 Estructura del Proyecto

```
src/
├── Layout/           # Sistema de Layout
│   ├── index.tsx     # Compound components export
│   ├── types.ts      # TypeScript interfaces
│   ├── context.tsx   # React Context
│   ├── Layout.tsx    # Componente principal
│   ├── Header.tsx    # Header component
│   ├── Sidebar.tsx   # Sidebar component
│   ├── Main.tsx      # Main content area
│   ├── Footer.tsx    # Footer component
│   ├── Layout.css    # Estilos con theming
│   └── README.md     # Documentación
├── Card/             # Sistema de Cards
│   ├── index.tsx     # Compound components export
│   ├── types.ts      # TypeScript interfaces
│   ├── Card.tsx      # Componente principal
│   ├── Header.tsx    # Título de card
│   ├── Value.tsx     # Valores/métricas
│   ├── Description.tsx # Texto descriptivo
│   ├── Content.tsx   # Contenido libre
│   ├── Card.css      # Estilos responsivos
│   └── README.md     # Documentación
├── Accordion/        # Sistema de Accordion
│   ├── Accordion.tsx # Implementación completa
│   └── index.tsx     # Export
└── App.tsx           # Aplicación principal
```

## 🎨 Sistemas de Componentes

### 🏠 Layout System

- Estructura de página completa con grid CSS
- Sidebar colapsible con animaciones
- Header con controles de tema y sidebar
- Theming dinámico (claro/oscuro)
- Responsive design automático

### 🃏 Card System

- Cards flexibles para diferentes tipos de contenido
- Subcomponentes especializados (Header, Value, Description, Content)
- Variantes de padding y tamaños
- Clases utilitarias para estados (success, warning, error)
- Efectos hover y transiciones

### 🪗 Accordion System

- Componentes colapsibles con estado compartido
- Animaciones suaves de apertura/cierre
- API intuitiva basada en índices
- Manejo de estado con React Context

## 🧹 Principios de Clean Code

- **Single Responsibility**: Cada componente tiene una responsabilidad específica
- **DRY**: Eliminación de código repetitivo mediante compound components
- **Separation of Concerns**: Lógica, estilos y tipos en archivos separados
- **Type Safety**: TypeScript para prevenir errores en tiempo de compilación
- **Composición**: Flexibilidad mediante composición de componentes
- **Naming Conventions**: Nombres descriptivos y consistentes

## 🎛️ Características Técnicas

- **React 18** con hooks modernos
- **TypeScript** para type safety
- **CSS Custom Properties** para theming
- **CSS Grid & Flexbox** para layouts
- **Vite** para desarrollo rápido
- **ESLint** para calidad de código

## 🌈 Theming

Sistema de theming basado en CSS Custom Properties:

```css
/* Light Theme */
--bg-primary: #ffffff;
--bg-secondary: #f8f9fa;
--text-primary: #212529;

/* Dark Theme */
--bg-primary: #1a1a1a;
--bg-secondary: #2d3748;
--text-primary: #f7fafc;
```

## 📱 Responsive Design

- **Desktop**: Layout completo con sidebar visible
- **Tablet**: Sidebar colapsible por defecto
- **Mobile**: Sidebar como overlay deslizable

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para detalles.

## ✨ Autor

**Tu Nombre** - [@tu-usuario](https://github.com/tu-usuario)

## 🙏 Agradecimientos

- Inspirado en los patrones de diseño de React
- Basado en las mejores prácticas de compound components
- Implementación de Clean Code principles
