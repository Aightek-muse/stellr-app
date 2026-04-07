import React, { useState, useMemo } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { tokens } from '../../lib/tokens';
import { AnswerOption } from '../../components/ui/AnswerOption';
import { ProgressBar } from '../../components/ui/ProgressBar';
import { useRouter } from 'expo-router';
import { useAppStore } from '../../store/useAppStore';

/**
 * Question Flow Screen - Onboarding Steps 3-9 (Q1-Q7)
 * 
 * Dynamic question screen that handles all 7 questions.
 * Auto-advances on selection.
 * Copy from design/ux-writing.md
 */

interface Question {
  id: number;
  category: string;
  text: string;
  options: { label: string }[];
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    category: 'Energy Patterns',
    text: 'When do you feel most like yourself?',
    options: [
      { label: 'In the morning, when everything feels possible' },
      { label: 'Late at night, when the world goes quiet' },
      { label: 'Around people — their energy lights you up' },
      { label: 'Alone, deep in your own thoughts' },
    ],
  },
  {
    id: 2,
    category: 'Conflict Response',
    text: 'When something bothers you, what do you usually do?',
    options: [
      { label: 'Bring it up directly — you\'d rather clear the air' },
      { label: 'Let it go and hope it fades on its own' },
      { label: 'Sit with it until you know what you actually feel' },
      { label: 'Find a way for everyone to meet in the middle' },
    ],
  },
  {
    id: 3,
    category: 'Emotional Expression',
    text: 'What\'s your relationship with your emotions?',
    options: [
      { label: 'You feel deeply and people usually know it' },
      { label: 'You feel deeply but keep most of it to yourself' },
      { label: 'You tend to stay fairly even — highs and lows don\'t hit hard' },
      { label: 'You process through thinking, not feeling' },
    ],
  },
  {
    id: 4,
    category: 'Social Energy',
    text: 'After a long, draining week, you most want to:',
    options: [
      { label: 'Go out — being around people recharges you' },
      { label: 'Spend the evening with one person you trust' },
      { label: 'Be completely alone, with no obligations' },
      { label: 'Lose yourself in something creative' },
    ],
  },
  {
    id: 5,
    category: 'Decision Making',
    text: 'When you\'re facing a big decision, you tend to:',
    options: [
      { label: 'Trust your gut — it usually knows before you do' },
      { label: 'Make a list and think it through carefully' },
      { label: 'Ask people you trust what they think' },
      { label: 'Sleep on it and see what feels right in the morning' },
    ],
  },
  {
    id: 6,
    category: 'Creative Expression',
    text: 'Which of these feels most like *you*?',
    options: [
      { label: 'Words — writing, speaking, storytelling' },
      { label: 'Visuals — images, design, the way things look' },
      { label: 'Sound — music, rhythm, the feeling of a song' },
      { label: 'Making — building things, working with your hands' },
    ],
  },
  {
    id: 7,
    category: 'Life Focus',
    text: 'What area of life feels most alive right now?',
    options: [
      { label: 'Work and what you\'re building in the world' },
      { label: 'Relationships — who you love and how you connect' },
      { label: 'Understanding yourself more deeply' },
      { label: 'Exploration — new places, ideas, experiences' },
    ],
  },
];

export default function QuestionScreen() {
  const router = useRouter();
  const userProfile = useAppStore((state) => state.userProfile);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const question = QUESTIONS[currentQuestion];
  const progress = (currentQuestion + 1) / QUESTIONS.length;
  const isLastQuestion = currentQuestion === QUESTIONS.length - 1;
  const isHalfway = currentQuestion === 3;

  const handleSelectAnswer = (answerLabel: string) => {
    setSelectedAnswer(answerLabel);
    
    // Auto-advance after short delay
    setTimeout(() => {
      if (currentQuestion < QUESTIONS.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        // Last question - go to processing
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
        totalSteps={QUESTIONS.length}
        currentStep={currentQuestion + 1}
      />
      
      <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
        <Text style={styles.category}>{categoryLabel}</Text>
        
        <Text style={styles.questionText}>{question.text}</Text>
        
        <View style={styles.options}>
          {question.options.map((option, index) => (
            <AnswerOption
              key={index}
              label={option.label}
              selected={selectedAnswer === option.label}
              onSelect={() => handleSelectAnswer(option.label)}
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
