# Onboarding - Transparência

Crie uma aplicação web interativa de onboarding corporativo para a Unidade Jurídica, com foco inicial no módulo “Transparência SESI/SENAI”.

Quero uma aplicação funcional, navegável, responsiva e visualmente sofisticada.

IMPORTANTE:

Este produto NÃO deve parecer:

- um site institucional tradicional;

- um dashboard administrativo;

- um Power BI;

- uma intranet antiga;

- um sistema governamental;

- uma apresentação de slides;

- um template SaaS genérico;

- uma plataforma infantil de treinamento.

Quero uma experiência de aprendizagem digital contemporânea, elegante, clean e progressiva, com forte cuidado de UX/UI.

O produto deverá ser escalável, pois futuramente será acrescentado outro módulo chamado “Fiscalização Contínua”.

Não desenvolver o conteúdo de Fiscalização Contínua agora. Apenas deixar a arquitetura preparada para receber novos módulos.

==================================================

1. OBJETIVO DO PRODUTO

==================================================

O onboarding deve ensinar a novos integrantes como funciona a rotina de Transparência do SESI e do SENAI.

Ao concluir o módulo, o usuário deve compreender:

- o que é a Transparência no contexto do SESI e do SENAI;

- qual é sua finalidade;

- como funciona o processo de trabalho;

- quais são os ambientes públicos envolvidos;

- quais plataformas e sistemas são utilizados;

- qual é a função de cada ferramenta;

- quais são as responsabilidades do Analista de Transparência;

- como as informações são solicitadas, recebidas e disponibilizadas;

- como as publicações são verificadas;

- como as evidências são registradas;

- como inconsistências são tratadas;

- quando uma área interna deve ser acionada;

- quando o Departamento Nacional deve ser consultado;

- quando uma intervenção técnica deve ser solicitada;

- quando utilizar DataCG, DDR, Transparência Web, SORS e ZEEV.

A experiência deve ensinar por meio de conteúdo curto, interação, exploração visual e situações práticas.

Evitar páginas compostas apenas por grandes blocos de texto.

==================================================

2. ARQUITETURA GERAL DA APLICAÇÃO

==================================================

Criar uma página inicial para o onboarding.

A página deve apresentar:

- nome do onboarding;

- breve apresentação;

- mensagem de boas-vindas;

- progresso geral;

- módulos disponíveis;

- possibilidade de continuar de onde o usuário parou.

Inicialmente haverá:

MÓDULO 01

Transparência SESI/SENAI

Deixar visualmente preparada a arquitetura para:

MÓDULO 02

Fiscalização Contínua

O segundo módulo pode aparecer como “Em breve”, mas não desenvolver seu conteúdo.

A aplicação deverá permitir futuramente a inclusão de outros módulos sem necessidade de reconstruir a arquitetura principal.

==================================================

3. ESTRUTURA DO MÓDULO TRANSPARÊNCIA SESI/SENAI

==================================================

Criar uma trilha de aprendizagem composta por:

1. Introdução

2. Como funciona o processo

3. Ambientes e ferramentas

4. Rotina do Analista de Transparência

5. Situações práticas

6. Quiz final

7. Conclusão

O usuário deve conseguir visualizar:

- seção atual;

- seções concluídas;

- seções pendentes;

- progresso percentual;

- próximo conteúdo;

- conteúdos anteriores.

O progresso pode ser armazenado localmente nesta primeira versão.

==================================================

4. INTRODUÇÃO À TRANSPARÊNCIA

==================================================

Apresentar o seguinte conceito de forma visual e resumida:

“A Transparência, no contexto do SESI e do SENAI, compreende o conjunto de atividades destinadas a garantir que as informações institucionais obrigatórias estejam disponíveis ao público de forma atualizada, acessível, organizada e rastreável.”

Explicar que a rotina não consiste apenas em publicar informações.

Ela envolve:

- planejamento dos prazos;

- solicitação de informações;

- acompanhamento das áreas responsáveis;

- recebimento e conferência;

- disponibilização;

- verificação;

- registro de evidências;

- identificação de inconsistências;

- solicitação de correções;

- acompanhamento de adequações técnicas e estruturais.

Apresentar como finalidades:

- fortalecer a governança institucional;

- contribuir para a prestação de contas;

- atender às orientações aplicáveis;

- cumprir os prazos de divulgação;

- garantir rastreabilidade;

- identificar e tratar inconsistências;

- manter os ambientes de Transparência disponíveis e adequados.

Não apresentar tudo como uma lista extensa na interface.

Transformar esse conteúdo em composição editorial, cards pequenos, destaques tipográficos e elementos visuais.

==================================================

5. ARQUITETURA DO PROCESSO

==================================================

Esta arquitetura está aprovada e deve ser utilizada exatamente nesta ordem:

1. PLANEJAR E SOLICITAR

2. RECEBER E DISPONIBILIZAR

3. VERIFICAR E REGISTRAR

4. CORRIGIR E APRIMORAR

Criar uma representação visual interativa e elegante desse fluxo.

Essa deve ser uma das principais experiências visuais do onboarding.

Em desktop, apresentar as quatro etapas conectadas horizontalmente ou em composição visual equivalente.

No mobile, adaptar para uma sequência vertical.

Ao clicar ou selecionar cada etapa:

- destacar a etapa;

- revelar sua pergunta-chave;

- apresentar as atividades relacionadas;

- suavizar visualmente as demais;

- utilizar transições sutis.

Representar visualmente que o processo é cíclico.

Após “Corrigir e aprimorar”, uma nova verificação pode ser necessária.

--------------------------------------------------

ETAPA 1 — PLANEJAR E SOLICITAR

--------------------------------------------------

Pergunta-chave:

“O que precisa ser disponibilizado, quando e por quem?”

Essa etapa compreende:

- consultar calendário e cronogramas;

- identificar as obrigações;

- verificar módulo e periodicidade;

- identificar a área responsável;

- identificar prazos;

- organizar as solicitações;

- solicitar as informações;

- acompanhar o envio;

- realizar cobranças quando necessário.

--------------------------------------------------

ETAPA 2 — RECEBER E DISPONIBILIZAR

--------------------------------------------------

Pergunta-chave:

“A informação chegou e como ficará disponível?”

Essa etapa compreende:

- receber arquivos;

- verificar período de referência;

- conferir formato;

- verificar completude;

- solicitar correção quando necessário;

- utilizar a plataforma correspondente quando houver publicação direta;

- acompanhar informações originadas em outros sistemas;

- acompanhar integrações automáticas quando aplicável.

IMPORTANTE:

Utilizar preferencialmente o termo “disponibilizar”, e não apenas “publicar”.

Nem todas as informações são publicadas manualmente pelo Analista de Transparência.

Em determinadas situações, sua função é acompanhar a informação originada em outro sistema ou disponibilizada por integração.

--------------------------------------------------

ETAPA 3 — VERIFICAR E REGISTRAR

--------------------------------------------------

Pergunta-chave:

“Foi disponibilizada corretamente e existe evidência?”

Essa etapa compreende:

- acessar os ambientes públicos;

- conferir se a informação está disponível;

- verificar o conteúdo;

- conferir período e arquivo;

- testar links;

- verificar navegação;

- acompanhar inconsistências;

- conferir aderência aos manuais aplicáveis;

- registrar data;

- registrar link;

- registrar prints;

- manter evidências;

- atualizar mapas e controles.

O registro deve estar associado à verificação efetiva da disponibilização.

--------------------------------------------------

ETAPA 4 — CORRIGIR E APRIMORAR

--------------------------------------------------

Pergunta-chave:

“Há algo a corrigir ou adequar?”

Essa etapa compreende:

- solicitar correção à área responsável;

- solicitar novo arquivo;

- tratar erros de carga;

- corrigir informações nas plataformas aplicáveis;

- consultar orientações do Departamento Nacional quando necessário;

- solicitar alterações técnicas quando necessário;

- acompanhar a implementação;

- testar a solução;

- validar a alteração;

- registrar a conclusão.

Explicar a diferença:

CORREÇÃO

Resolve uma inconsistência pontual.

APRIMORAMENTO

Pode envolver adequação estrutural, nova orientação, evolução ou melhoria do portal.

==================================================

6. AMBIENTES, PLATAFORMAS, SISTEMAS E FERRAMENTAS

==================================================

NÃO agrupar todos os recursos simplesmente como “sistemas”.

É importante ensinar ao usuário que cada recurso exerce uma função diferente.

Organizar esta seção pela pergunta que cada grupo responde.

==================================================

6.1 ONDE O PÚBLICO CONSULTA?

==================================================

Classificação:

AMBIENTES PÚBLICOS DE DIVULGAÇÃO E CONSULTA

Criar cards para:

- Portal da Transparência SESI/PE

- Portal da Transparência SENAI/PE

- Prestação de Contas TCU SESI/PE

- Prestação de Contas TCU SENAI/PE

Explicar que esses ambientes são os pontos públicos em que as informações podem ser consultadas.

Não classificá-los como sistemas internos de trabalho.

Permitir futuramente a inclusão de links externos nesses cards.

==================================================

6.2 ONDE A EQUIPE PUBLICA OU ADMINISTRA?

==================================================

Classificação:

PLATAFORMAS DE PUBLICAÇÃO E GESTÃO

--------------------------------------------------

TRANSPARÊNCIA WEB

--------------------------------------------------

Plataforma utilizada pelo Analista de Transparência para realizar determinadas cargas, validar arquivos, publicar conteúdos e administrar títulos, notas e fontes.

Apresentar resumidamente um fluxo como:

Selecionar módulo

→

Informar parâmetros

→

Inserir arquivo

→

Processar

→

Validar

→

Publicar

→

Verificar no portal

Também pode ser utilizada para consulta de informações relacionadas às cargas e ao cronograma de publicação.

--------------------------------------------------

DDR

--------------------------------------------------

Plataforma utilizada principalmente para gestão e publicação de informações relacionadas a dirigentes, responsáveis, órgãos colegiados e reuniões.

Entre suas funcionalidades estão:

- cadastro de dados;

- gestão de dirigentes e responsáveis;

- registro de substituições;

- cadastro de reuniões;

- gestão de títulos, notas e fontes;

- Relação de Dirigentes;

- Rol de Responsáveis.

==================================================

6.3 DE ONDE VÊM DETERMINADAS INFORMAÇÕES?

==================================================

Classificação:

SISTEMA DE ORIGEM DE INFORMAÇÕES

--------------------------------------------------

SORS

--------------------------------------------------

O SORS participa da rotina como sistema relacionado à origem ou ao lançamento de determinadas informações orçamentárias e financeiras que posteriormente são refletidas no Portal da Transparência.

Entre os conteúdos relacionados estão:

- execução orçamentária;

- saldos de exercícios anteriores;

- despesas por licitação e processos de seleção;

- rateio de despesas.

Nesses casos, o Analista de Transparência pode não realizar uma publicação manual.

Sua atuação pode envolver:

- acompanhar o prazo;

- cobrar a área responsável;

- verificar se a informação foi refletida no portal;

- registrar a verificação.

==================================================

6.4 COMO A EQUIPE MONITORA?

==================================================

Classificação:

FERRAMENTA DE MONITORAMENTO

--------------------------------------------------

DATACG

--------------------------------------------------

O DataCG é utilizado para monitoramento dos ambientes de Transparência e Prestação de Contas.

A rotina pode envolver:

- acessar o sistema;

- selecionar SESI ou SENAI;

- acessar o monitoramento dos sites;

- consultar eventos;

- identificar inconsistências;

- identificar áreas responsáveis;

- solicitar ajustes;

- acompanhar a correção.

Criar um destaque visual de atenção:

“O DataCG auxilia na identificação de inconsistências, disponibilidade e completude, mas não substitui a análise de conformidade do conteúdo.”

Não afirmar que o DataCG valida integralmente o mérito ou a conformidade da informação.

==================================================

6.5 COMO A EQUIPE ACIONA ALTERAÇÕES TÉCNICAS?

==================================================

Classificação:

FERRAMENTA DE ACIONAMENTO TÉCNICO

--------------------------------------------------

ZEEV

--------------------------------------------------

Esta definição é muito importante.

O ZEEV NÃO é uma plataforma de publicação da Transparência.

O ZEEV NÃO deve ser apresentado como origem das informações.

No contexto deste onboarding, o ZEEV é uma ferramenta interna utilizada pelo Analista de Transparência para abrir e acompanhar chamados destinados à atuação técnica do desenvolvedor ou da equipe responsável pelo site.

O acionamento pode ocorrer, por exemplo, para:

- adequações solicitadas pelo Departamento Nacional;

- alterações estruturais no Portal da Transparência;

- inclusão ou modificação de funcionalidades;

- correção de problemas de navegação;

- ajustes de links ou elementos do site;

- indisponibilidade;

- queda do portal;

- outras necessidades que exijam intervenção técnica.

Utilizar a expressão:

“Acionamento técnico por meio do ZEEV.”

NÃO utilizar:

“Publicação via ZEEV.”

Apresentar visualmente o fluxo:

Identificar necessidade técnica

→

Reunir informações/evidências

→

Abrir chamado no ZEEV

→

Acompanhar atendimento

→

Testar alteração

→

Validar

→

Registrar evidência

==================================================

7. ROTINA DO ANALISTA DE TRANSPARÊNCIA

==================================================

Criar uma experiência interativa em formato de jornada.

Não apresentar apenas uma lista.

Utilizar timeline, fluxo progressivo ou narrativa interativa.

Exemplo de jornada:

Existe uma obrigação próxima do prazo

→

O analista identifica a área responsável

→

Solicita a informação

→

Acompanha o recebimento

→

Recebe o arquivo

→

Confere os requisitos

→

Define como a informação será disponibilizada

→

Acompanha ou realiza a disponibilização

→

Verifica no ambiente público

→

Registra a evidência

→

Caso exista problema, direciona a correção

Permitir clicar nas etapas para visualizar explicações curtas.

==================================================

8. RESPONSABILIDADES

==================================================

Criar uma seção visual e objetiva sobre responsabilidades.

--------------------------------------------------

ANALISTA DE TRANSPARÊNCIA

--------------------------------------------------

Responsável por atividades como:

- coordenar a rotina;

- acompanhar prazos;

- solicitar informações;

- acompanhar áreas responsáveis;

- receber e conferir arquivos;

- realizar publicações quando aplicável;

- acompanhar disponibilizações;

- verificar os ambientes públicos;

- registrar evidências;

- identificar inconsistências;

- solicitar correções;

- abrir e acompanhar chamados técnicos quando necessário.

--------------------------------------------------

ÁREAS RESPONSÁVEIS PELAS INFORMAÇÕES

--------------------------------------------------

Responsáveis por:

- produzir os dados;

- validar o conteúdo;

- encaminhar os arquivos;

- observar os prazos;

- corrigir inconsistências relacionadas às informações sob sua responsabilidade.

--------------------------------------------------

EQUIPE TÉCNICA / DESENVOLVEDOR

--------------------------------------------------

Responsável pelas intervenções técnicas solicitadas quando houver necessidade de:

- correção técnica;

- ajuste estrutural;

- alteração de funcionalidade;

- tratamento de indisponibilidade;

- outras modificações que dependam de desenvolvimento.

O acionamento técnico ocorre por meio do ZEEV quando aplicável.

--------------------------------------------------

DEPARTAMENTO NACIONAL

--------------------------------------------------

Relaciona-se ao processo por meio de:

- orientações;

- manuais;

- cronogramas;

- solicitações de adequação;

- apoio aos Regionais;

- requisitos e direcionamentos nacionais.

==================================================

9. SITUAÇÕES PRÁTICAS

==================================================

Criar uma área interativa de tomada de decisão.

O usuário deve receber uma situação e escolher o encaminhamento adequado.

Após responder:

- mostrar se a resposta está correta;

- explicar o motivo;

- permitir continuar.

Evitar feedback apenas como “certo” ou “errado”.

--------------------------------------------------

CENÁRIO 1

--------------------------------------------------

“O DataCG identificou uma inconsistência relacionada a uma informação publicada. Qual deve ser o próximo passo?”

Criar alternativas plausíveis.

A resposta deve considerar a necessidade de identificar a natureza da inconsistência e o responsável pelo ajuste.

--------------------------------------------------

CENÁRIO 2

--------------------------------------------------

“O Portal da Transparência do SENAI está indisponível. As informações estão corretas, mas o site não está funcionando. Como o Analista de Transparência deve solicitar a intervenção técnica?”

Resposta correta:

Acionamento técnico por meio do ZEEV.

Feedback:

“O ZEEV é utilizado para abrir e acompanhar o chamado destinado à atuação técnica necessária no portal.”

--------------------------------------------------

CENÁRIO 3

--------------------------------------------------

“Uma área encaminhou um arquivo para publicação, mas ele está incompleto. O que fazer?”

Resposta esperada:

Solicitar correção à área responsável antes de concluir a disponibilização.

--------------------------------------------------

CENÁRIO 4

--------------------------------------------------

“A informação aparece normalmente no DataCG. Isso significa necessariamente que seu conteúdo está totalmente de acordo com o manual?”

Resposta correta:

Não.

Feedback:

“O DataCG auxilia no monitoramento, mas não substitui a análise de conformidade do conteúdo.”

--------------------------------------------------

CENÁRIO 5

--------------------------------------------------

“Uma informação foi disponibilizada no portal. A atividade está encerrada?”

Resposta correta:

Não necessariamente.

Feedback:

“Após a disponibilização, é necessário verificar o resultado e registrar a evidência correspondente.”

Criar outros cenários apenas quando puderem ser derivados das regras já fornecidas.

Não inventar procedimentos.

==================================================

10. QUIZ FINAL

==================================================

Criar um quiz com aproximadamente 8 a 10 perguntas.

Variar formatos:

- múltipla escolha;

- verdadeiro ou falso;

- associação;

- pequenos cenários.

Avaliar:

- arquitetura das quatro etapas;

- ambientes públicos;

- Transparência Web;

- DDR;

- SORS;

- DataCG;

- ZEEV;

- responsabilidades;

- registro de evidências;

- tratamento de inconsistências.

Mostrar progresso durante o quiz.

Ao finalizar, apresentar:

- quantidade de acertos;

- percentual;

- feedback;

- possibilidade de revisar respostas.

Não criar ranking.

Não utilizar:

- medalhas;

- troféus;

- confetes;

- estética infantil de gamificação.

==================================================

11. CONCLUSÃO DO MÓDULO

==================================================

Criar uma tela de conclusão elegante.

Mostrar:

- módulo concluído;

- percentual de conclusão;

- resultado do quiz;

- principais aprendizados;

- opção para revisar o conteúdo;

- opção para retornar à página inicial.

A conclusão deve transmitir sensação de avanço e domínio do conteúdo, mas sem gamificação infantil.

==================================================

12. DIREÇÃO VISUAL

==================================================

A interface deve seguir a identidade visual do Sistema Indústria e dialogar diretamente com SESI e SENAI.

Não quero simplesmente reproduzir o layout institucional existente.

Quero uma evolução digital sofisticada dessa identidade.

O resultado deve ser:

- elegante;

- contemporâneo;

- sofisticado;

- clean;

- leve;

- organizado;

- tecnológico;

- profissional;

- visualmente interessante sem ficar carregado.

A interface deve utilizar:

- bastante espaço negativo;

- degradês;

- texturas discretas;

- transparências;

- profundidade;

- formas abstratas;

- microinterações;

- excelente hierarquia tipográfica.

O uso de degradê e textura é desejado.

O objetivo NÃO é criar uma interface totalmente branca e plana.

Ao mesmo tempo, não exagerar nos efeitos.

==================================================

13. PALETA INSTITUCIONAL

==================================================

Utilizar as seguintes cores institucionais:

AZUL INSTITUCIONAL ESCURO

#164194

RGB 22, 65, 148

Esta é a principal cor estrutural da aplicação.

Utilizar em:

- navegação;

- títulos importantes;

- botões primários;

- indicadores de progresso;

- elementos gráficos;

- fundos escuros;

- destaques.

AZUL INSTITUCIONAL CLARO

#008BD2

RGB 0, 139, 210

Utilizar como cor secundária.

Aplicações:

- degradês;

- estados ativos;

- links;

- pequenos destaques;

- elementos gráficos;

- progressão visual.

VERDE SESI

#52AE32

RGB 82, 174, 50

Utilizar como acento contextual para conteúdos relacionados especificamente ao SESI.

Não utilizar como cor predominante da aplicação.

LARANJA SENAI

#E84910

RGB 239, 73, 16

Utilizar como acento contextual para conteúdos relacionados especificamente ao SENAI.

Não utilizar como cor predominante da aplicação.

==================================================

14. CORES ACESSÓRIAS

==================================================

Complementar a identidade institucional com uma paleta de interface.

AZUL NOITE

#0B234A

Utilizar para:

- fundos escuros;

- hero;

- profundidade;

- degradês.

AZUL NÉVOA

#EAF3F8

Utilizar para:

- fundos suaves;

- cards;

- áreas informativas.

AZUL GELO

#F3F7FA

Utilizar como:

- fundo alternativo;

- grandes superfícies claras.

OFF-WHITE

#FAFAF8

Utilizar como:

- fundo principal;

- alternativa ao branco puro.

BRANCO

#FFFFFF

GRAFITE AZULADO

#252D38

Utilizar para:

- texto principal.

CINZA AZULADO

#667383

Utilizar para:

- texto secundário;

- labels.

CINZA CLARO

#DDE4EA

Utilizar para:

- bordas;

- divisores;

- elementos neutros.

As cores acessórias devem permanecer visualmente subordinadas às cores institucionais.

Não introduzir roxo, rosa ou outras cores decorativas sem função.

==================================================

15. LÓGICA DE USO DAS CORES SESI E SENAI

==================================================

Quando o conteúdo for comum às duas entidades:

utilizar predominantemente os azuis institucionais.

Quando o conteúdo for específico do SESI:

utilizar pequenos acentos em verde #52AE32.

Quando o conteúdo for específico do SENAI:

utilizar pequenos acentos em laranja #E84910.

Não dividir a aplicação em:

“lado verde SESI” versus “lado laranja SENAI”.

SESI e SENAI devem compartilhar uma linguagem visual única.

O azul funciona como elemento unificador.

Verde e laranja funcionam como marcadores de contexto.

Podem aparecer em:

- tags;

- pequenos ícones;

- linhas;

- indicadores;

- chips;

- detalhes de cards;

- pequenos highlights.

==================================================

16. DEGRADÊS

==================================================

Os degradês são parte importante da identidade desta aplicação.

Devem ser sofisticados, profundos e suaves.

Priorizar degradês dentro da família dos azuis.

Exemplos:

#0B234A → #164194

#164194 → #008BD2

Também podem existir composições com azul profundo, azul institucional, azul claro e áreas translúcidas.

Os degradês podem aparecer em:

- hero;

- fundos de seções especiais;

- arquitetura do processo;

- progresso;

- cards especiais;

- tela de conclusão;

- elementos abstratos.

Não aplicar degradê em todos os componentes.

Evitar:

- neon;

- degradês extremamente saturados;

- degradê verde + laranja como identidade principal;

- excesso de cores simultâneas.

==================================================

17. TEXTURAS E PROFUNDIDADE

==================================================

Adicionar profundidade visual de maneira discreta.

Pode utilizar:

- grain/noise muito fino;

- radial gradients;

- luz difusa;

- blur atmosférico;

- transparências;

- formas geométricas abstratas;

- sobreposição de camadas;

- sombras amplas e suaves;

- bordas translúcidas.

A textura deve funcionar como atmosfera.

Ela não deve competir com o conteúdo.

O usuário deve perceber uma interface rica e sofisticada, mas não necessariamente identificar imediatamente cada efeito utilizado.

==================================================

18. GLASSMORPHISM

==================================================

Utilizar glassmorphism apenas de maneira pontual.

Pode aparecer em:

- painel sobre hero;

- indicador de progresso;

- card selecionado;

- tooltip;

- pequena área de destaque.

Utilizar:

- backdrop blur;

- transparência controlada;

- borda translúcida;

- sombra suave.

Não transformar todos os cards em vidro.

==================================================

19. LAYOUT

==================================================

Não colocar todo o conteúdo dentro de cards.

Alternar entre:

- seções abertas;

- cards;

- timelines;

- diagramas;

- composições editoriais;

- destaques tipográficos;

- elementos interativos;

- áreas com fundo diferenciado.

Utilizar bastante espaço em branco/negativo.

Criar ritmo entre as seções.

Evitar a sensação de uma sequência interminável de caixas.

==================================================

20. TIPOGRAFIA

==================================================

Utilizar uma fonte sans-serif moderna, elegante e altamente legível para a interface.

Preferir:

Manrope.

Criar hierarquia clara entre:

- títulos;

- subtítulos;

- corpo de texto;

- labels;

- legendas;

- informações auxiliares.

Títulos podem ter peso forte, mas não utilizar dimensões exageradas típicas de landing pages comerciais.

A tipografia da interface NÃO deve tentar reconstruir os logotipos institucionais.

==================================================

21. COMPONENTES

==================================================

CARDS

Utilizar:

- cantos moderadamente arredondados;

- bastante padding;

- bordas discretas;

- sombras suaves;

- estados de hover elegantes.

No hover:

- pequena elevação;

- alteração sutil de borda;

- pequena mudança de transparência;

- transição suave.

BOTÃO PRIMÁRIO

Fundo:

#164194

Texto:

branco.

Hover:

tom ligeiramente mais profundo.

BOTÃO SECUNDÁRIO

Fundo claro.

Texto azul institucional.

Borda discreta.

ÍCONES

Utilizar ícones lineares e minimalistas.

Preferir Lucide Icons ou biblioteca equivalente.

Não utilizar emojis como ícones da interface.

==================================================

22. PROGRESSO

==================================================

Criar um sistema de progresso elegante.

Pode utilizar:

- barra fina;

- linha progressiva;

- números das etapas;

- check discreto;

- percentual;

- mudança sutil de estado.

Não utilizar estética infantil.

O usuário deve perceber claramente:

- onde está;

- o que concluiu;

- o que falta.

==================================================

23. MICROINTERAÇÕES

==================================================

Utilizar animações discretas.

Exemplos:

- fade;

- slide curto;

- hover;

- elevação mínima;

- preenchimento de linha;

- animação de progresso;

- expansão de conteúdo;

- mudança de opacidade;

- transições entre etapas.

Duração aproximada:

200–400ms.

Evitar:

- bouncing;

- animações exageradas;

- efeitos que atrasem a navegação.

Respeitar prefers-reduced-motion.

==================================================

24. USO DAS MARCAS SESI E SENAI

==================================================

Quando forem fornecidos os arquivos oficiais das marcas, utilizar exatamente os assets fornecidos.

Não:

- redesenhar;

- reconstruir;

- alterar cores;

- distorcer;

- remover elementos;

- alterar proporções;

- aplicar efeitos diretamente sobre o logotipo.

Manter espaço de proteção ao redor das marcas.

Priorizar a versão oficial principal em cores quando houver contraste adequado.

Em fundos escuros, utilizar somente a versão oficial negativa quando ela estiver disponível.

Não tentar recriar as marcas utilizando texto HTML.

==================================================

25. RESPONSIVIDADE E ACESSIBILIDADE

==================================================

A aplicação deve funcionar bem em:

- desktop;

- tablet;

- mobile.

Em desktop:

aproveitar espaço horizontal para fluxos, jornadas e arquitetura de processo.

No mobile:

converter fluxos horizontais em sequências verticais.

Garantir:

- contraste adequado;

- legibilidade;

- foco visível;

- navegação por teclado quando aplicável;

- textos confortáveis;

- áreas clicáveis adequadas;

- não depender exclusivamente de cor para transmitir significado.

==================================================

26. NAVEGAÇÃO

==================================================

Criar uma navegação clara.

Pode utilizar menu lateral elegante no desktop e adaptação apropriada no mobile.

Incluir:

- início;

- módulo atual;

- progresso;

- seções;

- botão “Continuar”;

- botão “Voltar”;

- indicação de concluído;

- possibilidade de retornar a conteúdos anteriores.

Utilizar breadcrumb apenas quando realmente melhorar a orientação.

O usuário nunca deve se sentir perdido.

==================================================

27. COMPONENTES REUTILIZÁVEIS

==================================================

Estruturar o código de forma modular.

Criar componentes reutilizáveis equivalentes a:

- ModuleCard

- LearningSection

- ProcessStep

- ToolCard

- ScenarioCard

- QuizQuestion

- ProgressIndicator

- KeyTakeaway

- InfoTooltip

- EntityTag

- JourneyStep

Os nomes podem ser adaptados conforme a arquitetura do projeto.

O objetivo é permitir a inclusão futura de novos módulos, especialmente “Fiscalização Contínua”.

==================================================

28. REGRAS DE CONTEÚDO

==================================================

Não inventar:

- regras;

- prazos;

- responsabilidades;

- sistemas;

- funcionalidades;

- procedimentos;

- integrações;

- obrigações.

Quando algum detalhe não estiver definido, utilizar conteúdo editável ou placeholder discreto em vez de criar uma informação fictícia.

Manter obrigatoriamente as seguintes distinções:

AMBIENTES PÚBLICOS

- Portal da Transparência SESI/PE

- Portal da Transparência SENAI/PE

- Prestação de Contas TCU SESI/PE

- Prestação de Contas TCU SENAI/PE

PLATAFORMAS DE PUBLICAÇÃO E GESTÃO

- Transparência Web

- DDR

SISTEMA DE ORIGEM DE INFORMAÇÕES

- SORS

FERRAMENTA DE MONITORAMENTO

- DataCG

FERRAMENTA DE ACIONAMENTO TÉCNICO

- ZEEV

Nunca apresentar o ZEEV como plataforma de publicação da Transparência.

Nunca utilizar “publicação via ZEEV”.

Utilizar “acionamento técnico por meio do ZEEV”.

Não apresentar o DataCG como ferramenta que valida integralmente o mérito ou a conformidade do conteúdo.

==================================================

29. PRINCÍPIO VISUAL FINAL

==================================================

Utilizar como princípio:

“Uma evolução digital sofisticada da identidade do Sistema Indústria para uma experiência contemporânea de aprendizagem corporativa.”

A interface deve ser reconhecível como pertencente ao universo SESI/SENAI sem parecer uma simples reprodução dos portais institucionais.

Quero uma combinação equilibrada entre:

IDENTIDADE INSTITUCIONAL

+

DESIGN DIGITAL CONTEMPORÂNEO

+

APRENDIZAGEM INTERATIVA

+

SOFISTICAÇÃO VISUAL

Utilizar cor, degradê, textura, profundidade e movimento com intenção.

Se houver dúvida entre adicionar mais um elemento decorativo ou preservar espaço negativo, preservar o espaço negativo.

==================================================

30. PRIMEIRA ENTREGA

==================================================

Crie uma primeira versão funcional e navegável.

Priorize:

1. página inicial do onboarding;

2. card do módulo Transparência SESI/SENAI;

3. estrutura preparada para futuros módulos;

4. introdução;

5. arquitetura interativa das quatro etapas;

6. ambientes e ferramentas;

7. jornada do Analista de Transparência;

8. situações práticas;

9. quiz;

10. tela de conclusão;

11. progresso local.

Não implementar backend complexo nesta primeira versão.

Utilizar dados locais/mockados para:

- progresso;

- respostas;

- resultado do quiz;

- estado de conclusão.

Deixar a arquitetura preparada para evolução posterior.

Antes de finalizar a interface, revise se:

- o ZEEV está corretamente apresentado como ferramenta de acionamento técnico;

- DataCG está corretamente apresentado como ferramenta de monitoramento;

- SORS está apresentado como sistema de origem de determinadas informações;

- os portais estão apresentados como ambientes públicos;

- Transparência Web e DDR estão apresentados como plataformas de publicação/gestão;

- a arquitetura possui exatamente as quatro etapas aprovadas;

- verde SESI e laranja SENAI são utilizados como acentos, não como cores dominantes;

- o azul institucional é o elemento visual unificador;

- os degradês e texturas permanecem sofisticados e discretos;

- a aplicação não parece um dashboard;

- a experiência está visualmente clean;

- o projeto está preparado para receber o futuro módulo “Fiscalização Contínua”.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/7a7eeb3c-9f20-4086-a6a0-637861009df6).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
