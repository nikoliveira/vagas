import data from './fakeData';

export default function (req, res) {
  const {id} = req.query;

  const reg = data.find(d => id == id);
  reg.name = req.body.name;
  reg.job = req.body.job;

  res.send(reg);
}
