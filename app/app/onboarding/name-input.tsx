import React, { useState } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { tokens } from '../../lib/tokens';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { useRouter } from 'expo-router';
import { useAppStore } from '../../store/useAppStore';

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
        <Text style={styles.title}>What's your name?</Text>
        <Text style={styles.subtitle}>
          We'll use this to personalize your readings
        </Text>
        
        <Input
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
          autoCapitalize="words"
          style={styles.input}
        />
        
        <Button
          variant="primary"
          onPress={handleContinue}
          disabled={!name.trim()}
          style={styles.button}
        >
          Continue
        </Button>
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
  title: {
    fontFamily: 'Cormorant',
    fontSize: tokens.typography.sizes.display,
    fontWeight: String(tokens.typography.fontWeights.light) as any,
    color: tokens.colors.textPrimary,
    marginBottom: tokens.spacing.md,
  },
  subtitle: {
    fontFamily: 'Montserrat',
    fontSize: tokens.typography.sizes.body,
    color: tokens.colors.textSecondary,
    marginBottom: tokens.spacing.xl,
  },
  input: {
    marginBottom: tokens.spacing.lg,
  },
  button: {
    width: '100%',
  },
});
