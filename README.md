# Curso de CSS e Desenvolvimento Web

Este repositório acadêmico contém projetos práticos focados no ensino e aprendizado de **CSS Avançado** e construção de interfaces web da vida real. O repositório está estruturado em duas áreas principais: aulas de aprofundamento de CSS e uma Landing Page de exemplo.

---

## 📂 Estrutura do Projeto Principal

### 1. Pasta `css-avançado/` (Diretório Raiz)
Contém *snippets* de código (trechos reutilizáveis), anotações e exemplos práticos elaborados durante as aulas focadas especificamente em recursos avançados de Cascading Style Sheets (CSS). Abordagens comuns nesta seção incluem:
- Flexbox e CSS Grid Layout.
- Animações (`@keyframes`, `transitions`).
- Variáveis CSS nativas e propriedades customizadas.
- Consultas de mídia avançadas (Media Queries) e responsividade fluida.

### 2. Pasta `landing-page/`
Contém um projeto prático completo, servindo de exemplo e material de estudo aos alunos para integrar HTML, CSS, JavaScript básico e o framework **Bootstrap 5**. É uma Landing Page completa.

---

## 🌟 O Projeto `landing-page`: Clínica Sorriso Saudável

O projeto dentro de `landing-page/` simula uma página institucional para captação de pacientes para uma clínica odontológica fictícia. 

**Objetivos da Aplicação (`landing-page`):**
- Demonstrar a aplicação estrutural semântica utilizando HTML5.
- Aplicar o conhecimento real sobre hierarquia de CSS (`style.css`), além de efeitos visuais e responsividade em grids pré-prontas com o Bootstrap 5.
- Demonstrar interações simples no cliente (Front-End) usando **JavaScript Puro (Vanilla JS)** para o envio fictício de formulário em `script.js`.

### 📋 Estrutura da `landing-page`:
```text
landing-page/
├── assets/         # Imagens geradas localmente ou favicon
├── index.html      # Página web completa (Single Page)
├── style.css       # Folha de estilos personalizados do projeto da clínica
└── script.js       # Script simulador para o formulário de pré-atendimento
```

---

## 🛠️ Como Visualizar e Estudar o Material

A principal recomendação é ter um ambiente de código bem preparado:

1. Baixe o projeto de forma local pelo repositório.
2. É altamemente aconselhável utilizar o editor **Visual Studio Code (VS Code)**.
3. Sugere-se a instalação de uma das seguintes extensões do VS Code:
    - **Live Server:** Para criar um servidor de desenvolvimento que atualiza o código em tempo real (*Live Reload*). Basta clicar no arquivo `index.html` com o botão direito e executar a extensão.
4. Você pode inspecionar livremente o código em `css-avançado/` para entender as sintaxe das funcionalidades. Todo os exemplos em CSS devem focar inteiramente na observação técnica. No navegador, tente inspecionar elementos usando a tecla **F12** (DevTools) para visualizar a hierarquia do CSS sobre a página `landing-page/`.

## 👩‍💻 Para os Alunos

Use esses arquivos como referência! Sinta-se livre para clonar, quebrar os trechos do CSS, refazer partes ou implementar as próprias funcionalidades para estudo. Tente por exemplo:
- Mudar para um tema "Escuro" (Dark Mode) do CSS em `landing-page`.
- Personalizar as animações dos Cards.
- Explorar as variáveis nativas de CSS disponíveis nas pastas contidas em `css-avançado`.
