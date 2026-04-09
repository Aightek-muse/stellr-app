import React, { useState } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { tokens } from '../../lib/tokens';
import { Button } from '../../../components/ui/Button';
import { Input } from '../../../components/ui/Input';
import { useRouter } from 'expo-router';
import { useAppStore } from '../../store/useAppStore';

/**
 * Name Input Screen - Onboarding Step 2
 * 
 * Capture name for personalization. Build rapport before questions.
 * Copy from design/ux-writing.md
 */
export default function NameInputScreen() {
  const router = useRouter();
  const updateUserProfile = useAppStore((state) => state.updateUserProfile);
  const [name, setName] = useState('');

  const handleContinue = () => {
    if (name.trim()) {
      updateUserProfile({ name: name.trim() });
      router.push('/onboarding/question');
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.content}>
        <Text style={styles.prompt}>First, what should we call you?</Text>
        
        <Input
          placeholder="Your name"
          value={name}
          onChangeText={setName}
          autoCapitalize="words"
          style={styles.input}
        />
        
        <Button
          variant="primary"
          onPress={handleContinue}
          disabled={!name.trim()}
          style={styles.cta}
        >
          Continue
        </Button>
        
        <Text style={styles.trustLine}>
          No email needed yet. Just your name.
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: tokens.colors.bg,
  },
  content: {
    flex: 1,
    padding: tokens.spacing.lg,
    paddingTop: tokens.layout.safeTop,
    justifyContent: 'center',
  },
  prompt: {
    fontFamily: 'Cormorant',
    fontSize: tokens.typography.sizes.display,
    fontWeight: String(tokens.typography.fontWeights.regular) as any,
    color: tokens.colors.textPrimary,
    marginBottom: tokens.spacing.xl,
    textAlign: 'center',
  },
  input: {
    marginBottom: tokens.spacing.lg,
  },
  cta: {
    width: '100%',
    marginBottom: tokens.spacing.md,
  },
  trustLine: {
    fontFamily: 'Montserrat',
    fontSize: tokens.typography.sizes.xs,
    color: tokens.colors.textMuted,
    textAlign: 'center',
  },
});
