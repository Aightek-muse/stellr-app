import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { tokens } from '../../lib/tokens';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Lock } from 'lucide-react-native';

export default function ChartScreen() {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <View style={styles.iconContainer}>
          <Lock size={48} color={tokens.colors.goldDim} strokeWidth={1.5} />
        </View>
        <Text style={styles.title}>Full Birth Chart</Text>
        <Text style={styles.subtitle}>
          Unlock your complete natal chart with planetary positions, aspects, and houses.
        </Text>
        <Button variant="primary" onPress={() => {}} style={styles.button}>
          Unlock with Stellr+
        </Button>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: tokens.colors.bg,
    padding: tokens.spacing.lg,
    paddingTop: tokens.layout.safeTop,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: '100%',
    alignItems: 'center',
  },
  iconContainer: {
    marginBottom: tokens.spacing.lg,
  },
  title: {
    fontFamily: 'Cormorant',
    fontSize: tokens.typography.sizes.headingLg,
    fontWeight: String(tokens.typography.fontWeights.light) as any,
    color: tokens.colors.textPrimary,
    marginBottom: tokens.spacing.sm,
  },
  subtitle: {
    fontFamily: 'Montserrat',
    fontSize: tokens.typography.sizes.body,
    color: tokens.colors.textSecondary,
    textAlign: 'center',
    lineHeight: tokens.typography.lineHeights.relaxed * tokens.typography.sizes.body,
    marginBottom: tokens.spacing.xl,
  },
  button: {
    width: '100%',
  },
});
