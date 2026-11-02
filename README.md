# Testes de Ponta a Ponta (E2E) com Selenium e React

Projeto prático desenvolvido para a disciplina de **Desenvolvimento de Aplicações Corporativas** do Curso Superior de Tecnologia em Análise e Desenvolvimento de Sistemas do **IFRS - Campus Bento Gonçalves**.

O objetivo desta aplicação é demonstrar a configuração e implementação de testes automatizados *End-to-End* (E2E) com **Selenium WebDriver** sobre uma aplicação frontend construída com **React** e **Vite**.

---

## 🛠️ Tecnologias Utilizadas

- **React 18** (via Vite)
- **React Router DOM**: Gestão de rotas e navegação client-side
- **Selenium WebDriver**: Automação e emulação das interações do utilizador no navegador
- **ChromeDriver**: Driver de comunicação direta com o Google Chrome
- **Node.js**: Execução dos scripts de teste fora do contexto da aplicação React

---

## 📂 Estrutura do Projeto

```text
my-iatest-app/
├── node_modules/
├── public/
├── src/
│   ├── pages/
│   │   ├── Login.jsx            # Formulário de login com validações e data-testid
│   │   └── Dashboard.jsx        # Página de destino autenticada
│   ├── App.jsx                  # Mapeamento das rotas com BrowserRouter
│   ├── index.css
│   └── main.jsx                 # Ponto de entrada do React
├── tests/
│   └── login.e2e.test.js        # Script de automação E2E com Selenium
├── index.html
├── package.json
├── vite.config.js
└── README.md
