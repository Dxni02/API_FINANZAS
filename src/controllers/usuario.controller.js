import  connection  from "./../database/database";

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
    addUsuarios,
    getUsuario,
    updateUsuario,
    deleteUsuario
};