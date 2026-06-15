# Image replacement guide

These images are locally generated SVG placeholders so the site looks
complete from the start, without relying on an internet connection.

To use the client's final assets, replace each file **keeping the same
name and folder**, and respecting the recommended aspect ratio to avoid
layout shift (CLS):

| File | Used for | Recommended ratio |
|---|---|---|
| `logo/logo-placeholder.svg` | Logo in the navbar and footer | ~140x32px (horizontal) |
| `hero/hero-placeholder.svg` | Main Hero image/mockup | 4:3 (e.g. 1200x900px) |
| `features/feature-1-placeholder.svg` | 1st feature icon | Square, 48x48px |
| `features/feature-2-placeholder.svg` | 2nd feature icon | Square, 48x48px |
| `features/feature-3-placeholder.svg` | 3rd feature icon | Square, 48x48px |
| `testimonials/avatar-1-placeholder.svg` | Customer 1 photo | Square, min. 96x96px |
| `testimonials/avatar-2-placeholder.svg` | Customer 2 photo | Square, min. 96x96px |
| `testimonials/avatar-3-placeholder.svg` | Customer 3 photo | Square, min. 96x96px |

If replaced with `.png`/`.jpg`/`.webp` formats, simply update the
extension in the corresponding `import` inside the components
(`src/components/Hero.jsx`, `Features.jsx`, `Testimonials.jsx`, `Navbar.jsx`,
`Footer.jsx`). All `<img>` tags already include `width`/`height` or
`aspect-[...]` classes to reserve space and avoid layout shifts when the
final image loads.
