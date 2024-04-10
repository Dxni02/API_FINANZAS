import  connection  from "./../database/database";
import  JWT  from "jsonwebtoken";
import config from "../config";

const getUsuarios = (req, res) =>{
    connection.query(
        'SELECT * FROM usuarios;',
        (err, result) => {
            if (err) {
                console.log("fallo: ", err)
            }
            console.log("result: ", result)
            res.json({result})
        }
    );
};

const crearToken = (req, res)=>{
    const {num_documento, contrasena}= req.body;
    connection.query(
        "SELECT * FROM usuarios WHERE num_documento= ? AND contrasena=?", [num_documento, contrasena],
        (err, result) => {
            if (err) {
                console.log("fallo: ", err)
            }
            console.log("Inicio de sesion Satisfactorio: ", result)
            const token= JWT.sign(result[0], config.secret_key)
            res.json({token})
        }
    )
    
};

const addUsuarios = (req, res) =>{
    
    const body = req.body;
    console.log(body);

    connection.query(
        "INSERT INTO usuarios (num_documento, tipo_identificacion, contrasena, nombre, apellido, genero, email, telefono, pais) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);",

        [
            body.num_documento,
            body.tipo_identificacion,
            body.contrasena,
            body.nombre,
            body.apellido,
            body.genero,
            body.email,
            body.telefono,
            body.pais,

        ],

        (err, result) => {
            if (err) {
                console.log("fallo: ", err)
            }
            console.log("Usuario Registrado: ", result)
            res.json({result})
        }
    );
};

const getUsuario = (req, res) =>{
    
    const num_documento = req.params.id;

    connection.query(
        'SELECT * FROM usuarios WHERE num_documento = ?;', [num_documento] ,
        (err, result) => {
            if (err) {
                console.log("fallo: ", err)
            }
            console.log("Usuario Encontrado: ", result[0])
            res.json({ usuario: result[0] });
        }
    );
};

const updateUsuario = (req, res) =>{
    
    const num_documento = req.params.id;
    const body = req.body;

    connection.query(
        'UPDATE usuarios SET telefono=?, email=?, contrasena=?, pais=? WHERE num_documento = ?;', [
            body.telefono,
            body.email,
            body.contrasena,
            body.pais,
            num_documento],
        (err, result) => {
            if (err) {
                console.log("fallo: ", err)
            }
            console.log("Usuario Modificado: ", result[0])
            res.json({ usuario: result[0] });
        }
    );
};

const deleteUsuario = (req, res) =>{
    
    const num_documento = req.params.id;

    connection.query(
        'DELETE FROM usuarios WHERE num_documento = ?;', [num_documento] ,
        (err, result) => {
            if (err) {
                console.log("fallo: ", err)
            }
            console.log("Usuario Eliminado: ", result[0])
            res.json({ usuario: result[0] });
        }
    );
};

export const methods = {
    getUsuarios,
    crearToken,
    addUsuarios,
    getUsuario,
    updateUsuario,
    deleteUsuario
};