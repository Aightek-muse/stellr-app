import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { tokens } from '../../lib/tokens';
import { Lock } from 'lucide-react-native';

interface BadgeProps {
  variant?: 'stellr-plus' | 'gold' | 'lavender' | 'locked';
  size?: 'sm' | 'md';
  label?: string;
}

/**
 * Badge component for Stellr+ and other indicators.
 * 
 * - Stellr+: gold alpha bg, lock icon + "Stellr+" label
 * - Gold/Lavender: Color-coded variants
 */
export function Badge({ variant = 'stellr-plus', size = 'sm', label }: BadgeProps) {
  const displayLabel = label || (variant === 'stellr-plus' || variant === 'locked' ? 'Stellr+' : '');
  
  return (
    <View
      style={[
        styles.badge,
        variant === 'stellr-plus' && styles.stellrPlus,
        variant === 'gold' && styles.gold,
        variant === 'lavender' && styles.lavender,
        variant === 'locked' && styles.locked,
        size === 'sm' && styles.sm,
      ]}
    >
      {(variant === 'stellr-plus' || variant === 'locked') && (
        <Lock 
          size={10} 
          color={tokens.colors.gold} 
          strokeWidth={tokens.icons.strokeWidth as any} 
        />
      )}
      {displayLabel ? (
        <Text
          style={[
            styles.text,
            variant === 'stellr-plus' && styles.stellrPlusText,
            variant === 'gold' && styles.goldText,
            variant === 'lavender' && styles.lavenderText,
            variant === 'locked' && styles.lockedText,
            size === 'sm' && styles.smText,
          ]}
        >
          {displayLabel}
        </Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: tokens.spacing.xs,
    paddingHorizontal: tokens.spacing.sm,
    paddingVertical: 4,
    borderRadius: tokens.radius.sm,
    borderWidth: 1,
  },
  stellrPlus: {
    backgroundColor: tokens.colors.alpha.gold15,
    borderColor: tokens.colors.alpha.badgeBorder,
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
    backgroundColor: tokens.colors.alpha.gold15,
    borderColor: tokens.colors.alpha.badgeBorder,
  },
  sm: {
    paddingHorizontal: tokens.spacing.sm,
    paddingVertical: 4,
  },
  text: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 10,
    fontWeight: String(tokens.typography.fontWeights.semibold) as any,
    marginLeft: 2,
  },
  stellrPlusText: {
    color: tokens.colors.gold,
  },
  goldText: {
    color: tokens.colors.gold,
  },
  lavenderText: {
    color: tokens.colors.lavender,
  },
  lockedText: {
    color: tokens.colors.gold,
  },
  smText: {
    fontSize: 10,
  },
});
