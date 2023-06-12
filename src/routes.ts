import express from "express";

const routes = express.Router();

routes.get("/", (req: express.Request, res: express.Response) => {
  res.status(200).send(`<html>
    get user/ </br>
    get users/ </br>
    post users/ </br>
    delete users/ </br>
    put users/ </br>
    </html>`
    );
});

routes.route("/");

export default routes;
