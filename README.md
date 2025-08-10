# 🎬 Teste Prático – Mosten

## 📖 Descrição

Este projeto foi desenvolvido como parte do **processo seletivo da empresa Mosten**.  
O sistema permite **catalogar e cadastrar filmes ou séries**, onde o usuário pode votar se **gostou** ou **não gostou**.

Além do cadastro e votação, existe uma página dedicada (`lista.html`) que exibe:

- O total geral de votos do site
- Os votos individuais de cada filme ou série

Os dados são **persistidos** em um arquivo JSON, garantindo que as informações não sejam perdidas ao reiniciar o servidor.

---

## 🚀 Tecnologias Utilizadas

- **Node.js** – Ambiente de execução JavaScript
- **Express** – Framework para criação do servidor HTTP
- **HTML5 & CSS3** – Estrutura e estilo das páginas
- **JavaScript (Frontend e Backend)** – Lógica da aplicação
- **JSON** – Armazenamento persistente dos dados (`filmes.json`)

---

## 📂 Estrutura do Projeto

```bash
├── public/                 # Arquivos estáticos
│   ├── pages/              # Páginas HTML
│   │   ├── index.html
│   │   ├── cadastro.html
│   │   ├── votar.html
│   │   └── lista.html
│   └── css/                # Arquivos CSS
│       └── styles.css
├── filmes.json              # Base de dados persistente
├── app.js                   # Servidor Node.js com Express
├── package.json             # Dependências e scripts do projeto
└── README.md                # Documentação do projeto
```

---

## ⚙️ Como Executar o Projeto

1. **Clonar o repositório**

```bash
git clone https://github.com/EdsonBarbosa14/Teste-pratico-mosten.git
```

2. **Entrar na pasta do projeto**

```bash
cd Teste-pratico-mosten
```

3. **Instalar as dependências**

```bash
npm install
```

4. **Iniciar o servidor**

```bash
node app.js
```

5. **Abrir no navegador**  
   Copie e cole no navegador o link exibido no console (ex.: `http://localhost:3000`).

---

## 🗂 Persistência de Dados

O arquivo `filmes.json` armazena:

- Filmes/séries originais
- Novos filmes/séries cadastrados
- Quantidade de votos **positivos** e **negativos**

Esse mecanismo garante que os dados sejam mantidos mesmo após o encerramento do servidor.

---

## 📝 Funcionalidades

- **Cadastrar filmes ou séries** (`cadastro.html`)
- **Votar em filmes ou séries** (`votar.html`)
- **Visualizar o total geral de votos** (`lista.html`)
- **Visualizar votos individuais de cada título** (`lista.html`)

---

## 📄 Licença

Projeto desenvolvido exclusivamente para fins de avaliação técnica no **processo seletivo da Mosten**.  
Uso comercial ou distribuição não autorizada são proibidos.
