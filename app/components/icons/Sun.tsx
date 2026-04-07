import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Sun as SunIcon } from 'lucide-react-native';
import { tokens } from '../../lib/tokens';

interface SunProps {
  size?: number;
  color?: string;
}

export function Sun({ size = 24, color = tokens.colors.gold }: SunProps) {
  return (
    <View style={styles.container}>
      <SunIcon size={size} color={color} strokeWidth={tokens.icons.strokeWidth as any} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
