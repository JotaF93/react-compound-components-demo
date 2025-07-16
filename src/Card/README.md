# Card Compound Components

Sistema de compound components para cards/tarjetas basado en el patrón de diseño del accordion y layout. Proporciona una interfaz flexible y reutilizable para crear tarjetas de información.

## 🎯 Características

- **Compound Components Pattern**: Siguiendo el mismo patrón de diseño del accordion y layout
- **Theme Integration**: Integrado con el sistema de theming del Layout
- **Flexible Content**: Componentes específicos para diferentes tipos de contenido
- **Responsive Design**: Adaptable a diferentes tamaños de pantalla
- **TypeScript**: Completamente tipado con TypeScript
- **Clean Code**: Código separado en módulos para mejor mantenimiento

## 📁 Estructura de Archivos

```
Card/
├── index.tsx          # Exportaciones principales
├── types.ts           # Interfaces TypeScript
├── Card.tsx           # Componente principal
├── Header.tsx         # Título de la card
├── Value.tsx          # Valor principal (números, métricas)
├── Description.tsx    # Descripción secundaria
├── Content.tsx        # Contenido libre
├── Card.css          # Estilos CSS
└── README.md         # Documentación
```

## 🚀 Uso Básico

```tsx
import Card from './Card';

// Card simple con métrica
<Card>
  <Card.Header>Ventas Totales</Card.Header>
  <Card.Value color="#10b981">$124,500</Card.Value>
  <Card.Description>+12% desde el mes pasado</Card.Description>
</Card>

// Card con contenido libre
<Card padding="lg">
  <Card.Header>Actividad Reciente</Card.Header>
  <Card.Content>
    <p>• Usuario realizó una compra</p>
    <p>• Nuevo producto agregado</p>
  </Card.Content>
</Card>
```

## 📖 API Components

### Card (Componente Principal)

**Props:**

- `children`: ReactNode - Componentes hijos
- `className?`: string - Clases CSS adicionales
- `style?`: CSSProperties - Estilos inline adicionales
- `padding?`: 'sm' | 'md' | 'lg' - Tamaño del padding (default: 'md')

### Card.Header

**Props:**

- `children`: ReactNode - Contenido del header (título)
- `className?`: string - Clases CSS adicionales
- `style?`: CSSProperties - Estilos inline adicionales

**Características:**

- Styled como h3 por defecto
- Color automático según tema
- Margen optimizado

### Card.Value

**Props:**

- `children`: ReactNode - Valor a mostrar (número, texto)
- `className?`: string - Clases CSS adicionales
- `style?`: CSSProperties - Estilos inline adicionales
- `color?`: string - Color específico para el valor
- `size?`: 'sm' | 'md' | 'lg' | 'xl' - Tamaño del texto (default: 'lg')

**Características:**

- Optimizado para mostrar números/métricas
- Diferentes tamaños disponibles
- Color personalizable

### Card.Description

**Props:**

- `children`: ReactNode - Texto descriptivo
- `className?`: string - Clases CSS adicionales
- `style?`: CSSProperties - Estilos inline adicionales

**Características:**

- Color secundario automático
- Tamaño optimizado para descripción
- Margen apropiado

### Card.Content

**Props:**

- `children`: ReactNode - Contenido libre
- `className?`: string - Clases CSS adicionales
- `style?`: CSSProperties - Estilos inline adicionales

**Características:**

- Contenedor flexible para cualquier contenido
- Manejo automático de párrafos
- Color secundario por defecto

## 🎨 Variantes de Padding

```tsx
<Card padding="sm">   {/* 1rem */}
<Card padding="md">   {/* 1.5rem - default */}
<Card padding="lg">   {/* 2rem */}
```

## 🎨 Tamaños de Value

```tsx
<Card.Value size="sm">1,234</Card.Value>     {/* 1.25rem */}
<Card.Value size="md">1,234</Card.Value>     {/* 1.5rem */}
<Card.Value size="lg">1,234</Card.Value>     {/* 2rem - default */}
<Card.Value size="xl">1,234</Card.Value>     {/* 2.5rem */}
```

## 🌈 Clases Utilitarias

```tsx
<Card className="card--highlight">   {/* Azul destacado */}
<Card className="card--success">     {/* Verde éxito */}
<Card className="card--warning">     {/* Amarillo advertencia */}
<Card className="card--error">       {/* Rojo error */}
```

## 🌟 Ejemplos Completos

### Card de Métrica Simple

```tsx
<Card>
	<Card.Header>Usuarios Activos</Card.Header>
	<Card.Value color='#3b82f6'>2,847</Card.Value>
	<Card.Description>+5% desde la semana pasada</Card.Description>
</Card>
```

### Card de Advertencia

```tsx
<Card className='card--warning'>
	<Card.Header>Pedidos Pendientes</Card.Header>
	<Card.Value color='#f59e0b' size='xl'>
		47
	</Card.Value>
	<Card.Description>Requieren atención inmediata</Card.Description>
</Card>
```

### Card de Contenido Complejo

```tsx
<Card padding='lg'>
	<Card.Header style={{ fontSize: '1.5rem' }}>Actividad Reciente</Card.Header>
	<Card.Content>
		<p>• Usuario Juan Pérez realizó una compra de $89.99</p>
		<p>• Nuevo producto "Smartphone XYZ" agregado al catálogo</p>
		<p>• Actualización de inventario completada</p>
		<p>• Reporte mensual generado automáticamente</p>
	</Card.Content>
</Card>
```

### Card de Éxito

```tsx
<Card className='card--success'>
	<Card.Header>Meta Mensual</Card.Header>
	<Card.Value color='#10b981' size='xl'>
		125%
	</Card.Value>
	<Card.Description>¡Objetivo superado!</Card.Description>
</Card>
```

## 📱 Responsive Design

Las cards se adaptan automáticamente:

- **Desktop**: Tamaños completos
- **Mobile**: Padding reducido y tamaños de texto ajustados
- **Grid**: Compatible con CSS Grid y Flexbox

## 🎨 Integración con Layout Theme

Las cards utilizan las variables CSS del Layout:

```css
--bg-primary      /* Fondo principal */
--bg-secondary    /* Fondo de card */
--bg-accent       /* Fondo de hover */
--text-primary    /* Texto principal */
--text-secondary  /* Texto secundario */
--border-color    /* Bordes */
--shadow          /* Sombras */
```

## ✨ Características Avanzadas

### Efecto Hover

```css
.card:hover {
	transform: translateY(-2px);
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
```

### Transiciones Suaves

- Transform y box-shadow animados
- Cambios de color suaves
- Responsive sin saltos

## 🎯 Principios de Clean Code Aplicados

1. **Separación de Responsabilidades**: Cada subcomponente tiene un propósito específico
2. **Composición**: Fácil composición de diferentes tipos de cards
3. **Reutilización**: Componentes reutilizables en diferentes contextos
4. **Type Safety**: TypeScript para prevenir errores
5. **Consistencia**: API uniforme con Layout y Accordion
6. **Flexibilidad**: Props opcionales para customización

## 🔄 Uso con Layout

```tsx
<Layout>
	<Layout.Main>
		<div
			style={{
				display: 'grid',
				gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
				gap: '1.5rem',
			}}>
			<Card>
				<Card.Header>Ventas</Card.Header>
				<Card.Value color='#10b981'>$124,500</Card.Value>
				<Card.Description>+12% mes anterior</Card.Description>
			</Card>

			<Card className='card--warning'>
				<Card.Header>Alertas</Card.Header>
				<Card.Value color='#f59e0b'>3</Card.Value>
				<Card.Description>Requieren atención</Card.Description>
			</Card>
		</div>
	</Layout.Main>
</Layout>
```

## ✅ Beneficios del Patrón

1. **DRY**: Elimina repetición de código
2. **Consistencia**: Look & feel uniforme
3. **Mantenibilidad**: Cambios centralizados
4. **Flexibilidad**: Diferentes tipos de contenido
5. **Theming**: Integrado con sistema de temas
6. **Responsive**: Adaptación automática
7. **Performance**: Optimizado y liviano
