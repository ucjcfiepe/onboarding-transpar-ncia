import { useMemo, useState } from "react";
import { Check, RotateCcw, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { quizQuestions } from "@/content/transparencia";
import { ProgressIndicator } from "./primitives";
import { Button } from "@/components/ui/button";

export function Quiz({
  onFinish,
  initialAnswers,
}: {
  onFinish?: (score: number, total: number, answers: Record<string, string>) => void;
  initialAnswers?: Record<string, string>;
}) {
  const total = quizQuestions.length;
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>(initialAnswers ?? {});
  const [finished, setFinished] = useState(
    Boolean(initialAnswers && Object.keys(initialAnswers).length === total),
  );
  const [review, setReview] = useState(false);

  const question = quizQuestions[index]!;
  const answered = answers[question.id];

  const score = useMemo(
    () => quizQuestions.filter((q) => answers[q.id] === q.correctId).length,
    [answers],
  );

  function select(optionId: string) {
    if (answered) return;
    setAnswers((prev) => ({ ...prev, [question.id]: optionId }));
  }

  function next() {
    if (index + 1 < total) {
      setIndex(index + 1);
      return;
    }
    const finalScore = quizQuestions.filter((q) => answers[q.id] === q.correctId).length;
    setFinished(true);
    onFinish?.(finalScore, total, answers);
  }

  function restart() {
    setAnswers({});
    setIndex(0);
    setFinished(false);
    setReview(false);
  }

  if (finished && !review) {
    const pct = Math.round((score / total) * 100);
    return (
      <div className="rise-in overflow-hidden rounded-3xl border border-border bg-card">
        <div className="grain aurora surface-deep relative px-8 py-12 sm:px-12">
          <div className="relative z-10">
            <p className="label-eyebrow text-white/60">Resultado do quiz</p>
            <p className="mt-4 text-5xl font-extrabold tabular-nums text-white">
              {score}
              <span className="text-2xl font-bold text-white/50">/{total}</span>
            </p>
            <p className="mt-2 text-sm text-white/70">{pct}% de aproveitamento</p>
            <div className="mt-8 max-w-md">
              <ProgressIndicator value={pct} tone="dark" />
            </div>
          </div>
        </div>
        <div className="space-y-6 p-8 sm:p-10">
          <p className="max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            {pct >= 80
              ? "Ótimo domínio dos pontos essenciais: arquitetura das quatro etapas, função de cada ambiente e ferramenta e a importância do registro de evidências."
              : pct >= 50
                ? "Boa base construída. Vale revisar as seções de ambientes e ferramentas e a arquitetura do processo antes de seguir."
                : "Recomendamos revisar o módulo, especialmente a arquitetura das quatro etapas e a função de cada ambiente, plataforma e ferramenta."}
          </p>
          <div className="flex flex-wrap gap-3">
            <Button variant="outline" onClick={() => setReview(true)}>
              Revisar respostas
            </Button>
            <Button variant="ghost" onClick={restart} className="gap-2">
              <RotateCcw className="size-4" aria-hidden />
              Refazer quiz
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (review) {
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-4">
          <p className="label-eyebrow">Revisão das respostas</p>
          <Button variant="ghost" size="sm" onClick={() => setReview(false)}>
            Voltar ao resultado
          </Button>
        </div>
        {quizQuestions.map((q, i) => {
          const given = answers[q.id];
          const ok = given === q.correctId;
          return (
            <article key={q.id} className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-start gap-3">
                <span
                  className={cn(
                    "mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full text-white",
                    ok ? "bg-sesi" : "bg-senai",
                  )}
                  aria-hidden
                >
                  {ok ? <Check className="size-3" strokeWidth={3} /> : <X className="size-3" strokeWidth={3} />}
                </span>
                <div className="min-w-0">
                  <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                    Questão {i + 1} · {q.formatLabel}
                  </p>
                  <p className="mt-1.5 font-bold text-primary">{q.prompt}</p>
                  <p className="mt-3 text-sm text-muted-foreground">
                    Sua resposta:{" "}
                    <span className="text-foreground">
                      {q.options.find((o) => o.id === given)?.text ?? "não respondida"}
                    </span>
                  </p>
                  {!ok ? (
                    <p className="mt-1 text-sm text-muted-foreground">
                      Resposta correta:{" "}
                      <span className="text-foreground">
                        {q.options.find((o) => o.id === q.correctId)?.text}
                      </span>
                    </p>
                  ) : null}
                  <p className="mt-3 rounded-xl bg-ice p-4 text-sm leading-relaxed">{q.explanation}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    );
  }

  const correctOption = question.correctId;

  return (
    <div className="rounded-3xl border border-border bg-card p-7 sm:p-9">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="label-eyebrow">
          Questão {index + 1} de {total} · {question.formatLabel}
        </p>
        <span className="text-xs font-semibold tabular-nums text-muted-foreground">
          {Math.round(((index + (answered ? 1 : 0)) / total) * 100)}%
        </span>
      </div>
      <div className="mt-3">
        <ProgressIndicator value={Math.round(((index + (answered ? 1 : 0)) / total) * 100)} />
      </div>

      <h3 className="mt-7 text-xl font-bold leading-snug text-primary sm:text-2xl">
        {question.prompt}
      </h3>

      <ul className="mt-6 space-y-3">
        {question.options.map((opt) => {
          const isSelected = answered === opt.id;
          const revealed = Boolean(answered);
          const isCorrect = opt.id === correctOption;
          return (
            <li key={opt.id}>
              <button
                type="button"
                disabled={revealed}
                onClick={() => select(opt.id)}
                className={cn(
                  "w-full rounded-2xl border p-4 text-left text-sm leading-relaxed transition-all duration-300",
                  !revealed && "border-border bg-background hover:border-sky/50 hover:bg-mist/50",
                  revealed && isCorrect && "border-sesi/45 bg-sesi/6",
                  revealed && isSelected && !isCorrect && "border-senai/45 bg-senai/6",
                  revealed && !isCorrect && !isSelected && "border-border opacity-50",
                )}
              >
                {opt.text}
              </button>
            </li>
          );
        })}
      </ul>

      {answered ? (
        <div className="rise-in mt-6 rounded-2xl border border-border bg-ice p-5">
          <p className="label-eyebrow mb-2">
            {answered === correctOption ? "Correto" : "Ponto de atenção"}
          </p>
          <p className="text-sm leading-relaxed">{question.explanation}</p>
        </div>
      ) : null}

      <div className="mt-8 flex items-center justify-between gap-3">
        <Button
          variant="ghost"
          onClick={() => setIndex(Math.max(0, index - 1))}
          disabled={index === 0}
        >
          Anterior
        </Button>
        <Button onClick={next} disabled={!answered}>
          {index + 1 === total ? "Concluir quiz" : "Próxima"}
        </Button>
      </div>
    </div>
  );
}
