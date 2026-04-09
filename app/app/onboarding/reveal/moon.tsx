import React from 'react';
import { View, Text, StyleSheet, ScrollView, Linking } from 'react-native';
import { tokens } from '../../../lib/tokens';
import { Button } from '../../../components/ui/Button';
import { useRouter } from 'expo-router';
import { useAppStore } from '../../../../store/useAppStore';
import { Moon } from '../../../components/icons/Moon';

/**
 * Moon Sign Reveal - Onboarding Step 12 (THE AHA MOMENT)
 * 
 * The emotional peak. The screenshot moment.
 * Copy from design/ux-writing.md
 */

export default function MoonRevealScreen() {
  const router = useRouter();
  const signs = useAppStore((state) => state.signs);
  const updateUserProfile = useAppStore((state) => state.updateUserProfile);

  React.useEffect(() => {
    if (signs?.moon) {
      updateUserProfile({ moonSign: signs.moon.sign });
    }
  }, [signs]);

  const handleShare = async () => {
    if (!signs?.moon) return;
    // Simple share implementation - in production would use Share API
    const shareText = `My Moon sign is ${signs.moon.sign} — The part of me most people never see. Discover yours with Stellr.`;
    try {
      // Would use React Native Share API in production
      console.log('Share:', shareText);
    } catch (error) {
      console.error('Share failed:', error);
    }
  };

  // Fallback if signs not calculated yet
  if (!signs) {
    router.push('/onboarding/name-input');
    return null;
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.iconContainer}>
        <Moon size={64} color={tokens.colors.lavender} />
      </View>
      
      <Text style={styles.label}>Your emotional world</Text>
      
      <Text style={styles.signName}>{signs.moon.sign}</Text>
      
      <Text style={styles.subtitle}>The part of you most people never see.</Text>
      
      <Text style={styles.interpretation}>{signs.moon.interpretation}</Text>
      
      <View style={styles.shareSection}>
        <Text style={styles.shareNudge}>
          Does this feel true? Most people say this one is the most accurate.
        </Text>
        
        <Button
          variant="secondary"
          onPress={handleShare}
          style={styles.shareButton}
        >
          Share My Moon Sign
        </Button>
      </View>
      
      <View style={styles.spacer} />
      
      <Button
        variant="primary"
        onPress={() => router.push('/onboarding/reveal/rising')}
        style={styles.cta}
      >
        See how others experience you →
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
    color: tokens.colors.lavender,
    marginBottom: tokens.spacing.sm,
    textShadowColor: tokens.colors.lavender,
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
    marginBottom: tokens.spacing.xl,
  },
  shareSection: {
    alignItems: 'center',
    width: '100%',
    marginBottom: tokens.spacing.lg,
  },
  shareNudge: {
    fontFamily: 'Montserrat',
    fontSize: tokens.typography.sizes.sm,
    color: tokens.colors.textSecondary,
    textAlign: 'center',
    marginBottom: tokens.spacing.md,
    lineHeight: tokens.typography.lineHeights.relaxed * tokens.typography.sizes.sm,
  },
  shareButton: {
    minWidth: 200,
  },
  spacer: {
    height: tokens.spacing.lg,
  },
  cta: {
    width: '100%',
  },
});
