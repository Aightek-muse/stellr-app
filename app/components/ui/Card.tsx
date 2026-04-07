import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { tokens } from '../../lib/tokens';

interface CardProps {
  children: React.ReactNode;
  title?: string;
  locked?: boolean;
  style?: any;
}

export function Card({ children, title, locked = false, style }: CardProps) {
  return (
    <View
      style={[
        styles.card,
        locked && styles.locked,
        style,
      ]}
    >
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
  },
  locked: {
    opacity: tokens.components.opacity.locked,
  },
  title: {
    fontFamily: 'Cormorant',
    fontSize: tokens.typography.sizes.subheading,
    fontWeight: String(tokens.typography.fontWeights.light) as any,
    color: tokens.colors.textPrimary,
    marginBottom: tokens.spacing.md,
  },
});
