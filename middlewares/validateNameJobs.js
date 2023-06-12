module.exports = (req, res, next) => {
  const { name, job } = req.body;

  // Com este middleware eu garanto que os campos name e job serão devidamente prenchidos.
  if (!name || name.length < 3) {
    return res.status(400)
    .json({ message: '"name" precisa existir e ter ao menos 3 caracters' });
  }
  if (!job) {
    return res.status(400)
    .json({ message: 'campo "job" é nescessario.' });
  }
  return next();
};