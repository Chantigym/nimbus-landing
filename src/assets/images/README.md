# Guía de reemplazo de imágenes

Estas imágenes son placeholders generados localmente (SVG) para que el sitio
se vea completo desde el primer momento, sin depender de conexión a internet.

Para usar los assets finales del cliente, reemplaza cada archivo
**manteniendo el mismo nombre y carpeta**, y respetando la proporción
indicada para evitar que el layout salte (CLS):

| Archivo | Uso | Proporción recomendada |
|---|---|---|
| `logo/logo-placeholder.svg` | Logo en el navbar y footer | ~140x32px (horizontal) |
| `hero/hero-placeholder.svg` | Imagen/mockup principal del Hero | 4:3 (ej. 1200x900px) |
| `features/feature-1-placeholder.svg` | Icono de la 1ª característica | Cuadrado, 48x48px |
| `features/feature-2-placeholder.svg` | Icono de la 2ª característica | Cuadrado, 48x48px |
| `features/feature-3-placeholder.svg` | Icono de la 3ª característica | Cuadrado, 48x48px |
| `testimonials/avatar-1-placeholder.svg` | Foto del cliente 1 | Cuadrado, mín. 96x96px |
| `testimonials/avatar-2-placeholder.svg` | Foto del cliente 2 | Cuadrado, mín. 96x96px |
| `testimonials/avatar-3-placeholder.svg` | Foto del cliente 3 | Cuadrado, mín. 96x96px |

Si se reemplazan por formatos `.png`/`.jpg`/`.webp`, actualizar simplemente
la extensión en el `import` correspondiente dentro de los componentes
(`src/components/Hero.jsx`, `Features.jsx`, `Testimonials.jsx`, `Navbar.jsx`,
`Footer.jsx`). Todas las etiquetas `<img>` ya incluyen `width`/`height` o
clases `aspect-[...]` para reservar el espacio y evitar saltos de layout
al cargar la imagen final.
