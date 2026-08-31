import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { modules } from "@/content/modules";

const STORAGE_KEY = "onboarding-uj-progress-v1";

export interface QuizResult {
  score: number;
  total: number;
  answers: Record<string, string>;
  completedAt: string;
}

interface ProgressState {
  completedSections: Record<string, string[]>;
  lastVisited: Record<string, string>;
  quizResults: Record<string, QuizResult>;
}

const emptyState: ProgressState = { completedSections: {}, lastVisited: {}, quizResults: {} };

interface ProgressContextValue {
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

const ProgressContext = createContext<ProgressContextValue | null>(null);

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<ProgressState>(emptyState);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setState({ ...emptyState, ...(JSON.parse(raw) as ProgressState) });
    } catch {
      /* progresso local indisponível */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      /* ignore */
    }
  }, [state, hydrated]);

  const isSectionComplete = useCallback(
    (moduleId: string, sectionId: string) =>
      (state.completedSections[moduleId] ?? []).includes(sectionId),
    [state],
  );

  const completeSection = useCallback((moduleId: string, sectionId: string) => {
    setState((prev) => {
      const current = prev.completedSections[moduleId] ?? [];
      if (current.includes(sectionId)) return prev;
      return {
        ...prev,
        completedSections: { ...prev.completedSections, [moduleId]: [...current, sectionId] },
      };
    });
  }, []);

  const setLastVisited = useCallback((moduleId: string, sectionId: string) => {
    setState((prev) =>
      prev.lastVisited[moduleId] === sectionId
        ? prev
        : { ...prev, lastVisited: { ...prev.lastVisited, [moduleId]: sectionId } },
    );
  }, []);

  const saveQuizResult = useCallback((moduleId: string, result: QuizResult) => {
    setState((prev) => ({ ...prev, quizResults: { ...prev.quizResults, [moduleId]: result } }));
  }, []);

  const moduleProgress = useCallback(
    (moduleId: string) => {
      const mod = modules.find((m) => m.id === moduleId);
      if (!mod || mod.sections.length === 0) return 0;
      const done = (state.completedSections[moduleId] ?? []).filter((id) =>
        mod.sections.some((s) => s.id === id),
      ).length;
      return Math.round((done / mod.sections.length) * 100);
    },
    [state],
  );

  const overallProgress = useCallback(() => {
    const available = modules.filter((m) => m.status === "available");
    if (!available.length) return 0;
    const sum = available.reduce((acc, m) => acc + moduleProgress(m.id), 0);
    return Math.round(sum / available.length);
  }, [moduleProgress]);

  const resetModule = useCallback((moduleId: string) => {
    setState((prev) => {
      const { [moduleId]: _c, ...completed } = prev.completedSections;
      const { [moduleId]: _q, ...quiz } = prev.quizResults;
      const { [moduleId]: _l, ...visited } = prev.lastVisited;
      return { completedSections: completed, quizResults: quiz, lastVisited: visited };
    });
  }, []);

  const value = useMemo(
    () => ({
      state,
      hydrated,
      isSectionComplete,
      completeSection,
      setLastVisited,
      saveQuizResult,
      moduleProgress,
      overallProgress,
      resetModule,
    }),
    [
      state,
      hydrated,
      isSectionComplete,
      completeSection,
      setLastVisited,
      saveQuizResult,
      moduleProgress,
      overallProgress,
      resetModule,
    ],
  );

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
}

export function useProgress() {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error("useProgress deve ser usado dentro de ProgressProvider");
  return ctx;
}
