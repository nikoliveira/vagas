import { RequestHandler } from "express";
import { DATA } from "./data";



const getUser:RequestHandler = ( req, res, next ) => {
    
    var name:string  =  String(req.query.name);

    const findedUser = DATA.filter((item, index)=> item.name.includes(name));
    res.send(findedUser).status(200);

};

const getUsers:RequestHandler = ( req, res, next ) => {
    
    res.send(DATA).status(200);
};

module.exports = {
    getUser,
    getUsers
};