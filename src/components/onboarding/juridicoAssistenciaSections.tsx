import { AlertTriangle, ArrowDown, CalendarDays, CheckCircle2, Clock3, Compass, FileCheck2, FileText, FolderSync, GitCompareArrows, Home, ListFilter, RefreshCw, Scale, SearchCheck, Sunrise, TextCursorInput } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import {
  apoios,
  atribuicoesAssistencia,
  atualizacaoMensal,
  camposPauta,
  checklistControles,
  contenciosoChecklist,
  efeitosReporte,
  fluxoTriagem,
  fluxoValidacao,
  movimentacoes,
  passosRelatorio,
  passosReporte,
  prognosticoMarcos,
  rotinaResumo,
  encerramentoAssistencia,
} from "@/content/juridicoAssistencia";
import { useProgress } from "@/lib/progress";
import { CheckList, FlowStrip, ListCard } from "@/components/ucjc/primitives";
import { KeyTakeaway, ProgressIndicator, SectionHeading } from "./primitives";

function StepFlow({ steps, modern = false }: { steps: string[]; modern?: boolean }) {
  if (modern) {
    const icons = [FileText, FolderSync, ListFilter, TextCursorInput, SearchCheck, GitCompareArrows];
    return (
      <ol className="space-y-4">
        {steps.map((step, index) => {
          const Icon = icons[index] ?? FileCheck2;
          const isLast = index === steps.length - 1;
          return (
            <li key={step} className="relative grid grid-cols-[2.5rem_minmax(0,1fr)] items-center gap-3 sm:grid-cols-[3rem_minmax(0,1fr)] sm:gap-5">
              {!isLast ? <span className="absolute bottom-[-1rem] left-5 top-1/2 w-px bg-primary/25 sm:left-6" aria-hidden /> : null}
              <span className="relative z-10 flex size-10 items-center justify-center rounded-lg bg-primary text-sm font-semibold tabular-nums text-primary-foreground sm:size-12 sm:text-base" aria-hidden>
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className={`flex min-h-20 min-w-0 items-center gap-4 rounded-lg border px-4 py-5 sm:px-6 ${isLast ? "border-primary/25 bg-mist" : "border-hairline bg-card"}`}>
                <p className="min-w-0 flex-1 text-sm font-semibold leading-relaxed text-foreground sm:text-base"><span className="sr-only">Passo {index + 1}: </span>{step}</p>
                <Icon className="size-5 shrink-0 text-primary sm:size-6" strokeWidth={1.5} aria-hidden />
              </div>
            </li>
          );
        })}
      </ol>
    );
  }
  return (
    <ol className="grid gap-2">
      {steps.map((step, index) => (
        <li key={step} className="flex flex-col items-center">
          <div className="card-elevated flex w-full items-center gap-4 rounded-2xl p-5">
            <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-extrabold text-primary">
              {index + 1}
            </span>
            <p className="text-sm font-semibold leading-relaxed text-foreground">{step}</p>
          </div>
          {index < steps.length - 1 ? <ArrowDown className="my-1 size-4 text-sky" aria-hidden /> : null}
        </li>
      ))}
    </ol>
  );
}

function Intro({ step, title, lead }: { step: string; title: string; lead?: string }) {
  return <SectionHeading eyebrow={step} title={title} {...(lead ? { lead } : {})} />;
}

function PapelSection() {
  return (
    <div className="space-y-12">
      <Intro step="Etapa 01 · Fundamentos" title="Qual é o papel da Assistência Jurídica?" lead="A Assistência Jurídica dá suporte à operação do Jurídico e funciona como elo entre a entrada da demanda, os advogados e os controles internos." />
      <CheckList items={atribuicoesAssistencia} />
      <KeyTakeaway title="Ponto-chave">A Assistência Jurídica ajuda a garantir que a demanda certa chegue à pessoa certa, com as informações necessárias, dentro dos controles da Unidade e com o devido registro de sua movimentação.</KeyTakeaway>
    </div>
  );
}

function ReportesSection() {
  return (
    <div className="space-y-12">
      <Intro step="Etapa 02 · Início do dia" title="Tratamento dos reportes" lead="Uma das primeiras atividades do dia é verificar os reportes encaminhados pelos advogados, pois eles podem impactar diretamente a organização do trabalho." />
      <section><p className="label-eyebrow mb-5">O que um reporte pode gerar</p><div className="grid gap-4 sm:grid-cols-2">{efeitosReporte.map((item) => <div key={item} className="rounded-2xl border border-border bg-card p-5 text-sm font-semibold text-primary">{item}</div>)}</div></section>
      <section><p className="label-eyebrow mb-5">Passo a passo da Assistência</p><StepFlow steps={passosReporte} /></section>
      <KeyTakeaway title="Regra de corte">Reportes de pauta enviados após as 15h são incluídos na pauta no dia seguinte.</KeyTakeaway>
      <KeyTakeaway title="Atenção" tone="attention">A Assistência Jurídica não define ou altera prazos por conta própria. Quando a informação depender de avaliação do advogado, confirme com o responsável antes de atualizar a pauta.</KeyTakeaway>
    </div>
  );
}

function PautaSection() {
  return (
    <div className="space-y-12">
      <Intro step="Etapa 03 · Controle operacional" title="Organização e atualização da pauta" lead="A pauta organiza as demandas dos advogados e permite acompanhar prazos e movimentações." />
      <section><p className="label-eyebrow mb-5">Ao incluir ou atualizar, observe</p><CheckList items={camposPauta} /></section>
      <KeyTakeaway title="Antes de registrar" tone="attention">Não presuma informações. Se algum dado necessário não estiver claro, confirme com o responsável.</KeyTakeaway>
    </div>
  );
}

function TriagemSection() {
  return (
    <div className="space-y-12">
      <Intro step="Etapa 04 · Entrada da demanda" title="Triagem das demandas recebidas no ZEEV" lead="O ZEEV é o principal canal de entrada das demandas jurídicas. A Assistência realiza uma análise inicial de admissibilidade." />
      <StepFlow steps={fluxoTriagem} />
      <div className="grid gap-5 sm:grid-cols-2"><ListCard title="Sim" description="A demanda segue o fluxo para análise jurídica." /><ListCard title="Não" description="A Assistência orienta ou solicita a complementação necessária." /></div>
      <KeyTakeaway title="Orientação ao cliente interno">A Assistência Jurídica também orienta os clientes internos sobre a abertura de chamados e os documentos necessários para cada solicitação.</KeyTakeaway>
    </div>
  );
}

function MovimentacoesSection() {
  return (
    <div className="space-y-12">
      <Intro step="Etapa 05 · Ao longo do dia" title="Tratamento das movimentações" lead="Novas entradas, retornos, replanejamentos, correções e conclusões precisam ser identificados e registrados conforme a informação recebida." />
      <div className="flex items-center gap-3 rounded-2xl border border-border bg-ice p-5"><FileCheck2 className="size-5 shrink-0 text-sky" aria-hidden /><p className="text-sm font-semibold">Recebeu um novo reporte? Identifique a demanda e verifique o que aconteceu.</p></div>
      <div className="grid gap-5 sm:grid-cols-2">{movimentacoes.map((item) => <ListCard key={item.title} title={item.title} description={item.text} />)}</div>
      <KeyTakeaway title="Limite de atuação" tone="attention">Orientações sobre saída definitiva, saída para correção, replanejamento, colunas próprias do advogado e justificativa de estouro de A.N.O. pertencem à futura trilha dos advogados.</KeyTakeaway>
    </div>
  );
}

function ContenciosoSection() {
  return (
    <div className="space-y-12">
      <Intro step="Etapa 06 · Contencioso" title="Atenção às demandas do contencioso" lead="Publicações judiciais podem gerar novas demandas e prazos. Quando houver reporte, a Assistência deve tratar as informações com atenção redobrada." />
      <CheckList items={contenciosoChecklist} />
      <KeyTakeaway title="Prazos judiciais" tone="attention"><span className="inline-flex items-start gap-3"><AlertTriangle className="mt-1 size-4 shrink-0 text-sky" aria-hidden />A Assistência Jurídica não deve presumir nem alterar prazo fatal sem orientação expressa do responsável.</span></KeyTakeaway>
    </div>
  );
}

function ApoioSection() {
  return (
    <div className="space-y-12">
      <Intro step="Etapa 07 · Trabalho integrado" title="Apoio aos advogados, clientes internos e gestão" lead="A atuação da Assistência conecta diferentes públicos e necessidades operacionais." />
      <div className="grid gap-5 sm:grid-cols-2">{apoios.map((item) => <ListCard key={item.title} title={item.title} description={item.text} />)}</div>
    </div>
  );
}

function ControlesSection() {
  return (
    <div className="space-y-12">
      <Intro step="Etapa 08 · Conferência" title="Manutenção dos controles" lead="Antes de considerar uma atualização concluída, faça uma última conferência." />
      <div className="card-elevated rounded-3xl p-7 sm:p-9"><CheckList items={checklistControles} /></div>
    </div>
  );
}

function PrognosticoSection() {
  return (
    <div className="space-y-12">
      <Intro step="Etapa 11 · Acompanhamento" title="Revisão do prognóstico da ação" lead="Durante o acompanhamento dos processos, alguns marcos exigem análise ou reavaliação do prognóstico. Nem todos são responsabilidade da Assistência." />
      <ol className="space-y-6">
        {prognosticoMarcos.map((marco, index) => (
          <li key={marco.title} className="relative grid grid-cols-[2.5rem_minmax(0,1fr)] gap-3 sm:grid-cols-[3.5rem_minmax(0,1fr)] sm:gap-5">
            {index < prognosticoMarcos.length - 1 ? <span className="absolute bottom-[-1.5rem] left-5 top-12 w-px bg-hairline sm:left-7 sm:top-16" aria-hidden /> : null}
            <span className="relative mt-1 flex size-10 items-center justify-center rounded-lg border border-primary/15 bg-primary/10 text-base font-semibold tabular-nums text-primary sm:size-14 sm:text-xl" aria-hidden>
              {String(index + 1).padStart(2, "0")}
            </span>
            <article className="overflow-hidden rounded-lg border border-hairline bg-card">
              <header className="border-b border-hairline bg-ice px-5 py-4 sm:px-6">
                <h3 className="text-lg font-semibold text-primary"><span className="sr-only">Marco {index + 1}: </span>{marco.title}</h3>
              </header>
              <dl className="grid gap-5 p-5 text-sm sm:p-6 xl:grid-cols-[1.2fr_1fr_1.2fr] xl:gap-6">
                <div>
                  <dt className="font-semibold text-foreground">O que se avalia</dt>
                  <dd className="mt-2 leading-relaxed text-muted-foreground">{marco.assessment}</dd>
                </div>
                <div className="border-t border-hairline pt-4 xl:border-l xl:border-t-0 xl:pl-6 xl:pt-0">
                  <dt className="font-semibold text-foreground">Responsável</dt>
                  <dd className="mt-2 leading-relaxed text-muted-foreground">{marco.owner}</dd>
                </div>
                <div className="border-t border-hairline pt-4 xl:border-l xl:border-t-0 xl:pl-6 xl:pt-0">
                  <dt className="font-semibold text-primary">Papel da Assistência</dt>
                  <dd className="mt-2 leading-relaxed text-muted-foreground">{marco.role}</dd>
                </div>
              </dl>
            </article>
          </li>
        ))}
      </ol>
      <KeyTakeaway title="Atenção" tone="attention">A Assistência Jurídica não redefine, por conta própria, o prognóstico nos marcos atribuídos ao advogado. Seu papel é identificar o momento da revisão, pautar a análise quando necessário e, após a definição, atualizar o repositório.</KeyTakeaway>
    </div>
  );
}

function AtualizacaoSection() {
  return (
    <div className="space-y-12">
      <Intro step="Etapa 09 · Ciclo mensal" title="A partir do dia 20: atualização mensal dos processos" lead="A partir do dia 20 de cada mês, ou antes, começa a atualização do repositório de processos judiciais e administrativos, permitindo que o relatório fique pronto para validação antes do prazo oficial." />
      <div className="grid gap-5 sm:grid-cols-2">{atualizacaoMensal.map((item) => <ListCard key={item.title} title={item.title} description={item.text} />)}</div>
    </div>
  );
}

function RelatorioSection() {
  return (
    <div className="space-y-12">
      <Intro step="Etapa 10 · Consolidação" title="Elaboração do relatório mensal" lead="Após atualizar o repositório, a Assistência elabora o relatório com as principais movimentações do período: novos processos, pagamentos, alvarás, alterações de prognóstico e arquivamentos." />
      <StepFlow steps={passosRelatorio} modern />
    </div>
  );
}

function ValidacaoSection() {
  return (
    <div className="space-y-12">
      <Intro step="Etapa 12 · Fechamento" title="Validação e envio" lead="O repositório e o relatório devem ficar prontos com antecedência suficiente para a validação da Gestão Jurídica SENAI, SESI ou FIEPE/IEL." />
      <FlowStrip steps={fluxoValidacao} />
      <KeyTakeaway title="Prazo oficial" tone="attention"><span className="inline-flex items-center gap-3 font-semibold"><Clock3 className="size-4 shrink-0 text-sky" aria-hidden />O envio oficial deve ocorrer até o 2º dia útil do mês.</span></KeyTakeaway>
    </div>
  );
}

function ResumoSection({ moduleId }: { moduleId: string }) {
  const { moduleProgress, resetModule } = useProgress();
  const progress = moduleProgress(moduleId);
  const dailyIcons = [Sunrise, FileCheck2, Scale];
  return (
    <div className="space-y-12">
      <Intro step="Etapa 13 · Síntese" title="Visão rápida da rotina" lead="Retome os principais momentos que organizam o trabalho da Assistência Jurídica." />

      <section aria-labelledby="rotina-diaria">
        <div className="mb-5 flex items-center gap-3"><span className="h-px w-8 bg-sky" aria-hidden /><h3 id="rotina-diaria" className="label-eyebrow">No dia a dia</h3></div>
        <div className="grid gap-4 md:grid-cols-3">
          {rotinaResumo.slice(0, 3).map((item, index) => {
            const Icon = dailyIcons[index] ?? FileCheck2;
            return <article key={item.title} className="card-elevated rounded-lg border-t-2 border-t-sky p-5 sm:p-6">
              <div className="flex items-center justify-between"><Icon className="size-6 text-sky" aria-hidden /><span className="text-xs font-semibold tabular-nums text-muted-foreground">{String(index + 1).padStart(2, "0")}</span></div>
              <h4 className="mt-6 text-lg font-bold text-primary">{item.title}</h4>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </article>;
          })}
        </div>
      </section>

      <section aria-labelledby="rotina-mensal">
        <div className="mb-6 flex items-center gap-3"><CalendarDays className="size-4 text-sky" aria-hidden /><h3 id="rotina-mensal" className="label-eyebrow">No ciclo mensal</h3></div>
        <ol className="grid gap-0 md:grid-cols-2">
          {rotinaResumo.slice(3).map((item, index) => <li key={item.title} className="relative border-l border-border pb-8 pl-7 last:pb-0 md:border-l-0 md:border-t md:pb-0 md:pl-0 md:pr-8 md:pt-7">
            <span className="absolute -left-2 top-0 size-4 rounded-full border-4 border-background bg-sky md:-top-2 md:left-0" aria-hidden />
            <p className="text-xs font-semibold tabular-nums text-sky">{String(index + 4).padStart(2, "0")}</p>
            <h4 className="mt-2 text-lg font-bold leading-snug text-primary">{item.title}</h4>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
          </li>)}
        </ol>
      </section>

      <section className="grain aurora relative overflow-hidden rounded-3xl p-7 sm:p-9" aria-labelledby="encerramento-assistencia">
        <div className="relative z-10 grid items-center gap-8 sm:grid-cols-[minmax(0,1fr)_minmax(0,0.6fr)]">
          <div>
            <p className="label-eyebrow text-primary-foreground/75">{progress === 100 ? "Trilha concluída" : "Encerramento da trilha"}</p>
            <h3 id="encerramento-assistencia" className="mt-4 text-2xl font-extrabold leading-tight text-primary-foreground">{encerramentoAssistencia.title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-primary-foreground/80">{encerramentoAssistencia.summary}</p>
          </div>
          <div className="border-t border-primary-foreground/20 pt-6 sm:border-l sm:border-t-0 sm:pl-7 sm:pt-0">
            <CheckCircle2 className="mb-5 size-7 text-primary-foreground" aria-hidden />
            <ProgressIndicator value={progress} label="Conclusão da trilha" tone="dark" />
          </div>
        </div>
      </section>

      <section className="border-y border-border py-8" aria-labelledby="proximos-passos-assistencia">
        <h3 id="proximos-passos-assistencia" className="text-xl font-extrabold text-primary">Próximos passos</h3>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">{encerramentoAssistencia.nextSteps}</p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button asChild><Link to="/"><Home className="size-4" aria-hidden />Voltar ao início</Link></Button>
          <Button variant="outline" asChild><Link to="/modulos/$moduleId/$sectionId" params={{ moduleId, sectionId: "papel" }}><Compass className="size-4" aria-hidden />Revisar conteúdo</Link></Button>
          <AlertDialog>
            <AlertDialogTrigger asChild><Button variant="ghost"><RefreshCw className="size-4" aria-hidden />Reiniciar progresso</Button></AlertDialogTrigger>
            <AlertDialogContent className="w-[calc(100%-2rem)] rounded-lg">
              <AlertDialogHeader><AlertDialogTitle>Reiniciar progresso?</AlertDialogTitle><AlertDialogDescription>{encerramentoAssistencia.resetConfirmation}</AlertDialogDescription></AlertDialogHeader>
              <AlertDialogFooter><AlertDialogCancel>Cancelar</AlertDialogCancel><AlertDialogAction onClick={() => resetModule(moduleId)}>Reiniciar esta trilha</AlertDialogAction></AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </section>
    </div>
  );
}

export function JuridicoAssistenciaSection({ kind, moduleId }: { kind: string; moduleId: string }) {
  switch (kind) {
    case "ja-papel": return <PapelSection />;
    case "ja-reportes": return <ReportesSection />;
    case "ja-pauta": return <PautaSection />;
    case "ja-triagem": return <TriagemSection />;
    case "ja-movimentacoes": return <MovimentacoesSection />;
    case "ja-contencioso": return <ContenciosoSection />;
    case "ja-apoio": return <ApoioSection />;
    case "ja-controles": return <ControlesSection />;
    case "ja-prognostico": return <PrognosticoSection />;
    case "ja-atualizacao": return <AtualizacaoSection />;
    case "ja-relatorio": return <RelatorioSection />;
    case "ja-validacao": return <ValidacaoSection />;
    case "ja-resumo": return <ResumoSection moduleId={moduleId} />;
    default: return null;
  }
}
