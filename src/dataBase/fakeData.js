
const fakeData  =  [
    {
        id: 0,
        name: "João Oliveira",
        job: "Desenvolvedor",
    }
    
];
fakeData.forEach(user => {
    user.readCount = 0;
  });


module.exports = fakeData;