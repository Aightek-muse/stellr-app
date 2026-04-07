import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { tokens } from '../../lib/tokens';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Profile</Text>
      
      <Card>
        <Text style={styles.cardTitle}>Your Profile</Text>
        <Text style={styles.cardBody}>
          Complete your onboarding to see your birth chart details here.
        </Text>
      </Card>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Settings</Text>
        <Button variant="secondary" onPress={() => {}} style={styles.button}>
          Notifications
        </Button>
        <Button variant="secondary" onPress={() => {}} style={styles.button}>
          Privacy
        </Button>
        <Button variant="secondary" onPress={() => {}} style={styles.button}>
          About Stellr
        </Button>
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
    fontSize: tokens.typography.sizes.headingLg,
    fontWeight: String(tokens.typography.fontWeights.light) as any,
    color: tokens.colors.textPrimary,
    marginBottom: tokens.spacing.lg,
  },
  cardTitle: {
    fontFamily: 'Cormorant',
    fontSize: tokens.typography.sizes.subheading,
    fontWeight: String(tokens.typography.fontWeights.light) as any,
    color: tokens.colors.textPrimary,
    marginBottom: tokens.spacing.md,
  },
  cardBody: {
    fontFamily: 'Montserrat',
    fontSize: tokens.typography.sizes.body,
    color: tokens.colors.textSecondary,
    lineHeight: tokens.typography.lineHeights.relaxed * tokens.typography.sizes.body,
  },
  section: {
    marginTop: tokens.spacing.xl,
  },
  sectionTitle: {
    fontFamily: 'Montserrat-Medium',
    fontSize: tokens.typography.sizes.subheading,
    color: tokens.colors.textSecondary,
    marginBottom: tokens.spacing.md,
  },
  button: {
    marginBottom: tokens.spacing.sm,
  },
});
