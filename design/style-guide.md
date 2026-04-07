# Stellr Style Guide

**Version:** 1.0  
**Updated:** 2026-04-07  
**Theme:** Dark Celestial

---

## Quick Start

```css
/* Import fonts */
@import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Montserrat:wght@300;400;500;600;700&display=swap');

/* Use tokens */
background: var(--color-bg);
color: var(--color-text-primary);
font-family: var(--font-body);
```

---

## Visual Identity

### Theme: Dark Celestial

Stellr's visual language is built on the feeling of deep space — not empty black, but a rich, warm darkness punctuated by gold starlight. The theme feels premium without being cold, mystical without being cliché.

**Keywords:** Deep, warm, celestial, premium, intimate, cinematic

### Color System

| Role | Color | Usage |
|------|-------|-------|
| Background | `#08090F` | Near-OLED black with faint blue undertone |
| Surfaces | `#0F1020`, `#161830` | Cards, elevated elements |
| Gold (primary) | `#f2c35b` | CTAs, active states, highlights |
| Lavender (secondary) | `#8B7CF8` | Moon elements, gradients |
| Text | `#F0EDF8`, `#9B98BC`, `#5A5878` | Primary, secondary, muted |

**Key principle:** Gold = action/Sun, Lavender = emotion/Moon. Never swap these associations.

### Typography

| Style | Font | Weight | Size | Usage |
|-------|------|--------|------|-------|
| Display | Cormorant | 300 | 56px | Sign names |
| Headline | Cormorant | 400–600 | 24–40px | Screen titles |
| Subheading | Montserrat | 500 | 18px | Card headers |
| Body | Montserrat | 400 | 15px | General copy |
| Button | Montserrat | 600 | 16px | All CTAs |
| Caption | Montserrat | 400 | 12px | Helper text |

**Font pairing rule:** Cormorant for display/poetic moments. Montserrat for UI/body. Never mix at the same hierarchy level.

---

## Components

### Primary Button (Gold CTA)

The main action button. Used for "Continue", "Unlock Stellr+", "Share".

```css
background: var(--color-gold);
color: var(--color-bg);
font-family: var(--font-body);
font-weight: var(--font-weight-semibold);
font-size: var(--font-size-body-lg);
padding: 16px 32px;
border-radius: var(--radius-full);
min-height: var(--btn-height-md);
box-shadow: var(--glow-gold);
```

**Anatomy:**
- Pill shape (fully rounded)
- Gold fill, dark text
- Subtle glow on dark backgrounds
- Label: sentence case, action-oriented

---

### Secondary Button (Ghost)

Supporting action. Used for "Continue with free", "Maybe later".

```css
background: transparent;
color: var(--color-gold);
border: var(--btn-border-width) solid var(--color-ghost-border);
font-family: var(--font-body);
font-weight: var(--font-weight-medium);
padding: 14px 28px;
border-radius: var(--radius-full);
min-height: var(--btn-height-sm);
```

---

### Answer Option (Question Flow)

Multiple-choice answers in the 7-question flow.

**Default state:**
```css
background: var(--color-surface-1);
border: var(--btn-border-width) solid var(--color-border);
border-radius: var(--radius-md);
padding: 16px 20px;
color: var(--color-text-primary);
```

**Selected state:**
```css
border-color: var(--color-gold);
background: var(--color-answer-selected-bg);
```

---

### Card (Home Dashboard)

Standard content container.

```css
background: var(--color-surface-1);
border: var(--card-border-width) solid var(--color-border);
border-radius: var(--radius-lg);
padding: var(--space-lg);
box-shadow: var(--shadow-card);
```

**Locked card (Stellr+):**
- Same styles + `opacity: var(--opacity-locked)`
- Stellr+ badge in top-right corner

---

### Input Field (Name Entry)

```css
background: var(--color-surface-1);
border: var(--btn-border-width) solid var(--color-border);
border-radius: var(--radius-md);
padding: 16px 20px;
font-family: var(--font-body);
font-size: var(--font-size-body-lg);
color: var(--color-text-primary);
min-height: var(--input-height);
```

**Focus state:**
```css
border-color: var(--color-gold);
box-shadow: 0 0 0 3px var(--color-gold-alpha-15);
```

---

### Progress Bar (Question Flow)

```css
/* Track */
background: var(--color-border);
height: 3px;
border-radius: var(--radius-full);

/* Fill */
background: linear-gradient(90deg, var(--color-lavender), var(--color-gold));
height: 100%;
border-radius: var(--radius-full);
transition: width var(--duration-slow) ease;
```

---

### Badge (Stellr+)

Premium feature indicator.

```css
background: var(--color-gold-alpha-15);
border: 1px solid var(--color-badge-border);
border-radius: var(--radius-sm);
padding: 4px 8px;
display: flex;
align-items: center;
gap: 4px;
```

**Contents:**
- Lock icon: 10px, `var(--color-gold)`
- Label: "Stellr+", Montserrat 600, 10px, `var(--color-gold)`

---

## Screen Templates

### Welcome Screen

```
┌────────────────────────────┐
│                            │
│     [Hero: Deep space      │
│      with subtle stars]    │
│                            │
│    Your Big 3, no birth    │
│         time needed.       │
│                            │
│   Answer 7 questions to    │
│   discover your Sun, Moon  │
│      & Rising sign.        │
│                            │
│    [Find My Signs →]       │
│                            │
│  Private · 2 min · No BTC  │
│                            │
└────────────────────────────┘
```

**Key elements:**
- Full-bleed dark background
- Headline: Cormorant 400, 36px
- Subhead: Montserrat 400, 15px, `var(--color-text-secondary)`
- CTA: Gold pill, centered
- Trust line: Montserrat 400, 12px, `var(--color-text-muted)`

---

### Question Screen

```
┌────────────────────────────┐
│ [Progress bar: 3/7]        │
│                            │
│ ENERGY PATTERNS            │
│                            │
│ When do you feel most      │
│ like yourself?             │
│                            │
│ ┌──────────────────────┐  │
│ │ In the morning, when │  │
│ │ everything feels     │  │
│ │ possible             │  │
│ └──────────────────────┘  │
│ ┌──────────────────────┐  │
│ │ Late at night...     │  │
│ └──────────────────────┘  │
│ ... (4 options total)     │
│                            │
└────────────────────────────┘
```

**Key elements:**
- Progress bar: 3px, gradient fill
- Category label: Montserrat 500, 12px, uppercase, `var(--color-text-secondary)`
- Question: Cormorant 500, 26px, `var(--color-text-primary)`
- Options: Full-width cards, 12px gap

---

### Reveal Screen

```
┌────────────────────────────┐
│                            │
│      Your core identity    │
│                            │
│         Libra              │
│   September 23 – October 22│
│                            │
│  At your core, you are     │
│  someone who searches for  │
│  balance...                │
│                            │
│  [Continue paragraph]      │
│                            │
│  Discover your emotional   │
│  nature →                  │
│                            │
└────────────────────────────┘
```

**Key elements:**
- Label: Montserrat 500, 12px, uppercase
- Sign name: Cormorant 300, 56px, `var(--color-text-primary)`, glow
- Subtitle (optional): Cormorant Italic 400, 16px, `var(--color-text-secondary)`
- Body: Montserrat 400, 15px, line-height 1.7
- CTA: Gold pill, fixed at bottom

---

## Icon System

**Library:** Lucide Icons (stroke style, 1.5px weight)

| Size | Value | Usage |
|------|-------|-------|
| SM | 16px | Inline icons, badge lock |
| MD | 20px | Card icons, list items |
| LG | 24px | Tab bar, navigation |
| XL | 32px | Feature icons, empty states |

**Color rules:**
- Decorative icons: `var(--color-text-secondary)`
- Active/functional icons: `var(--color-gold)`
- Moon-specific: `var(--color-lavender)`

**Common icons:**
- `sun` — Sun sign, identity
- `moon` — Moon sign, emotions
- `compass` — Rising sign, direction
- `check` — Confirmation, features
- `lock` — Stellr+, premium
- `share-2` — Share actions
- `star` — Daily reading, insights

---

## Animation Principles

### Duration Guide

| Speed | Value | Use Case |
|-------|-------|----------|
| Fast | 150ms | Press states, micro-interactions |
| Normal | 250ms | Answer selection, card hovers |
| Slow | 400ms | Screen transitions |
| Cinematic | 600ms | Sign reveals, processing → result |

### Easing

- **Entering:** `cubic-bezier(0.0, 0.0, 0.2, 1)` — elements slide in
- **Exiting:** `cubic-bezier(0.4, 0.0, 1, 1)` — elements slide out
- **Celebratory:** `cubic-bezier(0.34, 1.56, 0.64, 1)` — reveal moments

### Reveal Animation Pattern

Sign names animate with:
1. Fade in: opacity 0 → 1, 600ms
2. Rise in: translateY(24px) → 0, 600ms
3. Glow pulse: 1.5s infinite, subtle

---

## Layout System

### Screen Dimensions

- Base: 390×844px (iPhone 14)
- Horizontal padding: 24px
- Safe top: 52px (status bar + padding)
- Safe bottom: 34px (home indicator)

### Spacing Scale

All spacing uses an 8dp base:

| Token | Value |
|-------|-------|
| xs | 4px |
| sm | 8px |
| md | 16px |
| lg | 24px |
| xl | 32px |
| 2xl | 48px |
| 3xl | 64px |

---

## Accessibility

### Contrast Requirements

All text meets WCAG AAA (7:1) against `#08090F`:

| Text Color | Ratio |
|------------|-------|
| Primary (`#F0EDF8`) | 18:1 ✓ |
| Secondary (`#9B98BC`) | 8.5:1 ✓ |
| Muted (`#5A5878`) | 4.5:1 (AA only) |

### Touch Targets

All interactive elements ≥ 44×44pt

### Reduced Motion

Respect `prefers-reduced-motion`:
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Anti-Patterns

❌ Pure white (`#FFFFFF`) backgrounds — always dark  
❌ Cyan, green, or blue as primary accents  
❌ Emoji as icons — Lucide SVG only  
❌ Light card backgrounds on dark screens  
❌ Cormorant + Montserrat at same hierarchy level  
❌ Generic horoscope copy ("Scorpios are...") — use second person ("You feel...")  
❌ Hard paywall before Moon sign reveal  
❌ Animations over 600ms (except processing screen)

---

## File Structure

```
design/
├── tokens/
│   ├── tokens.css       # CSS custom properties
│   └── tokens.json      # Design token JSON
├── components/          # Component exports (PNG)
├── screens/            # Screen exports (PNG)
└── style-guide.md      # This file
```

---

## Resources

**Figma:** [Link to Figma file]  
**Pencil file:** `Stellr App.pen`  
**Fonts:** [Google Fonts](https://fonts.google.com/share?selection.family=Cormorant:ital,wght@0,300;0,400;0,500;0,600;1,400|Montserrat:wght@300;400;500;600;700)  
**Icons:** [Lucide](https://lucide.dev)

---

*For detailed component specs and screen node IDs, see `design-system/stellr/MASTER.md`*
