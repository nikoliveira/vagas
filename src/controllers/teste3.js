const db = require("../database/db.json").users;

//Neste método poderiamos utilizar o ID do próprio do usuário para deletar.
const deleteUser = (req, res) => {
    try {
        const { name } = req.body

        if (!name) {
            return res.status(422).json({ message: 'Digita o nome do usuário para deletar.' })
        }

        const user = db.find(user => user.name === name);
        if (user) {
            //Executar método para deletar usuário
            const usersCurrent = db.filter(item => item.name !== name)

            //Método para verificar se ainda existe o usuário na base
            const userExist = usersCurrent.find(user => user.name === name);
            if (userExist) {
                return res.status(500).json({ message: 'Erro ao deletar usuário.' })
            }

            return res.status(200).json({ usersCurrent, message: 'Usuário deletado com Sucesso.' });
        } else {
            res.status(404).json({ message: 'Usuário não encontrado.' });
        }

    } catch (error) {
        return res.status(400).json({ message: error.errors });
    }
};

module.exports = { deleteUser };