var data =  require("../fakeData");

const getUser = ( req, res, next ) => {
    const { name, id, job } = req.query;

    // Buscar o usuário com base no nome, id ou job
    const user = data.find((user) => {
        return (
        (name && user.name.toLowerCase().includes(name.toLowerCase())) ||
        (id && user.id.toString() === id) ||
        (job && user.job.toLowerCase().includes(job.toLowerCase()))
        );
    });

    try {
        if (user) {
            res.send(user);
        } else {
            res.status(404).send("Usuário não encontrado");
        }
    } catch (error) {
        res.status(404).send("Erro ao buscar usuários");
    }
};

const getUsers = ( req, res, next ) => {
    try {
        res.send(data); 
    } catch (error) {
        res.status(404).send("Erro ao buscar usuário");
    }
};

const postUser = ( req, res, next ) => {
    const {name, job} = req.body
  
    const newUser = {
        id: data[data.length-1].id+1,
        name: name,
        job: job,
    }

    try {
        data.push(newUser)
        res.send(newUser);
    } catch (error) {
        res.status(404).send("Erro ao adicionar usuário");
    }
};

const deleteUser = ( req, res, next ) => {
  
  const {name, id, job} =  req.query;

  let user = undefined;
  let position = -1

  data.forEach((u, idx) => {
      if((name && u.name.toLowerCase().includes(name.toLowerCase())) ||
      (id && u.id.toString() === id) ||
      (job && u.job.toLowerCase().includes(job.toLowerCase()))){
          user = u
          position = idx
      }
  })

  try {
      if (user) {
          if (position > -1) data.splice(position, 1);
          res.send("success");
      } else {
          res.status(404).send("Usuário não encontrado");
      }
  } catch (error) {
      res.status(404).send("Erro ao excluir usuário");
  }
  
};

const putUser = ( req, res, next ) => {
  const { id } =  req.query;
  const { name, job } =  req.body;

  try {
      const userUpdated = data.find(d => d.id.toString() === id);
      userUpdated.name = name;
      userUpdated.job = job;
      res.send(userUpdated);
  } catch (error) {
      res.status(404).send("Usuário não encontrado");
  }
};

module.exports = {
    getUser,
    getUsers,
    postUser,
    deleteUser,
    putUser
};