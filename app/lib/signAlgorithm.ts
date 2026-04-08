/**
 * Stellr Sign Algorithm
 * 
 * Core matching logic that converts user answers into astrological signs.
 * Maps 7 questions to Sun, Moon, and Rising signs through elemental scoring.
 */

import { questions } from './questions';
import { interpretations } from './interpretations';
import {
  getSign,
  capitalizeSign,
  signDateRanges,
  signElements,
  signModalities,
} from './signUtils';

export interface Question {
  id: number;
  category: string;
  question: string;
  options: AnswerOption[];
}

export interface AnswerOption {
  id: string; // A, B, C, D
  text: string;
  archetype: {
    element?: 'fire' | 'earth' | 'air' | 'water';
    modality?: 'cardinal' | 'fixed' | 'mutable';
    planet?: string;
  };
}

export interface UserProfile {
  name: string;
  answers: Record<number, string>; // questionId → optionId
}

export interface SignResult {
  sun: SignData;
  moon: SignData;
  rising: SignData;
}

export interface SignData {
  sign: string;
  element: string;
  modality: string;
  dateRange: string;
  interpretation: string;
}

interface ElementScores {
  fire: number;
  earth: number;
  air: number;
  water: number;
}

interface ModalityScores {
  cardinal: number;
  fixed: number;
  mutable: number;
}

/**
 * Question groupings for each sign type
 * Based on astrological correspondences
 */
const SUN_QUESTIONS = [1, 5, 7]; // Energy, Decision Making, Life Focus
const MOON_QUESTIONS = [3, 4]; // Emotional Expression, Social Energy
const RISING_QUESTIONS = [2, 6]; // Conflict Response, Creative Expression

/**
 * Main function: Calculate all three signs from user profile
 */
export function calculateSigns(profile: UserProfile): SignResult {
  // Calculate element scores for each sign type
  const sunElement = calculateElement(profile, SUN_QUESTIONS);
  const moonElement = calculateElement(profile, MOON_QUESTIONS);
  const risingElement = calculateElement(profile, RISING_QUESTIONS);

  // Calculate modality scores for refinement
  const sunModality = calculateModality(profile, SUN_QUESTIONS);
  const moonModality = calculateModality(profile, MOON_QUESTIONS);
  const risingModality = calculateModality(profile, RISING_QUESTIONS);

  // Get signs from element + modality
  const sunSign = getSign(sunElement, sunModality);
  const moonSign = getSign(moonElement, moonModality);
  const risingSign = getSign(risingElement, risingModality);

  return {
    sun: {
      sign: capitalizeSign(sunSign),
      element: sunElement,
      modality: sunModality,
      dateRange: signDateRanges[sunSign],
      interpretation: interpretations[sunSign].sun,
    },
    moon: {
      sign: capitalizeSign(moonSign),
      element: moonElement,
      modality: moonModality,
      dateRange: signDateRanges[moonSign],
      interpretation: interpretations[moonSign].moon,
    },
    rising: {
      sign: capitalizeSign(risingSign),
      element: risingElement,
      modality: risingModality,
      dateRange: signDateRanges[risingSign],
      interpretation: interpretations[risingSign].rising,
    },
  };
}

/**
 * Calculate dominant element from a set of questions
 */
function calculateElement(
  profile: UserProfile,
  questionIds: number[]
): 'fire' | 'earth' | 'air' | 'water' {
  const scores: ElementScores = { fire: 0, earth: 0, air: 0, water: 0 };

  questionIds.forEach((questionId) => {
    const question = questions.find((q) => q.id === questionId);
    if (!question) return;

    const answerId = profile.answers[questionId];
    if (!answerId) return;

    const option = question.options.find((o) => o.id === answerId);
    if (!option || !option.archetype.element) return;

    scores[option.archetype.element] += 1;
  });

  // Return element with highest score
  return (Object.keys(scores) as Array<keyof ElementScores>).reduce(
    (max, key) => (scores[key] > scores[max] ? key : max),
    'fire'
  );
}

/**
 * Calculate dominant modality from a set of questions
 */
function calculateModality(
  profile: UserProfile,
  questionIds: number[]
): 'cardinal' | 'fixed' | 'mutable' {
  const scores: ModalityScores = { cardinal: 0, fixed: 0, mutable: 0 };

  questionIds.forEach((questionId) => {
    const question = questions.find((q) => q.id === questionId);
    if (!question) return;

    const answerId = profile.answers[questionId];
    if (!answerId) return;

    const option = question.options.find((o) => o.id === answerId);
    if (!option || !option.archetype.modality) return;

    scores[option.archetype.modality] += 1;
  });

  // Return modality with highest score
  return (Object.keys(scores) as Array<keyof ModalityScores>).reduce(
    (max, key) => (scores[key] > scores[max] ? key : max),
    'cardinal'
  );
}

/**
 * Get sign from element + modality (re-exported from signUtils)
 */
export { getSign } from './signUtils';

/**
 * Get date range for a sign (re-exported from signUtils)
 */
export function getDateRange(sign: string): string {
  return signDateRanges[sign.toLowerCase()] || 'March 21 – April 19';
}

/**
 * Get interpretation for a sign and type
 */
export function getInterpretation(
  sign: string,
  type: 'sun' | 'moon' | 'rising'
): string {
  return interpretations[sign.toLowerCase()]?.[type] || '';
}

/**
 * Get all questions for the onboarding flow
 */
export function getQuestions(): Question[] {
  return questions;
}

/**
 * Get a specific question by ID
 */
export function getQuestionById(id: number): Question | undefined {
  return questions.find((q) => q.id === id);
}
