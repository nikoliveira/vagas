
const fakeData  =  [
    {
        id: 0,
        name: "João Oliveira",
        job: "Desenvolvedor",
        permission: ["delete", "update"]
    }
    
];
fakeData.forEach(user => {
    user.readCount = 0;
  });


module.exports = fakeData;