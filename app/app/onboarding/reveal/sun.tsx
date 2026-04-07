import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { tokens } from '../../lib/tokens';
import { Button } from '../../components/ui/Button';
import { useRouter } from 'expo-router';
import { Sun } from '../../components/icons/Sun';

export default function SunRevealScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Sun size={80} color={tokens.colors.gold} />
      </View>
      
      <Text style={styles.label}>Your Sun Sign</Text>
      <Text style={styles.sign}>Placeholder</Text>
      <Text style={styles.description}>
        Your core identity, ego, and life force energy
      </Text>
      
      <Button
        variant="primary"
        onPress={() => router.push('/onboarding/reveal/moon')}
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
    color: tokens.colors.gold,
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
