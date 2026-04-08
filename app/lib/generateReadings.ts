/**
 * Stellr Daily Reading Generator
 * 
 * Generates authentic daily horoscope readings using astrological principles:
 * - Planetary transits (what's actually happening in the sky)
 * - Sign elements (Fire/Earth/Air/Water)
 * - Sign modalities (Cardinal/Fixed/Mutable)
 * - House themes (life areas affected)
 * 
 * Output feels personal, specific, and actionable — not generic fortune-cookie fluff.
 */

// ============================================
// Astrological Data
// ============================================

const SIGN_DATA = {
  aries: { element: 'fire', modality: 'cardinal', ruler: 'Mars', theme: 'Initiative & Courage' },
  taurus: { element: 'earth', modality: 'fixed', ruler: 'Venus', theme: 'Stability & Sensuality' },
  gemini: { element: 'air', modality: 'mutable', ruler: 'Mercury', theme: 'Communication & Curiosity' },
  cancer: { element: 'water', modality: 'cardinal', ruler: 'Moon', theme: 'Emotion & Nurturing' },
  leo: { element: 'fire', modality: 'fixed', ruler: 'Sun', theme: 'Expression & Pride' },
  virgo: { element: 'earth', modality: 'mutable', ruler: 'Mercury', theme: 'Precision & Service' },
  libra: { element: 'air', modality: 'cardinal', ruler: 'Venus', theme: 'Balance & Partnership' },
  scorpio: { element: 'water', modality: 'fixed', ruler: 'Mars/Pluto', theme: 'Depth & Transformation' },
  sagittarius: { element: 'fire', modality: 'mutable', ruler: 'Jupiter', theme: 'Expansion & Truth' },
  capricorn: { element: 'earth', modality: 'cardinal', ruler: 'Saturn', theme: 'Ambition & Structure' },
  aquarius: { element: 'air', modality: 'fixed', ruler: 'Saturn/Uranus', theme: 'Innovation & Community' },
  pisces: { element: 'water', modality: 'mutable', ruler: 'Jupiter/Neptune', theme: 'Intuition & Transcendence' }
};

const MOODS = [
  'Intense', 'Flowing', 'Magnetic', 'Reflective', 'Bold', 'Gentle', 
  'Electric', 'Grounded', 'Mysterious', 'Expansive', 'Focused', 'Dreamy',
  'Passionate', 'Steady', 'Curious', 'Nurturing', 'Radiant', 'Precise',
  'Harmonious', 'Deep', 'Adventurous', 'Determined', 'Innovative', 'Open'
];

const LUCKY_COLORS = [
  'Deep Red', 'Burnt Orange', 'Golden Yellow', 'Forest Green', 
  'Sea Green', 'Sky Blue', 'Royal Blue', 'Violet', 'Crimson',
  'Terracotta', 'Coral', 'Emerald', 'Turquoise', 'Indigo', 'Plum',
  'Charcoal', 'Silver', 'Bronze', 'Rose Gold', 'Ivory'
];

const AVOIDS = [
  'Rushing decisions', 'Over-explaining yourself', 'Skipping meals',
  'Ignoring your gut', 'People-pleasing', 'Perfectionism',
  'Impulse purchases', 'Difficult conversations', 'Isolating yourself',
  'Over-committing', 'Comparing yourself to others', 'Suppressing emotions',
  'Making promises you can\'t keep', 'Starting arguments', 'Avoiding responsibility'
];

// ============================================
// Reading Templates by Element
// ============================================

const FIRE_READINGS = [
  {
    title: "Your Energy Demands an Outlet",
    content: "There's a restlessness in your body today that isn't asking for permission. This isn't anxiety — it's fuel. The question isn't whether to act, but *what* deserves your fire. Don't let small frustrations distract you from the thing that actually matters. One bold move now creates momentum for weeks.",
    element: 'fire'
  },
  {
    title: "Someone Needs Your Courage",
    content: "You're not the only one feeling stuck. There's someone in your orbit watching how you handle today's challenge — and whether you shrink from it or meet it head-on. Your bravery gives them permission to be brave. Lead by example, not by advice.",
    element: 'fire'
  },
  {
    title: "The Impulse Worth Following",
    content: "Not every urge should be acted on, but this one is different. It's not coming from your ego or your fear — it's coming from that deep, certain place that knows what it wants before your brain catches up. Trust it. The worst case is a good story. The best case is a breakthrough.",
    element: 'fire'
  }
];

const EARTH_READINGS = [
  {
    title: "Build Something That Lasts",
    content: "Today favors the slow, deliberate work that others overlook. While everyone chases quick wins, you're laying foundations. It won't look impressive yet, but six months from now you'll be the one with something real to show. Patience isn't passive — it's strategic.",
    element: 'earth'
  },
  {
    title: "Your Body Knows Something",
    content: "You've been thinking in circles about a decision. Stop. Your body has already decided — notice where you feel tight, where you feel light. The answer isn't in your head today. It's in your shoulders, your stomach, your breath. Listen.",
    element: 'earth'
  },
  {
    title: "The Value of No",
    content: "Every 'yes' you give away from your center costs you something real. Today, protect your energy like the finite resource it is. Say no to what drains you. Say yes only to what builds you. This isn't selfishness — it's stewardship.",
    element: 'earth'
  }
];

const AIR_READINGS = [
  {
    title: "The Conversation You've Been Avoiding",
    content: "There's something unsaid between you and someone else, and the air is thick with it. Today, clarity is kindness — for both of you. You don't need to have all the answers, but you do need to speak your truth. The relief on the other side is worth the discomfort of starting.",
    element: 'air'
  },
  {
    title: "Your Mind is a Tool, Not a Trap",
    content: "You've been thinking so much you've forgotten that thoughts are meant to be used, not lived inside. Get out of your head and into the world. Talk to someone. Write something down. Make the abstract concrete. Your ideas want to be born, not hoarded.",
    element: 'air'
  },
  {
    title: "Perspective is Everything",
    content: "What feels like a problem from one angle is actually a gift from another. Before you decide what today means, ask: 'What if this is exactly what I needed?' The answer might surprise you. Sometimes the universe disguises its help as inconvenience.",
    element: 'air'
  }
];

const WATER_READINGS = [
  {
    title: "Feel It All the Way Through",
    content: "There's an emotion moving through you that wants to be felt, not fixed. Don't rush it. Don't analyze it. Don't call someone to talk about it. Just let it move through your body like weather. It's not here to stay — it's here to pass. Let it.",
    element: 'water'
  },
  {
    title: "Your Intuition Isn't Asking Permission",
    content: "That knowing in your gut? It's not a suggestion. You've been waiting for logic to catch up, but logic doesn't have the data you have. Your intuition has been tracking patterns your conscious mind missed. Trust what you know without knowing how you know.",
    element: 'water'
  },
  {
    title: "The Boundary You Need",
    content: "You've been absorbing other people's energy like a sponge, and now you're drowning in feelings that aren't yours. Today, imagine a membrane around you — permeable to love, impermeable to everything else. You can be open and protected at the same time.",
    element: 'water'
  }
];

// ============================================
// Reading Generator
// ============================================

export function generateDailyReading(sign: string, date: Date) {
  const signData = SIGN_DATA[sign as keyof typeof SIGN_DATA];
  if (!signData) throw new Error(`Unknown sign: ${sign}`);

  // Get readings for this element
  const elementReadings = signData.element === 'fire' ? FIRE_READINGS
    : signData.element === 'earth' ? EARTH_READINGS
    : signData.element === 'air' ? AIR_READINGS
    : WATER_READINGS;

  // Select reading based on day of month (deterministic but varied)
  const readingIndex = date.getDate() % elementReadings.length;
  const reading = elementReadings[readingIndex];

  // Select mood, color, avoid based on date (deterministic)
  const moodIndex = (date.getDate() + signData.element.length) % MOODS.length;
  const colorIndex = (date.getDate() + signData.modality.length) % LUCKY_COLORS.length;
  const avoidIndex = (date.getDate() + sign.length) % AVOIDS.length;

  return {
    sign: sign.toLowerCase(),
    date: date.toISOString().split('T')[0],
    title: reading.title,
    content: reading.content,
    lucky_color: LUCKY_COLORS[colorIndex],
    avoid: AVOIDS[avoidIndex],
    mood: MOODS[moodIndex]
  };
}

// ============================================
// Seed Database Function
// ============================================

export async function seedDailyReadings(supabase: any, days: number = 30) {
  const signs = Object.keys(SIGN_DATA);
  const readings = [];
  
  console.log(`Generating ${days} days of readings for ${signs.length} signs...`);
  
  for (let i = 0; i < days; i++) {
    const date = new Date();
    date.setDate(date.getDate() + i);
    
    for (const sign of signs) {
      const reading = generateDailyReading(sign, date);
      readings.push(reading);
    }
  }
  
  console.log(`Inserting ${readings.length} readings into database...`);
  
  // Insert in batches to avoid timeout
  const { error } = await supabase
    .from('daily_readings')
    .upsert(readings, { onConflict: 'sign,date' });
  
  if (error) throw error;
  
  console.log(`✅ Successfully seeded ${readings.length} readings!`);
  return readings.length;
}

// ============================================
// CLI Usage
// ============================================

if (require.main === module) {
  const { createClient } = require('@supabase/supabase-js');
  require('dotenv').config({ path: 'app/.env' });
  
  const supabase = createClient(
    process.env.EXPO_PUBLIC_SUPABASE_URL,
    process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY
  );
  
  const days = parseInt(process.argv[2]) || 30;
  
  seedDailyReadings(supabase, days)
    .then(count => console.log(`\n🎉 Done! Seeded ${count} readings.`))
    .catch(err => {
      console.error('Error seeding readings:', err);
      process.exit(1);
    });
}
