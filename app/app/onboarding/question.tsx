import React, { useState, useMemo } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { tokens } from '../../lib/tokens';
import { AnswerOption } from '../../../components/ui/AnswerOption';
import { ProgressBar } from '../../../components/ui/ProgressBar';
import { useRouter } from 'expo-router';
import { useAppStore } from '../../store/useAppStore';
import { getQuestions } from '../../lib/signAlgorithm';
import type { Question } from '../../lib/signAlgorithm';

/**
 * Question Flow Screen - Onboarding Steps 3-9 (Q1-Q7)
 * 
 * Dynamic question screen that handles all 7 questions.
 * Auto-advances on selection.
 * Copy from design/ux-writing.md
 */

export default function QuestionScreen() {
  const router = useRouter();
  const userProfile = useAppStore((state) => state.userProfile);
  const addAnswer = useAppStore((state) => state.addAnswer);
  const calculateSigns = useAppStore((state) => state.calculateSigns);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const questions = getQuestions();
  const question = questions[currentQuestion];
  const progress = (currentQuestion + 1) / questions.length;
  const isLastQuestion = currentQuestion === questions.length - 1;
  const isHalfway = currentQuestion === 3;

  const handleSelectAnswer = (optionId: string) => {
    setSelectedAnswer(optionId);
    
    // Store answer
    addAnswer(question.id, optionId);
    
    // Auto-advance after short delay
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        // Last question - calculate signs and go to processing
        calculateSigns();
        router.push('/onboarding/processing');
      }
    }, 400);
  };

  const categoryLabel = useMemo(() => {
    if (isLastQuestion) return 'Last one.';
    if (isHalfway) return `You're halfway there, ${userProfile.name}.`;
    return question.category;
  }, [isLastQuestion, isHalfway, question.category, userProfile.name]);

  return (
    <View style={styles.container}>
      <ProgressBar
        progress={progress}
        totalSteps={questions.length}
        currentStep={currentQuestion + 1}
      />
      
      <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
        <Text style={styles.category}>{categoryLabel}</Text>
        
        <Text style={styles.questionText}>{question.question}</Text>
        
        <View style={styles.options}>
          {question.options.map((option) => (
            <AnswerOption
              key={option.id}
              label={option.text}
              selected={selectedAnswer === option.id}
              onSelect={() => handleSelectAnswer(option.id)}
            />
          ))}
        </View>
      </ScrollView>
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
  category: {
    fontFamily: 'Montserrat-Medium',
    fontSize: tokens.typography.sizes.xs,
    color: tokens.colors.textSecondary,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: tokens.spacing.md,
  },
  questionText: {
    fontFamily: 'Cormorant',
    fontSize: tokens.typography.sizes.headingLg,
    fontWeight: String(tokens.typography.fontWeights.medium) as any,
    color: tokens.colors.textPrimary,
    marginBottom: tokens.spacing.xl,
    lineHeight: tokens.typography.lineHeights.tight * tokens.typography.sizes.headingLg,
  },
  options: {
    gap: tokens.spacing.sm,
  },
});
