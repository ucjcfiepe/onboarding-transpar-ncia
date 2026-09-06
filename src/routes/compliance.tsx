import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Search, ShieldCheck } from "lucide-react";
import {
  amcTemas,
  complianceIntro,
  compliancePortfolio,
  dueDiligenceAnalise,
  dueDiligenceBases,
  dueDiligenceFluxo,
  dueDiligenceResumo,
  monitoramentoFases,
  orgaosControle,
  programaIntegridade,
  unidadeResponsavelDeveres,
} from "@/content/ucjc";
import { KeyTakeaway, SectionHeading } from "@/components/onboarding/primitives";
import {
  AreaHero,
  AreaSection,
  CheckList,
  FlowStrip,
  ListCard,
  PillGrid,
  SoftList,
} from "@/components/ucjc/primitives";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const title = "Compliance — Onboarding UCJC";
const description =
  "Como o Compliance da UCJC atua: programa de integridade, riscos, due diligence de fornecedores, ações de monitoramento e controle e acompanhamento de recomendações de órgãos de controle.";

export const Route = createFileRoute("/compliance")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: CompliancePage,
});

function CompliancePage() {
  return (
    <div className="min-h-screen bg-background">
      <AreaHero
        eyebrow="Frente 02 · UCJC"
        title="Compliance"
        lead="Integridade, prevenção de riscos, governança institucional, monitoramento, controles, avaliação de terceiros, orientação, comunicação e treinamento."
        note={complianceIntro}
      />

      <AreaSection>
        <SectionHeading
          eyebrow="Portfólio de serviços"
          title="O que o Compliance entrega"
          lead="Consulta, avaliação de terceiros, riscos, normativos, monitoramento, auditoria independente, comunicação e treinamento."
        />
        <div className="mt-10">
          <PillGrid items={compliancePortfolio} />
        </div>
      </AreaSection>

      <AreaSection soft>
        <SectionHeading
          eyebrow="Programa de Integridade"
          title="Integridade se constrói em várias frentes"
          lead="Riscos, normativos, comunicação, treinamento, presença nas escolas e avaliação de terceiros."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {programaIntegridade.map((b) => (
            <ListCard key={b.id} title={b.title} items={b.items} />
          ))}
        </div>
      </AreaSection>

      <AreaSection>
        <SectionHeading
          eyebrow="AMC"
          title="Ações de Monitoramento e Controle"
          lead="As AMC podem envolver diferentes processos organizacionais. Estes são os principais temas monitorados."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {amcTemas.map((g) => (
            <ListCard key={g.group} eyebrow="Tema" title={g.group} items={g.items} />
          ))}
        </div>
      </AreaSection>

      <AreaSection soft>
        <SectionHeading
          eyebrow="Jornada · Terceiros"
          title="Due Diligence de Integridade de Fornecedores"
          lead="Antes de contratar, é importante conhecer quem está do outro lado."
        />

        <div className="mt-10">
          <FlowStrip steps={dueDiligenceResumo} />
        </div>

        <Accordion type="single" collapsible className="mt-10 space-y-4">
          <AccordionItem value="fluxo" className="card-elevated rounded-3xl border-b-0 px-7 sm:px-8">
            <AccordionTrigger className="py-6 text-left hover:no-underline">
              <span className="text-lg font-extrabold text-primary">
                Ver o fluxo completo, passo a passo
              </span>
            </AccordionTrigger>
            <AccordionContent className="pb-7">
              <ol className="space-y-0">
                {dueDiligenceFluxo.map((s, i) => (
                  <li
                    key={s}
                    className="flex items-baseline gap-3 border-b border-hairline py-3.5 text-sm"
                  >
                    <span className="text-[11px] font-bold tabular-nums text-sky">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{s}</span>
                  </li>
                ))}
              </ol>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div>
            <p className="label-eyebrow mb-5">O que é analisado</p>
            <CheckList items={dueDiligenceAnalise} />
          </div>
          <div>
            <p className="label-eyebrow mb-5">Bases pesquisadas</p>
            <div className="grid gap-4 sm:grid-cols-2">
              {dueDiligenceBases.map((b) => (
                <article key={b.sigla} className="card-elevated rounded-2xl p-5">
                  <div className="flex items-center gap-2">
                    <Search className="size-3.5 text-sky" aria-hidden />
                    <h4 className="text-sm font-extrabold text-primary">{b.sigla}</h4>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.nome}</p>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10">
          <KeyTakeaway title="Classificação e tratativas" tone="attention">
            Com base nas informações levantadas, o fornecedor é classificado segundo uma matriz de
            riscos. O Compliance avalia as causas do resultado e aplica as tratativas
            correspondentes ao nível de risco, solicitando informações ou evidências complementares
            quando necessário. O fornecedor pode apresentar novas informações e o Compliance
            reavalia a classificação. O parecer final considera as informações fornecidas, as
            respostas ao questionário, as evidências e a matriz de risco: se o retorno for
            suficiente, a avaliação pode ser revista; se não houver retorno suficiente, a avaliação
            é mantida. Ao final, o parecer é enviado para Suprimentos.
          </KeyTakeaway>
        </div>
      </AreaSection>

      <AreaSection>
        <SectionHeading
          eyebrow="Jornada · Controle externo"
          title="Monitoramento de recomendações"
          lead="Acompanhar recomendações emitidas por órgãos de controle externo e apoiar a elaboração, o monitoramento e o reporte dos respectivos planos de ação."
        />

        <div className="mt-8 rounded-2xl border border-border bg-ice p-6">
          <p className="label-eyebrow mb-3">Órgãos com interface</p>
          <PillGrid items={orgaosControle} />
        </div>

        <Accordion type="single" collapsible className="mt-10 space-y-4" defaultValue="f1">
          {monitoramentoFases.map((f) => (
            <AccordionItem
              key={f.id}
              value={f.id}
              className="card-elevated rounded-3xl border-b-0 px-7 sm:px-8"
            >
              <AccordionTrigger className="py-6 text-left hover:no-underline">
                <span>
                  <span className="block text-lg font-extrabold text-primary">{f.title}</span>
                  <span className="mt-1 block text-sm font-normal text-muted-foreground">
                    {f.lead}
                  </span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-7">
                <SoftList items={f.items} />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </AreaSection>

      <AreaSection soft>
        <SectionHeading
          eyebrow="Responsabilidades"
          title="O Compliance acompanha e verifica. A unidade responsável executa."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <ListCard
            eyebrow="Unidade responsável"
            title="O que se espera da área envolvida"
            items={unidadeResponsavelDeveres}
          />
          <div className="card-elevated rounded-3xl p-7 sm:p-8">
            <ShieldCheck className="size-4 text-sky" aria-hidden />
            <h3 className="mt-4 text-lg font-extrabold text-primary">Prazos importam</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              O não atendimento dos prazos pode gerar registro de pendência, escalonamento e
              limitações no trabalho de monitoramento.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Button asChild>
            <Link to="/operacoes">
              Conhecer Operações
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/juridico">Conhecer o Jurídico</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link to="/">Voltar ao início</Link>
          </Button>
        </div>
      </AreaSection>
    </div>
  );
}
