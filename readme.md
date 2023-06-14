# Considerações.
Como o objetivo era apenas fazer o crud, tomei a liberdade para implementar
typescript e dependencias de desenvolvimento.

linkedin: https://www.linkedin.com/in/isjordanbraz/

## Rotas

### GET `/api/users` - retorna a lista de registros
### GET `/api/users/id` - retorna um unico registro
### POST `/api/users` - passar objeto
{
  name: username,
  job: jobname,
}
### DELETE `/api/users/id` - necessario token e header de authorization
### PUT `/api/users/id` - necessario token e header de authorization, passar objeto
{
  name: username,
  job: jobname,
}
### POST `/api/login` passar objeto. - retorna o token
{
  name: username,
  job: jobname,
}

### Test 5 `/api/users/access/id` retorna um logger dos ids acessados

# Este é um teste para desenvolvedores

# possui 5 testes

## Introdução

Este projeto possui um banco de dados fake em fakeData.js com apenas um registro.
A ideia é melhorar e o CRUD escrito nos 4 arquivos de teste abaixo.

Será a validada a forma de escrita de código.
Escreva códigos que humanos consigam entender.

Fique a vontade para fazer modificaçoes nos serviços, comentários em código, estrutura, mas seja objetivo.

## teste1.js

GET em /users

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

Definina uma forma de criar permissão para o usuario,
defina se o usuário pode deletar ou atualizar usuários.
Crie um middleware para validar essas permissões e adicione no teste4 e teste3.

