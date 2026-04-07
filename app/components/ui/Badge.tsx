import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { tokens } from '../../lib/tokens';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'gold' | 'lavender' | 'locked';
  size?: 'sm' | 'md';
}

export function Badge({ children, variant = 'gold', size = 'md' }: BadgeProps) {
  return (
    <View
      style={[
        styles.badge,
        variant === 'gold' && styles.gold,
        variant === 'lavender' && styles.lavender,
        variant === 'locked' && styles.locked,
        size === 'sm' && styles.sm,
      ]}
    >
      <Text
        style={[
          styles.text,
          variant === 'gold' && styles.goldText,
          variant === 'lavender' && styles.lavenderText,
          variant === 'locked' && styles.lockedText,
          size === 'sm' && styles.smText,
        ]}
      >
        {children}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    paddingHorizontal: tokens.spacing.md,
    paddingVertical: tokens.spacing.sm,
    borderRadius: tokens.radius.sm,
    borderWidth: 1,
  },
  gold: {
    backgroundColor: tokens.colors.alpha.gold15,
    borderColor: tokens.colors.alpha.badgeBorder,
  },
  lavender: {
    backgroundColor: 'rgba(139,124,248,0.15)',
    borderColor: 'rgba(139,124,248,0.3)',
  },
  locked: {
    backgroundColor: tokens.colors.surface2,
    borderColor: tokens.colors.border,
  },
  sm: {
    paddingHorizontal: tokens.spacing.sm,
    paddingVertical: 4,
  },
  text: {
    fontFamily: 'Montserrat-Medium',
    fontSize: tokens.typography.sizes.xs,
    fontWeight: String(tokens.typography.fontWeights.medium) as any,
  },
  goldText: {
    color: tokens.colors.gold,
  },
  lavenderText: {
    color: tokens.colors.lavender,
  },
  lockedText: {
    color: tokens.colors.textMuted,
  },
  smText: {
    fontSize: tokens.typography.sizes.xs,
  },
});
