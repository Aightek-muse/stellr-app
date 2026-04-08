import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { tokens } from '../../lib/tokens';
import { Card } from '../../components/ui/Card';
import { LockedCard } from '../../components/LockedCard';
import { Paywall } from '../../components/Paywall';
import { Button } from '../../components/ui/Button';
import { useAppStore } from '../../store/useAppStore';
import { useRouter } from 'expo-router';
import { Star, Lock } from 'lucide-react-native';

/**
 * Home Dashboard - Main App Tab 1
 * 
 * The habit loop begins. Daily reading.
 * Copy from design/ux-writing.md
 */

export default function HomeScreen() {
  const router = useRouter();
  const userProfile = useAppStore((state) => state.userProfile);
  const signs = useAppStore((state) => state.signs);
  const dailyReading = useAppStore((state) => state.dailyReading);
  const loadDailyReading = useAppStore((state) => state.loadDailyReading);
  const subscription = useAppStore((state) => state.subscription);
  const checkSubscription = useAppStore((state) => state.checkSubscription);
  const purchaseSubscription = useAppStore((state) => state.purchaseSubscription);
  
  const [paywallVisible, setPaywallVisible] = useState(false);
  
  // Check subscription status on mount
  useEffect(() => {
    checkSubscription();
  }, []);
  
  // Load daily reading when signs are available
  useEffect(() => {
    if (signs?.sun?.sign) {
      loadDailyReading(signs.sun.sign);
    }
  }, [signs?.sun?.sign]);
  
  const isSubscriber = subscription?.isSubscriber ?? false;
  
  const handleLockedFeaturePress = () => {
    if (!isSubscriber) {
      setPaywallVisible(true);
    }
  };
  
  // Get current date
  const today = new Date();
  const dateStr = today.toLocaleDateString('en-US', { 
    weekday: 'short', 
    month: 'short', 
    day: 'numeric' 
  });
  
  // Determine greeting based on time
  const hour = today.getHours();
  const greeting = hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening';

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.greeting}>{greeting}, {userProfile.name || 'friend'}</Text>
      <Text style={styles.date}>{dateStr}</Text>
      
      <Card style={styles.dailyCard}>
        <View style={styles.dailyHeader}>
          <Star size={20} color={tokens.colors.gold} strokeWidth={1.5} />
          <Text style={styles.dailyTitle}>Your reading for {dateStr}</Text>
        </View>
        {dailyReading ? (
          <>
            <Text style={styles.dailyTitle}>{dailyReading.title}</Text>
            <Text style={styles.dailyBody}>{dailyReading.content}</Text>
          </>
        ) : (
          <Text style={styles.dailyBody}>
            Today's energy favours depth over surface. You might feel pulled between staying in your comfort zone and exploring something unfamiliar. Trust your instincts — they're sharper than usual right now.
          </Text>
        )}
        <Button
          variant="ghost"
          onPress={() => router.push('/today')}
          style={styles.readMoreButton}
        >
          Read full forecast →
        </Button>
      </Card>
      
      <View style={styles.quickActions}>
        <Button
          variant="secondary"
          onPress={() => router.push('/chart')}
          style={styles.quickAction}
        >
          Full Chart
        </Button>
        <Button
          variant="secondary"
          onPress={() => {}}
          style={styles.quickAction}
        >
          Compatibility
        </Button>
        <Button
          variant="secondary"
          onPress={() => router.push('/onboarding/question')}
          style={styles.quickAction}
        >
          Retake
        </Button>
      </View>
      
      <Text style={styles.sectionTitle}>For you this week</Text>
      
      <Card>
        <Text style={styles.insightTitle}>Career momentum building</Text>
        <Text style={styles.insightBody}>
          A project you've been nurturing is ready to go public. The stars support bold moves in your professional sphere.
        </Text>
      </Card>
      
      <Card>
        <Text style={styles.insightTitle}>Relationship clarity</Text>
        <Text style={styles.insightBody}>
          Someone in your life is about to show you where they really stand. Pay attention to actions, not words.
        </Text>
      </Card>
      
      <LockedCard
        onPress={handleLockedFeaturePress}
        title="Compatibility"
      >
        <Text style={styles.insightTitle}>Your compatibility with [Partner]</Text>
        <Text style={styles.insightBody}>
          See where your energies align, where friction tends to appear — and what your combination uniquely creates together.
        </Text>
      </LockedCard>
      
      <Paywall
        visible={paywallVisible}
        onClose={() => setPaywallVisible(false)}
        onPurchase={async () => {
          await purchaseSubscription();
          setPaywallVisible(false);
        }}
        onRestore={async () => {
          await useAppStore.getState().restorePurchases();
          setPaywallVisible(false);
        }}
      />
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
  greeting: {
    fontFamily: 'Cormorant',
    fontSize: tokens.typography.sizes.display,
    fontWeight: String(tokens.typography.fontWeights.light) as any,
    color: tokens.colors.textPrimary,
    marginBottom: tokens.spacing.xs,
  },
  date: {
    fontFamily: 'Montserrat',
    fontSize: tokens.typography.sizes.sm,
    color: tokens.colors.textSecondary,
    marginBottom: tokens.spacing.xl,
  },
  dailyCard: {
    marginBottom: tokens.spacing.lg,
  },
  dailyHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: tokens.spacing.sm,
    marginBottom: tokens.spacing.md,
  },
  dailyTitle: {
    fontFamily: 'Montserrat-Medium',
    fontSize: tokens.typography.sizes.subheading,
    color: tokens.colors.textPrimary,
  },
  dailyBody: {
    fontFamily: 'Montserrat',
    fontSize: tokens.typography.sizes.body,
    color: tokens.colors.textSecondary,
    lineHeight: tokens.typography.lineHeights.relaxed * tokens.typography.sizes.body,
    marginBottom: tokens.spacing.md,
  },
  readMoreButton: {
    alignSelf: 'flex-start',
    paddingHorizontal: tokens.spacing.sm,
  },
  quickActions: {
    flexDirection: 'row',
    gap: tokens.spacing.sm,
    marginBottom: tokens.spacing.xl,
  },
  quickAction: {
    flex: 1,
  },
  sectionTitle: {
    fontFamily: 'Montserrat-Medium',
    fontSize: tokens.typography.sizes.subheading,
    color: tokens.colors.textSecondary,
    marginBottom: tokens.spacing.md,
  },
  insightTitle: {
    fontFamily: 'Cormorant',
    fontSize: tokens.typography.sizes.subheading,
    fontWeight: String(tokens.typography.fontWeights.light) as any,
    color: tokens.colors.textPrimary,
    marginBottom: tokens.spacing.sm,
  },
  insightBody: {
    fontFamily: 'Montserrat',
    fontSize: tokens.typography.sizes.body,
    color: tokens.colors.textSecondary,
    lineHeight: tokens.typography.lineHeights.relaxed * tokens.typography.sizes.body,
  },
});
