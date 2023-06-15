# Solução geral

<p style="font-size: 12pt;">No geral eu prefiro utilizar o typescript para desenvolver pois dessa forma, muitos erros a nível de sintaxe podem ser evitados e também podemos ganhar muito tempo e produtividade usando a intelisense do VsCode a nosso favor. Mas como o desafio veio em javascript eu resolvi manter o projeto na linguagem para me adaptar à stack dos demais desenvolvedores. </p>

<p style="color: #aaa; font-size: 12pt;">Outro ponto que reparei é que a aplicação está usando o tipo commonJs que é nativo do node, no entanto (e eu não sei se o front também usa javascript e também não sei se teríamos devs fullstack no squad), resolvi mudar a sintaxe da aplicação para o type module que fica amigável para leitura do front e do back com a mesma sintaxe (não é necessário se não tem devs full stack no squad) deixando mais confortável para os devs transitarem entre front e back, até mesmo para a leitura do código.</p> 

<p style="font-size: 12pt;">Além disso separei as responsabilidades de cada arquivo, visando a escalabilidade da aplicação e facilidade de manutenção, criando a pasta src como sendo a pasta do código fonte deixando a raiz para a parte de configuração e devops</p>

<p style="color: #aaa; font-size: 12pt;">Mudei a arquitetura do projeto visando a escalabilidade da aplicação e facilidade de manutenção, criando a pasta src como sendo a pasta do código fonte deixando a raiz para a parte de configuração e devops. segue a base da arquitetura:</p>

- src
  - controllers
  - database
  - errors
  - middleware
  - models
  - routes
  - services
- .dockerignore
- .env
- .env.example
- .gitignore
- docker-compose.yml
- Dockerfile
- package-lock.json
- package.json
- readme.md

<p style="font-size: 12pt;">Utilizei uma bliblioteca de id para substituir os ids numéricos por strings únicas</p>

<p style="color: #aaa; font-size: 12pt;">Comunicação da API com o client através de JSON.</p> 

<p style="font-size: 12pt;">Tratativa de erros de forma global</p>

## Solução dos testes

### teste1.js getUser

* Mudança do nome da função de "getUser" para retrieveUser para uma melhor identificação.
* Substituição de variáveis "var" por variáveis "let" e "const".
* Substituição de laço de repetição por métodos de array.
* Mudança na forma de identificação do usuário na comunicação vinda do front, sendo utilizado o userId ao invés do nome, desta forma eliminando a possibilidade de confusão entre pessoas do mesmo nome.

### teste1.js getUsers

* Mudança no nome da função de getUsers para getAllUsers.
* Mudança no retorno da rota para haver um campo de contagem. Dessa forma o front pode saber quantos usuários já existem, se for pertinente.

### teste2.js

* Atribuição de nome de função para createUser.
* Substituição de variáveis "var" por variáveis "let" e "const".
* Inserção do campo id no objeto do novo usuário
* Middleware de verificação de campos (se foram enviados e se são do tipo correto)

### teste3.js

* Mudança na forma de identificação do usuário na comunicação vinda do front, sendo utilizado o userId ao invés do nome, desta forma eliminando a possibilidade de confusão entre pessoas do mesmo nome.
* Atribuição de nome de função para deleteUser.
* Substituição de variáveis "var" por variáveis "let" e "const".
* Substituição de laço de repetição por métodos de array.
* Tratativa para o caso de o usuário a ser deletado não existir

### teste4.js

* Mudança na forma de identificação do usuário na comunicação vinda do front, sendo utilizado o userId ao invés do nome, desta forma eliminando a possibilidade de confusão entre pessoas do mesmo nome.
* Atribuição de nome de função para updateTotalUser e updatePartialUser.
* Substituição de variáveis "var" por variáveis "let" e "const".
* Tratativa para o caso de o usuário a ser deletado não existir
* Criação de ua requisição put e outra patch
* Middleware de verificação de campos (se foram enviados e se são do tipo correto)


### teste5.js

* Substituição de variáveis "var" por variáveis "let" e "const".
* Criação de um novo database que armazena os ids lidos
* inserção de lógica no service de leitura de usuário
* utilização de método de array para fazer a contagem

### teste 6

* Criei 2 novos campos no usuário padrão (isAdm: boolean e password: string)
* Criei uma classe de usuário com um método de instância para atualizar a instância de usuário e outro para liberar apenas os dados que não são sensíveis, neste caso apenas para retornar a instância sem o password
* Instalei bibliotecas de segurança (bcrypt para hashear a senha e jwt para autenticação e proteção de rota)
* Mudei o usuário padrão para que ele se tornasse uma instância da classe User e assim padronizar todo o banco de dados.
* Criei uma rota de login para poder haver um token
* Criei 2 novos middlewares um para autenticar e outro para verificar se é administrador. Esses dois mid's funcionam em conjunto pois é através da decodificação do token que eu verifico se é administrador
* Modifiquei a rota de criação para não permiitir a criação de 2 usuários com mesmo nome
* Modifiquei todas as rotas que retornam os dados da instância para que retornem os dados seguros, utilizando o método da instância.
* Por fim, dockerizei a aplicação pra treinar algo que estou aprendendo agora.