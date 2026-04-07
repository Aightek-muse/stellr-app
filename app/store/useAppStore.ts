import { create } from 'zustand';
import type { SignResult } from '../../lib/signAlgorithm';

interface UserProfile {
  name: string;
  sunSign?: string;
  moonSign?: string;
  risingSign?: string;
  birthDate?: string;
  birthTime?: string;
  birthLocation?: string;
}

interface AppState {
  // Onboarding state
  hasCompletedOnboarding: boolean;
  currentOnboardingStep: number;
  userProfile: UserProfile;
  
  // Quiz state
  answers: Record<number, string>; // questionId → optionId
  
  // Calculated signs
  signs: SignResult | null;
  
  // Actions
  completeOnboarding: () => void;
  setCurrentOnboardingStep: (step: number) => void;
  updateUserProfile: (profile: Partial<UserProfile>) => void;
  resetApp: () => void;
  
  // Quiz actions
  addAnswer: (questionId: number, optionId: string) => void;
  calculateSigns: () => void;
}

export const useAppStore = create<AppState>((set, get) => ({
  // Initial state
  hasCompletedOnboarding: false,
  currentOnboardingStep: 0,
  userProfile: {
    name: '',
  },
  answers: {},
  signs: null,
  
  // Actions
  completeOnboarding: () => set({ hasCompletedOnboarding: true }),
  
  setCurrentOnboardingStep: (step) => set({ currentOnboardingStep: step }),
  
  updateUserProfile: (profile) =>
    set((state) => ({
      userProfile: { ...state.userProfile, ...profile },
    })),
  
  resetApp: () =>
    set({
      hasCompletedOnboarding: false,
      currentOnboardingStep: 0,
      userProfile: {
        name: '',
      },
      answers: {},
      signs: null,
    }),
  
  // Quiz actions
  addAnswer: (questionId, optionId) =>
    set((state) => ({
      answers: { ...state.answers, [questionId]: optionId },
    })),
  
  calculateSigns: () => {
    const { calculateSigns: calcSigns } = require('../../lib/signAlgorithm');
    const profile = { name: get().userProfile.name, answers: get().answers };
    const signs = calcSigns(profile);
    set({ signs });
  },
}));
