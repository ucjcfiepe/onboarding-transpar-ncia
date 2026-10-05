# Refinamento visual do organograma da UCJC

## Objetivo
Dar mais respiro ao organograma e tornar a seleção de cada área imediatamente perceptível, sem alterar conteúdo, hierarquia, ordem ou estrutura da página.

## Ajustes
- Ampliar moderadamente os espaços entre Gestão, áreas e equipes, além dos intervalos horizontais e entre cargos.
- Reposicionar e alongar as conexões para que permaneçam alinhadas, finas e afastadas dos cards.
- Reforçar os estados das áreas: neutro, hover, foco e selecionado, com azul institucional, texto claro, borda, sombra e leve elevação.
- Aplicar destaque secundário somente aos cargos da área selecionada; manter os demais legíveis e neutros.
- Preservar o accordion existente em telas menores, refinando espaçamento e estados sem criar rolagem horizontal.

## Validação
- Conferir seleção persistente ao alternar entre as quatro áreas.
- Verificar hover e foco por teclado.
- Testar desktop, tablet e mobile para evitar cortes, sobreposição e overflow horizontal.
- Confirmar que textos, quantidade de cargos, ordem e hierarquia permanecem inalterados.

## Detalhes técnicos
- Manter os dados do organograma separados do componente visual.
- Aplicar os estados por propriedades e classes sem duplicar nem modificar o conteúdo.
- Reutilizar os tokens institucionais e o componente de botão existentes.
