import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Switch } from 'react-native';
import { tokens } from '../lib/tokens';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { ComingSoonModal } from '../../components/ComingSoonModal';
import { useAppStore } from '../../store/useAppStore';
import { User, Bell, Shield, Info, LogOut, Star } from 'lucide-react-native';

/**
 * Profile/Settings Screen - Main App Tab 4
 * 
 * User info, settings, and "Coming Soon" for premium features.
 * Copy from design/ux-writing.md
 */

export default function ProfileScreen() {
  const userProfile = useAppStore((state) => state.userProfile);
  
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  
  const handleUpgradePress = () => {
    setModalVisible(true);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Profile</Text>
      
      <Card style={styles.profileCard}>
        <View style={styles.profileHeader}>
          <View style={styles.avatarContainer}>
            <User size={32} color={tokens.colors.gold} strokeWidth={1.5} />
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>{userProfile.name || 'User'}</Text>
            <View style={styles.subscriptionBadge}>
              <Badge 
                variant="stellr-plus" 
                label={isSubscriber ? 'Stellr+' : 'Free'} 
              />
            </View>
          </View>
        </View>
        
        <View style={styles.signsContainer}>
          <View style={styles.signItem}>
            <Text style={styles.signLabel}>Sun</Text>
            <Text style={styles.signValue}>{userProfile.sunSign || '—'}</Text>
          </View>
          <View style={styles.signItem}>
            <Text style={styles.signLabel}>Moon</Text>
            <Text style={styles.signValue}>{userProfile.moonSign || '—'}</Text>
          </View>
          <View style={styles.signItem}>
            <Text style={styles.signLabel}>Rising</Text>
            <Text style={styles.signValue}>{userProfile.risingSign || '—'}</Text>
          </View>
        </View>
      </Card>
      
      <Card style={styles.upgradeCard}>
        <View style={styles.upgradeHeader}>
          <Star size={24} color={tokens.colors.gold} strokeWidth={1.5} />
          <Text style={styles.upgradeTitle}>Unlock Stellr+</Text>
        </View>
        <Text style={styles.upgradeBody}>
          Go beyond your Big 3. Get full birth chart, compatibility reports, transit alerts, and more.
        </Text>
        <Button
          variant="primary"
          onPress={handleUpgradePress}
          style={styles.upgradeCta}
        >
          Unlock Stellr+
        </Button>
        <Text style={styles.pricing}>
          Coming soon
        </Text>
      </Card>
      
      <Text style={styles.sectionTitle}>Settings</Text>
      
      <Card style={styles.settingCard}>
        <View style={styles.settingRow}>
          <View style={styles.settingLeft}>
            <Bell size={20} color={tokens.colors.textSecondary} strokeWidth={1.5} />
            <Text style={styles.settingLabel}>Notifications</Text>
          </View>
          <Switch
            value={notificationsEnabled}
            onValueChange={setNotificationsEnabled}
            trackColor={{ false: tokens.colors.border, true: tokens.colors.goldDim }}
            thumbColor={notificationsEnabled ? tokens.colors.gold : tokens.colors.textMuted}
          />
        </View>
      </Card>
      
      <Button
        variant="secondary"
        onPress={() => {}}
        style={styles.settingButton}
      >
        <Shield size={20} color={tokens.colors.gold} strokeWidth={1.5} />
        <Text style={styles.settingButtonText}>Privacy</Text>
      </Button>
      
      <Button
        variant="secondary"
        onPress={() => {}}
        style={styles.settingButton}
      >
        <Info size={20} color={tokens.colors.gold} strokeWidth={1.5} />
        <Text style={styles.settingButtonText}>About Stellr</Text>
      </Button>
      
      <Button
        variant="ghost"
        onPress={() => {}}
        style={styles.logoutButton}
      >
        <LogOut size={20} color={tokens.colors.textMuted} strokeWidth={1.5} />
        <Text style={styles.logoutButtonText}>Logout</Text>
      </Button>
      
      <Text style={styles.version}>Version 1.0.0</Text>
      
      <ComingSoonModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
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
  title: {
    fontFamily: 'Cormorant',
    fontSize: tokens.typography.sizes.headingLg,
    fontWeight: String(tokens.typography.fontWeights.light) as any,
    color: tokens.colors.textPrimary,
    marginBottom: tokens.spacing.lg,
  },
  profileCard: {
    marginBottom: tokens.spacing.lg,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: tokens.spacing.lg,
  },
  avatarContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: tokens.colors.surface2,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: tokens.spacing.md,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontFamily: 'Cormorant',
    fontSize: tokens.typography.sizes.subheading,
    fontWeight: String(tokens.typography.fontWeights.light) as any,
    color: tokens.colors.textPrimary,
    marginBottom: tokens.spacing.xs,
  },
  subscriptionBadge: {
    alignSelf: 'flex-start',
  },
  signsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: tokens.spacing.md,
    borderTopWidth: 1,
    borderTopColor: tokens.colors.border,
  },
  signItem: {
    alignItems: 'center',
  },
  signLabel: {
    fontFamily: 'Montserrat-Medium',
    fontSize: tokens.typography.sizes.xs,
    color: tokens.colors.textSecondary,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: tokens.spacing.xs,
  },
  signValue: {
    fontFamily: 'Cormorant',
    fontSize: tokens.typography.sizes.subheading,
    fontWeight: String(tokens.typography.fontWeights.light) as any,
    color: tokens.colors.gold,
  },
  upgradeCard: {
    marginBottom: tokens.spacing.xl,
    backgroundColor: tokens.colors.surface2,
  },
  upgradeHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: tokens.spacing.sm,
    marginBottom: tokens.spacing.md,
  },
  upgradeTitle: {
    fontFamily: 'Cormorant',
    fontSize: tokens.typography.sizes.subheading,
    fontWeight: String(tokens.typography.fontWeights.light) as any,
    color: tokens.colors.textPrimary,
  },
  upgradeBody: {
    fontFamily: 'Montserrat',
    fontSize: tokens.typography.sizes.body,
    color: tokens.colors.textSecondary,
    lineHeight: tokens.typography.lineHeights.relaxed * tokens.typography.sizes.body,
    marginBottom: tokens.spacing.md,
  },
  upgradeCta: {
    width: '100%',
    marginBottom: tokens.spacing.sm,
  },
  pricing: {
    fontFamily: 'Montserrat',
    fontSize: tokens.typography.sizes.xs,
    color: tokens.colors.textMuted,
    textAlign: 'center',
  },
  sectionTitle: {
    fontFamily: 'Montserrat-Medium',
    fontSize: tokens.typography.sizes.subheading,
    color: tokens.colors.textSecondary,
    marginBottom: tokens.spacing.md,
  },
  settingCard: {
    marginBottom: tokens.spacing.sm,
  },
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: tokens.spacing.md,
  },
  settingLabel: {
    fontFamily: 'Montserrat',
    fontSize: tokens.typography.sizes.body,
    color: tokens.colors.textPrimary,
  },
  settingButton: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: tokens.spacing.md,
    marginBottom: tokens.spacing.sm,
    paddingHorizontal: tokens.spacing.md,
  },
  settingButtonText: {
    fontFamily: 'Montserrat',
    fontSize: tokens.typography.sizes.body,
    color: tokens.colors.gold,
  },
  logoutButton: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: tokens.spacing.sm,
    marginTop: tokens.spacing.xl,
    marginBottom: tokens.spacing.lg,
  },
  logoutButtonText: {
    fontFamily: 'Montserrat',
    fontSize: tokens.typography.sizes.body,
    color: tokens.colors.textMuted,
  },
  version: {
    fontFamily: 'Montserrat',
    fontSize: tokens.typography.sizes.xs,
    color: tokens.colors.textMuted,
    textAlign: 'center',
    marginBottom: tokens.layout.safeBottom,
  },
});
