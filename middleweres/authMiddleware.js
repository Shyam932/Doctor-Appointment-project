const {Request, Response} = require('express');

const JWT = require("jsonwebtoken");

/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 * @param {*} next 
 */
module.exports = async (req, res, next) =>{
try{
    
    const token = req.headers["authorization"].split(" ")[1];
    JWT.verify(token,process.env.JWT_SECRET, (err, decode) =>{
     if(err){
        console.log(err);
        return res.status(401).send({
            message: "Auth Failed",
            success: false,
        });
     } else{
        req.body.userId = decode.id;
        next();
     }
    });
    
 } catch(error){
    console.log(error);
    res.status(401).send({
        message: "Auth Failed",
        success: false,
    });
}


};