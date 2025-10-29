/*
  Optei por fazer com que somente os GETs por nome acrescentassem uma visita ao user, e não o GET de todos os usuários
*/

import accessList from "../accessCounter.js";

export default function (req, res) {
  const name = req.query.name;

  const count = accessList.find((u) => u.name === name).count;

  res.send(`Usuário ${name} foi visto ${count} vezes.`);
}
