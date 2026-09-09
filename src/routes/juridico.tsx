import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Clock, ExternalLink, Inbox, Mail } from "lucide-react";
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
            Cada serviço possui documentos, fluxos e procedimentos específicos. Consulte o
            repositório da UCJC antes de enviar a solicitação.
            <div className="mt-5">
              <Button variant="outline" asChild>
                <a
                  href="https://pesenaibr.sharepoint.com/:f:/s/UCJUR/IgBMRm15jf3JQ6Mp94piMkpwAdATvw25dsgLoTelHJxMa5s?e=JhMe2C"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="size-4" aria-hidden />
                  Consultar fluxos e procedimentos
                </a>
              </Button>
              <p className="mt-2 text-xs text-muted-foreground">
                Consulte sempre a versão mais atualizada disponível no Sharepoint.
              </p>
            </div>
          </KeyTakeaway>
        </div>
      </AreaSection>

      <AreaSection>
        <SectionHeading
          eyebrow="Entrada da demanda"
          title="Como uma demanda chega ao Jurídico?"
          lead={chegadaIntro}
        />
        <div className="mt-10">
          <FlowStrip steps={chegadaFluxo} />
        </div>
      </AreaSection>

      <AreaSection soft>
        <SectionHeading
          eyebrow="ZEEV e triagem"
          title="O canal de entrada e a admissibilidade"
          lead="O ZEEV — Orquestra concentra o recebimento das solicitações jurídicas."
        />
        <div className="mt-10">
          <KeyTakeaway title="Ponto de entrada" tone="attention">
            <span className="inline-flex items-center gap-2 font-semibold">
              <Inbox className="size-4 shrink-0 text-sky" aria-hidden />
              {zeevFrase}
            </span>
          </KeyTakeaway>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {zeevCards.map((c) => (
            <ListCard key={c.title} title={c.title} description={c.description} />
          ))}
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <ListCard
            eyebrow="Triagem"
            title="Análise e admissibilidade"
            description="A equipe verifica se a solicitação possui as informações e os documentos necessários para seguir para atendimento."
          />
          <article className="card-elevated rounded-3xl p-7 sm:p-8">
            <p className="label-eyebrow">Orientação ao cliente interno</p>
            <h3 className="mt-2 text-lg font-extrabold text-primary">
              Quando algo precisa ser complementado
            </h3>
            <SoftList items={triagemOrientacoes} />
          </article>
        </div>
        <div className="mt-8">
          <KeyTakeaway title="Por que a triagem existe">{triagemFrase}</KeyTakeaway>
        </div>
      </AreaSection>

      <AreaSection>
        <SectionHeading
          eyebrow="Camada operacional"
          title="O papel dos assistentes jurídicos"
          lead="Existe uma camada operacional que organiza a entrada, o acompanhamento e a informação necessária para o trabalho jurídico."
        />
        <div className="mt-10">
          <CheckList items={assistentesAtribuicoes} />
        </div>
      </AreaSection>

      <AreaSection soft>
        <SectionHeading
          eyebrow="Organização da pauta"
          title="Reporte de pauta"
          lead="Além das demandas recebidas pelo ZEEV, os advogados também enviam reportes para organização da pauta."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <article className="card-elevated rounded-3xl p-7 sm:p-8">
            <p className="label-eyebrow">Para que serve</p>
            <h3 className="mt-2 text-lg font-extrabold text-primary">Usos do reporte</h3>
            <SoftList items={reporteUsos} />
          </article>
          <article className="card-elevated rounded-3xl p-7 sm:p-8">
            <p className="label-eyebrow">Rotina</p>
            <h3 className="mt-2 text-lg font-extrabold text-primary">Tratados no início do dia</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Os reportes são normalmente tratados logo cedo, porque podem impactar diretamente a
              organização do trabalho dos advogados.
            </p>
            <p className="mt-5 inline-flex items-center gap-2 rounded-full bg-mist px-4 py-2 text-sm font-bold text-primary">
              <Mail className="size-4 text-sky" aria-hidden />
              REPORTE - DD/MM/AAAA
            </p>
            <p className="mt-2 text-xs text-muted-foreground">
              A padronização do assunto facilita a localização e o tratamento das solicitações.
            </p>
          </article>
        </div>
        <div className="mt-8">
          <KeyTakeaway title="Regra de corte" tone="attention">
            <span className="inline-flex items-center gap-2 font-semibold">
              <Clock className="size-4 shrink-0 text-sky" aria-hidden />
              Enviado após as 15h? A inclusão na pauta ocorre no dia seguinte.
            </span>
            <p className="mt-2 text-sm text-muted-foreground">
              A regra se aplica aos reportes de pauta enviados pelos advogados.
            </p>
          </KeyTakeaway>
        </div>
      </AreaSection>

      <AreaSection>
        <SectionHeading
          eyebrow="Replanejamento e prazos"
          title="Mudar uma data é reorganizar a pauta"
          lead="Quando houver necessidade de replanejamento, o advogado avalia sua pauta de forma ampla antes de indicar nova data."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <article className="card-elevated rounded-3xl p-7 sm:p-8">
            <p className="label-eyebrow">Ao indicar nova data</p>
            <h3 className="mt-2 text-lg font-extrabold text-primary">O que considerar</h3>
            <SoftList items={replanejamentoCriterios} />
          </article>
          <div className="grid gap-5">
            {prazosTipos.map((p) => (
              <article key={p.title} className="card-elevated rounded-3xl p-7">
                <p className="label-eyebrow">{p.label}</p>
                <h3 className="mt-2 text-lg font-extrabold text-primary">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <KeyTakeaway title="Replanejamento">
            Replanejar não é apenas mudar uma data. É reorganizar a pauta considerando os prazos e o
            impacto sobre as demais demandas.
          </KeyTakeaway>
          <KeyTakeaway title="Prazo fatal" tone="attention">
            O prazo fatal exige solicitação expressa e formal.
          </KeyTakeaway>
        </div>
      </AreaSection>

      <AreaSection soft>
        <SectionHeading
          eyebrow="A.N.O. · Acordo de Nível Operacional"
          title="Quanto tempo uma demanda jurídica leva?"
          lead="Os prazos de A.N.O. variam conforme a natureza da demanda e ajudam a organizar a pauta, distribuir o trabalho e dar previsibilidade às áreas atendidas."
        />
        <Accordion type="single" collapsible className="mt-10 space-y-4" defaultValue="faixa-5">
          {anoFaixas.map((f) => (
            <AccordionItem
              key={f.prazo + f.unidade}
              value={`faixa-${f.prazo}`}
              className="card-elevated rounded-3xl border-b-0 px-7 sm:px-8"
            >
              <AccordionTrigger className="py-6 text-left hover:no-underline">
                <span className="flex items-baseline gap-3">
                  <span className="text-3xl font-extrabold tabular-nums text-primary">
                    {f.prazo}
                  </span>
                  <span className="text-sm font-bold text-sky">{f.unidade}</span>
                  <span className="text-sm font-normal text-muted-foreground">
                    {f.itens.length} tipos de demanda
                  </span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-7">
                <SoftList
                  items={f.itens}
                  className="sm:columns-2 sm:gap-8 [&>li]:break-inside-avoid"
                />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="mt-8">
          <KeyTakeaway title="Reuniões">
            Para reuniões, o campo “Dentro do A.N.O.” é tratado como “não se aplica”, porque não se
            trata de uma demanda com prazo de entrega convencional.
          </KeyTakeaway>
        </div>

        <div className="mt-14">
          <SectionHeading
            eyebrow="Impacto"
            title="Como o A.N.O. impacta a operação"
            lead="O prazo não indica apenas uma data de entrega."
          />
          <div className="mt-8">
            <CheckList items={anoImpactos} />
          </div>
          <div className="mt-8">
            <KeyTakeaway title="Além do prazo" tone="attention">
              O prazo ajuda a organizar a rotina e também apoia decisões de gestão sobre volume,
              capacidade e prioridades.
            </KeyTakeaway>
          </div>
        </div>
      </AreaSection>

      <AreaSection>
        <SectionHeading
          eyebrow="Contencioso"
          title="Publicações judiciais"
          lead="As publicações são tratadas como a primeira demanda do dia pelos responsáveis pela leitura, porque podem envolver prazos judiciais."
        />
        <div className="mt-10">
          <FlowStrip steps={publicacoesFluxo} />
        </div>
        <div className="mt-8">
          <KeyTakeaway title="Conferência">
            Após o recebimento, as informações relevantes são inseridas na pauta contenciosa e
            submetidas à conferência e revisão antes do acompanhamento do prazo.
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
