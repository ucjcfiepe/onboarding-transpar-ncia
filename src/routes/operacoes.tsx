import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Database } from "lucide-react";
import { modules } from "@/content/modules";
import { nojcEixos, nojcIntro, nojcPortfolio, notificacoesFluxo } from "@/content/ucjc";
import { KeyTakeaway, SectionHeading } from "@/components/onboarding/primitives";
import { ModuleCard } from "@/components/onboarding/ModuleCard";
import { useProgress } from "@/lib/progress";
import {
  AreaHero,
  AreaSection,
  FlowStrip,
  ListCard,
  PillGrid,
} from "@/components/ucjc/primitives";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const title = "Operações Jurídicas e de Compliance — Onboarding UCJC";
const description =
  "O Núcleo de Operações Jurídicas e de Compliance da UCJC: Legal Ops, gestão de dados, padronização, normativos, backoffice, Transparência Institucional e Fiscalização Contínua do TCU.";

export const Route = createFileRoute("/operacoes")({
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
  component: OperacoesPage,
});

function OperacoesPage() {
  const { moduleProgress, hydrated, state } = useProgress();
  const resume = (moduleId: string) => {
    const mod = modules.find((m) => m.id === moduleId);
    const last = state.lastVisited[moduleId];
    return last && mod?.sections.some((s) => s.id === last) ? last : undefined;
  };

  return (
    <div className="min-h-screen bg-background">
      <AreaHero
        eyebrow="Frente 03 · UCJC"
        title="Operações Jurídicas e de Compliance"
        lead="O NOJC organiza como o trabalho jurídico e de Compliance acontece: processos, dados, padrões, conhecimento, backoffice e frentes transversais."
        note={nojcIntro}
      />

      <AreaSection>
        <SectionHeading
          eyebrow="Portfólio"
          title="O que o núcleo conduz"
          lead="Frentes que sustentam a rotina do Jurídico SESI, do Jurídico SENAI e do Compliance."
        />
        <div className="mt-10">
          <PillGrid items={nojcPortfolio} />
        </div>
      </AreaSection>

      <AreaSection soft>
        <SectionHeading
          eyebrow="Quatro eixos"
          title="Como o NOJC se organiza"
          lead="Abra cada eixo para ver as rotinas correspondentes."
        />
        <Accordion type="single" collapsible className="mt-10 space-y-4" defaultValue="processos">
          {nojcEixos.map((e) => (
            <AccordionItem
              key={e.id}
              value={e.id}
              className="card-elevated rounded-3xl border-b-0 px-7 sm:px-8"
            >
              <AccordionTrigger className="py-6 text-left hover:no-underline">
                <span>
                  <span className="block text-lg font-extrabold text-primary">{e.title}</span>
                  <span className="mt-1 block text-sm font-normal text-muted-foreground">
                    {e.lead}
                  </span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-8">
                <div className="grid gap-5 md:grid-cols-2">
                  {e.blocks.map((b) => (
                    <div key={b.title}>
                      <ListCard title={b.title} lead={b.message} items={b.items} />
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </AreaSection>

      <AreaSection>
        <SectionHeading
          eyebrow="Rotina"
          title="Recebimento de notificações"
          lead="Notificações físicas e eletrônicas seguem um fluxo de registro, encaminhamento e acompanhamento interno."
        />
        <div className="mt-10">
          <FlowStrip steps={notificacoesFluxo} />
        </div>
        <div className="mt-10">
          <KeyTakeaway title="Informação organizada">
            <Database className="mb-3 size-4 text-sky" aria-hidden />
            Informação organizada reduz retrabalho, melhora a rastreabilidade e facilita a tomada de
            decisão.
          </KeyTakeaway>
        </div>
      </AreaSection>

      <AreaSection soft>
        <SectionHeading
          eyebrow="Frentes transversais"
          title="Trilhas com jornada própria"
          lead="Transparência Institucional e Fiscalização Contínua do TCU são frentes da UCJC conduzidas pelo NOJC, com módulos completos nesta trilha."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {modules.map((m) => (
            <ModuleCard
              key={m.id}
              module={m}
              progress={hydrated ? moduleProgress(m.id) : 0}
              {...(resume(m.id) ? { resumeSectionId: resume(m.id)! } : {})}
            />
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Button asChild>
            <Link to="/juridico">
              Conhecer o Jurídico
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/compliance">Conhecer o Compliance</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link to="/">Voltar ao início</Link>
          </Button>
        </div>
      </AreaSection>
    </div>
  );
}
