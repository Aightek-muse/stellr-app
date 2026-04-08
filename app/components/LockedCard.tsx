import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { tokens } from '../lib/tokens';
import { Card, type CardProps } from './ui/Card';
import { Lock } from 'lucide-react-native';

export interface LockedCardProps extends CardProps {
  onPress?: () => void;
}

/**
 * LockedCard - Premium feature card with lock overlay
 * 
 * - Same as regular Card + lock icon + "Stellr+" badge
 * - Opacity 0.7
 * - Tap → opens Paywall
 */
export function LockedCard({ children, title, onPress, style }: LockedCardProps) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7} disabled={!onPress}>
      <Card locked title={title} style={style}>
        {children}
        <View style={styles.lockOverlay}>
          <Lock size={20} color={tokens.colors.gold} strokeWidth={1.5} />
        </View>
      </Card>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  lockOverlay: {
    position: 'absolute',
    top: tokens.spacing.md,
    right: tokens.spacing.md + 40, // Offset to left of badge
    alignItems: 'center',
    justifyContent: 'center',
  },
});
