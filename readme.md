# docs 

### get / retorna todas as rotas e seus metodos

### get /features
retorna todas as features já implementadas

### get /users
retorna todos os usuários, com suas features e suas vizualizações

### get /user?name= 
retorna um usuário baseado em seu nome.
retorna 404 se não encontrado.
retorna 400 se foi mal requisitado.

### get users/access?name=
retorna um usuário baseado em seu nome.
retorna 404 se não encontrado.
retorna 400 se foi mal requisitado.

### post /users
Rota Autenticada:
    > header: x-user (userId)

Body:
    > name(string): nome para o usuário - OBRIGATORIO
    > job(string): trabalho do usuário - OBRIGATORIO
    > features([string]): todas as features do úsuario - OBRIGATORIO

retorna 201 se foi bem sucedido.
retorna 400 se foi mal requisitado.

### delete users/
Rota Autenticada:
    > header: x-user (userId)
    > usuário mencionado deve ter a feature relacionada: user:other:delete

Body:
    > name(string): nome do usuário - OBRIGATORIO

retorna 200 se foi bem sucedido
retorna 400 se foi mal requisitado.
retorna 404 se não encontrado.

### put users?id=
Rota Autenticada:
    > header: x-user (userId)
    > usuário mencionado deve ter a feature relacionada: user:other:update

Body:
    > name(string): nome do usuário - OPCIONAL
    > job(string): trabalho do usuário - OPCIONAL
    > features(string): features do usuário - OPCIONAL

retorna 200 se foi bem sucedido
retorna 400 se foi mal requisitado.
retorna 404 se não encontrado.