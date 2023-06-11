const db = require("../database/db.json").users;
const yup = require('yup');

const createUser = (req, res, next) => {
    const schema = yup.object().shape({
        name: yup.string()
            .required('O campo nome é obrigatório*')
            .min(3, 'Preencha pelo menos 3 caracteres para o nome do usuário.'),
        job: yup.string()
            .required('O campo job é obrigatório*'),
    });

    const { name, job } = req.body;

    try {
        schema.validate({ name, job })
            .then(() => {
                const newId = db.length + 1;
                var newUser = {
                    id: newId,
                    name: name,
                    job: job,
                };
                db.push(newUser);
                return res.status(201).json(newUser);
            })
            .catch(error => {
                return res.status(400).json({ error: error.message });
            });
    } catch (error) {
        res.status(400).json({ message: error.errors });
    }
};

module.exports = { createUser };
