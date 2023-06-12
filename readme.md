># Desafio SCF
>
>CRUD básico de usuário, junto com uma rota de login e contator de visualizações de um usuário.
>
>
><h3>SUMÁRIO:</h2>
>
>* <a href="#techs" target="_self">Tecnologias</a>
>* <a href="#config" target="_self">Como executar a aplicação</a>
>* <a href="#requests" target="_self">Requisições</a>
>
>---
>---
>
><h3 id="techs">TECNOLOGIAS:</h2>
>
>* Express Js
>* TypeScript
>* JsonWebToken
>* Dotenv
>* Ts-node-dev
>* Express-async-errors
>* UUID
>
>
>---
>---
>
><h3 id="config">COMO EXECUTAR A APLICAÇÃO:</h3>
>
>* Faça clone desse repositório na máquina;
>* Acesse a pasta do projeto;
>* Instale as dependências:
>
>  ```
>  npm install
>  ```
>
>* Renomeie o arquivo `.env.example` para `.env`;
>* Insira as informações nas variávies de ambiente do `.env`;
>* Execute a aplicação:
>
>  ```
>  npm run dev
>  ```
>
>  * Você receberá as seguintes mensagem no terminal, indicando que a aplicação está sendo executada e que conectou-se ao banco de dados:
>    * `Express server listening on port 3000`
>  
>  * Utilize a URL http://localhost:3000 para fazer as requisições.
>  
>* Por fim, execute as requisições conforme instruções abaixo.
>
><br/>
>
>---
>---
>
><br/>
>
><h3 id="requests">REQUISIÇÕES:</h3>
>
> ### Create User - POST `/users`
>>Formato da requisição:
>
>* Todos os campos são `obrigatórios`;
>* Por padrão, `isAdm` sempre será `false`, mas pode ser passado como `true` no corpo da requisição;
>
>```json
>  {
>    "id": "25cf0e7f-9309-4257-a99a-94ffa9d4c205",
>    "name": "Lucas Silva",
>    "job": "Desenvolvedor",
>    "username": "lucas_silva",
>    "password": "1234",
>  }
>```
>
>>Formato da resposta:
>
>* Status: `201 CREATED`;
>* Usuário é inserido em `fakeData`;
>
>```json
>  {
>    "id": "25cf0e7f-9309-4257-a99a-94ffa9d4c205",
>    "name": "Lucas Silva",
>    "job": "Desenvolvedor",
>    "username": "lucas_silva",
>    "password": "1234",
>    "isAdm": false,
>    "views": 0,
>  }
>```
>
>Username já cadastrado
>>Formato da resposta:
>
>* Status: `409 CONFLICT`;
>
>```json
> {
>   "message": "Username already exists"
> }
>```
>Faltando campo obrigatório
>>Formato da resposta:
>
> * Status: `400 BAD REQUEST`;
>
>```json
> {
>   "message": "Name, job, username, password and isAdm are required fields"
> }
>```
>---
><br/>
>
> ### Retrieve User - GET `/users?name={name}`
>>Formato da resposta:
>
>* Status: `200 OK`;
>
>```json
>  {
>    "id": "25cf0e7f-9309-4257-a99a-94ffa9d4c205",
>    "name": "Lucas Silva",
>    "job": "Desenvolvedor",
>    "username": "lucas_silva",
>    "password": "1234",
>    "isAdm": false,
>    "views": 0,
>  }
>```
>Name Inválido
>>Formato da resposta:
>
> * Status: `404 NOT FOUND`;
>
>```json
> {
>   "message": "User not found"
> }
>```
>Sem Name
>>Formato da resposta:
>
> * Status: `400 BAD REQUEST`;
>
>```json
> {
>   "message": "Name is required"
> }
>```
>---
>
><br/>
>
> ### Count User - GET `/users/count-user?name={name}`
>>Formato da resposta:
>
>* Status: `200 OK`;
>
>```json
>  {
>    "Usuário {name} foi lido {n} vezes."
>  }
>```
>Name Inválido
>>Formato da resposta:
>
> * Status: `404 NOT FOUND`;
>
>```json
> {
>   "message": "User not found"
> }
>```
>Sem Name
>>Formato da resposta:
>
> * Status: `400 BAD REQUEST`;
>
>```json
> {
>   "message": "Name is required"
> }
>```
>---
>
> ### List Users - GET `/users`
>>Formato da resposta:
>
> * Status: `200 OK`;
>
>```json
>  [
>  	 {
>  	 	 "id": "25cf0e7f-9309-4257-a99a-94ffa9d4c205",
>  	 	 "name": "Marina Santana",
>  	 	 "job": "Designer",
>  	 	 "username": "mari_santana",
>  	 	 "password": "1234",
>  	 	 "isAdm": true,
>  	 	 "views": 3,
>  	 },
>  	 {
>  	 	 "id": "2a52e0a3-683d-40c1-b8a3-6cc1cace4239",
>  	 	 "name": "Lucas",
>  	 	 "job": "Desenvolvedor",
>  	 	 "username": "lucas",
>  	 	 "password": "1234",
>  	 	 "isAdm": false,
>  	 	 "views": 0,
>  	 },
>  	 {
>  	 	 "id": "c87478af-e26a-4e14-a15c-1893f2f23124",
>  	 	 "name": "Gabriel Mello",
>  	 	 "job": "Desenvolvedor",
>  	 	 "username": "gabrielmello",
>  	 	 "password": "1234",
>  	 	 "isAdm": false,
>  	 	 "views": 9,
>  	 }
>  ]
>```
>---
>
> ### Update User - PATCH `/users?id={id}`
>>Formato da requisição:
>
> * Necessário autenticação por `token`;
> * Apenas o `administrador` pode atualizar `outros usuários`;
> * Apenas os campos de `name`, `job`, `username` e `password` podem ser alterados;
>  
>```json
>  {
>  	 "name": "Lucas Oliveira",
>  	 "job": "Dev Fullstack",
>  	 "username": "luke_oliveira",
>  	 "password": "1234",
>  }
>```
>>Formato da resposta:
>
> * Status: `200 OK`;  
>
>```json
>  {
>  	 "id": "25cf0e7f-9309-4257-a99a-94ffa9d4c205",
>  	 "name": "Lucas Oliveira",
>  	 "job": "Dev Fullstack",
>  	 "username": "luke_oliveira",
>  	 "password": "1234",
>  	 "isAdm": false,
>  	 "views": 0,
>  }
>```
>Sem token / token inválido
>>Formato da resposta:
>  
> * Status: `401 UNAUTHORIZED`;
>
>```json
> {
>   "message": "Missing authorization headers"
> }
>```
>Id inválido
>>Formato da resposta:
>  
> * Status: `404 NOT FOUND`;
>
>```json
> {
>   "message": "User not found"
> }
>```
>Atualizando outro usuário sem ser administrador
>>Formato da resposta:
>
> * Status: `401 UNAUTHORIZED`;
>
>```json
> {
>   "message": "User is not admin"
> }
>```
>Faltando campo obrigatório
>>Formato da resposta:
>
> * Status: `400 BAD REQUEST`;
>
>```json
> {
>   "message": "Name, job, username, password and isAdm are required fields"
> }
>```
>---
>
> ### Delete User - DELETE `/users?id={id}`
>>Formato da requisição:
>
> * Necessário autenticação por `token`;
> * Apenas o `administrador` pode deletar `outros usuários`;
> 
>>Formato da resposta:
>
> * Usuário é removido de `fakeData`;
> * Status: `204 NO CONTENT`;
>
>Sem token / token inválido
>>Formato da resposta:
>
> * Status: `401 UNAUTHORIZED`;
>
>```json
> {
>   "message": "Missing authorization headers"
> }
>```
>Id inválido
>>Formato da resposta:
>
> * Status: `404 NOT FOUND`;
>
>```json
> {
>   "message": "User not found"
> }
>```
>Deletando outro usuário sem ser administrador
>>Formato da resposta:
>
> * Status: `401 UNAUTHORIZED`;
>
>```json
> {
>   "message": "User is not admin"
> }
>```
>---
>
> ### Login - POST `/login`
>>Formato da requisição:
>```json
> {
>   "username": "lucas_silva",
>   "password": "1234"
> }
>```
>>Formato da resposta:
>
> * Status: `200 OK`;
>```json
> {
>   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0FkbSI6dHJ1ZSwiaXNBY3RpdmUiOnRydWUsImlhdCI6MTY2NzE0OTIzNiwiZXhwIjoxNjY3MjM1NjM2LCJzdWIiOiI3YTZiNTk0MS04YjdjLTQyZjItYWYyZC1jODAxNjMzYjdhNWYifQ.QYCFK6a9u-3cUkNgZ9yo5NmCBQ3afyutsRqDeO-_b_M"
> }
>```
>Usuário ou senha inválidos
>>Formato da resposta:
>
> * Status: `403 FORBIDDEN`;
>
>```json
> {
>   "message": "Invalid username or password"
> }
>```
>---
