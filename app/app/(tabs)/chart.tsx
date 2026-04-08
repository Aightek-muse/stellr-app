import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { tokens } from '../../lib/tokens';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { Paywall } from '../../components/Paywall';
import { useAppStore } from '../../store/useAppStore';
import { useRouter } from 'expo-router';
import { Lock, Star, Heart, Zap, Briefcase, Compass } from 'lucide-react-native';

/**
 * Full Chart Screen - Main App Tab 3 (Locked - Stellr+)
 * 
 * Feature preview with upgrade CTA.
 * Copy from design/ux-writing.md
 */

export default function ChartScreen() {
  const router = useRouter();
  const subscription = useAppStore((state) => state.subscription);
  const checkSubscription = useAppStore((state) => state.checkSubscription);
  const purchaseSubscription = useAppStore((state) => state.purchaseSubscription);
  
  const [paywallVisible, setPaywallVisible] = useState(false);
  
  // Check subscription status on mount
  useEffect(() => {
    checkSubscription();
  }, []);
  
  const isSubscriber = subscription?.isSubscriber ?? false;
  
  if (!isSubscriber) {
    return (
    <View style={styles.container}>
      <Card style={styles.lockCard}>
        <View style={styles.badgeContainer}>
          <Badge variant="locked" />
        </View>
        
        <View style={styles.iconContainer}>
          <Lock size={56} color={tokens.colors.goldDim} strokeWidth={1.5} />
        </View>
        
        <Text style={styles.headline}>Your Big 3 is the beginning. This is the whole story.</Text>
        
        <Text style={styles.body}>
          Stellr+ reveals all 10 planets — each one governing a different part of how you think, love, act, and grow.
        </Text>
        
        <View style={styles.featureList}>
          <View style={styles.feature}>
            <Star size={16} color={tokens.colors.gold} strokeWidth={1.5} />
            <Text style={styles.featureText}>
              <Text style={styles.featureLabel}>Sun</Text> — Your core identity and life force
            </Text>
          </View>
          <View style={styles.feature}>
            <Heart size={16} color={tokens.colors.gold} strokeWidth={1.5} />
            <Text style={styles.featureText}>
              <Text style={styles.featureLabel}>Moon</Text> — Your emotional nature and inner self
            </Text>
          </View>
          <View style={styles.feature}>
            <Compass size={16} color={tokens.colors.gold} strokeWidth={1.5} />
            <Text style={styles.featureText}>
              <Text style={styles.featureLabel}>Rising</Text> — How others experience you
            </Text>
          </View>
          <View style={styles.feature}>
            <Zap size={16} color={tokens.colors.gold} strokeWidth={1.5} />
            <Text style={styles.featureText}>
              <Text style={styles.featureLabel}>Mercury</Text> — How you think and communicate
            </Text>
          </View>
          <View style={styles.feature}>
            <Heart size={16} color={tokens.colors.lavender} strokeWidth={1.5} />
            <Text style={styles.featureText}>
              <Text style={styles.featureLabel}>Venus</Text> — What you love and find beautiful
            </Text>
          </View>
          <View style={styles.feature}>
            <Zap size={16} color={tokens.colors.lavender} strokeWidth={1.5} />
            <Text style={styles.featureText}>
              <Text style={styles.featureLabel}>Mars</Text> — What drives you and how you fight
            </Text>
          </View>
          <View style={styles.feature}>
            <Star size={16} color={tokens.colors.lavender} strokeWidth={1.5} />
            <Text style={styles.featureText}>
              <Text style={styles.featureLabel}>Jupiter</Text> — Where luck and growth find you
            </Text>
          </View>
          <View style={styles.feature}>
            <Briefcase size={16} color={tokens.colors.lavender} strokeWidth={1.5} />
            <Text style={styles.featureText}>
              <Text style={styles.featureLabel}>Saturn</Text> — What you're here to learn
            </Text>
          </View>
        </View>
        
        <Button
          variant="primary"
          onPress={() => setPaywallVisible(true)}
          style={styles.cta}
        >
          Unlock My Full Chart
        </Button>
        
        <Button
          variant="ghost"
          onPress={() => router.back()}
          style={styles.escape}
        >
          Maybe later
        </Button>
      </Card>
      
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
    </View>
  );
  
  // Subscriber view - show full chart
  return (
    <View style={styles.container}>
      <Text style={styles.subscriberText}>Full Chart (Subscriber Content)</Text>
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
  lockCard: {
    width: '100%',
    alignItems: 'center',
    position: 'relative',
  },
  badgeContainer: {
    position: 'absolute',
    top: tokens.spacing.md,
    right: tokens.spacing.md,
  },
  iconContainer: {
    marginBottom: tokens.spacing.lg,
    marginTop: tokens.spacing.lg,
  },
  headline: {
    fontFamily: 'Cormorant',
    fontSize: tokens.typography.sizes.headingLg,
    fontWeight: String(tokens.typography.fontWeights.light) as any,
    color: tokens.colors.textPrimary,
    textAlign: 'center',
    marginBottom: tokens.spacing.md,
    lineHeight: tokens.typography.lineHeights.tight * tokens.typography.sizes.headingLg,
  },
  body: {
    fontFamily: 'Montserrat',
    fontSize: tokens.typography.sizes.body,
    color: tokens.colors.textSecondary,
    textAlign: 'center',
    lineHeight: tokens.typography.lineHeights.relaxed * tokens.typography.sizes.body,
    marginBottom: tokens.spacing.lg,
  },
  featureList: {
    width: '100%',
    marginBottom: tokens.spacing.xl,
  },
  feature: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: tokens.spacing.sm,
    marginBottom: tokens.spacing.sm,
  },
  featureLabel: {
    fontFamily: 'Montserrat-Medium',
    color: tokens.colors.textPrimary,
  },
  featureText: {
    fontFamily: 'Montserrat',
    fontSize: tokens.typography.sizes.sm,
    color: tokens.colors.textSecondary,
    lineHeight: tokens.typography.lineHeights.relaxed * tokens.typography.sizes.sm,
    flex: 1,
  },
  cta: {
    width: '100%',
    marginBottom: tokens.spacing.sm,
  },
  escape: {
    width: '100%',
  },
  subscriberText: {
    fontFamily: 'Cormorant',
    fontSize: tokens.typography.sizes.headingLg,
    color: tokens.colors.textPrimary,
    textAlign: 'center',
    marginTop: tokens.spacing.xl,
  },
});
