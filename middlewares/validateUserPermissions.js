module.exports = function (req, res, next) {
  const { apikey } = req.headers;

  if (!apikey || apikey !== "senhasupersecretadoadm") {
    return res.status(401).send("Não autorizado");
  }

  next();
};
