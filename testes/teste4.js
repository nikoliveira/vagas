/* Modificações:
    1. Reescrevi o método, utilizando o método 'findIndex' para encontrar o user em fakeData, e atualizar somente os campos que forem passados no request.
*/

import data from "../fakeData.js";

export default function (req, res) {
  const id = Number(req.params.id);
  const { name, job } = req.body;

  const index = data.findIndex((u) => u.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Usuário não encontrado" });
  }

  if (name) data[index].name = name;
  if (job) data[index].job = job;

  res.status(200).json({ message: `Usuário atualizado com sucesso` });
}
