import React from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import { tokens } from '../lib/tokens';
import { Button } from './ui/Button';
import { Star, X } from 'lucide-react-native';

export interface ComingSoonModalProps {
  visible: boolean;
  onClose: () => void;
}

/**
 * ComingSoonModal - Simple informational modal for TestFlight
 * 
 * No payment integration - just lets users know features are coming soon.
 */
export function ComingSoonModal({ visible, onClose }: ComingSoonModalProps) {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="fullScreen"
      onRequestClose={onClose}
    >
      <View style={styles.container}>
        {/* Close button */}
        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
          <X size={24} color={tokens.colors.textMuted} strokeWidth={1.5} />
        </TouchableOpacity>

        {/* Content */}
        <View style={styles.content}>
          <View style={styles.starContainer}>
            <Star size={64} color={tokens.colors.gold} strokeWidth={1.5} fill={tokens.colors.gold} />
          </View>
          
          <Text style={styles.headline}>Stellr+ Coming Soon</Text>
          
          <Text style={styles.body}>
            Full birth charts, compatibility, transit alerts, and more.
          </Text>
          
          {/* Email input placeholder (UI only, no functionality) */}
          <View style={styles.emailContainer}>
            <Text style={styles.emailLabel}>Get notified at launch</Text>
            <View style={styles.emailInput}>
              <Text style={styles.emailPlaceholder}>your@email.com</Text>
            </View>
          </View>
          
          <Button
            variant="primary"
            onPress={onClose}
            style={styles.cta}
          >
            Got it
          </Button>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: tokens.colors.bg,
  },
  closeButton: {
    position: 'absolute',
    top: tokens.layout.safeTop + tokens.spacing.md,
    right: tokens.spacing.md,
    padding: tokens.spacing.sm,
    zIndex: 10,
  },
  content: {
    flex: 1,
    padding: tokens.spacing.lg,
    paddingTop: tokens.layout.safeTop + tokens.spacing.xl * 2,
    alignItems: 'center',
  },
  starContainer: {
    marginBottom: tokens.spacing.xl,
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
    marginBottom: tokens.spacing.xl,
  },
  emailContainer: {
    width: '100%',
    marginBottom: tokens.spacing.xl,
  },
  emailLabel: {
    fontFamily: 'Montserrat',
    fontSize: tokens.typography.sizes.sm,
    color: tokens.colors.textSecondary,
    marginBottom: tokens.spacing.sm,
    textAlign: 'center',
  },
  emailInput: {
    backgroundColor: tokens.colors.surface1,
    borderRadius: tokens.radius.md,
    paddingVertical: tokens.spacing.md,
    paddingHorizontal: tokens.spacing.md,
    borderWidth: 1,
    borderColor: tokens.colors.border,
  },
  emailPlaceholder: {
    fontFamily: 'Montserrat',
    fontSize: tokens.typography.sizes.body,
    color: tokens.colors.textMuted,
  },
  cta: {
    width: '100%',
    maxWidth: 320,
  },
});
