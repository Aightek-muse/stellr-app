# Stellr Design Assets

**Generated:** 2026-04-07  
**Version:** 1.0  
**Platform:** iOS + Android (React Native + Expo)

---

## Folder Structure

```
design/
├── screens/           # All 16 app screens (PNG exports)
├── components/        # Component library exports (coming soon)
├── tokens/           # Design tokens (CSS + JSON)
├── marketing/        # Strategy & onboarding specs
├── style-guide.md    # Visual design guidelines
├── ux-writing.md     # Copy guidelines & microcopy
└── README.md         # This file
```

---

## Screens

All screens are exported at 2x scale (780×1688px) from the master `.pen` file.

| # | Screen | Node ID | File |
|---|--------|---------|------|
| 1 | Welcome | `tZjn7` | `screens/tZjn7.png` |
| 2 | Name Input | `Eagnl` | `screens/Eagnl.png` |
| 3 | Question 1 | `BGsIh` | `screens/BGsIh.png` |
| 4 | Processing | `JszkW` | `screens/JszkW.png` |
| 5 | Sun Sign Reveal | `5qazO` | `screens/5qazO.png` |
| 6 | Moon Sign Reveal | `JXguf` | `screens/JXguf.png` |
| 7 | Home Dashboard | `3QrWn` | `screens/3QrWn.png` |
| 8 | Paywall | `XNplU` | `screens/XNplU.png` |
| 9 | Rising Sign Reveal | `GxgyL` | `screens/GxgyL.png` |
| 10 | Summary | `ihf81` | `screens/ihf81.png` |
| 11 | Question 2 | `iIDYC` | `screens/iIDYC.png` |
| 12 | Question 3 | `TaUSW` | `screens/TaUSW.png` |
| 13 | Question 4 | `iMBsx` | `screens/iMBsx.png` |
| 14 | Question 5 | `MtItn` | `screens/MtItn.png` |
| 15 | Question 6 | `rrJXq` | `screens/rrJXq.png` |
| 16 | Question 7 | `rKPlm` | `screens/rKPlm.png` |

---

## Design Tokens

### CSS Custom Properties

See `tokens/tokens.css` for CSS custom properties:

```css
@import url('tokens/tokens.css');

/* Usage */
.my-element {
  background: var(--color-bg);
  color: var(--color-text-primary);
  font-family: var(--font-body);
}
```

### JSON Design Tokens

See `tokens/tokens.json` for structured token data for use in JavaScript/React Native:

```javascript
import tokens from './tokens/tokens.json';

// Usage
const styles = {
  backgroundColor: tokens.colors.bg.value,
  color: tokens.colors.textPrimary.value,
};
```

### Token Groups

| Group | Count | Description |
|-------|-------|-------------|
| Colors | 14 + 4 alpha | Background, surfaces, accents, text |
| Typography | 9 sizes + 5 weights + 4 line heights | Font system |
| Spacing | 7 values | 8dp-based scale |
| Radius | 5 values | Corners and pills |
| Elevation | 5 values | Shadows and glows |
| Components | 7 values | Button heights, border widths, opacities |
| Icons | 4 sizes | Lucide icon scale |
| Animation | 4 durations + 3 easings | Motion system |

---

## Components (Coming Soon)

Component exports will be added to `components/`:

- `btn/primary` — Gold CTA button
- `btn/secondary` — Ghost gold button
- `btn/ghost` — Text-only button
- `answer-option/default` — Unselected answer
- `answer-option/selected` — Selected answer (gold border)
- `input/text` — Text input field
- `progress-bar` — Question progress
- `card/insight` — Home dashboard card
- `card/locked` — Premium locked card
- `chip/sign` — Sun sign chip
- `chip/moon` — Moon sign chip
- `chip/rising` — Rising sign chip
- `badge/stellr-plus` — Premium badge
- `divider` — Horizontal rule
- `reveal/sign-header` — Reveal screen header
- `nav/tab-bar` — Bottom navigation

---

## Design System Source

For complete design system documentation including component specs and node IDs, see:

- `design-system/stellr/MASTER.md` — Full design system reference
- `Stellr App.pen` — Master design file (Pencil MCP)

---

## Marketing & Strategy

| Document | Description |
|----------|-------------|
| `marketing/strategy.md` | Product positioning, business model, pricing |
| `marketing/onboarding-spec.md` | Complete onboarding flow specification |

---

## UX Writing

See `ux-writing.md` for:
- Voice & tone guidelines
- All screen copy
- Error states
- Push notification copy
- Microcopy reference
- CTA framework

---

## Style Guide

See `style-guide.md` for:
- Visual identity
- Component specs
- Screen templates
- Icon system
- Animation principles
- Accessibility guidelines

---

## Implementation Notes

### React Native Setup

```typescript
// tokens/tokens.ts
export const tokens = {
  colors: {
    bg: '#08090F',
    surface1: '#0F1020',
    gold: '#f2c35b',
    lavender: '#8B7CF8',
    // ...
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    // ...
  },
  // ...
};
```

### Font Import

```css
/* Web projects */
@import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Montserrat:wght@300;400;500;600;700&display=swap');
```

```typescript
// React Native (expo-font)
import { useFonts } from 'expo-font';

const [fontsLoaded] = useFonts({
  'Cormorant': require('./assets/fonts/Cormorant-Regular.ttf'),
  'Montserrat': require('./assets/fonts/Montserrat-Regular.ttf'),
});
```

### Icon Library

Use [Lucide React](https://lucide.dev) for web or [lucide-react-native](https://lucide.dev/guide/packages/lucide-react-native) for React Native:

```bash
npm install lucide-react-native
```

```tsx
import { Sun, Moon, Compass } from 'lucide-react-native';

// Usage
<Sun size={24} color="#f2c35b" strokeWidth={1.5} />
```

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2026-04-07 | Initial export — all 16 screens, tokens, docs |

---

## Need Help?

For design questions, refer to:
1. `style-guide.md` — Visual guidelines
2. `ux-writing.md` — Copy guidelines
3. `design-system/stellr/MASTER.md` — Complete design system
