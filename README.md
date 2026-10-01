# 🥗 NutriVem — Auxiliador de Dieta para Controle de Glicemia

> Uma aplicação web prática, leve e interativa projetada para auxiliar no acompanhamento dos níveis glicêmicos e fornecer orientações nutricionais personalizadas em tempo real.

---

## 📌 Sobre o Projeto

O **NutriVem** é um projeto acadêmico desenvolvido para a disciplina de Engenharia de Software / Projeto Integrador na **Universidade Presbiteriana Mackenzie** (FCI).

A proposta da ferramenta é atuar como uma ponte entre os laudos de exames de rotina e as escolhas alimentares do dia a dia. Ao inserir as taxas de glicemia e hemoglobina glicada, o sistema realiza o enquadramento metabólico instantâneo e gera um guia nutricional educativo com foco em hábitos saudáveis e prevenção.

---

## ✨ Funcionalidades

- 🩺 **Análise Trifásica de Glicemia:** Avaliação combinada de Glicemia em Jejum, Pós-Refeição e Hemoglobina Glicada ($HbA1c$).
- 📊 **Classificação Instantânea:** Identificação do perfil metabólico (Normal, Pré-diabetes ou Possível Diabetes).
- 🍎 **Guia Alimentar Personalizado:**
  - Alimentos prioritários a serem consumidos.
  - Alimentos a serem evitados ou reduzidos.
  - Recomendações de hábitos para a rotina diária.
  - Sugestão completa de cardápio (Café, Almoço, Lanche e Jantar).
- 📄 **Exportação em PDF:** Geração imediata de um relatório em PDF pronto para download, impressão ou consulta offline.
- ⚡ **Processamento 100% Client-Side:** Execução direta no navegador, sem necessidade de banco de dados, garantindo privacidade total das informações inseridas.
- 📱 **Interface Responsiva & Dark Mode:** Layout moderno construído com foco em usabilidade e acessibilidade para celulares e computadores.

---

## 🛠️ Tecnologias Utilizadas

O projeto foi construído utilizando apenas tecnologias web fundamentais:

- **HTML5:** Estrutura semântica da aplicação.
- **CSS3:** Estilização moderna em tema escuro (*dark mode*) e layout responsivo.
- **JavaScript (ES6+):** Validação de dados, regras de negócio e manipulação do DOM.
- **[html2pdf.js](https://github.com/eKoopmans/html2pdf.js):** Biblioteca JavaScript utilizada para a conversão da tela de resultados em documento PDF.

---

## 🚀 Como Executar o Projeto

Por se tratar de uma aplicação estática, não é necessária a instalação de dependências ou servidores backend.

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/ViniciusPichao/NutriVem.git](https://github.com/ViniciusPichao/NutriVem.git)
