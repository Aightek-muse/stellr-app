import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { tokens } from '../../../lib/tokens';
import { Button } from '../../../components/ui/Button';
import { useRouter } from 'expo-router';
import { useAppStore } from '../../../../../store/useAppStore';
import { Compass } from '../../../components/icons/Compass';

/**
 * Rising Sign Reveal - Onboarding Step 13
 * 
 * The clarifier. Explains how others experience the user.
 * Copy from design/ux-writing.md
 */

export default function RisingRevealScreen() {
  const router = useRouter();
  const signs = useAppStore((state) => state.signs);
  const updateUserProfile = useAppStore((state) => state.updateUserProfile);

  React.useEffect(() => {
    if (signs?.rising) {
      updateUserProfile({ risingSign: signs.rising.sign });
    }
  }, [signs]);

  // Fallback if signs not calculated yet
  if (!signs) {
    router.push('/onboarding/name-input');
    return null;
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.iconContainer}>
        <Compass size={64} color={tokens.colors.gold} />
      </View>
      
      <Text style={styles.label}>How others experience you</Text>
      
      <Text style={styles.signName}>{signs.rising.sign}</Text>
      
      <Text style={styles.subtitle}>The first impression you leave — even when you're not trying.</Text>
      
      <Text style={styles.interpretation}>{signs.rising.interpretation}</Text>
      
      <View style={styles.spacer} />
      
      <Button
        variant="primary"
        onPress={() => router.push('/onboarding/reveal/summary')}
        style={styles.cta}
      >
        See your full picture →
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: tokens.colors.bg,
  },
  content: {
    padding: tokens.spacing.lg,
    paddingTop: tokens.layout.safeTop,
    alignItems: 'center',
  },
  iconContainer: {
    marginBottom: tokens.spacing.xl,
  },
  label: {
    fontFamily: 'Montserrat-Medium',
    fontSize: tokens.typography.sizes.xs,
    color: tokens.colors.textSecondary,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: tokens.spacing.sm,
  },
  signName: {
    fontFamily: 'Cormorant',
    fontSize: tokens.typography.sizes.displayLg,
    fontWeight: String(tokens.typography.fontWeights.light) as any,
    color: tokens.colors.textPrimary,
    marginBottom: tokens.spacing.sm,
    textShadowColor: tokens.colors.gold,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 12,
  },
  subtitle: {
    fontFamily: 'Cormorant',
    fontSize: tokens.typography.sizes.subheading,
    fontStyle: 'italic',
    fontWeight: String(tokens.typography.fontWeights.regular) as any,
    color: tokens.colors.textSecondary,
    textAlign: 'center',
    marginBottom: tokens.spacing.xl,
    lineHeight: tokens.typography.lineHeights.relaxed * tokens.typography.sizes.subheading,
  },
  interpretation: {
    fontFamily: 'Montserrat',
    fontSize: tokens.typography.sizes.body,
    color: tokens.colors.textPrimary,
    lineHeight: tokens.typography.lineHeights.loose * tokens.typography.sizes.body,
    textAlign: 'center',
  },
  spacer: {
    height: tokens.spacing['3xl'],
  },
  cta: {
    width: '100%',
  },
});
