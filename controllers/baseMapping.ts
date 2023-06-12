import { RequestHandler } from "express";

const baseUrl: RequestHandler = (req, res) => {
  return res.status(200).send(
   `get user/ </br>
    get users/ </br>
    post users/ </br>
    delete users/ </br>
    put users/ </br>
    get users/access" </br>
    `);
};

module.exports = {
  baseUrl,
};
