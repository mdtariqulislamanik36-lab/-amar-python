
export interface Lesson {
  id: string;
  title: string;
  slug: string;
  content: string;
  example: string;
  practicePrompt: string;
  mistakes: string[];
  summary: string;
  quizzes: QuizItem[];
}

export interface QuizItem {
  question: string;
  options: string[];
  correctIndex: number;
}

export interface Module {
  id: number;
  title: string;
  lessons: Lesson[];
}

export interface PracticeProblem {
  id: number;
  topic: string;
  prompt: string;
  input?: string;
  output: string;
  solution: string;
  explanation: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  features: string[];
  steps: string[];
  code: string;
  difficulty: 'Beginner' | 'Intermediate';
}
