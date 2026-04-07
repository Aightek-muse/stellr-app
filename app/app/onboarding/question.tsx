import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { tokens } from '../../lib/tokens';
import { Button } from '../../components/ui/Button';
import { AnswerOption } from '../../components/ui/AnswerOption';
import { ProgressBar } from '../../components/ui/ProgressBar';
import { useRouter } from 'expo-router';

// Placeholder questions - will be implemented later
const QUESTIONS = [
  {
    id: 1,
    text: 'What are you most curious about?',
    options: [
      { label: 'My personality traits', description: 'Understand your core self' },
      { label: 'My relationships', description: 'Love and compatibility' },
      { label: 'My career path', description: 'Purpose and success' },
      { label: 'Everything', description: 'Full cosmic blueprint' },
    ],
  },
];

export default function QuestionScreen() {
  const router = useRouter();
  const [currentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const handleContinue = () => {
    if (selectedAnswer) {
      // Move to next question or processing
      router.push('/onboarding/processing');
    }
  };

  const question = QUESTIONS[currentQuestion];
  const progress = (currentQuestion + 1) / QUESTIONS.length;

  return (
    <View style={styles.container}>
      <ProgressBar
        progress={progress}
        totalSteps={QUESTIONS.length}
        currentStep={currentQuestion}
      />
      
      <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
        <Text style={styles.title}>{question.text}</Text>
        
        <View style={styles.options}>
          {question.options.map((option, index) => (
            <AnswerOption
              key={index}
              label={option.label}
              description={option.description}
              selected={selectedAnswer === option.label}
              onSelect={() => setSelectedAnswer(option.label)}
            />
          ))}
        </View>
      </ScrollView>
      
      <View style={styles.footer}>
        <Button
          variant="primary"
          onPress={handleContinue}
          disabled={!selectedAnswer}
          style={styles.button}
        >
          Continue
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: tokens.colors.bg,
  },
  scroll: {
    flex: 1,
  },
  content: {
    padding: tokens.spacing.lg,
    paddingTop: tokens.spacing.xl,
  },
  title: {
    fontFamily: 'Cormorant',
    fontSize: tokens.typography.sizes.headingLg,
    fontWeight: String(tokens.typography.fontWeights.light) as any,
    color: tokens.colors.textPrimary,
    marginBottom: tokens.spacing.xl,
  },
  options: {
    marginBottom: tokens.spacing.lg,
  },
  footer: {
    padding: tokens.spacing.lg,
    paddingBottom: tokens.layout.safeBottom,
  },
  button: {
    width: '100%',
  },
});
