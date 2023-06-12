import { RequestHandler } from "express";
import { DATA } from "./data";



const getUser:RequestHandler = ( req, res, next ) => {
    
    var name =  req.query.name;

    const findedUser = DATA.filter()

};

const getUsers:RequestHandler = ( req, res, next ) => {
    
    res.send(DATA).status(200);
    
};

module.exports = {
    getUser,
    getUsers
};