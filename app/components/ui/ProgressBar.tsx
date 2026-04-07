import React from 'react';
import { View, StyleSheet } from 'react-native';
import { tokens } from '../../lib/tokens';

export interface ProgressBarProps {
  progress: number; // 0 to 1
  totalSteps: number;
  currentStep: number;
}

/**
 * Progress Bar component for question flow.
 * 
 * - Track: border color, 3px height, full radius
 * - Fill: Gradient lavender → gold with animated width transition
 */
export function ProgressBar({ progress, totalSteps, currentStep }: ProgressBarProps) {
  return (
    <View style={styles.container}>
      <View style={styles.track}>
        <View
          style={[
            styles.fill,
            { width: `${Math.min(100, Math.max(0, progress * 100))}%` },
          ]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: tokens.spacing.lg,
  },
  track: {
    height: 3,
    backgroundColor: tokens.colors.border,
    borderRadius: tokens.radius.full,
    overflow: 'hidden',
  },
  fill: {
    height: '100%',
    backgroundColor: tokens.colors.gold,
    borderRadius: tokens.radius.full,
    // Note: React Native doesn't support CSS gradients in StyleSheet
    // For gradient effect, use expo-linear-gradient or react-native-linear-gradient
  },
});
