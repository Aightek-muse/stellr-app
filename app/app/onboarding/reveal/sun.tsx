import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { tokens } from '../../lib/tokens';
import { Button } from '../../components/ui/Button';
import { useRouter } from 'expo-router';
import { useAppStore } from '../../../store/useAppStore';
import { Sun } from '../../../components/icons/Sun';

/**
 * Sun Sign Reveal - Onboarding Step 11
 * 
 * First reveal. Expected but still meaningful.
 * Copy from design/ux-writing.md
 * 
 * NOTE: Uses mock data - actual sign calculation not implemented yet.
 */

// Mock data for demo
const MOCK_SUN_SIGN = {
  name: 'Libra',
  dateRange: 'September 23 – October 22',
  interpretation: `At your core, you are someone who searches for balance. You have a natural ability to see multiple perspectives, which makes you an excellent mediator and friend.

You're drawn to beauty, harmony, and fairness. Conflict feels uncomfortable to you — not because you're avoidant, but because you genuinely believe there's usually a middle ground that works for everyone.`,
};

export default function SunRevealScreen() {
  const router = useRouter();
  const updateUserProfile = useAppStore((state) => state.updateUserProfile);

  // Store mock sign (in real app, this would be calculated)
  React.useEffect(() => {
    updateUserProfile({ sunSign: MOCK_SUN_SIGN.name });
  }, []);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.iconContainer}>
        <Sun size={64} color={tokens.colors.gold} />
      </View>
      
      <Text style={styles.label}>Your core identity</Text>
      
      <Text style={styles.signName}>{MOCK_SUN_SIGN.name}</Text>
      
      <Text style={styles.dateRange}>{MOCK_SUN_SIGN.dateRange}</Text>
      
      <Text style={styles.interpretation}>{MOCK_SUN_SIGN.interpretation}</Text>
      
      <View style={styles.spacer} />
      
      <Button
        variant="primary"
        onPress={() => router.push('/onboarding/reveal/moon')}
        style={styles.cta}
      >
        Discover your emotional nature →
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
    marginBottom: tokens.spacing.xs,
    textShadowColor: tokens.colors.gold,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 12,
  },
  dateRange: {
    fontFamily: 'Montserrat',
    fontSize: tokens.typography.sizes.sm,
    color: tokens.colors.textSecondary,
    marginBottom: tokens.spacing.xl,
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
