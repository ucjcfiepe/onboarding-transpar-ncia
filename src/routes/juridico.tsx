import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Clock, FileText, Inbox, Mail } from "lucide-react";
import {
  juridicoAntesDeEnviar,
  juridicoEstrutura,
  juridicoIntro,
  juridicoPortfolio,
  juridicoSituacoes,
} from "@/content/ucjc";
import {
  anoFaixas,
  anoImpactos,
  assistentesAtribuicoes,
  chegadaFluxo,
  chegadaIntro,
  publicacoesFluxo,
  prazosTipos,
  replanejamentoCriterios,
  reporteUsos,
  triagemFrase,
  triagemOrientacoes,
  zeevCards,
  zeevFrase,
} from "@/content/juridicoOperacao";
import { KeyTakeaway, SectionHeading } from "@/components/onboarding/primitives";
import {
  AreaHero,
  AreaSection,
  CheckList,
  FlowStrip,
  ListCard,
  PillGrid,
  SituationCard,
  SoftList,
} from "@/components/ucjc/primitives";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


const title = "Jurídico — Onboarding UCJC";
const description =
  "Como o Jurídico da UCJC atua: pareceres, contratos e acordos, processos judiciais e administrativos, aquisições e assessoria às áreas do Sistema FIEPE.";

export const Route = createFileRoute("/juridico")({
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
  component: JuridicoPage,
});

function JuridicoPage() {
  return (
    <div className="min-h-screen bg-background">
      <AreaHero
        eyebrow="Frente 01 · UCJC"
        title="Jurídico"
        lead="Atuação consultiva, preventiva e contenciosa: o Jurídico assessora as entidades do Sistema FIEPE em situações preventivas e em demandas judiciais, administrativas e negociais."
        note={juridicoIntro}
      />

      <AreaSection>
        <SectionHeading
          eyebrow="Portfólio de serviços"
          title="O que o Jurídico entrega"
          lead="Análise, orientação e suporte jurídico para decisões mais seguras."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {juridicoPortfolio.map((g) => (
            <ListCard key={g.title} title={g.title} description={g.description} />
          ))}
        </div>
      </AreaSection>

      <AreaSection soft>
        <SectionHeading
          eyebrow="Estrutura"
          title="Como o Jurídico se organiza"
          lead="Três frentes de assessoria, cada uma dedicada a um conjunto de unidades."
        />
        <Accordion type="single" collapsible className="mt-10 space-y-4" defaultValue="senai">
          {juridicoEstrutura.map((e) => (
            <AccordionItem
              key={e.id}
              value={e.id}
              className="card-elevated rounded-3xl border-b-0 px-7 sm:px-8"
            >
              <AccordionTrigger className="py-6 text-left hover:no-underline">
                <span>
                  <span className="block text-lg font-extrabold text-primary">{e.name}</span>
                  <span className="mt-1 block text-sm font-normal text-muted-foreground">
                    {e.lead}
                  </span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-7">
                <p className="label-eyebrow">Principais atuações</p>
                <SoftList items={e.items} className="sm:columns-2 sm:gap-8 [&>li]:break-inside-avoid" />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </AreaSection>

      <AreaSection>
        <SectionHeading
          eyebrow="No dia a dia"
          title="O Jurídico no dia a dia"
          lead="Situações comuns que indicam que a demanda deve seguir para o Jurídico."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {juridicoSituacoes.map((s) => (
            <SituationCard key={s} question={s} target="Jurídico" />
          ))}
        </div>
      </AreaSection>

      <AreaSection soft>
        <SectionHeading
          eyebrow="Solicitação"
          title="Antes de enviar uma demanda"
          lead="Três elementos organizam qualquer solicitação e evitam idas e vindas."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {juridicoAntesDeEnviar.map((b, i) => (
            <article key={b.title} className="card-elevated rounded-3xl p-7">
              <span className="text-[11px] font-bold tabular-nums text-sky">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-lg font-extrabold text-primary">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-8">
          <KeyTakeaway title="Documentos necessários" tone="attention">
            Cada serviço possui documentos específicos. Consulte o checklist antes de enviar a
            solicitação.
            <div className="mt-5">
              <Button variant="outline" disabled>
                <FileText className="size-4" aria-hidden />
                Consultar documentos necessários
              </Button>
              <p className="mt-2 text-xs text-muted-foreground">
                Espaço reservado para os checklists de cada serviço.
              </p>
            </div>
          </KeyTakeaway>
        </div>
      </AreaSection>

      <AreaSection>
        <p className="label-eyebrow">Assessoria a todo o Sistema FIEPE</p>
        <div className="mt-5">
          <PillGrid items={["FIEPE", "IEL", "CIEPE", "SESI", "SENAI"]} />
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button asChild>
            <Link to="/compliance">
              Conhecer o Compliance
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/operacoes">Conhecer Operações</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link to="/">Voltar ao início</Link>
          </Button>
        </div>
      </AreaSection>
    </div>
  );
}
