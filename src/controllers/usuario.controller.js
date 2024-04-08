import  connection  from "./../database/database";

const getUsuarios = async (req, res) =>{
    //const result = connection.query("SELECT num_documento, tipo_identificacion, contrasena, nombre, apellido, genero, email, telefono, pais FROM usuarios");
    //console.log(result);

    connection.query(
        'SELECT * FROM usuarios;',
        (err, result) => {
            if (err) {
                console.log("fallo: ", err)
            }

            console.log("result: ", result)

            res.json({
                result
            })
        }
    )
};

export const methods = {
    getUsuarios
};