import express from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { appRoutes } from "./routes/index.js";
import { handleErrorMiddleware } from "./errors/handleError.js";

const app = express();

// app.set("view engine", "jade");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

const filename = fileURLToPath(import.meta.url);
const path = dirname(filename);

app.use(express.static(path + "/public"));

app.get("/", function (req, res) {
  res.json({
    create: "post /users/",
    readAll: "get /users/",
    retrieve: "get /users/:userId",
    readingsCounter: "get /users/counter/:userId",
    update1: "put /users/:userId",
    update2: "patch /users/:userId",
    delete: "delete /users/:userId",
  });
});

appRoutes(app);

app.use(handleErrorMiddleware);

const port = 3001;

app.listen(port, function () {
  console.log("Express server listening on port " + port);
});
