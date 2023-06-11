import { fakeData } from './fakeData.mjs';

export function addUser(req, res) {
  const { job, name } = req.body;

  const newUser = {
    id: randomId(),
    name: name,
    job: job,
    role: "USER",
    count: 0
  };

  fakeData.push(newUser);

  res.send(newUser);
}

export function randomId() {
  let uuid = 'xxxxxxxx-xxxx-yxyx-yxxx-xxxxxxxxxxxx';

  return uuid.replace(/[xy]/g, function (c) {
    let r = (Math.random() * 16) | 0;
    let v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}