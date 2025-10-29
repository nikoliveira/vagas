/* Como funciona:
    1. Envie um request post para /login e no body ponha "name" e "password" de algum usuário existente, em formato json.
      Ex: 
          {
            "name": "João Oliveira",
            "password": "senha123"
          }
  
    2. Isso retorna um token, insira-o como um header nos requests dos testes 3 e 4 chamado Authorization, com Bearer escrito na frente.
      Ex:
        Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZ2FicmllbCIsImlhdCI6MTc2MTc0NDIzNywiZXhwIjoxNzYxNzQ3ODM3fQ.2Voiq8TI_8Vy6jcsjkw5JkKw5umJFmB3ZCSP7waxozU

    O arquivo "grupo_requests.postman_collection.json" consiste no meu grupo de requests do Postman em formato de json. Esse json pode ser importado no Postman para que não seja preciso configurar cada request manualmente.  
*/

import data from "../fakeData.js";
import { generateToken } from "../middleware/auth.js";

export default function (req, res) {
  const name = req.body.name;
  const password = req.body.password;

  // Confere se há algum usuário onde nome e senha sejam iguais aos passados no request
  const isRegistered = data.find(
    (u) => u.name === name && u.password === password
  );

  if (isRegistered) {
    const token = generateToken(name);
    console.log("Token".token);

    return res.json({ token });
  }

  res.status(400).json({ message: "Credenciais inválidas" });
}
