import React, { useState } from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';
import { tokens } from '../../lib/tokens';

export interface InputProps {
  label?: string;
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  keyboardType?: 'default' | 'email-address' | 'numeric';
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  style?: any;
}

/**
 * Text Input component with focus state.
 * 
 * - Background: surface1
 * - Border: 1.5px solid border
 * - Focus: gold border + 3px gold alpha ring
 */
export function Input({
  label,
  placeholder,
  value,
  onChangeText,
  keyboardType = 'default',
  autoCapitalize = 'sentences',
  style,
}: InputProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={[styles.container, style]}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={[
          styles.input,
          isFocused && styles.inputFocused,
        ]}
        placeholder={placeholder}
        placeholderTextColor={tokens.colors.textMuted}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: tokens.spacing.md,
  },
  label: {
    fontFamily: 'Montserrat-Medium',
    fontSize: tokens.typography.sizes.sm,
    color: tokens.colors.textSecondary,
    marginBottom: tokens.spacing.sm,
  },
  input: {
    height: tokens.components.input.height,
    borderRadius: tokens.radius.md,
    borderWidth: tokens.components.button.borderWidth,
    borderColor: tokens.colors.border,
    backgroundColor: tokens.colors.surface1,
    paddingHorizontal: tokens.spacing.md,
    fontFamily: 'Montserrat',
    fontSize: tokens.typography.sizes.bodyLg,
    color: tokens.colors.textPrimary,
  },
  inputFocused: {
    borderColor: tokens.colors.gold,
    shadowColor: tokens.colors.gold,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 0,
  },
});
