# Documentação da Arquitetura

## Visão Geral
O APK Builder é dividido em várias partes principais que colaboram para fornecer a funcionalidade desejada. A arquitetura é baseada na separação de responsabilidades, onde cada componente tem uma função clara.

## Estrutura do Projeto

### 1. `src/`
Esta pasta contém o código-fonte do aplicativo. É o coração do projeto.

- **components/**: Armazena todos os componentes da interface do usuário (UI). Cada arquivo representa uma parte da interface.
- **lib/**: Contém funções utilitárias que são usadas em várias partes do aplicativo. Estas funções podem incluir operações de manipulação de dados, chamadas de API, etc.
- **hooks/**: Hooks personalizados do React que podem ser usados para compartilhar lógica entre componentes.
- **pages/**: Contém as páginas do aplicativo, que são renderizadas com base nas rotas.

### 2. `App.tsx`
Este é o componente principal que gerencia o estado do aplicativo e renderiza outros componentes, como `TerminalTab` e `ApkAnalyzer`.

### 3. Banco de Dados
O projeto utiliza PostgreSQL através do Neon DB. A estrutura de dados é definida em `db/migrate.js`, onde as tabelas e suas relações são estabelecidas.

### 4. Autenticação
A autenticação é gerenciada usando JWT (JSON Web Tokens) para proteger as rotas do aplicativo.

## Fluxo de Dados
O fluxo de dados no aplicativo é unidirecional:
1. O usuário interage com a interface do usuário (UI).
2. Os estados são gerenciados em componentes usando hooks do React.
3. Chamadas de API são feitas para obter ou enviar dados ao servidor.
4. O servidor processa as requisições e interage com o banco de dados.
5. As respostas são enviadas de volta ao cliente e atualizam a UI.

## Conclusão
A arquitetura do APK Builder foi projetada para ser modular e escalável, facilitando a manutenção e a adição de novas funcionalidades no futuro.
