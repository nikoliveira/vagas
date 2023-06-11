import { push } from './fakeData'

export default function (req, res) {
  const name = req.body.name
  const job = req.body.job

  const newUser = {
    name,
    job,
  }

  push(newUser)

  res.send(newUser)
}
