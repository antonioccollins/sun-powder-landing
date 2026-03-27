# Sun Powder Typography

The Söhne type family ensures a clean, consistent look across all Sun Powder materials.

## Font Files

| File | Family | Weight | Style |
|------|--------|--------|-------|
| `Sohne-Buch.otf` | Sohne | 400 (Book/Regular) | Normal |
| `Sohne-BuchKursiv.otf` | Sohne | 400 | Italic |
| `Sohne-Halbfett.otf` | Sohne | 600 (Semibold) | Normal |
| `Sohne-HalbfettKursiv.otf` | Sohne | 600 | Italic |
| `SohneBreit-Halbfett.otf` | Sohne Breit | 600 (Semibold) | Normal |
| `SohneBreit-Dreiviertelfett.otf` | Sohne Breit | 700 (Bold) | Normal |
| `SohneMono-Leicht.otf` | Sohne Mono | 300 (Light) | Normal |

---

## Type Hierarchy

| Element | Font | Weight | Style |
|---------|------|--------|-------|
| **Descriptor** | Sohne | 400 | ALL CAPS, letter-spacing: 0.15em |
| **Headline** | Sohne Breit | 700 | Normal |
| **Subhead** | Sohne | 600 | Normal |
| **Body/Paragraph** | Sohne | 400 | Normal |
| **Button** | Sohne | 600 | Normal |

---

## Usage

### Import the CSS
```css
@import 'brand-assets/fonts/fonts.css';
```

### Use CSS variables
```css
body {
  font-family: var(--sp-font-body);
}

h1, h2, h3 {
  font-family: var(--sp-font-headline);
}
```

### Or use utility classes
```html
<p class="sp-descriptor">Skincare from within</p>
<h1 class="sp-headline">Developed by dermatologists</h1>
<p class="sp-subhead">Science-backed ingredients</p>
<p class="sp-body">Body text here...</p>
```

---

## Notes

- Filenames use `o` instead of `ö` for compatibility
- These are OTF files — convert to WOFF2 for better web performance if needed
- Sohne is a licensed typeface from Klim Type Foundry
