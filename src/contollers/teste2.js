var data = require("../data/fakeData");

module.exports = function (req, res) {
    // criar um id unico  para cada usuario criado
    try {
        function generarIDUnico() {
            var fecha = new Date();
            var timestamp = fecha.getTime();
            var numeroAleatorio = Math.floor(Math.random() * 1000); // gerar numero de 1 a 1000
            var id = timestamp.toString() + numeroAleatorio.toString();
            return Number(id);
        }
        data.push({
            id: generarIDUnico(),
            name: req.body.name,
            job: req.body.job,
            token: "wqwqwqwwwwq7837817383183738qwyeeyqe8qw78ew7qe877e8q78w7",
            contAcess: 0
        })
        res.status(200).json(data)
    } catch (e) {
        res.status(404).json({ error: 'Error ao criar usuario' });
     }

};