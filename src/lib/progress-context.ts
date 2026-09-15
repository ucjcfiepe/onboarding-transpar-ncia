import { createContext } from "react";

export interface QuizResult {
  score: number;
  total: number;
  answers: Record<string, string>;
  completedAt: string;
}

export interface ProgressState {
  completedSections: Record<string, string[]>;
  lastVisited: Record<string, string>;
  quizResults: Record<string, QuizResult>;
}

export interface ProgressContextValue {
  state: ProgressState;
  hydrated: boolean;
  isSectionComplete: (moduleId: string, sectionId: string) => boolean;
  completeSection: (moduleId: string, sectionId: string) => void;
  setLastVisited: (moduleId: string, sectionId: string) => void;
  saveQuizResult: (moduleId: string, result: QuizResult) => void;
  moduleProgress: (moduleId: string) => number;
  overallProgress: () => number;
  resetModule: (moduleId: string) => void;
}

export const ProgressContext = createContext<ProgressContextValue | null>(null);