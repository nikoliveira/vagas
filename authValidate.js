var data =  require("./fakeData");
var jwt = require("jsonwebtoken");

  module.exports = async function (req, res){
    
    const { id, password } = req.body;

    if(!id || !password) return res.status(400).send({ 'message': 'Passe o id e a senha para validação.' });

    const user = data.find(u => Number(u.id) === Number(id));

    if (!user) return res.status(400).send({ 'message': 'Insira um id de usuário válido.' });
    

    const passwordCombinated = process.env.VALID_PASSWORD + process.env.VALID_ID;

    if ( !(password + id.toString() === passwordCombinated)) {
      return res.status(401).send({ 'message': 'Usuário não autorizado.' });
    }

    const validPassword = process.env.VALID_PASSWORD;
    const token = jwt.sign({ id: user.id }, validPassword, { expiresIn: '1d' });

    return res.status(200).json({
        message: 'Login feito com sucesso.',
        data: {
            user: user,
            token: token
        }
    });
  } 