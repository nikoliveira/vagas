import { fakeData } from "./src/fakeData.mjs";
export function remove(req, res) {
    const name = req.query.name;
    const result = removedItemByname(name);
    if (result === "OK") {
      res.status(200).send("Success");
    } else {
      res.status(404).send("NOT FOUND USER");
    };

};

function removedItemByname(name) {
    const index = fakeData.findIndex(obj => obj.name === name);
    if (index !== -1) {
        fakeData.splice(index, 1);
      return "OK"; 
    }
    return "Error";
  }