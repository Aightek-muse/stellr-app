import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { tokens } from '../../lib/tokens';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Welcome to Stellr</Text>
      <Text style={styles.subtitle}>Your cosmic companion</Text>
      
      <View style={styles.cards}>
        <Card title="Daily Reading">
          <Text style={styles.cardText}>Your daily horoscope awaits</Text>
          <Button variant="primary" onPress={() => {}} style={styles.button}>
            Read Today
          </Button>
        </Card>
        
        <Card title="Birth Chart" locked>
          <Text style={styles.cardText}>Unlock your full natal chart</Text>
          <Button variant="ghost" onPress={() => {}} style={styles.button}>
            Unlock with Stellr+
          </Button>
        </Card>
      </View>
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
  },
  title: {
    fontFamily: 'Cormorant',
    fontSize: tokens.typography.sizes.display,
    fontWeight: String(tokens.typography.fontWeights.light) as any,
    color: tokens.colors.textPrimary,
    marginBottom: tokens.spacing.xs,
  },
  subtitle: {
    fontFamily: 'Montserrat',
    fontSize: tokens.typography.sizes.body,
    color: tokens.colors.textSecondary,
    marginBottom: tokens.spacing.xl,
  },
  cards: {
    gap: tokens.spacing.lg,
  },
  cardText: {
    fontFamily: 'Montserrat',
    fontSize: tokens.typography.sizes.body,
    color: tokens.colors.textSecondary,
    marginBottom: tokens.spacing.md,
  },
  button: {
    marginTop: tokens.spacing.sm,
  },
});
