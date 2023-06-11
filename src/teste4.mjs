import { fakeData } from "./src/fakeData.mjs";

export function update(req, res) {
  const id = req.params.id;
  const { name, job } = req.body;

  const foundIndex = fakeData.findIndex((obj) => obj.id === id);

  if (foundIndex !== -1) {
    fakeData[foundIndex].name = name;
    fakeData[foundIndex].job = job;
    res.status(200).send(fakeData[foundIndex]);
  } else {
    res.status(404).send("Objeto não encontrado");
  }
}
