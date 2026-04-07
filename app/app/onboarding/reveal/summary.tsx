import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { tokens } from '../../lib/tokens';
import { Button } from '../../components/ui/Button';
import { useRouter } from 'expo-router';
import { useAppStore } from '../../../store/useAppStore';
import { Card } from '../../../components/ui/Card';
import { Star } from '../../../components/icons/Star';

export default function SummaryScreen() {
  const router = useRouter();
  const completeOnboarding = useAppStore((state) => state.completeOnboarding);
  const userProfile = useAppStore((state) => state.userProfile);

  const handleFinish = () => {
    completeOnboarding();
    // Navigate to main app
    router.replace('/(tabs)');
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Star size={48} color={tokens.colors.gold} />
      </View>
      
      <Text style={styles.title}>Your Cosmic Blueprint</Text>
      <Text style={styles.subtitle}>
        Welcome, {userProfile.name}! Here's your stellar profile:
      </Text>
      
      <View style={styles.cards}>
        <Card>
          <Text style={styles.cardLabel}>Sun</Text>
          <Text style={styles.cardValue}>Placeholder</Text>
        </Card>
        <Card>
          <Text style={styles.cardLabel}>Moon</Text>
          <Text style={styles.cardValue}>Placeholder</Text>
        </Card>
        <Card>
          <Text style={styles.cardLabel}>Rising</Text>
          <Text style={styles.cardValue}>Placeholder</Text>
        </Card>
      </View>
      
      <Button
        variant="primary"
        onPress={handleFinish}
        style={styles.button}
      >
        Explore Your Chart
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: tokens.colors.bg,
    padding: tokens.spacing.lg,
    paddingTop: tokens.layout.safeTop,
  },
  iconContainer: {
    alignItems: 'center',
    marginBottom: tokens.spacing.lg,
  },
  title: {
    fontFamily: 'Cormorant',
    fontSize: tokens.typography.sizes.display,
    fontWeight: String(tokens.typography.fontWeights.light) as any,
    color: tokens.colors.textPrimary,
    marginBottom: tokens.spacing.sm,
    textAlign: 'center',
  },
  subtitle: {
    fontFamily: 'Montserrat',
    fontSize: tokens.typography.sizes.body,
    color: tokens.colors.textSecondary,
    textAlign: 'center',
    marginBottom: tokens.spacing.xl,
  },
  cards: {
    gap: tokens.spacing.md,
    marginBottom: tokens.spacing.xl,
  },
  cardLabel: {
    fontFamily: 'Montserrat-Medium',
    fontSize: tokens.typography.sizes.xs,
    color: tokens.colors.textSecondary,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: tokens.spacing.xs,
  },
  cardValue: {
    fontFamily: 'Cormorant',
    fontSize: tokens.typography.sizes.heading,
    fontWeight: String(tokens.typography.fontWeights.light) as any,
    color: tokens.colors.gold,
  },
  button: {
    width: '100%',
  },
});
