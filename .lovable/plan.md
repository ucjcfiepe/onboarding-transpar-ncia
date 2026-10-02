# Organograma responsivo da UCJC

## Objetivo
Adicionar à página institucional uma nova seção nativa que reproduza a hierarquia da referência, sem incorporar a imagem e sem alterar o conteúdo já existente.

## Implementação
- Criar uma fonte de conteúdo para a Gestão Jurídico e Compliance, as quatro áreas e todos os cargos e especialidades da referência.
- Criar um componente próprio para o organograma, reutilizando os padrões visuais e os controles existentes no onboarding.
- No desktop, exibir três níveis conectados visualmente: Gestão, áreas e equipes, com uma área ativa destacando seus subordinados.
- No tablet e mobile, manter a Gestão no topo e apresentar as quatro áreas como expansões por toque, sem rolagem horizontal excessiva.
- Inserir a seção “Como a UCJC está organizada” após a apresentação principal e antes das áreas/módulos existentes.

## Validação
- Conferir fidelidade dos nomes, cargos, especialidades e relações hierárquicas.
- Testar expansão, legibilidade e ausência de cortes ou sobreposição em desktop, tablet e mobile.
- Confirmar que as páginas e conteúdos atuais permanecem inalterados.

## Detalhes técnicos
- Separar dados e apresentação para facilitar manutenção futura.
- Usar HTML semântico, estados acessíveis (`aria-expanded`/`aria-controls`) e animações discretas com suporte a movimento reduzido.
- Registrar a decisão estrutural do componente no guia técnico do projeto.
