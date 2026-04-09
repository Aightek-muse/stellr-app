import React from 'react';
import { View, Text, StyleSheet, ScrollView, Linking } from 'react-native';
import { tokens } from '../../../lib/tokens';
import { Button } from '../../../components/ui/Button';
import { useRouter } from 'expo-router';
import { useAppStore } from '../../../../../store/useAppStore';
import { Card } from '../../../components/ui/Card';
import { Star } from '../../../components/icons/Star';

/**
 * Summary Screen - Onboarding Step 14
 * 
 * Synthesis. Share moment. Soft upsell.
 * Copy from design/ux-writing.md
 * 
 * NOTE: Uses mock data - actual sign calculation not implemented yet.
 */

const MOCK_BIG3 = {
  sun: { name: 'Libra', glyph: '☉', element: 'Air' },
  moon: { name: 'Scorpio', glyph: '☽', element: 'Water' },
  rising: { name: 'Gemini', glyph: '↑', element: 'Air' },
};

const SYNTHESIS = `You are a rare combination. Your Libra Sun seeks harmony and balance, your Scorpio Moon feels everything at profound depth, and your Gemini Rising makes you appear light, adaptable, and curious.

This means you bridge worlds: you can navigate surface-level social situations with ease while carrying an intense emotional inner life. People are drawn to your warmth and wit, but only a few ever glimpse the depth beneath.

The tension between your need for peace (Libra) and your emotional intensity (Scorpio) is where your power lives. You're learning that true balance isn't about avoiding depth — it's about finding people safe enough to be real with.`;

export default function SummaryScreen() {
  const router = useRouter();
  const completeOnboarding = useAppStore((state) => state.completeOnboarding);
  const userProfile = useAppStore((state) => state.userProfile);
  const saveUserAndSigns = useAppStore((state) => state.saveUserAndSigns);

  const handleFinish = async () => {
    try {
      await saveUserAndSigns();
      completeOnboarding();
      router.replace('/(tabs)');
    } catch (error) {
      console.error('Failed to save user:', error);
      // Still complete onboarding even if save fails (offline mode)
      completeOnboarding();
      router.replace('/(tabs)');
    }
  };

  const handleShare = async () => {
    const shareText = `My Big 3: ${MOCK_BIG3.sun.name} Sun · ${MOCK_BIG3.moon.name} Moon · ${MOCK_BIG3.rising.name} Rising. Only 3% share my combination. Discover yours with Stellr.`;
    try {
      console.log('Share:', shareText);
    } catch (error) {
      console.error('Share failed:', error);
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.iconContainer}>
        <Star size={48} color={tokens.colors.gold} />
      </View>
      
      <Text style={styles.label}>Your Big 3</Text>
      
      <Text style={styles.combination}>
        {MOCK_BIG3.sun.glyph} {MOCK_BIG3.sun.name} · {MOCK_BIG3.moon.glyph} {MOCK_BIG3.moon.name} · {MOCK_BIG3.rising.glyph} {MOCK_BIG3.rising.name}
      </Text>
      
      <View style={styles.elementTags}>
        <View style={[styles.elementTag, styles.airTag]}>
          <Text style={styles.elementText}>Air</Text>
        </View>
        <View style={[styles.elementTag, styles.waterTag]}>
          <Text style={styles.elementText}>Water</Text>
        </View>
        <View style={[styles.elementTag, styles.airTag]}>
          <Text style={styles.elementText}>Air</Text>
        </View>
      </View>
      
      <Text style={styles.synthesis}>{SYNTHESIS}</Text>
      
      <View style={styles.rarityCard}>
        <Text style={styles.rarityStat}>Only 3% share your combination</Text>
      </View>
      
      <Button
        variant="secondary"
        onPress={handleShare}
        style={styles.shareButton}
      >
        Share My Chart
      </Button>
      
      <Button
        variant="primary"
        onPress={handleFinish}
        style={styles.cta}
      >
        Go to My Home →
      </Button>
      
      <Button
        variant="ghost"
        onPress={() => router.push('/(tabs)/chart')}
        style={styles.upsellButton}
      >
        Want to go deeper? See all 10 planets in your full chart →
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
    marginBottom: tokens.spacing.lg,
  },
  label: {
    fontFamily: 'Montserrat-Medium',
    fontSize: tokens.typography.sizes.xs,
    color: tokens.colors.textSecondary,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: tokens.spacing.sm,
  },
  combination: {
    fontFamily: 'Cormorant',
    fontSize: tokens.typography.sizes.display,
    fontWeight: String(tokens.typography.fontWeights.light) as any,
    color: tokens.colors.textPrimary,
    textAlign: 'center',
    marginBottom: tokens.spacing.md,
    lineHeight: tokens.typography.lineHeights.tight * tokens.typography.sizes.display,
  },
  elementTags: {
    flexDirection: 'row',
    gap: tokens.spacing.sm,
    marginBottom: tokens.spacing.xl,
  },
  elementTag: {
    paddingHorizontal: tokens.spacing.sm,
    paddingVertical: 4,
    borderRadius: tokens.radius.sm,
    borderWidth: 1,
  },
  airTag: {
    backgroundColor: 'rgba(139,124,248,0.15)',
    borderColor: 'rgba(139,124,248,0.3)',
  },
  waterTag: {
    backgroundColor: 'rgba(242,195,91,0.15)',
    borderColor: 'rgba(242,195,91,0.3)',
  },
  elementText: {
    fontFamily: 'Montserrat-Medium',
    fontSize: tokens.typography.sizes.xs,
    color: tokens.colors.textSecondary,
  },
  synthesis: {
    fontFamily: 'Montserrat',
    fontSize: tokens.typography.sizes.body,
    color: tokens.colors.textPrimary,
    lineHeight: tokens.typography.lineHeights.loose * tokens.typography.sizes.body,
    textAlign: 'center',
    marginBottom: tokens.spacing.lg,
  },
  rarityCard: {
    backgroundColor: tokens.colors.surface1,
    borderRadius: tokens.radius.md,
    padding: tokens.spacing.md,
    marginBottom: tokens.spacing.lg,
    borderWidth: 1,
    borderColor: tokens.colors.border,
  },
  rarityStat: {
    fontFamily: 'Montserrat-Medium',
    fontSize: tokens.typography.sizes.sm,
    color: tokens.colors.gold,
    textAlign: 'center',
  },
  shareButton: {
    width: '100%',
    marginBottom: tokens.spacing.sm,
  },
  cta: {
    width: '100%',
    marginBottom: tokens.spacing.md,
  },
  upsellButton: {
    width: '100%',
    marginTop: tokens.spacing.sm,
  },
});
