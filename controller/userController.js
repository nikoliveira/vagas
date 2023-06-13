const data = require('./../fakeData')
const { ErrorHandler } = require('./../middlewares')

const getUser = ( req, res, next ) => {
  const id = req.params.id;
  const user = data.find((user) => user.id === Number(id))
  if(!user) return next( new ErrorHandler({ message: "User not found", statusCode: 404 }))
  user.access++

  return res.send(user)

};
const getUsers = ( _req, res ) => {
  res.send(data);
};

const createUser = (req, res,next) => {
  const {name, job, isAdmin} = req.body;
  if(!name || !job) return next(new ErrorHandler({ message: "invalid name or job" }));
  const newUser = {
    id: data.length + 1,
    name: name,
    job: job,
    access: 0,
    isAdmin: isAdmin || false
  }

  data.push(newUser)
  
  res.send(newUser);

};


const deleteUser = (req, res, next) => {
  const id = Number(req.params.id);
  const userIndex = data.findIndex((user) => user.id == id);
  if(userIndex == -1) {
    return next(new ErrorHandler({message: "user not found", statusCode: 404}))
  }
  data.splice(userIndex, 1)


  return res.sendStatus(204);
};

const updateUser = (req, res, next) =>  {
  const {name, job } = req.body;

  const id =  Number(req.params.id);

  const user = data.find((user) => user.id == id);
  if(!user) return next(new ErrorHandler({ message: "User not found", statusCode: 404 }));
  
  user.name = name || user.name;
  user.job = job || user.job;

  res.send(user);
};


const accessUser = (req, res,next ) => {
  const id = Number(req.params.id)
  const user = data.find((user) => user.id === id)

  if(!user) return next(new ErrorHandler({ message: "User not found", statusCode: 404 }))

  res.send(`Usuário ${user.name} foi lido ${user.access}  vezes.`);

};

module.exports = {
  accessUser,
  getUser,
  getUsers,
  deleteUser,
  updateUser,
  createUser
}