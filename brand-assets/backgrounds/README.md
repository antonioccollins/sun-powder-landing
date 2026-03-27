# Sun Powder Backgrounds

Brand backgrounds featuring solid colors with subtle radial glows/hues.

## Image Files

| File | Description |
|------|-------------|
| `navy-glow.png` | Navy base with lighter blue glow (upper right) |
| `orange-glow.png` | Orange base with amber glow (upper center) |

## Usage

### Option 1: Use the image files directly
```css
.hero {
  background: url('brand-assets/backgrounds/navy-glow.png') center/cover no-repeat;
}
```

### Option 2: Use CSS gradients (lighter, no image request)
```css
@import 'brand-assets/backgrounds/backgrounds.css';

.hero {
  background: var(--sp-bg-navy-glow);
}
```

### Option 3: Use utility classes
```html
<section class="sp-bg-navy-glow">...</section>
<section class="sp-bg-orange-glow-img">...</section>
```

## Available Backgrounds

| Name | Type | Class |
|------|------|-------|
| Navy glow | CSS gradient | `.sp-bg-navy-glow` |
| Navy glow | Image | `.sp-bg-navy-glow-img` |
| Orange glow | CSS gradient | `.sp-bg-orange-glow` |
| Orange glow | Image | `.sp-bg-orange-glow-img` |
| Navy solid | Solid color | `.sp-bg-navy` |
| Orange solid | Solid color | `.sp-bg-orange` |
| Cream solid | Solid color | `.sp-bg-cream` |
| Light blue solid | Solid color | `.sp-bg-light-blue` |

## Notes

- CSS gradients are approximations — use image files when exact match is critical
- Images are high-res PNGs suitable for full-bleed hero sections
- For web performance, consider converting to WebP or using CSS gradients
