# 🚀 QA Technical Challenge – Flit

Automação de testes desenvolvida como parte do desafio técnico para a vaga de **Quality Assurance** na **Flit**.

Este repositório reúne a implementação dos testes automatizados utilizando **Playwright**. Toda a documentação referente ao processo de QA foi organizada no **Trello**, conforme solicitado no desafio técnico.

---

# 📋 Sobre o projeto

O objetivo do desafio foi validar a funcionalidade de **Cadastro de Usuários**, aplicando técnicas de testes manuais e automação para garantir o correto funcionamento da aplicação.

Durante o desenvolvimento foram executadas atividades que fazem parte da rotina de um Analista de QA, desde o planejamento dos testes até a automação de cenários.

---

# 🎯 Objetivos alcançados

Durante a execução do desafio foram realizados:

- ✅ Planejamento dos testes
- ✅ Elaboração do Plano de Testes
- ✅ Criação dos Casos de Teste
- ✅ Execução dos testes
- ✅ Registro de Bugs encontrados
- ✅ Testes Exploratórios
- ✅ Identificação de oportunidades de melhoria
- ✅ Automação de cenários utilizando Playwright

---

# 🤖 Automação

A automação foi desenvolvida utilizando **Playwright** com **JavaScript**, contemplando dois cenários representativos da funcionalidade avaliada.

## ✔ CT-001 — Validar acesso à tela de Usuários

Fluxo automatizado:

- Login na aplicação
- Acesso ao menu **Cadastros**
- Abertura da tela **Usuários**
- Validação do carregamento da página

---

## ✔ CT-003 — Validar navegação entre as abas do cadastro

Fluxo automatizado:

- Login na aplicação
- Acesso ao cadastro de usuários
- Navegação entre as abas:
  - Básico
  - Endereço
  - Parâmetros
  - Perímetros
  - Benefícios

---

# 📊 Artefatos do Projeto

Além da automação, todo o processo de QA foi documentado no Trello, contemplando os seguintes artefatos:

- 📋 Plano de Testes
- 📝 Casos de Teste
- ✅ Execução dos Testes
- 🐞 Registro de Bugs
- 🔎 Testes Exploratórios
- 💡 Sugestões de Melhoria
- 📷 Evidências da execução
- 🤖 Automação dos testes

### 🔗 Quadro do Trello

> https://trello.com/invite/b/6a44169c1be747cf66d9942b/ATTI9ddbe70d3812529565f04d1e6f72f653943B7C11/meu-quadro-do-trello

---

# 🛠️ Tecnologias utilizadas

| Ferramenta | Finalidade |
|------------|------------|
| Playwright | Automação dos testes |
| JavaScript | Linguagem de programação |
| Node.js | Ambiente de execução |
| Git | Controle de versão |
| GitHub | Hospedagem do projeto |
| Trello | Organização da documentação |
| Visual Studio Code | Desenvolvimento |

---

# 📁 Estrutura do projeto

```
flit-qa-challenge
│
├── Automacao
│   ├── tests
│   ├── package.json
│   ├── package-lock.json
│   ├── playwright.config.js
│   └── .gitignore
│
└── README.md
```

---

# ▶️ Como executar o projeto

Clone o repositório:

```bash
git clone https://github.com/EgonElvis/flit-qa-challenge.git
```

Acesse a pasta da automação:

```bash
cd flit-qa-challenge/Automacao
```

Instale as dependências:

```bash
npm install
```

Execute os testes:

```bash
npx playwright test
```

Para executar com o navegador visível:

```bash
npx playwright test --headed
```

---

# 📌 Considerações

Este desafio permitiu aplicar conceitos de **QA Manual** e **Automação de Testes**, utilizando uma abordagem estruturada para planejamento, execução e documentação das atividades.

A automação foi desenvolvida com foco em cenários representativos da funcionalidade analisada, complementando os demais artefatos produzidos durante o desafio.

---

# 👨‍💻 Autor

**Egon Elvis**

QA | Testes Manuais | Automação de Testes | Playwright | JavaScript

🔗 GitHub: https://github.com/EgonElvis

🔗 LinkedIn: https://www.linkedin.com/in/egon-elvis-jorge/