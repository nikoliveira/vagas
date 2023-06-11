const data = require('./src/fakeData')

module.exports = function (req, res) {
  const name = req.body.name
  const jov = req.body.job

  const newUser = {
    name,
    job
  }

  data.push(newUser)

  res.send(newUser)
}
