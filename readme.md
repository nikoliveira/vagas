# Introdução

Este projeto foi desenvolvido durante um teste técnico. A ideia era melhorar o CRUD existente, usar um banco de dados fake e implementar features de autorização em algumas rotas. Neste readme, explicarei algumas das minhas decisões e o que achei pertinente ser desenvolvido:

-   Em muitas partes, o código utilizava "vars". Troquei por "const" para evitar vazamento de escopo.
-   Algumas rotas utilizavam "name" como parâmetro. Decidi trocar por "id" para que fosse usado um identificador único.
-   Precisei modelar os dados de forma a adicionar as propriedades "password" e "isAdmin" para que o sistema de autenticação e autorização fosse implementado corretamente.
-   Alterei toda a estrutura do projeto para que as responsabilidades do código fossem bem divididas, tornando assim o código mais legível, desacoplado, testável e com uma melhor manutenção. Organizei as entidades em módulos, colocando todos os arquivos na mesma pasta, o que traz mais qualidade no momento do desenvolvimento.
-   Mudei o banco fake para um JSON em vez de um arquivo em JS, dessa forma os dados não ficam apenas em memória e pude implementar funções de leitura e escrita com o módulo fs do Node.js.
-   Adicionei diversas validações e tratamentos de erro para que o código não quebre e a API respeite o padrão REST.
-   Mudei o projeto de JS para TS, dessa forma o código ficou mais seguro, tipado e traz diversos benefícios de qualidade ao desenvolvimento.
-   O teste falava muito em performance e o código possuía algumas funções que utilizavam for. Fiz algumas pesquisas e pude ver que o for comum na maioria dos casos é mais performático que as HOFs (map, filter, find, etc.), porém, com elas o código ficou mais legível e menos verboso. Então, resolvi utilizar as HOFs, pois a escrita também era um dos critérios de avaliação e o ganho de performance não era relevante no cenário do teste, onde o banco fake possui poucos registros.
- Instalei e configurei o eslint e o swagger para melhor escrita e documentação da API.

# Tecnologias utilizadas

-   **Express**: Framework web rápido e minimalista para Node.js.
-   **TypeScript**: Superset do JavaScript que adiciona tipagem estática opcional e outros recursos avançados ao JavaScript.
-   **JWT**: JSON Web Tokens é um método para criar tokens de acesso com base em JSON para autenticação e autorização.
-   **Joi**: Biblioteca de validação de dados para JavaScript.
-   **Argon2**: Algoritmo de hash de senha que oferece maior segurança contra ataques de força bruta.
-   **Swagger**: Ferramenta de documentação e especificação de API que permite descrever, construir, testar e documentar APIs RESTful.
 
# Como rodar o projeto

1. Primeiro crie um arquivo .env na raiz do projeto com o secret do JWT:
	``JWT_SECRET=seusecret``
2. Instale as dependências com ``npm install``
3. Rode a API com ``npm run dev``

# Como testar

Veja os endpoints disponíveis em http://localhost:3000/doc e crie um usuário para testar os endpoints protegidos que necessitam de um token de acesso.
