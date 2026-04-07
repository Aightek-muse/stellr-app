import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator, View } from 'react-native';
import { tokens } from '../../lib/tokens';

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'md' | 'sm';
  children: React.ReactNode;
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
  style?: any;
}

/**
 * Button component with Primary, Secondary, and Ghost variants.
 * 
 * - Primary: Gold CTA with pill shape and glow
 * - Secondary: Transparent with ghost border
 * - Ghost: Text-only, no border
 */
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
        <ActivityIndicator 
          color={variant === 'ghost' || variant === 'secondary' ? tokens.colors.gold : tokens.colors.bg} 
        />
      ) : (
        <Text style={[
          styles.text, 
          variant === 'ghost' && styles.ghostText,
          variant === 'secondary' && styles.secondaryText,
        ]}>
          {children}
        </Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: tokens.radius.full,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: tokens.components.button.borderWidth,
  },
  primary: {
    backgroundColor: tokens.colors.gold,
    borderColor: tokens.colors.gold,
    shadowColor: tokens.colors.gold,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.35,
    shadowRadius: 20,
    elevation: 5,
  },
  secondary: {
    backgroundColor: 'transparent',
    borderColor: tokens.colors.alpha.ghostBorder,
  },
  ghost: {
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
  disabled: {
    opacity: tokens.components.opacity.disabled,
  },
  text: {
    color: tokens.colors.bg,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: tokens.typography.sizes.bodyLg,
    fontWeight: String(tokens.typography.fontWeights.semibold) as any,
  },
  ghostText: {
    color: tokens.colors.gold,
  },
  secondaryText: {
    color: tokens.colors.gold,
  },
});
