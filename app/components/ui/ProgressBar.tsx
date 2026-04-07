import React from 'react';
import { View, StyleSheet } from 'react-native';
import { tokens } from '../../lib/tokens';

interface ProgressBarProps {
  progress: number; // 0 to 1
  totalSteps: number;
  currentStep: number;
}

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
      <View style={styles.steps}>
        {Array.from({ length: totalSteps }).map((_, index) => (
          <View
            key={index}
            style={[
              styles.step,
              index < currentStep && styles.stepCompleted,
              index === currentStep && styles.stepCurrent,
            ]}
          />
        ))}
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
    height: 4,
    backgroundColor: tokens.colors.surface2,
    borderRadius: tokens.radius.full,
    overflow: 'hidden',
    marginBottom: tokens.spacing.sm,
  },
  fill: {
    height: '100%',
    backgroundColor: tokens.colors.gold,
    borderRadius: tokens.radius.full,
  },
  steps: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  step: {
    width: 8,
    height: 8,
    borderRadius: tokens.radius.full,
    backgroundColor: tokens.colors.surface2,
  },
  stepCompleted: {
    backgroundColor: tokens.colors.gold,
  },
  stepCurrent: {
    backgroundColor: tokens.colors.gold,
  },
});
