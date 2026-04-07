import { create } from 'zustand';

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
  
  // Actions
  completeOnboarding: () => void;
  setCurrentOnboardingStep: (step: number) => void;
  updateUserProfile: (profile: Partial<UserProfile>) => void;
  resetApp: () => void;
}

export const useAppStore = create<AppState>((set) => ({
  // Initial state
  hasCompletedOnboarding: false,
  currentOnboardingStep: 0,
  userProfile: {
    name: '',
  },
  
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
    }),
}));
