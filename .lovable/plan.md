# Marcas do Sistema FIEPE nas páginas

## Análise das versões enviadas

- **Horizontal colorida** — melhor para fundos claros e largos. Ideal no rodapé em desktop.
- **Horizontal branca** — melhor para o topo azul (hero/mesh) em desktop: acompanha a linha do título sem competir com ele.
- **Empilhada (2 linhas) branca/colorida** — melhor para telas estreitas: no celular a versão horizontal com 5 marcas fica minúscula e ilegível.
- **Preta** — não recomendada aqui; o fundo do projeto é quase branco (levemente creme) e o azul institucional dá mais unidade. Fica como reserva para impressão.

Regra simples: **branca sobre o azul, colorida sobre o claro; horizontal no desktop, empilhada no celular.**

## Onde posicionar

1. **Topo das páginas (hero azul com mesh)** — marca horizontal branca alinhada à esquerda, acima do texto "Unidade Compartilhada Jurídica e de Compliance · Onboarding", com altura discreta (~20–24 px). No celular, troca automática para a versão empilhada branca (~34 px de altura).
2. **Rodapé de todas as páginas** — marca horizontal colorida alinhada à esquerda, acima do texto legal atual, separada por uma linha fina. No celular, versão empilhada colorida.
3. **Barra superior dos módulos** (Transparência e Fiscalização, onde hoje aparece "Onboarding UCJC") — versão pequena, sem repetir a marca duas vezes na mesma tela.

Não colocar a marca no meio do conteúdo nem sobre os cards — isso polui a leitura.

## Implementação

- Subir as 4 imagens necessárias (horizontal branca, empilhada branca, horizontal colorida, empilhada colorida) como assets de CDN e referenciá-las por ponteiro `.asset.json`.
- Criar um componente `BrandLogo` em `src/components/ucjc/` com as variantes `light` (sobre azul) e `color` (sobre claro), trocando horizontal/empilhada por breakpoint (`hidden sm:block` / `sm:hidden`) e com `alt="Sistema FIEPE — FIEPE, IEL, CIEPE, SENAI, SESI"`.
- Usar o componente em: `src/routes/index.tsx` (hero e rodapé), `src/components/ucjc/primitives.tsx` (`AreaHero`, usado por Jurídico, Compliance e Operações) e no cabeçalho de `src/routes/modulos.$moduleId.$sectionId.tsx`.
- Nenhuma mudança de conteúdo, cores, cards ou estrutura existente.

## Validação

- Verificação de tipos sem erros.
- Conferência visual em desktop (1280) e celular (390): marca legível, contraste adequado sobre o azul e sobre o fundo claro, sem quebra de layout.
