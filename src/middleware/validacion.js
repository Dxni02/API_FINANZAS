import  JWT  from "jsonwebtoken";
import config from "../config";

const validacionToken = (req, res, next)=>{
    const token = req.header("Authorization").split(" ")[1]
    console.log(token);
    try {
        const validation = JWT.verify(token, config.secret_key)
        console.log(validation);
        req.usuario = validation;
        next();
    } catch (error) {
        res.json({
            message: "Fallo"
        })
    }
};

export default validacionToken;