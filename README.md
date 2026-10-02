# Patitas Felices - Ecommerce de Tienda de Mascotas

Sitio web de ecommerce completo para una tienda de mascotas, desarrollado con HTML, JavaScript nativo y Tailwind CSS.

## Tecnologías

- **HTML5** semántico
- **Tailwind CSS** (vía CDN)
- **JavaScript** nativo (sin frameworks)
- **localStorage** para persistencia de datos
- **Imágenes** de Unsplash

## Estructura del Proyecto

```
mascotas-01/
├── index.html              # Página de inicio (Landing)
├── productos.html          # Catálogo de productos
├── producto-detalle.html   # Detalle de producto
├── nosotros.html           # Sobre la empresa
├── contacto.html           # Formulario de contacto
├── carrito.html            # Carrito de compras
├── checkout.html           # Proceso de pago
├── confirmacion.html       # Confirmación de compra
├── perfil.html             # Perfil de usuario
├── pedido-detalle.html     # Detalle de pedido
├── resena.html             # Formulario de reseña
├── login.html              # Inicio de sesión
├── registro.html           # Registro de usuario
├── recuperar.html          # Recuperar contraseña
├── privacidad.html         # Políticas de privacidad
├── terminos.html           # Términos y condiciones
├── css/
│   └── custom.css          # Estilos personalizados
└── js/
    ├── mock-data.js        # Datos simulados
    ├── utils.js            # Funciones auxiliares
    ├── cart.js             # Lógica del carrito
    ├── auth.js             # Lógica de autenticación
    └── app.js              # Lógica general y componentes
```

## Páginas

| Página | Descripción |
|--------|-------------|
| **Inicio** | Landing page con productos destacados, categorías y banner principal |
| **Productos** | Catálogo con filtros por categoría, búsqueda, rango de precio y ordenamiento |
| **Detalle Producto** | Descripción, selector de cantidad, reseñas y productos relacionados |
| **Nosotros** | Historia de la empresa, valores, equipo y estadísticas |
| **Contacto** | Formulario de contacto, horarios de atención y ubicación |
| **Carrito** | Gestión de productos, cantidades y resumen del pedido |
| **Checkout** | Dirección de envío, tipo de envío y medio de pago |
| **Confirmación** | Comprobante de compra con opción de imprimir y ver historial |
| **Perfil** | Datos del usuario e historial de pedidos |
| **Detalle Pedido** | Vista detallada de un pedido específico |
| **Reseña** | Formulario para calificar y reseñar un producto |
| **Login/Registro/Recuperar** | Autenticación de usuarios |
| **Privacidad/Términos** | Páginas legales |

## Funcionalidades

- Carrito de compras persistente con `localStorage`
- Sistema de autenticación simulado
- Catálogo con filtros y búsqueda en tiempo real
- Sistema de reseñas con calificación por estrellas
- Flujo completo de compra (carrito → checkout → confirmación)
- Historial de pedidos en perfil de usuario
- Impresión de comprobantes con estilos `@media print`
- Diseño responsive para móvil, tablet y escritorio
- Notificaciones toast para feedback al usuario
- Menú hamburguesa para navegación móvil

## Cuentas de Prueba

| Email | Contraseña |
|-------|-----------|
| maria@example.com | password123 |
| carlos@example.com | password123 |
| ana@example.com | password123 |
| pedro@example.com | password123 |

## Uso

No requiere instalación ni build. Abre `index.html` directamente en el navegador.

```bash
# Opcional: servir con un servidor local
npx serve .
```

## Datos Mockeados

- **18 productos** en 6 categorías (Alimento Perros, Alimento Gatos, Juguetes, Camas y Accesorios, Higiene y Cuidado, Salud y Bienestar)
- **8 reseñas** de ejemplo
- **4 usuarios** de prueba
- **3 pedidos** de ejemplo
- **4 miembros** del equipo (veterinario, groomer, vendedor, gerente)

## Paleta de Colores

Basada en tonos verdes emerald, apropiados para una tienda de mascotas que evoca naturaleza, salud animal y frescura:

- `emerald-50` - Fondo principal
- `emerald-100` - Tarjetas secundarias
- `emerald-700` - Color primario (botones, acentos)
- `emerald-800` - Hover states, gradientes
- `emerald-900` - Textos principales, footer
