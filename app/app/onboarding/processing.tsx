import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { tokens } from '../../lib/tokens';
import { useRouter } from 'expo-router';
import { Star } from '../../components/icons/Star';

export default function ProcessingScreen() {
  const router = useRouter();

  useEffect(() => {
    // Simulate processing time, then navigate to reveal
    const timer = setTimeout(() => {
      router.push('/onboarding/reveal/sun');
    }, 2000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Star size={48} color={tokens.colors.gold} />
      </View>
      
      <ActivityIndicator
        size="large"
        color={tokens.colors.gold}
        style={styles.spinner}
      />
      
      <Text style={styles.title}>Calculating your chart</Text>
      <Text style={styles.subtitle}>
        Aligning the stars with your birth data
      </Text>
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
  spinner: {
    marginBottom: tokens.spacing.xl,
  },
  title: {
    fontFamily: 'Cormorant',
    fontSize: tokens.typography.sizes.headingLg,
    fontWeight: String(tokens.typography.fontWeights.light) as any,
    color: tokens.colors.textPrimary,
    marginBottom: tokens.spacing.md,
  },
  subtitle: {
    fontFamily: 'Montserrat',
    fontSize: tokens.typography.sizes.body,
    color: tokens.colors.textSecondary,
    textAlign: 'center',
  },
});
