const data = require('../../fakeData')

const getUser = (req, res, next) => {
  const name = req.query.name

  for (let i = 0; i < data.length; i++) {
    if (i.name == name) {
      res.send(data[i])
    }
  }
}

const getUsers = (req, res, next) => {
  res.send(data)
}

module.exports = {
  getUser,
  getUsers
}
