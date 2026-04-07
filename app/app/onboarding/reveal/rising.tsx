import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { tokens } from '../../lib/tokens';
import { Button } from '../../components/ui/Button';
import { useRouter } from 'expo-router';
import { Compass } from '../../components/icons/Compass';

export default function RisingRevealScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Compass size={80} color={tokens.colors.gold} />
      </View>
      
      <Text style={styles.label}>Your Rising Sign</Text>
      <Text style={styles.sign}>Placeholder</Text>
      <Text style={styles.description}>
        Your outer personality, first impressions, and life path
      </Text>
      
      <Button
        variant="primary"
        onPress={() => router.push('/onboarding/reveal/summary')}
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
