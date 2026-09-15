import { AlertTriangle, ArrowDown, CheckCircle2, Clock3, FileCheck2 } from "lucide-react";
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
} from "@/content/juridicoAssistencia";
import { useProgress } from "@/lib/progress";
import { CheckList, FlowStrip, ListCard } from "@/components/ucjc/primitives";
import { KeyTakeaway, ProgressIndicator, SectionHeading } from "./primitives";

function StepFlow({ steps }: { steps: string[] }) {
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
  return <SectionHeading eyebrow={step} title={title} lead={lead} />;
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
      <Intro step="Etapa 09 · Acompanhamento" title="Revisão do prognóstico da ação" lead="Durante o acompanhamento dos processos, alguns marcos exigem análise ou reavaliação do prognóstico. Nem todos são responsabilidade da Assistência." />
      <ol className="relative space-y-6 border-l-2 border-hairline pl-7">
        {prognosticoMarcos.map((marco, index) => <li key={marco.title} className="relative"><span className="absolute -left-[2.3rem] top-1 inline-flex size-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">{index + 1}</span><article className="card-elevated rounded-2xl p-6"><h3 className="text-lg font-extrabold text-primary">{marco.title}</h3><dl className="mt-5 grid gap-4 text-sm"><div><dt className="font-bold text-foreground">O que se avalia</dt><dd className="mt-1 leading-relaxed text-muted-foreground">{marco.assessment}</dd></div><div><dt className="font-bold text-foreground">Responsável</dt><dd className="mt-1 leading-relaxed text-muted-foreground">{marco.owner}</dd></div><div><dt className="font-bold text-foreground">Papel da Assistência</dt><dd className="mt-1 leading-relaxed text-muted-foreground">{marco.role}</dd></div></dl></article></li>)}
      </ol>
      <KeyTakeaway title="Atenção" tone="attention">A Assistência Jurídica não redefine, por conta própria, o prognóstico nos marcos atribuídos ao advogado. Seu papel é identificar o momento da revisão, pautar a análise quando necessário e, após a definição, atualizar o repositório.</KeyTakeaway>
    </div>
  );
}

function AtualizacaoSection() {
  return (
    <div className="space-y-12">
      <Intro step="Etapa 10 · Ciclo mensal" title="A partir do dia 20: atualização mensal dos processos" lead="A partir do dia 20 de cada mês, ou antes, começa a atualização do repositório de processos judiciais e administrativos, permitindo que o relatório fique pronto para validação antes do prazo oficial." />
      <div className="grid gap-5 sm:grid-cols-2">{atualizacaoMensal.map((item) => <ListCard key={item.title} title={item.title} description={item.text} />)}</div>
    </div>
  );
}

function UltimaMovimentacaoSection() {
  return (
    <div className="space-y-12">
      <Intro step="Etapa 11 · Registro" title="Atualização da última movimentação" lead="O registro deve permitir que qualquer pessoa compreenda rapidamente o estágio atual do processo." />
      <div className="grain aurora relative overflow-hidden rounded-3xl p-8 sm:p-10"><div className="relative z-10"><p className="label-eyebrow text-primary-foreground/60">Padrão de registro</p><p className="mt-5 text-xl font-extrabold text-primary-foreground">DD/MM/AAAA — resumo da movimentação</p><p className="mt-5 text-sm font-bold text-primary-foreground">Próximos passos:</p><p className="mt-1 text-sm leading-relaxed text-primary-foreground/75">descrição objetiva da providência seguinte.</p></div></div>
      <KeyTakeaway title="Clareza">Evite registros vagos ou que obriguem o leitor a consultar todo o processo para compreender o andamento.</KeyTakeaway>
    </div>
  );
}

function RelatorioSection() {
  return (
    <div className="space-y-12">
      <Intro step="Etapa 12 · Consolidação" title="Elaboração do relatório mensal" lead="Após atualizar o repositório, a Assistência elabora o relatório com as principais movimentações do período: novos processos, pagamentos, alvarás, alterações de prognóstico e arquivamentos." />
      <StepFlow steps={passosRelatorio} />
    </div>
  );
}

function ValidacaoSection() {
  return (
    <div className="space-y-12">
      <Intro step="Etapa 13 · Fechamento" title="Validação e envio" lead="O repositório e o relatório devem ficar prontos com antecedência suficiente para a validação da Gerência Jurídica do SENAI." />
      <FlowStrip steps={fluxoValidacao} />
      <KeyTakeaway title="Prazo oficial" tone="attention"><span className="inline-flex items-center gap-3 font-semibold"><Clock3 className="size-4 shrink-0 text-sky" aria-hidden />O envio oficial deve ocorrer até o 2º dia útil do mês.</span></KeyTakeaway>
    </div>
  );
}

function ResumoSection({ moduleId }: { moduleId: string }) {
  const { moduleProgress } = useProgress();
  return (
    <div className="space-y-12">
      <Intro step="Etapa 14 · Síntese" title="Visão rápida da rotina" lead="Retome os principais momentos que organizam o trabalho da Assistência Jurídica." />
      <div className="grid gap-5">{rotinaResumo.map((item, index) => <article key={item.title} className="card-elevated flex gap-5 rounded-2xl p-6"><span className="text-xs font-extrabold tabular-nums text-sky">{String(index + 1).padStart(2, "0")}</span><div><h3 className="font-extrabold text-primary">{item.title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p></div></article>)}</div>
      <div className="grain aurora relative overflow-hidden rounded-3xl p-8 sm:p-10"><div className="relative z-10"><div className="flex items-center gap-3 text-primary-foreground"><CheckCircle2 className="size-5" aria-hidden /><h3 className="text-xl font-extrabold">Trilha da Assistência Jurídica</h3></div><p className="mt-3 text-sm leading-relaxed text-primary-foreground/75">Você percorreu as responsabilidades, os controles e os principais ciclos da rotina.</p><ProgressIndicator className="mt-8" value={moduleProgress(moduleId)} label="Conclusão da trilha" tone="dark" /></div></div>
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
    case "ja-movimentacao": return <UltimaMovimentacaoSection />;
    case "ja-relatorio": return <RelatorioSection />;
    case "ja-validacao": return <ValidacaoSection />;
    case "ja-resumo": return <ResumoSection moduleId={moduleId} />;
    default: return null;
  }
}
