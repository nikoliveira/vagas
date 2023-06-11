import { findByName } from "./teste1.mjs";

export function total(req, res){
    var name =  req.query.name;
    const item = findByName(name);
    res.send({message: `User - ${item.name} foi lido : ${item.count > 1 ? `${item.count} vezes` : `${item.count} vez`}`});
};