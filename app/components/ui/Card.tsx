import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { tokens } from '../../lib/tokens';
import { Badge } from './Badge';

export interface CardProps {
  children: React.ReactNode;
  title?: string;
  locked?: boolean;
  style?: any;
}

/**
 * Card component for content containers.
 * 
 * - Standard: Surface1 background with border and shadow
 * - Locked: Same + opacity + Stellr+ badge
 */
export function Card({ children, title, locked = false, style }: CardProps) {
  return (
    <View
      style={[
        styles.card,
        locked && styles.locked,
        style,
      ]}
    >
      {locked && (
        <View style={styles.badgeContainer}>
          <Badge variant="locked" />
        </View>
      )}
      {title && (
        <Text style={styles.title}>{title}</Text>
      )}
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: tokens.colors.surface1,
    borderRadius: tokens.radius.lg,
    borderWidth: tokens.components.card.borderWidth,
    borderColor: tokens.colors.border,
    padding: tokens.spacing.lg,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 24,
    elevation: 5,
    position: 'relative',
  },
  locked: {
    opacity: tokens.components.opacity.locked,
  },
  badgeContainer: {
    position: 'absolute',
    top: tokens.spacing.md,
    right: tokens.spacing.md,
  },
  title: {
    fontFamily: 'Cormorant',
    fontSize: tokens.typography.sizes.subheading,
    fontWeight: String(tokens.typography.fontWeights.light) as any,
    color: tokens.colors.textPrimary,
    marginBottom: tokens.spacing.md,
  },
});
