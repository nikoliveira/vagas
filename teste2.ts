import data from './fakeData';

export default function (req, res) {
  const {name} = req.body;
  const {job} = req.body;

  const newUser = {
    name,
    job,
  };

  data.push(newUser);

  res.send(newUser);
}
