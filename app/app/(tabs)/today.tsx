import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { tokens } from '../lib/tokens';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { useAppStore } from '../../store/useAppStore';
import { Star, TrendingUp, TrendingDown, Smile } from 'lucide-react-native';

/**
 * Daily Reading Screen - Main App Tab 2
 * 
 * Full daily horoscope with lucky/avoid info and mood indicator.
 * Copy from design/ux-writing.md
 */

export default function TodayScreen() {
  const userProfile = useAppStore((state) => state.userProfile);
  
  const today = new Date();
  const dateStr = today.toLocaleDateString('en-US', { 
    weekday: 'long', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.date}>{dateStr}</Text>
      
      <Card style={styles.mainCard}>
        <View style={styles.cardHeader}>
          <Star size={24} color={tokens.colors.gold} strokeWidth={1.5} />
          <Text style={styles.cardTitle}>Today's Energy</Text>
        </View>
        
        <Text style={styles.mainReading}>
          Today's energy favours depth over surface. You might feel pulled between staying in your comfort zone and exploring something unfamiliar. This is a day for introspection, not performance.
        </Text>
        
        <Text style={styles.mainReading}>
          Your {userProfile.sunSign || 'Sun'} energy is particularly strong this morning. Use this clarity to make decisions you've been putting off. By evening, the Moon's shift will bring a softer, more reflective mood.
        </Text>
      </Card>
      
      <View style={styles.infoRow}>
        <Card style={styles.infoCard}>
          <View style={styles.infoHeader}>
            <TrendingUp size={20} color={tokens.colors.success} strokeWidth={1.5} />
            <Text style={styles.infoLabel}>Lucky</Text>
          </View>
          <Text style={styles.infoValue}>Deep conversations</Text>
          <Text style={styles.infoSubtext}>One honest talk > ten surface chats</Text>
        </Card>
        
        <Card style={styles.infoCard}>
          <View style={styles.infoHeader}>
            <TrendingDown size={20} color={tokens.colors.error} strokeWidth={1.5} />
            <Text style={styles.infoLabel}>Avoid</Text>
          </View>
          <Text style={styles.infoValue}>Rushing decisions</Text>
          <Text style={styles.infoSubtext}>Sleep on it if you can</Text>
        </Card>
      </View>
      
      <Card style={styles.moodCard}>
        <View style={styles.moodHeader}>
          <Smile size={20} color={tokens.colors.lavender} strokeWidth={1.5} />
          <Text style={styles.moodLabel}>Your Mood</Text>
        </View>
        <Text style={styles.moodValue}>Contemplative</Text>
        <Text style={styles.moodSubtext}>
          You're in a reflective state today. Honor it — this is where real insights come from.
        </Text>
      </Card>
      
      <Button
        variant="secondary"
        onPress={() => {}}
        style={styles.shareButton}
      >
        Share Today's Reading
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
  },
  date: {
    fontFamily: 'Cormorant',
    fontSize: tokens.typography.sizes.headingLg,
    fontWeight: String(tokens.typography.fontWeights.light) as any,
    color: tokens.colors.textPrimary,
    marginBottom: tokens.spacing.lg,
  },
  mainCard: {
    marginBottom: tokens.spacing.lg,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: tokens.spacing.sm,
    marginBottom: tokens.spacing.md,
  },
  cardTitle: {
    fontFamily: 'Montserrat-Medium',
    fontSize: tokens.typography.sizes.subheading,
    color: tokens.colors.textPrimary,
  },
  mainReading: {
    fontFamily: 'Montserrat',
    fontSize: tokens.typography.sizes.body,
    color: tokens.colors.textPrimary,
    lineHeight: tokens.typography.lineHeights.loose * tokens.typography.sizes.body,
    marginBottom: tokens.spacing.md,
  },
  infoRow: {
    flexDirection: 'row',
    gap: tokens.spacing.sm,
    marginBottom: tokens.spacing.lg,
  },
  infoCard: {
    flex: 1,
    padding: tokens.spacing.md,
  },
  infoHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: tokens.spacing.xs,
    marginBottom: tokens.spacing.sm,
  },
  infoLabel: {
    fontFamily: 'Montserrat-Medium',
    fontSize: tokens.typography.sizes.sm,
    color: tokens.colors.textSecondary,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  infoValue: {
    fontFamily: 'Cormorant',
    fontSize: tokens.typography.sizes.subheading,
    fontWeight: String(tokens.typography.fontWeights.light) as any,
    color: tokens.colors.textPrimary,
    marginBottom: tokens.spacing.xs,
  },
  infoSubtext: {
    fontFamily: 'Montserrat',
    fontSize: tokens.typography.sizes.xs,
    color: tokens.colors.textMuted,
    lineHeight: tokens.typography.lineHeights.relaxed * tokens.typography.sizes.xs,
  },
  moodCard: {
    marginBottom: tokens.spacing.lg,
  },
  moodHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: tokens.spacing.xs,
    marginBottom: tokens.spacing.sm,
  },
  moodLabel: {
    fontFamily: 'Montserrat-Medium',
    fontSize: tokens.typography.sizes.sm,
    color: tokens.colors.textSecondary,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  moodValue: {
    fontFamily: 'Cormorant',
    fontSize: tokens.typography.sizes.subheading,
    fontWeight: String(tokens.typography.fontWeights.light) as any,
    color: tokens.colors.lavender,
    marginBottom: tokens.spacing.xs,
  },
  moodSubtext: {
    fontFamily: 'Montserrat',
    fontSize: tokens.typography.sizes.sm,
    color: tokens.colors.textSecondary,
    lineHeight: tokens.typography.lineHeights.relaxed * tokens.typography.sizes.sm,
  },
  shareButton: {
    width: '100%',
  },
});
