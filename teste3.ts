import data from './fakeData';

export default function (req, res) {
  const {name} = req.query;

  for (let i = 0; i < data.length; i++) {
    if (i.name == name) {
      data[i] = null;
    }
  }

  res.send('success');
};
