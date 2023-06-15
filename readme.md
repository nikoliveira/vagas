# Instruções

## Tecnologias Usadas

- [Node.js](https://nodejs.org/en): Ambiente de execução JavaScript para desenvolvimento do lado do servidor.
- [Express.js](https://expressjs.com/): Framework de aplicação web para o Node.js. 
- [Docker](https://www.docker.com/): Plataforma de containerização para empacotar aplicações em contêineres.

## Primeiros Passos

Este projeto foi desenvolvido para ser executado com o Docker, utilizando etapas de configuração fáceis de seguir. Qualquer pessoa deveria ser capaz de executá-lo localmente. Siga as etapas abaixo para configurar e executar o projeto em sua máquina local:

Pré-requisitos

 [Docker](https://www.docker.com/): Docker instalado em sua máquina.    
[Yarn](https://yarnpkg.com/): (Gerenciador de Pacotes do Node) instalado em sua máquina.


1 - Instalando dependências:

```clipboard
yarn install
```
2 - Na raiz do projeto crie um novo arquivo chamado **`.env`**, defina as variáveis de ambinete como na imagem abaixo:
![scf-test-env](https://github.com/kennedybm/kennedybm-teste-scf/assets/91641613/6ecf0081-8be2-4fc2-ba4d-f9e1699eae5c)

3 - Criando docker container e rodando projeto localmente:

```clipboard
docker compose up
```

4 - Após completar todos as passos anteriores, deve ser possivel acessar localmente:
```clipboard
http://localhost:3000/user
```

___





# Este é um teste para desenvolvedores

# possui 5 testes

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

