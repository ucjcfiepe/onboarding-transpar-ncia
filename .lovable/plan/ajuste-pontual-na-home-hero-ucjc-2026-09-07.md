# Ajuste pontual na Home — Hero UCJC

## Objetivo
Ajustar apenas o hero da home da UCJC, preservando todo o restante da estrutura, layout, tipografia, cards e textos.

## Escopo
1. Remover o texto "FIEPE · IEL · CIEPE" que aparece ao lado/abaixo do botão no hero (`src/routes/index.tsx`).
2. Enriquecer o fundo do hero com um degradê orgânico / mesh gradient baseado nas cores institucionais, sem blocos de cor, faixas lineares ou efeito arco-íris (`src/styles.css`).
3. Manter o grain/noise sutil já existente, garantindo legibilidade do texto branco.

## Cores institucionais a usar
- #164194 — azul institucional principal (predominante)
- #008BD2 — azul claro (pontos de luz)
- #52AE32 — verde (discreto, em extremidade)
- #E84910 — laranja (pequena quantidade, contraste suave)
- #6CC2BA — verde-água (suave, lateral/topo)

## Estratégia técnica
- Ajustar o utilitário `.mesh` para que o azul profundo seja a base, as demais cores apareçam como manchas radiais difusas com `blur()` generoso e opacidades baixas, e o centro não fique com uma mancha azul dominante demais.
- Manter `.grain` aplicado ao hero para a textura fina e discreta.
- Verificar contraste do texto branco e do botão após o ajuste.

## Validação
- `bunx tsgo --noEmit` sem erros.
- Verificação visual no preview: hero com fundo mais rico, texto legível, nenhuma alteração nas demais seções.
