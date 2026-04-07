import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Star as StarIcon } from 'lucide-react-native';
import { tokens } from '../../lib/tokens';

interface StarProps {
  size?: number;
  color?: string;
}

export function Star({ size = 24, color = tokens.colors.gold }: StarProps) {
  return (
    <View style={styles.container}>
      <StarIcon size={size} color={color} strokeWidth={tokens.icons.strokeWidth as any} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
