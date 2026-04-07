import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { tokens } from '../../lib/tokens';
import { Button } from '../../components/ui/Button';
import { useRouter } from 'expo-router';
import { Star } from '../../components/icons/Star';

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Star size={64} color={tokens.colors.gold} />
      </View>
      
      <Text style={styles.title}>Welcome to Stellr</Text>
      <Text style={styles.subtitle}>
        Discover your cosmic blueprint through personalized astrology
      </Text>
      
      <View style={styles.buttons}>
        <Button
          variant="primary"
          onPress={() => router.push('/onboarding/name-input')}
          style={styles.button}
        >
          Get Started
        </Button>
      </View>
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
  title: {
    fontFamily: 'Cormorant',
    fontSize: tokens.typography.sizes.displayLg,
    fontWeight: String(tokens.typography.fontWeights.light) as any,
    color: tokens.colors.textPrimary,
    marginBottom: tokens.spacing.md,
    textAlign: 'center',
  },
  subtitle: {
    fontFamily: 'Montserrat',
    fontSize: tokens.typography.sizes.body,
    color: tokens.colors.textSecondary,
    textAlign: 'center',
    lineHeight: tokens.typography.lineHeights.relaxed * tokens.typography.sizes.body,
    marginBottom: tokens.spacing['3xl'],
  },
  buttons: {
    width: '100%',
  },
  button: {
    width: '100%',
  },
});
