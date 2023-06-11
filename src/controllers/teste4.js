const db = require("../database/db.json").users;
const yup = require('yup');

//Neste método utilizariamos o ID no próprio do usuário na rota e apenas os campos no body.
const updateUser = (req, res) => {
    const schema = yup.object().shape({
        name: yup.string()
            .required('O campo nome é obrigatório*')
            .min(3, 'Preencha pelo menos 3 caracteres para o nome do usuário.'),
        job: yup.string()
            .required('O campo job é obrigatório*'),
    });

    try {
        const { id, name, job } = req.body

        const user = db.find(user => user.id === id);

        if (!user) {
            return res.status(404).json({ message: 'Id do Usuário não encontrado.' });
        }

        //Método que atualizaria o nome do usuário
        schema.validate({ name, job })
            .then(() => {
                var newUser = {
                    id,
                    name: name,
                    job: job,
                };
                db.push(newUser);
                return res.status(200).json({ updateUser: newUser, message: 'Usuário atualizado com sucesso.' });
            })
            .catch(error => {
                return res.status(400).json({ error: error.message });
            });
    } catch (error) {
        return res.status(400).json({ message: error.errors });
    }
};

module.exports = { updateUser };