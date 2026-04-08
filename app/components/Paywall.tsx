import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, ScrollView, TouchableOpacity } from 'react-native';
import { tokens } from '../lib/tokens';
import { Button } from './ui/Button';
import { Star, Lock, X } from 'lucide-react-native';

export interface PaywallProps {
  visible: boolean;
  onClose: () => void;
  onPurchase: () => void;
  onRestore?: () => void;
}

/**
 * Paywall Modal - Full-screen premium upgrade screen
 * 
 * Features:
 * - Premium illustration with gold accents
 * - 6 key benefits
 * - Pricing toggle (Monthly/Annual)
 * - Trust indicators
 */
export function Paywall({ visible, onClose, onPurchase, onRestore }: PaywallProps) {
  const [isAnnual, setIsAnnual] = useState(true);

  const features = [
    { icon: '🌌', text: 'Full birth chart — all 10 planets' },
    { icon: '💞', text: 'Compatibility with anyone' },
    { icon: '⚡', text: 'Transit alerts before they hit' },
    { icon: '💼', text: 'Career & life path guidance' },
    { icon: '↩', text: 'Retake your questions anytime' },
    { icon: '🖼', text: 'Export your chart as an image' },
  ];

  const monthlyPrice = '₺29.99/month';
  const annualPrice = '₺199.99/year';
  const savings = 'Save 44%';

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="fullScreen"
      onRequestClose={onClose}
    >
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        {/* Close button */}
        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
          <X size={24} color={tokens.colors.textMuted} strokeWidth={1.5} />
        </TouchableOpacity>

        {/* Header */}
        <View style={styles.header}>
          <View style={styles.starContainer}>
            <Star size={48} color={tokens.colors.gold} strokeWidth={1.5} fill={tokens.colors.gold} />
          </View>
          <Text style={styles.headline}>This lives inside Stellr+</Text>
          <Text style={styles.body}>
            You've seen your Big 3. Stellr+ takes you further...
          </Text>
        </View>

        {/* Features */}
        <View style={styles.featuresContainer}>
          {features.map((feature, index) => (
            <View key={index} style={styles.feature}>
              <Text style={styles.featureIcon}>{feature.icon}</Text>
              <Text style={styles.featureText}>{feature.text}</Text>
            </View>
          ))}
        </View>

        {/* Pricing Toggle */}
        <View style={styles.pricingContainer}>
          <View style={styles.pricingToggle}>
            <TouchableOpacity
              style={[styles.pricingOption, !isAnnual && styles.pricingOptionActive]}
              onPress={() => setIsAnnual(false)}
            >
              <Text style={[styles.pricingText, !isAnnual && styles.pricingTextActive]}>
                Monthly
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.pricingOption, isAnnual && styles.pricingOptionActive]}
              onPress={() => setIsAnnual(true)}
            >
              <Text style={[styles.pricingText, isAnnual && styles.pricingTextActive]}>
                Annual
              </Text>
              {isAnnual && <View style={styles.savingsBadge}><Text style={styles.savingsText}>{savings}</Text></View>}
            </TouchableOpacity>
          </View>

          <Text style={styles.price}>
            {isAnnual ? annualPrice : monthlyPrice}
          </Text>
        </View>

        {/* CTA */}
        <Button
          variant="primary"
          onPress={onPurchase}
          style={styles.cta}
        >
          Start Free Trial
        </Button>

        {/* Trust indicators */}
        <View style={styles.trustContainer}>
          <View style={styles.trustItem}>
            <Lock size={14} color={tokens.colors.textMuted} strokeWidth={1.5} />
            <Text style={styles.trustText}>7-day free trial</Text>
          </View>
          <View style={styles.trustItem}>
            <Text style={styles.trustText}>Cancel anytime</Text>
          </View>
        </View>

        {/* Restore purchases */}
        {onRestore && (
          <TouchableOpacity onPress={onRestore} style={styles.restoreButton}>
            <Text style={styles.restoreText}>Restore Purchases</Text>
          </TouchableOpacity>
        )}
      </ScrollView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: tokens.colors.bg,
  },
  content: {
    padding: tokens.spacing.lg,
    paddingTop: tokens.layout.safeTop + tokens.spacing.xl,
  },
  closeButton: {
    position: 'absolute',
    top: tokens.layout.safeTop + tokens.spacing.md,
    right: tokens.spacing.md,
    padding: tokens.spacing.sm,
    zIndex: 10,
  },
  header: {
    alignItems: 'center',
    marginBottom: tokens.spacing.xl,
  },
  starContainer: {
    marginBottom: tokens.spacing.lg,
  },
  headline: {
    fontFamily: 'Cormorant',
    fontSize: tokens.typography.sizes.display,
    fontWeight: String(tokens.typography.fontWeights.light) as any,
    color: tokens.colors.textPrimary,
    textAlign: 'center',
    marginBottom: tokens.spacing.md,
    lineHeight: tokens.typography.lineHeights.tight * tokens.typography.sizes.display,
  },
  body: {
    fontFamily: 'Montserrat',
    fontSize: tokens.typography.sizes.body,
    color: tokens.colors.textSecondary,
    textAlign: 'center',
    lineHeight: tokens.typography.lineHeights.relaxed * tokens.typography.sizes.body,
    maxWidth: 320,
  },
  featuresContainer: {
    marginBottom: tokens.spacing.xl,
  },
  feature: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: tokens.spacing.md,
    marginBottom: tokens.spacing.md,
  },
  featureIcon: {
    fontSize: 20,
  },
  featureText: {
    fontFamily: 'Montserrat',
    fontSize: tokens.typography.sizes.body,
    color: tokens.colors.textPrimary,
    flex: 1,
  },
  pricingContainer: {
    marginBottom: tokens.spacing.xl,
  },
  pricingToggle: {
    flexDirection: 'row',
    backgroundColor: tokens.colors.surface1,
    borderRadius: tokens.radius.md,
    padding: tokens.spacing.xs,
    marginBottom: tokens.spacing.md,
  },
  pricingOption: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: tokens.spacing.sm,
    borderRadius: tokens.radius.sm,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: tokens.spacing.xs,
  },
  pricingOptionActive: {
    backgroundColor: tokens.colors.surface2,
  },
  pricingText: {
    fontFamily: 'Montserrat-Medium',
    fontSize: tokens.typography.sizes.body,
    color: tokens.colors.textSecondary,
  },
  pricingTextActive: {
    color: tokens.colors.textPrimary,
  },
  savingsBadge: {
    backgroundColor: tokens.colors.gold,
    paddingHorizontal: tokens.spacing.xs,
    paddingVertical: 2,
    borderRadius: tokens.radius.xs,
  },
  savingsText: {
    fontFamily: 'Montserrat-Medium',
    fontSize: tokens.typography.sizes.xs,
    color: tokens.colors.bg,
  },
  price: {
    fontFamily: 'Cormorant',
    fontSize: tokens.typography.sizes.headingLg,
    fontWeight: String(tokens.typography.fontWeights.light) as any,
    color: tokens.colors.gold,
    textAlign: 'center',
  },
  cta: {
    width: '100%',
    marginBottom: tokens.spacing.md,
  },
  trustContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: tokens.spacing.lg,
    marginBottom: tokens.spacing.lg,
  },
  trustItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: tokens.spacing.xs,
  },
  trustText: {
    fontFamily: 'Montserrat',
    fontSize: tokens.typography.sizes.sm,
    color: tokens.colors.textMuted,
  },
  restoreButton: {
    alignItems: 'center',
    paddingVertical: tokens.spacing.md,
  },
  restoreText: {
    fontFamily: 'Montserrat',
    fontSize: tokens.typography.sizes.sm,
    color: tokens.colors.textMuted,
    textDecorationLine: 'underline',
  },
});
