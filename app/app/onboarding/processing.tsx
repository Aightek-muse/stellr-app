import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { tokens } from '../../../lib/tokens';
import { useRouter } from 'expo-router';
import { useAppStore } from '../../store/useAppStore';
import { Star } from '../../../../components/icons/Star';

/**
 * Processing Screen - Onboarding Step 10
 * 
 * Build anticipation. Make the wait feel active, not passive.
 * Rotating text every 2.5 seconds.
 * Total duration: 10-15 seconds.
 * Copy from design/ux-writing.md
 */

const PROCESSING_MESSAGES = [
  'Reading your energy patterns...',
  'Weighing your emotional nature...',
  'Mapping your social instincts...',
  'Checking all 1,728 combinations...',
];

export default function ProcessingScreen() {
  const router = useRouter();
  const userProfile = useAppStore((state) => state.userProfile);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    // Rotate through messages every 2.5 seconds
    const messageInterval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % PROCESSING_MESSAGES.length);
    }, 2500);

    // Total processing time: 12 seconds, then navigate to sun reveal
    const timer = setTimeout(() => {
      clearInterval(messageInterval);
      router.push('/onboarding/reveal/sun');
    }, 12000);

    return () => {
      clearTimeout(timer);
      clearInterval(messageInterval);
    };
  }, [router, userProfile.name]);

  const displayMessage = messageIndex < PROCESSING_MESSAGES.length
    ? PROCESSING_MESSAGES[messageIndex]
    : `Almost there, ${userProfile.name}...`;

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Star size={56} color={tokens.colors.gold} />
      </View>
      
      <ActivityIndicator
        size="large"
        color={tokens.colors.gold}
        style={styles.spinner}
      />
      
      <Text style={styles.message}>{displayMessage}</Text>
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
    marginBottom: tokens.spacing['2xl'],
  },
  spinner: {
    marginBottom: tokens.spacing['2xl'],
  },
  message: {
    fontFamily: 'Cormorant',
    fontSize: tokens.typography.sizes.heading,
    fontWeight: String(tokens.typography.fontWeights.light) as any,
    color: tokens.colors.textPrimary,
    textAlign: 'center',
    lineHeight: tokens.typography.lineHeights.relaxed * tokens.typography.sizes.heading,
  },
});
