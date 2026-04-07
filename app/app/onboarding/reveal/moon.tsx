import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { tokens } from '../../lib/tokens';
import { Button } from '../../components/ui/Button';
import { useRouter } from 'expo-router';
import { Moon } from '../../components/icons/Moon';

export default function MoonRevealScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Moon size={80} color={tokens.colors.lavender} />
      </View>
      
      <Text style={styles.label}>Your Moon Sign</Text>
      <Text style={styles.sign}>Placeholder</Text>
      <Text style={styles.description}>
        Your emotional nature, inner self, and subconscious
      </Text>
      
      <Button
        variant="primary"
        onPress={() => router.push('/onboarding/reveal/rising')}
        style={styles.button}
      >
        Continue
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: tokens.colors.bg,
    padding: tokens.spacing.lg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    marginBottom: tokens.spacing.xl,
  },
  label: {
    fontFamily: 'Montserrat-Medium',
    fontSize: tokens.typography.sizes.xs,
    color: tokens.colors.textSecondary,
    textTransform: 'uppercase',
    letterSpacing: 2,
    marginBottom: tokens.spacing.sm,
  },
  sign: {
    fontFamily: 'Cormorant',
    fontSize: tokens.typography.sizes.displayLg,
    fontWeight: String(tokens.typography.fontWeights.light) as any,
    color: tokens.colors.lavender,
    marginBottom: tokens.spacing.md,
  },
  description: {
    fontFamily: 'Montserrat',
    fontSize: tokens.typography.sizes.body,
    color: tokens.colors.textSecondary,
    textAlign: 'center',
    lineHeight: tokens.typography.lineHeights.relaxed * tokens.typography.sizes.body,
    marginBottom: tokens.spacing['3xl'],
  },
  button: {
    width: '100%',
  },
});
