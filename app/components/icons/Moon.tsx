import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Moon as MoonIcon } from 'lucide-react-native';
import { tokens } from '../../lib/tokens';

interface MoonProps {
  size?: number;
  color?: string;
}

export function Moon({ size = 24, color = tokens.colors.lavender }: MoonProps) {
  return (
    <View style={styles.container}>
      <MoonIcon size={size} color={color} strokeWidth={tokens.icons.strokeWidth as any} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
