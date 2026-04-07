import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Compass as CompassIcon } from 'lucide-react-native';
import { tokens } from '../../lib/tokens';

interface CompassProps {
  size?: number;
  color?: string;
}

export function Compass({ size = 24, color = tokens.colors.gold }: CompassProps) {
  return (
    <View style={styles.container}>
      <CompassIcon size={size} color={color} strokeWidth={tokens.icons.strokeWidth as any} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
