# Como Utilizar a aplicação

## Importante :warning:

- Caso deseje alterar a porta utilizada pela API basta modificar a chave `APP_PORT` no arquivo `.env` presente na raiz do projeto.

## Rodando a aplicação

  - Clone o repositório.
  - instale suas dependencias com o comando `npm install`
  - inicie o serviço utilizando o comando `npm run dev`

---

## EndPoints

| Método | Função | URL |
|---|---|---|
| `GET` |  Lista um usuário especifico.  | http://localhost:3000/user |
| `GET` |  Lista todos os usuários.  | http://localhost:3000/users |
| `POST` | Cria um novo usuário.  | http://localhost:3000/users |
| `DELETE` |  Exclui um usuário especifico. | http://localhost:3000/users |
| `PUT` |  Atualiza um usuário especifico.  | http://localhost:3000/users |
| `GET` |  Retorna a quantidade de vezes que um usuário especifico foi buscado.  | http://localhost:3000/users/access |

---

- Desenvolvido por [Matheus Marinho](https://www.linkedin.com/in/matheus-marinhodsp/).

<br>
<br>
<br>
<br>

# - Desafios pedidos -

## Este é um teste para desenvolvedores

## possui 5 testes

## Introdução

Este projeto possui um banco de dados fake em fakeData.js com apenas um registro.
A ideia é melhorar e o CRUD escrito nos 4 arquivos de teste abaixo.

Será a validada a forma de escrita de código.
Escreva códigos que humanos consigam entender.

Fique a vontade para fazer modificaçoes nos serviços, comentários em código, estrutura, mas seja objetivo.

## teste1.js

GET em /user 

Possuimos neste arquivo um serviço que faz uma busca no banco fake e retorna um registro.
Este código funciona, mas é possivel melhorar.
Veja o que pode deixar ele melhor escrito e mais performatico.

## teste2.js

POST em /users, descubra a intenção dele e o corrija.

## teste3.js

Este procura um usuário e o deleta da base.
Retorne sucesso para o client caso realmente tenha sido excluido e deixe o código mais performatico.

## teste4.js

Atualiza os dados de um usuário especifico.

## teste5.js

Retorne quantas vezes determinado usuário foi lido no teste1.

## teste 6

Definina uma forma de criar permissão para o usuario, defina se o usuário pode deletar ou atualizar usuários. Crie um middleware para validar essas permissões e adicione no teste4 e teste3.

