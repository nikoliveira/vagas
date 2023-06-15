const fakeData = [
  {
    id: Math.random().toString(36).slice(2), // gera um ID aleatório, muda a base numérica e recorta a parte fracionada.
    name: "João Oliveira",
    job: "Desenvolvedor",
    searched: 0,
    admin: true,
  },
];

module.exports = fakeData;
