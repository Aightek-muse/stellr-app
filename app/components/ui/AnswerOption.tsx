import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { tokens } from '../../lib/tokens';

export interface AnswerOptionProps {
  label: string;
  description?: string;
  selected: boolean;
  onSelect: () => void;
}

/**
 * Answer Option component for question flow.
 * 
 * - Default: surface1 background, border
 * - Selected: gold border + 8% gold tint background
 */
export function AnswerOption({ label, description, selected, onSelect }: AnswerOptionProps) {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        selected && styles.selected,
      ]}
      onPress={onSelect}
      activeOpacity={0.7}
    >
      <View style={styles.content}>
        <Text style={[styles.label, selected && styles.labelSelected]}>
          {label}
        </Text>
        {description && (
          <Text style={styles.description}>{description}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: tokens.colors.surface1,
    borderRadius: tokens.radius.md,
    borderWidth: tokens.components.button.borderWidth,
    borderColor: tokens.colors.border,
    paddingVertical: tokens.spacing.md,
    paddingHorizontal: 20,
    marginBottom: tokens.spacing.sm,
  },
  selected: {
    backgroundColor: tokens.colors.alpha.answerSelectedBg,
    borderColor: tokens.colors.gold,
  },
  content: {
    flex: 1,
  },
  label: {
    fontFamily: 'Montserrat-Medium',
    fontSize: tokens.typography.sizes.body,
    color: tokens.colors.textPrimary,
  },
  labelSelected: {
    color: tokens.colors.gold,
  },
  description: {
    fontFamily: 'Montserrat',
    fontSize: tokens.typography.sizes.sm,
    color: tokens.colors.textSecondary,
    marginTop: tokens.spacing.xs,
  },
});
