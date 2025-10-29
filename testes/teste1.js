import data from "../fakeData.js";
import accessList from "../accessCounter.js";

/* Modificações:
    1. Substituição do declarador de variável obsoleto 'var' pelo indicado 'const'. O mesmo foi feito nas páginas seguintes;
    2. Substituição do método CommonJS pelo ES Modules, nesta como nas outras páginas;
    3. Re-escrevi a função getUser, para que funcione a query por nome. Ex: http://localhost:3000/user?name=João%20Oliveira
    4. Escrevi uma função que confere se o usuário já foi visitado. Se sim -> adiciona +1 à contagem de acessos; se não -> adiciona o user na lista com contagem 1
*/

export function getUser(req, res, next) {
  const name = req.query.name;
  const user = data.find((u) => u.name === name);

  if (user) {
    const indexInTheAccessList = accessList.findIndex((u) => u.id === user.id);

    if (indexInTheAccessList !== -1) {
      const accessCount = accessList[indexInTheAccessList].count;

      accessList[indexInTheAccessList] = {
        id: user.id,
        name: user.name,
        count: accessCount + 1,
      };
    } else {
      accessList.push({
        id: user.id,
        name: user.name,
        count: 1,
      });
    }

    return res.status(200).json({ message: user });
  }

  res.status(404).send({ message: "Usuário não encontrado" });
}

export const getUsers = (req, res, next) => {
  res.send(data);
};
