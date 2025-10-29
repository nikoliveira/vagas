import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const SECRET = process.env.ACCESS_TOKEN_SECRET;

export function generateToken(name) {
  return jwt.sign({ name: name }, SECRET, { expiresIn: "1h" });
}

export function authorize(req, res, next) {
  console.log(req.headers);

  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Token ausente" });

  try {
    req.user = jwt.verify(token, SECRET);
    next();
  } catch {
    res.status(403).json({ message: "Token inválido ou expirado" });
  }
}
