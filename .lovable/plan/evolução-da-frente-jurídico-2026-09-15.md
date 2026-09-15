# Evolução da frente Jurídico

## Resultado
A frente Jurídico ficará dividida em dois níveis claros, sem perder nenhum conteúdo aprovado:

1. **Conheça o Jurídico** — apresentação institucional, serviços, estrutura, situações de acionamento e orientações já existentes.
2. **Como trabalhamos no Jurídico** — trilhas guiadas por função, com progresso e etapas.

## Implementação

### Página do Jurídico
- Manter o topo e todo o conteúdo institucional atual, agrupando-o visualmente sob “Conheça o Jurídico”.
- Inserir, após essa apresentação, a seção “Como trabalhamos no Jurídico” com o texto introdutório fornecido.
- Exibir dois cards:
  - **Rotina da Assistência Jurídica**: disponível, 14 etapas, público, duração estimada, progresso e ação para iniciar ou continuar.
  - **Reporte e Gestão de Demandas**: público Advogados, status “Em breve”, sem conteúdo fictício nem ação ativa.
- Reorganizar os conteúdos operacionais já existentes dentro das etapas correspondentes da primeira trilha, preservando os textos aprovados e evitando duplicação na página institucional.

### Trilha da Assistência Jurídica
- Criar 14 etapas navegáveis com menu lateral no desktop, menu compacto no mobile, avanço sequencial e progresso salvo no navegador.
- Usar cards, fluxos, linha do tempo, caixas de atenção, listas e checklists existentes no design system.
- Implementar integralmente os conteúdos fornecidos para papel da Assistência, reportes, pauta, triagem, movimentações, contencioso, apoios, controles, prognóstico, atualização mensal e relatório.
- Aplicar as restrições expressas: não ensinar procedimentos exclusivos dos advogados, não incluir horários de consulta ao ZEEV, não criar quiz e não incluir “Tipo de Demanda por Grupo”.
- Usar os anexos somente para confirmar e complementar pontos compatíveis com o pedido, com prevalência total do texto fornecido.

### Arquitetura e integração
- Registrar a nova trilha na estrutura de jornadas para reutilizar navegação e progresso existentes.
- Marcá-la como exclusiva da frente Jurídico, excluindo-a dos cards e do progresso geral dos módulos transversais da home.
- Preparar o registro para futuras trilhas por papel, sem implementar a trilha dos Advogados agora.
- Ajustar títulos e descrições da página da trilha para identificar corretamente a UCJC e a Assistência Jurídica.

## Validação
- Conferir que Transparência e Fiscalização Contínua permanecem inalteradas.
- Testar início, continuação, conclusão e persistência do progresso da nova trilha.
- Verificar a página Jurídico e todas as etapas em desktop e mobile, incluindo legibilidade, ausência de sobreposição e navegação funcional.
