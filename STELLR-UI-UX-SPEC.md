# Stellr — UI/UX Design Specification

**Version:** 1.0  
**Last Updated:** April 7, 2026  
**Designer:** Aytek  
**Platform:** iOS + Android (React Native + Expo)

---

## 📱 App Overview

**Name:** Stellr  
**Tagline:** Finally feel known.  
**Positioning:** Conversational astrology — discover your birth chart through questions, not forms.

**Core Differentiator:** No birth time required. Users answer intuitive questions → app discovers their Sun, Moon & Rising signs through conversation.

---

## 🎨 Design Direction

### Visual Vibe
- **Mystical but modern** — not cheesy, not woo-woo
- **Intimate and calm** — feels like talking to a wise friend
- **Premium and trustworthy** — institutional quality, not startup flashy

### Color Palette (Suggested)
| Color | Hex | Usage |
|-------|-----|-------|
| **Deep Space** | `#0B0B1A` | Primary background |
| **Midnight** | `#1A1A2E` | Secondary background, cards |
| **Starlight** | `#F0F0FF` | Primary text |
| **Moonstone** | `#C4C4D4` | Secondary text |
| **Gold** | `#D4AF37` | Accent, CTAs, highlights |
| **Nebula** | `#6B5B95` | Secondary accent, gradients |
| **Aurora** | `#88B3C8` | Tertiary accent, success states |

### Typography (Suggested)
| Style | Font | Size | Weight | Usage |
|-------|------|------|--------|-------|
| **Display** | Playfair Display / Canela | 32-48pt | Regular/SemiBold | Headlines, hero |
| **Headline** | Inter / SF Pro | 24-28pt | SemiBold | Section headers |
| **Body** | Inter / SF Pro | 16-18pt | Regular | Paragraphs |
| **Caption** | Inter / SF Pro | 14pt | Regular | Labels, hints |
| **Button** | Inter / SF Pro | 16-18pt | Medium/SemiBold | CTAs |

### Iconography
- **Style:** Thin line icons (1.5-2px stroke)
- **Vibe:** Celestial but minimal (stars, moons, constellations)
- **Avoid:** Filled icons, clipart style, overly detailed

### Motion & Animation
- **Transitions:** Slow, smooth (300-500ms ease-out)
- **Micro-interactions:** Subtle scale/fade on tap
- **Loading:** Gentle pulse or star twinkle (no spinners)
- **Scroll:** Parallax on hero sections, subtle

---

## 📋 Screen Inventory

### **Onboarding Flow (5 screens)**

| Screen | Purpose | Key Elements |
|--------|---------|--------------|
| **O1 — Welcome** | First impression, value prop | Hero illustration, tagline, CTA |
| **O2 — How It Works** | Set expectations | 3-step visual, "no birth time needed" |
| **O3 — Privacy** | Build trust | Data usage explanation, opt-in |
| **O4 — Name** | Personalization | Simple input field |
| **O5 — Get Started** | Transition to conversation | CTA, anticipation building |

---

### **Conversation Flow (Core Experience)**

| Screen | Purpose | Key Elements |
|--------|---------|--------------|
| **C1 — Question Interface** | Ask questions one at a time | Question text, answer options, progress indicator |
| **C2 — Processing** | Build anticipation | Animation, "analyzing your responses" |
| **C3 — Results Teaser** | Hook before full reveal | Big 3 summary, "unlock full reading" |

---

### **Results & Discovery**

| Screen | Purpose | Key Elements |
|--------|---------|--------------|
| **R1 — Sun Sign Reveal** | Core identity reveal | Sign name, date range, 2-3 sentence description |
| **R2 — Moon Sign Reveal** | Emotional nature | Sign name, element, emotional pattern |
| **R3 — Rising Sign Reveal** | Outer personality | Sign name, first impression description |
| **R4 — Full Summary** | All three together | Visual chart, shareable card |

---

### **Home/Dashboard**

| Screen | Purpose | Key Elements |
|--------|---------|--------------|
| **H1 — Daily Reading** | Daily engagement hook | Date, personalized horoscope, mood indicator |
| **H2 — Insights Feed** | Ongoing value | Card-based feed of insights, tips, transit alerts |
| **H3 — Quick Actions** | Navigation hub | Compatibility, full chart, settings |

---

### **Premium Features (Locked States)**

| Screen | Purpose | Key Elements |
|--------|---------|--------------|
| **P1 — Compatibility** | Synastry with others | Two charts, connection score, insights |
| **P2 — Full Birth Chart** | All 10 planets, 12 houses | Interactive wheel, detailed interpretations |
| **P3 — Transit Alerts** | Real-time notifications | List of upcoming transits, opt-in toggles |
| **P4 — Paywall** | Conversion point | Pricing, features, testimonials |

---

### **Settings & Profile**

| Screen | Purpose | Key Elements |
|--------|---------|--------------|
| **S1 — Profile** | User info, birth data | Name, discovered signs, edit birth data |
| **S2 — Notifications** | Alert preferences | Toggle transits, daily readings, reminders |
| **S3 — Subscription** | Manage Stellr+ | Current plan, renew/cancel, restore |
| **S4 — About** | App info, legal | Version, privacy policy, terms, contact |

---

## 🖼️ Screen-by-Screen Wireframes

### **O1 — Welcome**

```
┌─────────────────────────────┐
│                             │
│        [Illustration]       │
│     (abstract star map      │
│      or constellation)      │
│                             │
│                             │
│         S T E L L R         │
│                             │
│   Finally feel known.       │
│                             │
│                             │
│   ┌─────────────────────┐   │
│   │   Get Started       │   │
│   └─────────────────────┘   │
│                             │
│   Already have an account?  │
│           Log In            │
│                             │
└─────────────────────────────┘
```

**Design Notes:**
- Full-bleed illustration (dark background with subtle star field)
- Logo centered, elegant serif font
- CTA button: Gold background, white text
- Minimal chrome — no status bar distraction

---

### **O2 — How It Works**

```
┌─────────────────────────────┐
│                             │
│              [Back]         │
│                             │
│   How Stellr Works          │
│                             │
│   ┌─────────────────────┐   │
│   │   ①                 │   │
│   │   Answer questions  │   │
│   │   about yourself    │   │
│   └─────────────────────┘   │
│                             │
│   ┌─────────────────────┐   │
│   │   ②                 │   │
│   │   We analyze your   │   │
│   │   astrological type │   │
│   └─────────────────────┘   │
│                             │
│   ┌─────────────────────┐   │
│   │   ③                 │   │
│   │   Discover your     │   │
│   │   signs instantly   │   │
│   └─────────────────────┘   │
│                             │
│   No birth time needed.     │
│                             │
│   ┌─────────────────────┐   │
│   │   Continue          │   │
│   └─────────────────────┘   │
│                             │
└─────────────────────────────┘
```

**Design Notes:**
- Vertical card stack with subtle parallax on scroll
- Numbers in gold circles
- Each card has a small icon (question mark, brain, star)
- Bottom text in muted gold

---

### **C1 — Question Interface**

```
┌─────────────────────────────┐
│                             │
│   Question 3 of 7           │
│   ▓▓▓▓▓▓░░░░░░░░░ 43%       │
│                             │
│                             │
│   When do you feel most     │
│   like yourself?            │
│                             │
│                             │
│   ┌─────────────────────┐   │
│   │  In the morning,    │   │
│   │  full of energy     │   │
│   └─────────────────────┘   │
│                             │
│   ┌─────────────────────┐   │
│   │  Late at night,     │   │
│   │  when it's quiet    │   │
│   └─────────────────────┘   │
│                             │
│   ┌─────────────────────┐   │
│   │  Around others,     │   │
│   │  feeding off energy │   │
│   └─────────────────────┘   │
│                             │
│   ┌─────────────────────┐   │
│   │  Alone, in my head  │   │
│   └─────────────────────┘   │
│                             │
│                             │
└─────────────────────────────┘
```

**Design Notes:**
- Progress bar at top (gold fill, dark track)
- Question in large, readable type (24pt+)
- Answer cards: Midnight background, subtle border
- Selected state: Gold border, slight scale up
- Tap to select → auto-advance (no submit button)

---

### **C2 — Processing**

```
┌─────────────────────────────┐
│                             │
│                             │
│                             │
│        *    ✨    *         │
│                             │
│      (animated stars        │
│       converging into       │
│        a central point)     │
│                             │
│   Finding your alignment... │
│                             │
│                             │
│   This usually takes        │
│   about 10 seconds.         │
│                             │
│                             │
│                             │
└─────────────────────────────┘
```

**Design Notes:**
- Full-screen animation (particles/stars drifting inward)
- Text fades in after 3 seconds
- Soothing background music optional
- No cancel button — let the moment breathe

---

### **R1 — Sun Sign Reveal**

```
┌─────────────────────────────┐
│                             │
│   Your Sun Sign             │
│                             │
│   ┌─────────────────────┐   │
│   │                     │   │
│   │      ♌ LEO          │   │
│   │                     │   │
│   │   July 23 —         │   │
│   │   August 22         │   │
│   │                     │   │
│   └─────────────────────┘   │
│                             │
│   You radiate warmth and    │
│   confidence. Others are    │
│   naturally drawn to your   │
│   presence — you light up   │
│   any room you enter.       │
│                             │
│   At your core, you crave   │
│   creative expression and   │
│   recognition for who you   │
│   truly are.                │
│                             │
│   ┌─────────────────────┐   │
│   │   What This Means   │   │
│   └─────────────────────┘   │
│                             │
│   ┌─────────────────────┐   │
│   │   Next: Moon Sign   │   │
│   └─────────────────────┘   │
│                             │
└─────────────────────────────┘
```

**Design Notes:**
- Sign name LARGE (48pt+), zodiac glyph above
- Date range in smaller type below
- Description in 2 short paragraphs
- "What This Means" expands to more detail (accordion)
- CTA to next sign reveal

---

### **R4 — Full Summary**

```
┌─────────────────────────────┐
│                             │
│   Your Cosmic Profile       │
│              [Share]        │
│                             │
│   ┌─────────────────────┐   │
│   │  ☀️  🌙  ⬆️         │   │
│   │  Leo  Scorpio  Sag  │   │
│   │                     │   │
│   │  Fire   Water  Fire │   │
│   └─────────────────────┘   │
│                             │
│   You're a Fire-Water-Fire  │
│   combination — passionate  │
│   on the outside, deeply    │
│   emotional within, and     │
│   always seeking expansion. │
│                             │
│   This is rare — only 3%    │
│   of people share your      │
│   exact combination.        │
│                             │
│   ┌─────────────────────┐   │
│   │   See Full Chart    │   │
│   │   (Stellr+)         │   │
│   └─────────────────────┘   │
│                             │
│   ┌─────────────────────┐   │
│   │   Go to Home        │   │
│   └─────────────────────┘   │
│                             │
└─────────────────────────────┘
```

**Design Notes:**
- Three signs displayed prominently with glyphs
- Element tags below each (Fire/Water/Air/Earth)
- One-sentence synthesis of the combination
- Rarity stat adds shareability
- Premium upsell for full chart

---

### **H1 — Daily Reading**

```
┌─────────────────────────────┐
│                             │
│   Good morning, Aytek       │
│   Tuesday, April 7          │
│                             │
│   ┌─────────────────────┐   │
│   │                     │   │
│   │  Today's Energy     │   │
│   │                     │   │
│   │  The Moon in your   │   │
│   │  5th house brings   │   │
│   │  creative inspiration │ │
│   │  and playful energy. │   │
│   │  Trust your instincts │ │
│   │  in matters of the   │   │
│   │  heart today.        │   │
│   │                     │   │
│   │  Lucky: Green       │   │
│   │  Avoid: Conflict    │   │
│   │                     │   │
│   └─────────────────────┘   │
│                             │
│   ┌───────┐ ┌───────┐       │
│   │Compatibility│ │Chart│   │
│   └───────┘ └───────┘       │
│                             │
│   ─────────────────────     │
│   More Insights               │
│   ─────────────────────     │
│                             │
│   ┌─────────────────────┐   │
│   │ Mercury enters your │   │
│   │ 7th house tomorrow  │   │
│   │            [Alert]  │   │
│   └─────────────────────┘   │
│                             │
│   ┌─────────────────────┐   │
│   │ Your creative peak  │   │
│   │ this week: Thursday │   │
│   │            [Save]   │   │
│   └─────────────────────┘   │
│                             │
└─────────────────────────────┘
```

**Design Notes:**
- Personalized greeting with name
- Daily reading in prominent card (full width)
- Quick action buttons below (Compatibility, Chart)
- Feed of additional insights below fold
- Each card has save/alert action

---

### **P4 — Paywall**

```
┌─────────────────────────────┐
│                             │
│              [Close]        │
│                             │
│   Unlock Your Full Chart    │
│                             │
│   ┌─────────────────────┐   │
│   │  [Illustration:     │   │
│   │   Full birth chart  │   │
│   │   wheel with all    │   │
│   │   10 planets]       │   │
│   └─────────────────────┘   │
│                             │
│   Stellr+ includes:         │
│                             │
│   ✓ Full birth chart        │
│     (all 10 planets,        │
│      12 houses)             │
│                             │
│   ✓ Relationship            │
│     compatibility           │
│                             │
│   ✓ Transit alerts          │
│     (Mercury retrograde,    │
│      eclipses, etc.)        │
│                             │
│   ✓ Career & life path      │
│     guidance                │
│                             │
│   ✓ Unlimited conversations │
│                             │
│   ┌─────────────────────┐   │
│   │  ₺29.99/month       │   │
│   │  or ₺199.99/year    │   │
│   │  (Save 44%)         │   │
│   └─────────────────────┘   │
│                             │
│   ┌─────────────────────┐   │
│   │   Start Free Trial  │   │
│   └─────────────────────┘   │
│                             │
│   7-day free trial, then    │
│   auto-renews. Cancel       │
│   anytime.                  │
│                             │
└─────────────────────────────┘
```

**Design Notes:**
- Premium illustration (gold accents)
- Checkmarks in gold circles
- Pricing card with annual discount highlighted
- CTA button: Gold gradient, prominent
- Fine print in small, muted type

---

## 🎬 User Flow Diagram

```
[Download]
    ↓
[O1 Welcome] → [O2 How It Works] → [O3 Privacy] → [O4 Name] → [O5 Get Started]
    ↓
[C1 Question 1] → [C1 Q2] → [C1 Q3] → [C1 Q4] → [C1 Q5] → [C1 Q6] → [C1 Q7]
    ↓
[C2 Processing]
    ↓
[R1 Sun Sign] → [R2 Moon Sign] → [R3 Rising Sign] → [R4 Full Summary]
    ↓
[H1 Home/Dashboard]
    ↓
[H2 Insights Feed] ←→ [H3 Compatibility] ←→ [H4 Full Chart] ←→ [Settings]
```

---

## 🧩 Component Library

### Buttons
| Type | Style | Usage |
|------|-------|-------|
| **Primary** | Gold bg, white text, 16pt SemiBold | Main CTAs |
| **Secondary** | Transparent, gold border, gold text | Secondary actions |
| **Tertiary** | Text-only, gold | Cancel, skip, back |
| **Disabled** | 30% opacity, no interaction | Inactive states |

### Input Fields
| Type | Style | Usage |
|------|-------|-------|
| **Text Input** | Midnight bg, 1px gold border (focused) | Name, email |
| **Selector** | Card-style, tap to select | Multiple choice |
| **Toggle** | Gold/gray switch | Preferences, notifications |
| **Slider** | Gold track, gold thumb | Intensity scales |

### Cards
| Type | Style | Usage |
|------|-------|-------|
| **Content Card** | Midnight bg, 8px radius, subtle shadow | Insights, readings |
| **Interactive Card** | Same + scale on tap | Selectable options |
| **Premium Card** | Gold gradient border | Locked features |
| **Summary Card** | Full-width, gradient bg | Sign reveals |

### Navigation
| Type | Style | Usage |
|------|-------|-------|
| **Top Bar** | Transparent, white text | Screen titles |
| **Tab Bar** | Midnight bg, gold active state | Home, Discover, Profile |
| **Back Button** | Chevron + label | Return to previous |

---

## 📐 Layout & Spacing

### Grid System
- **Base unit:** 8px
- **Margins:** 16px (mobile), 24px (tablet)
- **Gutters:** 16px between columns
- **Columns:** 4-column grid (mobile)

### Spacing Scale
| Token | Value | Usage |
|-------|-------|-------|
| `xs` | 4px | Tight spacing |
| `sm` | 8px | Icon padding |
| `md` | 16px | Standard gap |
| `lg` | 24px | Section spacing |
| `xl` | 32px | Large gaps |
| `2xl` | 48px | Hero spacing |

### Border Radius
| Token | Value | Usage |
|-------|-------|-------|
| `sm` | 4px | Small buttons, icons |
| `md` | 8px | Cards, inputs |
| `lg` | 12px | Large cards |
| `xl` | 16px | Modal sheets |
| `full` | 999px | Circular elements |

---

## 🌈 Color States

| State | Background | Text | Border |
|-------|------------|------|--------|
| **Default** | Midnight | Starlight | — |
| **Hover** | Midnight + 10% light | Starlight | Gold 1px |
| **Active** | Gold 20% | Gold | Gold 2px |
| **Disabled** | Midnight 50% | Moonstone 50% | — |
| **Error** | Red 10% | Red | Red 1px |
| **Success** | Green 10% | Green | Green 1px |

---

## 📱 Platform-Specific Notes

### iOS
- Use SF Pro as fallback font
- Follow Human Interface Guidelines for navigation
- Safe area insets for notch devices
- Haptic feedback on key interactions

### Android
- Use Inter as fallback font
- Follow Material Design 3 for navigation patterns
- Handle various screen aspect ratios
- Back button behavior (system-level)

---

## 🔮 Micro-Interactions

| Action | Animation | Duration |
|--------|-----------|----------|
| **Button Tap** | Scale 0.95 → 1.0 | 150ms |
| **Card Select** | Scale 1.02, gold border fade-in | 200ms |
| **Screen Transition** | Slide left/right, fade | 300ms |
| **Question Advance** | Fade out → fade in | 250ms |
| **Processing** | Stars converge, pulse | 10s loop |
| **Sign Reveal** | Scale up from 0.8, fade in | 400ms |
| **Pull to Refresh** | Star twinkle at top | 500ms |

---

## 📊 Content Guidelines

### Tone of Voice
- **Warm but authoritative** — like a wise friend who happens to be an expert
- **Validating, not prescriptive** — "This might resonate" vs "This IS you"
- **Poetic but clear** — Avoid jargon, keep it accessible
- **Inclusive** — Astrology for skeptics and believers alike

### Writing Principles
1. **Second person** — "You feel..." not "Leos feel..."
2. **Present tense** — "You crave..." not "You will crave..."
3. **Specific but open** — "You may notice..." not "You will..."
4. **Affirming** — Focus on strengths, frame challenges as growth

### Example Copy
✅ "You radiate warmth and confidence."  
❌ "Leos are confident and warm."

✅ "This might resonate if you've always felt drawn to creative work."  
❌ "You are a creative person."

✅ "The Moon in your 5th house brings playful energy."  
❌ "Moon in 5th = fun time!!!"

---

## 🎯 Success Metrics (Design)

| Metric | Target | How to Measure |
|--------|--------|----------------|
| **Onboarding Completion** | 80%+ | Analytics funnel |
| **Question Flow Completion** | 90%+ | Drop-off tracking |
| **Time to First Value** | <2 min | Session analytics |
| **Day 1 Retention** | 60%+ | Cohort analysis |
| **App Store Rating** | 4.5+ stars | Store reviews |
| **Share Rate (Results)** | 25%+ | Share button taps |

---

## 📎 Assets Needed

### Illustrations
- [ ] Welcome screen hero (abstract constellation)
- [ ] How It Works icons (3 steps)
- [ ] Processing animation (star convergence)
- [ ] Sign reveal backgrounds (12 zodiac variants)
- [ ] Premium upsell illustration (birth chart wheel)
- [ ] Empty states (insights feed, compatibility)

### Icons
- [ ] Zodiac glyphs (12 signs)
- [ ] Planet glyphs (10 planets)
- [ ] Element symbols (Fire, Water, Air, Earth)
- [ ] UI icons (home, profile, settings, share, etc.)
- [ ] Feature icons (compatibility, transit, chart, etc.)

### Typography
- [ ] Display font license (Playfair Display / Canela)
- [ ] Body font (Inter — free / SF Pro — system)
- [ ] Web font loading strategy

---

## 🚀 Handoff Checklist

- [ ] All screens designed in Figma
- [ ] Component library created
- [ ] Auto-layout applied to all frames
- [ ] Design tokens exported (colors, typography, spacing)
- [ ] Prototype flow complete (all interactions)
- [ ] Export assets (@1x, @2x, @3x for iOS; mdpi, hdpi, xhdpi, xxhdpi, xxxhdpi for Android)
- [ ] App icon designed (1024x1024 for stores)
- [ ] App Store screenshots (6.5", 5.5" for iOS; various for Android)
- [ ] Feature graphic (1024x500 for Play Store)

---

**Designer:** Aytek  
**Questions?** Reach out anytime. This is a living document — update as we learn.

---

*Last updated: April 7, 2026*
