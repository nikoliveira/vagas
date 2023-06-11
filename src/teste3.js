import data, { length } from './fakeData'

export default function (req, res) {
  const name = req.query.name

  for (let i = 0; i < length; i++) {
    if (i.name === name) {
      data[i] = null
    }
  }

  res.send('success')
}
