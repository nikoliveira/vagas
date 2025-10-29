
import "dotenv/config";
import express from "express";

import * as teste1 from "./testes/teste1.js";
import teste2 from "./testes/teste2.js";
import teste3 from "./testes/teste3.js";
import teste4 from "./testes/teste4.js";
import teste5 from "./testes/teste5.js";
import teste6 from "./testes/teste6.js";
import { authorize } from "./middleware/auth.js";

/* Modificações:
    1. Atualizei o método de importação para o ES Modules
    2. Removi bodyParser, cuja função agora é incluída no express
    3. Jade serve para renderizar templates .jade ou .pug em HTML. Como o app não consta com esses templates, removi o código referente à Jade;
    4. Removi a função express.static(), que não tinha utilidade neste contexto;
    5. Optei por usar parâmetros de rota no DELETE e PUT, ao invés de valores de query;
*/


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(`
    <ul>
      <li>GET /user</li>
      <li>GET /users</li>
      <li>POST /users</li>
      <li>DELETE /users</li>
      <li>PUT /users</li>
      <li>GET /users/access</li>
    </ul>
  `);
});

// 1
app.get("/user", teste1.getUser);
app.get("/users", teste1.getUsers);

// 2
app.post("/users", teste2);

// 3
app.delete("/users/:id", authorize, teste3);

// 4
app.put("/users/:id", authorize, teste4);

// 5
app.get("/users/access", teste5);

// 6
app.post("/login", teste6);

app.listen(3000, () => console.log("🚀 Server on http://localhost:3000"));
