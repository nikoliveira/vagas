import express from "express"
import bodyParser from "body-parser"
import { getUser, getUsers } from "./teste1.js"
import { postUser } from "./teste2.js"
import path from 'path';
const __dirname = path.resolve();

const app = express()

app.set("view engine", "jade")

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static(__dirname + "/public"))

app.get("/", function (req, res) {
  res.send(`get user/ </br>
  get users/ </br>
  post users/ </br>
  delete users/ </br>
  put users/ </br>
  `)
})

app.get("/user", getUser)
app.get("/users", getUsers)
app.post("/users", postUser)
// app.delete("/users", teste3)
// app.put("/users", teste4)
// app.get("/users/access", teste5)

const port = 3000
app.listen(port, function () {
  console.log("Express server listening on port " + port)
})
