# Este é um teste para desenvolvedores

## Algumas alterações
- Algumas implementações removidas devido que estão depreciadas como o Body Parser.
`body-parser deprecated undefined extended: provide extended option src/app.ts:15:17`
- Projeto passa a usar Typescript, passa escrever um JSON (JavaScript Object Notation) com novos usuários cadastrados e usa o Morgan para logging.
- As senhas dos usuários estão comentadas no `src/databases/fakeData.ts` (neste arquivo estão criptografadas).
- Adiciona hot reload e cada alteração em código passa a reiniciar sozinho.

# possui 5 testes

## Introdução

Este projeto possui um banco de dados fake em fakeData.js com apenas um registro.
A ideia é melhorar e o CRUD escrito nos 4 arquivos de teste abaixo.

Será a validada a forma de escrita de código.
Escreva códigos que humanos consigam entender.

Fique a vontade para fazer modificaçoes nos serviços, comentários em código, estrutura, mas seja objetivo.

Todos os testes listados abaixo foram executados para garantir que estejam funcionando.

## teste1.js - [OK]

GET em /user

Possuimos neste arquivo um serviço que faz uma busca no banco fake e retorna um registro.
Este código funciona, mas é possivel melhorar.
Veja o que pode deixar ele melhor escrito e mais performatico.

## teste2.js - [OK]

POST em /users, descubra a intenção dele e o corrija.

## teste3.js - [OK]

Este procura um usuário e o deleta da base.
Retorne sucesso para o client caso realmente tenha sido excluido e deixe o código mais performatico.

## teste4.js [OK]

Atualiza os dados de um usuário especifico.

## teste5.js [OK]

Retorne quantas vezes determinado usuário foi lido no teste1.

## teste 6 [OK]

Definina uma forma de criar permissão para o usuario, defina se o usuário pode deletar ou atualizar usuários. Crie um middleware para validar essas permissões e adicione no teste4 e teste3.
Criado de forma que o usuário for admin ele pode deletar e apagar outros usuários. Se ele não for um admin retorna:

```

Error: Error 403 (Forbidden): You are not an admin.

```
