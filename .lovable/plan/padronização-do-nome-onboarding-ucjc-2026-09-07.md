# Padronização do nome: Onboarding UCJC

## Objetivo
Garantir que todas as ocorrências do termo "Onboarding UJ" no projeto estejam padronizadas como "Onboarding UCJC", conforme identidade correta da Unidade Compartilhada Jurídica e de Compliance.

## Estado atual verificado
- Busca por "Onboarding UJ" em todo o projeto (incluindo arquivos ocultos, excluindo `node_modules`, `.git` e `dist`) não retornou nenhuma ocorrência.
- A ocorrência anterior em `src/routes/modulos.$moduleId.$sectionId.tsx` já foi ajustada para "Onboarding UCJC".
- O termo "UJ" isolado só aparece em hashes do `bun.lock`, sem relação com o nome do onboarding.

## Ações
1. Reexecutar busca global por "Onboarding UJ" (case-sensitive e depois case-insensitive) para confirmar ausência de referências remanescentes.
2. Caso alguma ocorrência seja encontrada, substituir diretamente no arquivo-fonte pelo texto literal "Onboarding UCJC".
3. Caso nenhuma ocorrência seja encontrada, validar o preview e finalizar sem alterações adicionais.

## Escopo
- Apenas texto de exibição do nome do projeto.
- Nenhuma alteração de estrutura, layout, componentes, rotas, estilos ou funcionalidades.
