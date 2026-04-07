import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { tokens } from '../../lib/tokens';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'md' | 'sm';
  children: React.ReactNode;
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
  style?: any;
}

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  onPress,
  disabled = false,
  loading = false,
  style,
}: ButtonProps) {
  const height = size === 'md' ? tokens.components.button.heightMd : tokens.components.button.heightSm;
  
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { height },
        variant === 'primary' && styles.primary,
        variant === 'secondary' && styles.secondary,
        variant === 'ghost' && styles.ghost,
        disabled && styles.disabled,
        style,
      ]}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.7}
    >
      {loading ? (
        <ActivityIndicator color={variant === 'ghost' ? tokens.colors.gold : tokens.colors.bg} />
      ) : (
        <Text style={[styles.text, variant === 'ghost' && styles.ghostText]}>
          {children}
        </Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: tokens.radius.lg,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: tokens.components.button.borderWidth,
  },
  primary: {
    backgroundColor: tokens.colors.gold,
    borderColor: tokens.colors.gold,
  },
  secondary: {
    backgroundColor: tokens.colors.surface2,
    borderColor: tokens.colors.border,
  },
  ghost: {
    backgroundColor: 'transparent',
    borderColor: tokens.colors.gold,
  },
  disabled: {
    opacity: tokens.components.opacity.disabled,
  },
  text: {
    color: tokens.colors.bg,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: tokens.typography.sizes.body,
    fontWeight: String(tokens.typography.fontWeights.semibold) as any,
  },
  ghostText: {
    color: tokens.colors.gold,
  },
});
