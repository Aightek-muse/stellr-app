# Stellr — Product Strategy Compendium

**Generated:** 2026-04-07  
**For:** Design & Engineering Teams

---

## Table of Contents

1. [Vision & Positioning](#vision--positioning)
2. [Target Audience](#target-audience)
3. [Business Model](#business-model)
4. [Onboarding Strategy](#onboarding-strategy)
5. [Paywall & Monetization](#paywall--monetization)
6. [Pricing Strategy](#pricing-strategy)

---

## Vision & Positioning

### Vision Statement

> **Stellr is the app that makes everyone feel like astrology was made for them — by listening first, before it ever asks a thing.**

### Key Differentiator

**No birth time required — ever.**

Most astrology apps require exact birth time. Stellr derives the chart from the user through 7 conversational questions.

### Design Pillars

| Pillar | Description |
|--------|-------------|
| Conversation Over Forms | Ask questions about who someone is, not what they remember about when they were born |
| Depth Without Jargon | Make complexity accessible — poetic but grounded, specific but not alienating |
| Personalization That Earns Trust | Every reading must feel written for one person, not all 12 signs |
| Inclusive Entry, Deep Engagement | Free tier delivers real value; premium unlocks depth naturally |
| Self-Discovery as the Product | Astrology is the language; understanding yourself is the outcome |

---

## Target Audience

### Primary Persona: The Curious Beginner

- **Age:** 22–35
- **Behavior:** Has seen Co-Star on friends' phones, tried an app, hit the birth time wall
- **Need:** Wants to explore astrology but doesn't have birth data
- **Quote:** "I never know what to put for birth time"

### Secondary Personas

| Persona | Cares About | Challenge |
|---------|-------------|-----------|
| Lapsed Believer | Accuracy, depth | Tried apps before, frustrated with forms |
| Daily Ritual Seeker | Consistency, relevance | Generic horoscopes don't feel personal |
| Skeptic | Evidence, logic | Thinks astrology is too vague |

---

## Business Model

### Free Tier (Stellr)

- Big 3 discovery (Sun, Moon, Rising)
- 2–3 paragraph interpretation per sign
- Synthesis statement
- Daily reading (updated every 24h)
- Basic insights feed (3–5 items/week)

### Paid Tier (Stellr+)

- Full birth chart (10 planets, 12 houses)
- Aspect interpretations
- Relationship compatibility (synastry)
- Transit alerts (push notifications)
- Career & life path guidance
- Unlimited question re-takes
- Export/share chart images

### Pricing (Turkish Market)

| Tier | Price | USD Equivalent |
|------|-------|----------------|
| Monthly | ₺29.99 | ~$0.79 |
| Annual | ₺239.99 | ~$6.30 |
| Savings | 33% | — |

---

## Onboarding Strategy

### The Aha Moment

> **User sees their Moon Sign reveal and feels personally seen.**

The Moon sign — not the Sun — is Stellr's secret weapon. Sun signs are already known. The Moon reveal is the surprise.

### Optimized Flow (3 Screens)

```
Welcome → Name Input → Q1...Q7 → Processing → Sun → Moon → Rising → Summary
```

**Key decisions:**
- No "How It Works" screen (fold into Welcome)
- No standalone Privacy screen (handle inline)
- No "Get Started" screen (auto-advance to Q1)
- No email/account before reveals (ask post-value)

### Question Flow

- 7 questions, one at a time
- 4 multiple-choice options each
- Progress bar (lavender → gold gradient)
- ~2 minutes total

### Processing Screen

- 10–15 seconds
- Rotating copy: "Reading your energy patterns..." → "Almost there, [Name]..."
- Zodiac wheel or constellation animation

---

## Paywall & Monetization

### Trigger Point Map

| Trigger | Type | Timing |
|---------|------|--------|
| Summary screen | Soft | Post-reveals |
| Home locked cards | Passive | Always visible |
| Day 7 prompt | Proactive | Day 7, first open |
| Tapping Compatibility | Feature gate | On tap |
| Tapping Full Chart | Feature gate | On tap |
| Tapping Transit Alerts | Feature gate | On tap |

### Key Principle

**Never show a hard paywall before the Moon reveal.** Trust is built first, then monetized.

### Conversion Targets

| Metric | Year 1 | Year 3 |
|--------|--------|--------|
| Free → Paid | 5–8% | 10–12% |
| Annual vs Monthly | 60/40 | 70/30 |
| Trial → Paid | 50–60% | 60–70% |

---

## Pricing Strategy

### Value Metric

**Flat subscription** — correct for B2C consumer app. Users want to pay once and access everything.

### Tier Count

**Two tiers at launch** (Free + Stellr+). Revisit at Year 2 if Compatibility has outsized demand.

### Pricing Psychology

- **Lead with monthly equivalent:** "₺19.99/month, billed annually" not "₺239.99/year"
- **Pre-select annual** on paywall (higher LTV)
- **Charm pricing:** ₺29.99 not ₺30 (signals value, not commodity)

### Free Tier Calibration

| Feature | Free? | Reasoning |
|---------|-------|-----------|
| Big 3 discovery | ✓ | Core hook — must prove concept |
| Sign interpretations | ✓ | The aha moment — cannot gate |
| Daily reading | ✓ | The habit loop — critical for retention |
| Share/export | Partial | Basic share free (viral), full export paid |
| Retake questions | ✗ | Natural premium gate |

---

## Success Metrics

### Qualitative Signals

- Users describe results as "scary accurate" or "how did it know that?"
- Screenshots and shares happen organically
- Users recommend Stellr by saying "it doesn't need your birth time"

### Quantitative Targets (Year 1)

| Metric | Target |
|--------|--------|
| Onboarding completion | 80%+ |
| Question flow completion | 90%+ |
| Time to first value | <2 min |
| Day 1 retention | 60%+ |
| Day 30 retention | 25%+ |
| Share rate | 25%+ |
| App Store rating | 4.5+ |

---

## Competitive Landscape

| Competitor | Requires Birth Time | Key Weakness |
|------------|---------------------|--------------|
| Co-Star | ✓ | Exclusionary for unknowns |
| The Pattern | ✓ | High barrier to entry |
| Sanctuary | ✓ | Expensive, requires time |
| Chani | ✓ | Niche audience |
| Time Passages | ✓ | Technical, not beginner-friendly |

**Stellr's position:** The only app that derives the chart *from you*, treating your personality as the source of truth.

---

## Roadmap Themes

### Year 1: Launch Simple

- Flawless 7-question flow
- Sign reveal copy that earns screenshots
- Daily reading that feels personal from Day 1
- Share mechanic that's effortless

### Year 2–3: Relationship Layer

- Compatibility feature (synastry)
- Transit alert system
- Referral loop baked into sharing

### Year 5+: Daily Companion

- Answer history and re-calculation
- AI-driven conversational layer
- Category leader: "astrological self-awareness"

---

*Companion docs: `north-star-vision.md`, `onboarding-cro.md`, `paywall-upgrade-cro.md`, `pricing-strategy.md`*
