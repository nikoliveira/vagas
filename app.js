// mudança para uma sintaxe mais amigável com o front (module) e remoção de biblioteca depreciada
import express from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";

import * as T1 from "./teste1.js";
import * as T2 from "./teste2.js";
import * as T3 from "./teste3.js";
import * as T4 from "./teste4.js";
import * as T5 from "./teste5.js";

const app = express();

app.set("view engine", "jade");

app.use(express.json());
app.use(express.urlencoded());

app.use(express.json());

const filename = fileURLToPath(import.meta.url);
const path = dirname(filename);

app.use(express.static(path + "/public"));

app.get("/", function (req, res) {
  res.json({
    create: "post /users/",
    readAll: "get /users/",
    retrieve: "get /users/retrieve/:userId",
    update1: "put /users/:userId",
    update2: "patch /users/:userId",
    delete: "delete /users/:userId",
  });
});

app.get("/user", T1.getUser);
app.get("/users", T1.getUsers);
app.post("/users", T2.createUser);
app.delete("/users", T3.deleteUser);
app.put("/users", T4.updateUser);
// app.get("/users/access", teste5);

const port = 3001;

app.listen(port, function () {
  console.log("Express server listening on port " + port);
});
