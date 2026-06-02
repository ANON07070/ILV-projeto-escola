# Documentação do Projeto — ILV International Logistics Valve

---

## 1. Introdução

Este documento descreve o desenvolvimento do site institucional da **ILV — International Logistics Valve**, criado como projeto escolar da disciplina de informática.

O objetivo do projeto foi desenvolver um site completo para uma empresa criada pelo grupo, aplicando na prática os conceitos de desenvolvimento web e uso de ferramentas de inteligência artificial no processo de criação.

O site representa a identidade digital da ILV, empresa ficticia de logística automotiva internacional com sede em Santos-SP, e foi construído utilizando apenas **HTML, CSS e JavaScript**, sem frameworks ou bibliotecas externas.

---

## 2. Funcionalidades do Site

### 🌐 Navegação
- Menu fixo no topo com links para todas as seções
- Menu mobile responsivo com botão hambúrguer
- Scroll suave entre seções

### 🎨 Visual
- Dark mode e Light mode com alternância por botão
- Design responsivo para desktop e celular
- Animações de entrada dos elementos ao rolar a página
- Efeitos visuais com gradientes e glassmorphism

### 📄 Seções
- **Hero** — apresentação da empresa com painel de métricas animado
- **Sobre** — história, missão, visão e valores da ILV
- **Resultados** — KPIs e números de desempenho da empresa
- **Serviços** — cards com os serviços oferecidos
- **Torre Logística** — mapa mundial animado com rotas internacionais
- **Tecnologia** — stack tecnológico e dashboard executivo simulado
- **Inteligência Artificial** — recursos de IA e chatbot interativo
- **Equipe** — cards dos integrantes da empresa
- **Contato** — formulário de contato e informações da empresa
- **Footer** — links úteis e redes sociais

### ⚙️ Interatividade
- Chatbot simulado com respostas automáticas
- Modal de login e cadastro
- Formulário de contato com feedback visual
- Barras de progresso animadas

---

## 3. Imagens do Site

> 📸 **As imagens serão adicionadas posteriormente nesta seção.**

### Página Inicial (Hero)
```
[tela inicial] (Screeshot/home.png)
```

### Seção Sobre
```
[sobre nois](Screenshot/about-us.png)
```

### Serviços
```
[serviços](Screenshort/our-services.png)
```

### Mapa Logístico
```
[logistica](Screenshot/logistic.png)
```

### Chatbot IA
```
[chatbot](Screenshot/AI.png)
```

### Tema Claro
```
[tema claro](Screenshot/theme-ligth.png)
```

---

## 4. Como o Site Foi Criado

O desenvolvimento do site foi **relativamente fácil** para o grupo, pois um dos integrantes já possuía conhecimentos prévios de programação. Esse integrante foi responsável por orientar as decisões técnicas, estruturar o código e garantir que todas as funcionalidades fossem implementadas corretamente.

O processo seguiu as seguintes etapas:

1. Levantamento das informações da empresa nos slides fornecidos
2. Definição da identidade visual (cores, tipografia, estilo)
3. Criação da estrutura HTML de cada seção
4. Desenvolvimento do CSS com o design system da ILV
5. Implementação das interações e animações em JavaScript
6. Separação do código em três arquivos (`index.html`, `style.css`, `main.js`)

---

## 5. Dificuldades Encontradas

O principal desafio do projeto foi a utilização de **inteligência artificial no desenvolvimento**.

Nenhum integrante do grupo tinha experiência anterior em criar um projeto inteiro com IA. Foi necessário aprender na prática como escrever bons prompts, como revisar o que a IA gerava e como adaptar o resultado para o que o projeto precisava.

Algumas dificuldades específicas enfrentadas:

- Entender como descrever o projeto de forma clara para a IA
- Revisar o código gerado e identificar o que precisava ser ajustado

---

## 6. Prompts Utilizados

> ✏️ **Os prompts utilizados durante o desenvolvimento serão inseridos nesta seção posteriormente.**

### Prompt 1 — Criação do Site
```
[Analise profundamente TODOS os arquivos anexados antes de iniciar qualquer geração.

Arquivos anexados:
- “slide sobre a empresa.odp”
- “slide sobre as tecnologias que a empresa usar.pptx”

Esses arquivos são a principal fonte de verdade do projeto.

Extraia e utilize todas as informações relevantes presentes nos slides, incluindo:
- identidade visual
- branding
- stack tecnológica
- arquitetura
- missão
- diferenciais
- estilo visual
- UX/UI
- fluxo operacional
- automações
- integrações
- processos logísticos
- estrutura empresarial
- linguagem da marca
- posicionamento de mercado

Nenhuma informação importante deve ser ignorada.

==================================================
OBJETIVO
==================================================

Crie uma plataforma SaaS moderna de logística automotiva inteligente utilizando:

- HTML
- CSS
- JavaScript

A plataforma deve possuir aparência e experiência de produto real de alto nível, semelhante a startups unicórnio e grandes empresas de tecnologia.

O sistema deve combinar conceitos de:
- marketplace automotivo
- logística inteligente
- gestão operacional
- automação
- analytics
- inteligência artificial

Referências visuais:
- Amazon
- Tesla
- Stripe
- Linear
- Notion
- Shopify
- Uber Freight
- Apple
- NVIDIA

==================================================
REQUISITOS VISUAIS
==================================================

O design deve possuir:
- aparência premium
- visual futurista
- interface moderna
- UI minimalista
- UX intuitiva
- animações suaves
- design responsivo
- mobile first
- dark mode
- light mode
- alta performance visual

Utilize:
- glassmorphism
- gradients modernos
- sombras suaves
- microinterações
- layout enterprise
- componentes reutilizáveis
- design system consistente

==================================================
FUNCIONALIDADES
==================================================

## Área do Cliente
- login
- cadastro
- recuperação de senha
- perfil
- histórico de pedidos
- rastreamento em tempo real
- favoritos
- notificações
- carteira digital
- cashback
- cupons
- pagamentos
- suporte em tempo real
- chatbot inteligente

## Marketplace Automotivo
- catálogo de peças
- busca inteligente
- filtros avançados
- recomendação por IA
- produtos relacionados
- página de produto estilo Amazon
- fornecedores
- estoque
- precificação dinâmica

## Logística Inteligente
- mapa operacional
- rastreamento em tempo real
- gestão de frota
- gestão de motoristas
- rotas inteligentes
- monitoramento de veículos
- previsão de entrega
- torre logística
- alertas automáticos

## Painel Administrativo
- dashboard executivo
- KPIs
- analytics
- gestão de usuários
- gestão financeira
- controle de pedidos
- relatórios
- permissões
- auditoria

## Inteligência Artificial
Implementar conceitos visuais e funcionais de IA para:
- recomendação de produtos
- previsão logística
- automação operacional
- chatbot inteligente
- análise comportamental
- previsão de demanda
- otimização de rotas

==================================================
ARQUITETURA
==================================================

Utilize exatamente as tecnologias definidas nos slides anexados.

Caso alguma tecnologia não esteja definida, escolha soluções modernas e escaláveis compatíveis com:
- frontend moderno
- APIs
- autenticação
- banco de dados
- cache
- observabilidade
- CI/CD
- cloud
- containers
- microsserviços
- event-driven architecture

==================================================
O QUE DEVE SER GERADO
==================================================

Crie um sistema completo contendo:

1. Landing page premium
2. Dashboard administrativo
3. Marketplace automotivo
4. Sistema logístico
5. Área do cliente
6. Design system
7. Componentes reutilizáveis
8. Estrutura de pastas organizada
9. Código limpo e escalável
10. Responsividade completa

Inclua:
- HTML estruturado
- CSS moderno e organizado
- JavaScript modular
- animações
- estados interativos
- navegação funcional
- componentes dinâmicos

==================================================
REQUISITOS IMPORTANTES
==================================================

- Não gere conteúdo genérico
- Não simplifique o visual
- Não faça apenas wireframes
- Gere interfaces completas e modernas
- O resultado deve parecer um produto real
- O código deve ser organizado e escalável
- Priorize qualidade visual e experiência do usuário
- Pense como uma startup de tecnologia premium
- Todas as telas devem seguir o mesmo design system
- O resultado deve parecer pronto para produção

A plataforma final deve transmitir:
- inovação
- velocidade
- confiança
- tecnologia avançada
- inteligência operacional
- automação
- escalabilidade
- experiência premium]
```

### Prompt 2 — Separação dos Arquivos
```
[eu quero que voce separe o index.html, o style.css e o main.js]
```

### Prompt 3 — README
```
[quero que voce crie um README.md simples estilo github para ser a tela inicial do repositorio do github. nesse README quero que voce explica sobre o site, que foi feito por voce e eu quero que esse README explique que isso tudo e um trabalho escola.]
```

### Prompt 4 — Documentação
```
[Crie uma documentação simples em Markdown para o site. Inclua uma introdução explicando o objetivo do projeto, uma seção de funcionalidades e espaços reservados para imagens usando títulos e observações indicando onde as imagens serão adicionadas posteriormente. Adicione também uma seção "Como o Site Foi Criado" informando que o desenvolvimento foi relativamente fácil porque um dos integrantes do grupo já possuía conhecimentos de programação e conseguiu implementar o projeto. Crie uma seção "Dificuldades Encontradas" explicando que o principal desafio foi utilizar IA no desenvolvimento, pois nenhum integrante do grupo tinha experiência anterior em criar um projeto inteiro com auxílio de IA. Por fim, adicione uma seção "Prompts Utilizados" com espaço para que os prompts sejam inseridos posteriormente. A documentação deve ser simples, organizada e adequada para um projeto escolar.]
```


---

## 7. Tecnologias Utilizadas

| Tecnologia | Uso |
|---|---|
| HTML5 | Estrutura das páginas |
| CSS3 | Estilo, animações e responsividade |
| JavaScript | Interatividade e lógica |
| Google Fonts | Tipografia (Syne e DM Sans) |
| Claude (Anthropic) | IA utilizada |

---

*Documentação criada para fins acadêmicos*
