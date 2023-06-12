# CRUD User + BD PostgreSQL 

Node API Solid PostgreSQL

## RFs (Requisitos funcionais)

- [x] Deve ser possível se cadastrar;
- [x] Deve ser possível editar um usuário, apenas ADMINS;
- [x] Deve ser possível buscar usuário;
- [x] Deve ser possível se autenticar;
- [x] Deve ser possível buscar quantas vezes o perfil do usuário foi acessado;
- [x] Deve ser possível buscar os usuários cadastrados;
- [x] Dever ser possível excluir um usuário, apenas ADMINS;

## RNs (Regras de negócio)

- [x] O usuário não deve poder se cadastrar com um e-mail duplicado;

## RNFs (Requisitos não-funcionais)

- [x] A senha do usuário precisa estar criptografada;
- [x] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL;
- [x] Todas listas de dados precisam estar paginadas com 20 itens por página;
- [x] O usuário deve ser identificado por um JWT (JSON Web Token);
- [x] o Token do usuário deve ter validade 10 min;
- [x] Deve haver hierarquia de usuários (User | Admin);
- [x] Deve haver a documentação da API(Swagger), com todas rotas e com exemplos práticos;
- [x] Métodos POST não devem poder substituir informações já cadastradas;
- [x] Métodos PUT não devem poder criar caso o dado não exista;

<br/>

#### Step 1 (Clone the project)
```sh
$ git clone https://github.com/joseiltonjunior/teste-sfc.git
```
#### Step 2 (Open a project)
```sh
$ cd teste-sfc
```
#### Step 3 (Install yours dependencies - node_modules)
```sh
$ npm i or yarn 
```
#### Step 4 (Run docker-compose - UP DB)
```sh
$ docker compose up -d
```

#### Step 5 (Run migrations - DB Schemas)
```sh
$ npx prisma migrate dev
```
#### Step 6 (Run server - Node) 
```sh
$ npm run start:dev or yarn start:dev
```

### Utils
#### I (Run Prisma Studio - UI Prisma Client) 
```sh
$ npx prisma studio
```
#### II (Run Tests Units) 
```sh
$ npm run test or npm run test:watch
```
#### III (Run Pre-Test E2E & Covarage) 
```sh
$ npm run pretest:e2e
```

#### III-I (Run Tests E2E) 
```sh
$ npm run test:e2e or npm run test:e2e:watch
```

#### IIII (Run Covarage) 
```sh
$ npm run test:covarage
```

#### IV (Run Test UI) 
```sh
$ npm run test:ui
```
#### V (Open Swagger API DOC) 
```sh
$ http://localhost:3333/swagger
```

## Credits

<a href="https://www.instagram.com/dvlp.code/" target="_blank">Junior Ferreira</a> at Full-stack Developer JS