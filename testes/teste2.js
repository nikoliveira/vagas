/* Modificações:
      1. Correção: jov -> job;
      2. Adicionei a validação se os campos foram preenchidos;
      3. Determinei que o id do user adicionado seria o id do último + 1.
      4. Para o teste 6, também fiz com que fosse possível adicionar uma senha para que se possa logar com esse usuário, mas a senha é um campo opcional.
*/

import data from "../fakeData.js";

export default function (req, res) {
  const { name, job, password } = req.body;

  const id = data.findLast((_) => true).id + 1;

  if (!name || !job) {
    return res
      .status(400)
      .json({ message: "Os campos 'name' e 'job' são obrigatórios" });
  }

  const newUser = { id, name, job, password };
  data.push(newUser);

  res.send(newUser);
}
