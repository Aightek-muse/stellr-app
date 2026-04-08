import { create } from 'zustand';
import type { SignResult } from '../../lib/signAlgorithm';
import { getOrCreateUser, saveUserProfile, getDailyReading } from '../../lib/database';

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
  
  // Backend state
  userId: string | null;
  dailyReading: any | null;
  
  // Subscription state
  subscription: {
    isSubscriber: boolean;
    expirationDate?: string;
    originalPurchaseDate?: string;
  } | null;
  
  // Actions
  completeOnboarding: () => void;
  setCurrentOnboardingStep: (step: number) => void;
  updateUserProfile: (profile: Partial<UserProfile>) => void;
  resetApp: () => void;
  
  // Quiz actions
  addAnswer: (questionId: number, optionId: string) => void;
  calculateSigns: () => void;
  
  // Backend actions
  saveUserAndSigns: () => Promise<void>;
  loadDailyReading: (sign: string) => Promise<void>;
  
  // Subscription actions
  checkSubscription: () => Promise<void>;
  purchaseSubscription: () => Promise<void>;
  restorePurchases: () => Promise<void>;
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
  userId: null,
  dailyReading: null,
  subscription: null,
  
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
      userId: null,
      dailyReading: null,
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
  
  // Backend actions
  saveUserAndSigns: async () => {
    const state = get();
    if (!state.signs) throw new Error('Signs not calculated yet');
    
    const user = await getOrCreateUser(state.userProfile.name);
    await saveUserProfile(
      user.id,
      state.userProfile.name,
      state.signs,
      state.answers
    );
    set({ userId: user.id });
  },
  
  loadDailyReading: async (sign: string) => {
    const today = new Date().toISOString().split('T')[0];
    try {
      const reading = await getDailyReading(sign, today);
      set({ dailyReading: reading });
    } catch (error) {
      console.error('Failed to load daily reading:', error);
      set({ dailyReading: null });
    }
  },
  
  // Subscription actions
  checkSubscription: async () => {
    const { getSubscriptionStatus } = require('../lib/revenuecat');
    const status = await getSubscriptionStatus();
    set({ subscription: status });
  },
  
  purchaseSubscription: async () => {
    const { purchaseSubscription: purchase } = require('../lib/revenuecat');
    try {
      await purchase();
      // Refresh status after purchase
      await get().checkSubscription();
    } catch (err) {
      // Handle cancellation/error
      console.error('Purchase failed:', err);
    }
  },
  
  restorePurchases: async () => {
    const { restorePurchases: restore } = require('../lib/revenuecat');
    await restore();
    await get().checkSubscription();
  },
}));
