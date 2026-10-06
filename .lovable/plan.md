# Atualizar as menções antigas "Unidade Jurídica"

## Resultado

A inspeção não encontrou nenhuma menção a "Unidade Corporativa Jurídica e de Compliance": todas as ocorrências da home já dizem "Unidade Compartilhada Jurídica e de Compliance". O que ainda resta é o nome antigo, **"Unidade Jurídica"**, em dois pontos. Este plano troca esses dois pontos pela nomenclatura UCJC, sem tocar em conteúdo, hierarquia ou identidade visual.

## O que muda

**1. Frase na conclusão do módulo Transparência**
- Hoje: "O módulo **Fiscalização Contínua do TCU** já está disponível na trilha da **Unidade Jurídica**."
- Fica: "O módulo **Fiscalização Contínua do TCU** já está disponível na trilha da **UCJC**."

**2. Metadados da página (título da aba do navegador e pré-visualização ao compartilhar)**
- Título: "Onboarding Unidade Jurídica — SESI/SENAI" → "Onboarding UCJC — Unidade Compartilhada Jurídica e de Compliance"
- Autor: "Unidade Jurídica — SESI/SENAI" → "UCJC — Unidade Compartilhada Jurídica e de Compliance"
- Descrição: passa a apresentar a UCJC (Jurídico, Compliance e Operações) em vez de citar apenas a Unidade Jurídica
- Título ao compartilhar (og:title) acompanha o novo título

## Fora do escopo

- O endereço do Sharepoint contém "UCJUR" no link e permanece exatamente como está.
- Comentários internos de dois arquivos (na folha de estilos e no registro de módulos) ainda citam "Unidade Jurídica". Eles não aparecem em tela nem em compartilhamentos; não serão alterados neste plano, mas posso ajustar se você quiser.
- Nenhum texto, card, seção, cor ou componente do onboarding é alterado. Transparência e Fiscalização Contínua continuam inteiros.

## Detalhes técnicos

- `src/components/onboarding/sections.tsx` (linha ~263): trocar "na trilha da Unidade Jurídica" por "na trilha da UCJC".
- `src/routes/__root.tsx` (linhas 82-91, bloco `head`): atualizar `title`, `author`, `description`, `og:title` e `og:description`.
- Cada página já define o próprio título com "Onboarding UCJC", então o valor de `__root` funciona como base e fallback para compartilhamentos — a mudança é de consistência, não de correção de algo que apareça errado hoje.
- Verificação: checagem de tipos, log de build e navegação real até a conclusão do Transparência para confirmar a nova frase e a ausência de erros.
