/**
 * Stellr Onboarding Questions
 * 
 * The 7 questions that derive the user's astrological profile.
 * Each answer maps to archetypal elements and modalities.
 */

import type { Question } from './signAlgorithm';

export const questions: Question[] = [
  {
    id: 1,
    category: 'ENERGY PATTERNS',
    question: 'When do you feel most like yourself?',
    options: [
      {
        id: 'A',
        text: 'In the morning, when everything feels possible',
        archetype: { element: 'fire', modality: 'cardinal' },
      },
      {
        id: 'B',
        text: 'Late at night, when the world goes quiet',
        archetype: { element: 'water', modality: 'mutable' },
      },
      {
        id: 'C',
        text: 'Around people — their energy lights you up',
        archetype: { element: 'air', modality: 'mutable' },
      },
      {
        id: 'D',
        text: 'Alone, deep in your own thoughts',
        archetype: { element: 'earth', modality: 'fixed' },
      },
    ],
  },
  {
    id: 2,
    category: 'CONFLICT RESPONSE',
    question: 'When something bothers you, what do you usually do?',
    options: [
      {
        id: 'A',
        text: "Bring it up directly — you'd rather clear the air",
        archetype: { element: 'fire', modality: 'cardinal' },
      },
      {
        id: 'B',
        text: "Let it go and hope it fades on its own",
        archetype: { element: 'earth', modality: 'fixed' },
      },
      {
        id: 'C',
        text: 'Sit with it until you know what you actually feel',
        archetype: { element: 'water', modality: 'fixed' },
      },
      {
        id: 'D',
        text: "Find a way for everyone to meet in the middle",
        archetype: { element: 'air', modality: 'cardinal' },
      },
    ],
  },
  {
    id: 3,
    category: 'EMOTIONAL EXPRESSION',
    question: "What's your relationship with your emotions?",
    options: [
      {
        id: 'A',
        text: 'You feel deeply and people usually know it',
        archetype: { element: 'fire', modality: 'fixed' },
      },
      {
        id: 'B',
        text: 'You feel deeply but keep most of it to yourself',
        archetype: { element: 'earth', modality: 'fixed' },
      },
      {
        id: 'C',
        text: "You tend to stay fairly even — highs and lows don't hit hard",
        archetype: { element: 'air', modality: 'mutable' },
      },
      {
        id: 'D',
        text: 'You process through feeling, not thinking',
        archetype: { element: 'water', modality: 'mutable' },
      },
    ],
  },
  {
    id: 4,
    category: 'SOCIAL ENERGY',
    question: 'After a long, draining week, you most want to:',
    options: [
      {
        id: 'A',
        text: 'Go out — being around people recharges you',
        archetype: { element: 'fire', modality: 'mutable' },
      },
      {
        id: 'B',
        text: 'Spend the evening with one person you trust',
        archetype: { element: 'earth', modality: 'fixed' },
      },
      {
        id: 'C',
        text: 'Be completely alone, with no obligations',
        archetype: { element: 'water', modality: 'cardinal' },
      },
      {
        id: 'D',
        text: 'Lose yourself in something creative',
        archetype: { element: 'air', modality: 'fixed' },
      },
    ],
  },
  {
    id: 5,
    category: 'DECISION MAKING',
    question: "When you're facing a big decision, you tend to:",
    options: [
      {
        id: 'A',
        text: "Trust your gut — it usually knows before you do",
        archetype: { element: 'fire', modality: 'mutable' },
      },
      {
        id: 'B',
        text: 'Make a list and think it through carefully',
        archetype: { element: 'earth', modality: 'mutable' },
      },
      {
        id: 'C',
        text: "Ask people you trust what they think",
        archetype: { element: 'air', modality: 'cardinal' },
      },
      {
        id: 'D',
        text: 'Sleep on it and see what feels right in the morning',
        archetype: { element: 'water', modality: 'cardinal' },
      },
    ],
  },
  {
    id: 6,
    category: 'CREATIVE EXPRESSION',
    question: 'Which of these feels most like *you*?',
    options: [
      {
        id: 'A',
        text: 'Words — writing, speaking, storytelling',
        archetype: { element: 'fire', modality: 'mutable' },
      },
      {
        id: 'B',
        text: 'Visuals — images, design, the way things look',
        archetype: { element: 'earth', modality: 'fixed' },
      },
      {
        id: 'C',
        text: 'Sound — music, rhythm, the feeling of a song',
        archetype: { element: 'air', modality: 'mutable' },
      },
      {
        id: 'D',
        text: 'Making — building things, working with your hands',
        archetype: { element: 'water', modality: 'cardinal' },
      },
    ],
  },
  {
    id: 7,
    category: 'LIFE FOCUS',
    question: 'What area of life feels most alive right now?',
    options: [
      {
        id: 'A',
        text: "Work and what you're building in the world",
        archetype: { element: 'fire', modality: 'cardinal' },
      },
      {
        id: 'B',
        text: 'Relationships — who you love and how you connect',
        archetype: { element: 'earth', modality: 'cardinal' },
      },
      {
        id: 'C',
        text: 'Understanding yourself more deeply',
        archetype: { element: 'water', modality: 'mutable' },
      },
      {
        id: 'D',
        text: 'Exploration — new places, ideas, experiences',
        archetype: { element: 'air', modality: 'mutable' },
      },
    ],
  },
];
