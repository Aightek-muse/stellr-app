import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { tokens } from '../../lib/tokens';
import { Button } from '../../../components/ui/Button';
import { useRouter } from 'expo-router';
import { Star } from '../../../components/icons/Star';

/**
 * Welcome Screen - Onboarding Step 1
 * 
 * Hook the user. Address the birth time barrier immediately.
 * Copy from design/ux-writing.md
 */
export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.heroContainer}>
        <Star size={72} color={tokens.colors.gold} />
      </View>
      
      <Text style={styles.headline}>Your Big 3, no birth time needed.</Text>
      
      <Text style={styles.subhead}>
        Answer 7 questions about who you are. We'll find your Sun, Moon, and Rising sign.
      </Text>
      
      <Button
        variant="primary"
        onPress={() => router.push('/onboarding/name-input')}
        style={styles.cta}
      >
        Find My Signs
      </Button>
      
      <Text style={styles.trustLine}>
        Private. Takes 2 minutes. No birth time required.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: tokens.colors.bg,
    paddingHorizontal: tokens.spacing.lg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroContainer: {
    marginBottom: tokens.spacing['2xl'],
  },
  headline: {
    fontFamily: 'Cormorant',
    fontSize: tokens.typography.sizes.display,
    fontWeight: String(tokens.typography.fontWeights.regular) as any,
    color: tokens.colors.textPrimary,
    textAlign: 'center',
    marginBottom: tokens.spacing.lg,
    lineHeight: tokens.typography.lineHeights.tight * tokens.typography.sizes.display,
  },
  subhead: {
    fontFamily: 'Montserrat',
    fontSize: tokens.typography.sizes.body,
    color: tokens.colors.textSecondary,
    textAlign: 'center',
    lineHeight: tokens.typography.lineHeights.relaxed * tokens.typography.sizes.body,
    marginBottom: tokens.spacing['3xl'],
  },
  cta: {
    width: '100%',
    marginBottom: tokens.spacing.md,
  },
  trustLine: {
    fontFamily: 'Montserrat',
    fontSize: tokens.typography.sizes.xs,
    color: tokens.colors.textMuted,
    textAlign: 'center',
  },
});
