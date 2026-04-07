import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { tokens } from '../../lib/tokens';

interface AnswerOptionProps {
  label: string;
  description?: string;
  selected: boolean;
  onSelect: () => void;
}

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
      <View style={[styles.indicator, selected && styles.indicatorSelected]} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: tokens.colors.surface1,
    borderRadius: tokens.radius.md,
    borderWidth: 1,
    borderColor: tokens.colors.border,
    padding: tokens.spacing.md,
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
  indicator: {
    width: 20,
    height: 20,
    borderRadius: tokens.radius.full,
    borderWidth: 1.5,
    borderColor: tokens.colors.border,
    marginLeft: tokens.spacing.md,
  },
  indicatorSelected: {
    borderColor: tokens.colors.gold,
    backgroundColor: tokens.colors.gold,
  },
});
