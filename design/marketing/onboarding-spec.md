# Onboarding Flow Specification

**Version:** 1.0  
**Updated:** 2026-04-07  
**Screens:** 3 pre-question + 7 questions + processing + 3 reveals + summary = 15 total

---

## Flow Overview

```
Welcome (Screen 1)
  ↓
Name Input (Screen 2)
  ↓
Q1 → Q2 → Q3 → Q4 → Q5 → Q6 → Q7 (Screens 3–9)
  ↓
Processing (Screen 10)
  ↓
Sun Sign Reveal (Screen 11)
  ↓
Moon Sign Reveal (Screen 12) ← THE AHA MOMENT
  ↓
Rising Sign Reveal (Screen 13)
  ↓
Summary (Screen 14)
  ↓
Home / Dashboard (Screen 15)
```

---

## Screen 1: Welcome

### Purpose
Hook the user. Address the birth time barrier immediately.

### Layout
```
┌────────────────────────────┐
│                            │
│     [Deep space bg with    │
│      subtle star field]    │
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

### Copy
| Element | Copy |
|---------|------|
| Headline | Your Big 3, no birth time needed. |
| Subhead | Answer 7 questions about who you are. We'll find your Sun, Moon, and Rising sign. |
| CTA | Find My Signs |
| Trust line | Private. Takes 2 minutes. No birth time required. |

### Design Tokens
- Headline: Cormorant 400, 36px, `var(--color-text-primary)`
- Subhead: Montserrat 400, 15px, `var(--color-text-secondary)`
- CTA: Gold pill, `var(--color-gold)`, glow
- Trust: Montserrat 400, 12px, `var(--color-text-muted)`

---

## Screen 2: Name Input

### Purpose
Capture name for personalization. Build rapport before questions.

### Layout
```
┌────────────────────────────┐
│                            │
│                            │
│   First, what should we    │
│        call you?           │
│                            │
│   ┌────────────────────┐  │
│   │ Your name          │  │
│   └────────────────────┘  │
│                            │
│      [Continue →]          │
│                            │
│  No email needed yet.      │
│  Just your name.           │
│                            │
└────────────────────────────┘
```

### Copy
| Element | Copy |
|---------|------|
| Prompt | First, what should we call you? |
| Placeholder | Your name |
| CTA | Continue |
| Trust line | No email needed yet. Just your name. |

### Behavior
- Input auto-focused
- Keyboard appears immediately
- Name stored for use in Q1 transition and throughout app

---

## Transition: Q1

### Animation
After name input:
1. Name fades in at top: "Hi [Name]. Let's find your signs."
2. Hold 1.5 seconds
3. Auto-advance to Q1

---

## Screens 3–9: Question Flow

### Structure (Each Question)

```
┌────────────────────────────┐
│ [Progress bar: 1/7]        │
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
│ ┌──────────────────────┐  │
│ │ Around people...     │  │
│ └──────────────────────┘  │
│ ┌──────────────────────┐  │
│ │ Alone, deep in...    │  │
│ └──────────────────────┘  │
│                            │
└────────────────────────────┘
```

### Progress Bar
- 3px height, full width
- Gradient: `linear-gradient(90deg, #8B7CF8, #f2c35b)`
- Width increases per question:
  - Q1: 49px (14%)
  - Q2: 98px (28%)
  - Q3: 146px (42%)
  - Q4: 195px (56%)
  - Q5: 244px (70%)
  - Q6: 293px (84%)
  - Q7: 342px (98%)

### Question Copy

| Q# | Category | Question |
|----|----------|----------|
| 1 | Energy Patterns | When do you feel most like yourself? |
| 2 | Conflict Response | When something bothers you, what do you usually do? |
| 3 | Emotional Expression | What's your relationship with your emotions? |
| 4 | Social Energy | After a long, draining week, you most want to: |
| 5 | Decision Making | When you're facing a big decision, you tend to: |
| 6 | Creative Expression | Which of these feels most like *you*? |
| 7 | Life Focus | What area of life feels most alive right now? |

### Microcopy
- **Q4 (halfway):** "You're halfway there, [Name]."
- **Q7 label:** "Last one."

---

## Screen 10: Processing

### Purpose
Build anticipation. Make the wait feel active, not passive.

### Layout
```
┌────────────────────────────┐
│                            │
│      [Zodiac wheel or      │
│    constellation anim]     │
│                            │
│   Reading your energy      │
│       patterns...          │
│                            │
│                            │
└────────────────────────────┘
```

### Rotating Copy (2.5s each)
1. Reading your energy patterns...
2. Weighing your emotional nature...
3. Mapping your social instincts...
4. Checking all 1,728 combinations...
5. Almost there, [Name]...

### Duration
- Total: 10–15 seconds
- Final line holds 3 seconds before transition

---

## Screen 11: Sun Sign Reveal

### Purpose
First reveal. Expected but still meaningful.

### Layout
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

### Copy Structure
| Element | Copy |
|---------|------|
| Label | Your core identity |
| Sign | [Sign Name] |
| Dates | [Date range] |
| Body | 2–3 paragraphs, specific to sign |
| CTA | Discover your emotional nature → |

---

## Screen 12: Moon Sign Reveal (THE AHA MOMENT)

### Purpose
The emotional peak. The screenshot moment.

### Layout
```
┌────────────────────────────┐
│                            │
│     Your emotional world   │
│                            │
│        Scorpio             │
│                            │
│  *The part of you most     │
│   people never see.*       │
│                            │
│  Your emotional life runs  │
│  deeper than almost anyone │
│  knows...                  │
│                            │
│  Does this feel true?      │
│  Most people say this one  │
│  is the most accurate.     │
│                            │
│  [Share My Moon Sign]      │
│                            │
│  See how others experience │
│  you →                     │
│                            │
└────────────────────────────┘
```

### Key Elements
- **Subtitle (italic):** The part of you most people never see.
- **Share nudge:** Does this feel true? Most people say this one is the most accurate.
- **Share button:** Primary CTA here (not secondary)

---

## Screen 13: Rising Sign Reveal

### Purpose
The clarifier. Explains how others experience the user.

### Layout
```
┌────────────────────────────┐
│                            │
│  How others experience you │
│                            │
│         Gemini             │
│                            │
│  *The first impression     │
│  you leave — even when     │
│  you're not trying.*       │
│                            │
│  To the people around you, │
│  you come across as...     │
│                            │
│  See your full picture →   │
│                            │
└────────────────────────────┘
```

---

## Screen 14: Summary

### Purpose
Synthesis. Share moment. Soft upsell.

### Layout
```
┌────────────────────────────┐
│                            │
│         Your Big 3         │
│                            │
│  ☉ Libra · ☽ Scorpio ·     │
│         ↑ Gemini           │
│                            │
│  You are a rare combination│
│  ...synthesis statement... │
│                            │
│    [Share My Chart]        │
│                            │
│    [Go to My Home →]       │
│                            │
│  Want to go deeper? See    │
│  all 10 planets →          │
│                            │
└────────────────────────────┘
```

### Copy Elements
| Element | Copy |
|---------|------|
| Label | Your Big 3 |
| Combination | ☉ [Sun] · ☽ [Moon] · ↑ [Rising] |
| Synthesis | 2–3 paragraphs combining all 3 |
| Share CTA | Share My Chart |
| Continue CTA | Go to My Home → |
| Soft upsell | Want to go deeper? See all 10 planets in your full chart → |

---

## Screen 15: Home / Dashboard

### Purpose
The habit loop begins. Daily reading.

### Layout
```
┌────────────────────────────┐
│ [Nav: Home Today Chart Prof]│
│                            │
│  Hi, [Name]                │
│                            │
│  Your reading for Thu 7    │
│  ┌──────────────────────┐  │
│  │ Today's energy favours│  │
│  │ depth over surface... │  │
│  └──────────────────────┘  │
│                            │
│  For you this week         │
│  ┌──────────────────────┐  │
│  │ [Unlocked insight]   │  │
│  └──────────────────────┘  │
│  ┌──────────────────────┐  │
│  │ [Locked: Stellr+] 🔒 │  │
│  └──────────────────────┘  │
│                            │
└────────────────────────────┘
```

---

## Success Metrics

| Metric | Target |
|--------|--------|
| Welcome → Name completion | 85%+ |
| Name → Q1 start | 95%+ |
| Q1 → Q7 completion | 92%+ |
| Processing → Moon reached | 99% |
| Share rate (Moon/Summary) | 30%+ |
| Account creation (post-reveal) | 65%+ |

---

*See `ux-writing.md` for full copy and `style-guide.md` for visual specs.*
