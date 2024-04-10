import  connection  from "./../database/database";

const getIngresos = (req, res) =>{
    connection.query(
        'SELECT * FROM ingresos WHERE usuario_id=?;',[req.usuario.num_documento],
        (err, result) => {
            if (err) {
                console.log("fallo: ", err)
            }
            console.log("result: ", result)
            res.json({result})
        }
    );
};

const addIngresos = (req, res) =>{
    
    const body = req.body;
    console.log(body);

    connection.query(
        "INSERT INTO ingresos (id, nombre, valor, fuente, descripcion, usuario_id) VALUES (?, ?, ?, ?, ?, ?);",

        [
            body.nombre,
            body.valor,
            body.fuente,
            body.descripcion,
            req.usuario.num_documento,
        ],

        (err, result) => {
            if (err) {
                console.log("fallo: ", err)
            }
            console.log("Ingreso agregado: ", result)
            res.json({result})
        }
    );
};

const getIngreso = (req, res) =>{
    
    const nombre = req.params.nombre;

    connection.query(
        'SELECT * FROM ingresos WHERE usuario_id=? AND (nombre = ? OR descripcion=?);', [req.usuario.num_documento, nombre, nombre] ,
        (err, result) => {
            if (err) {
                console.log("fallo: ", err)
            }
            console.log("Ingreso Encontrado: ", result)
            res.json({ ingreso: result });
        }
    );
};

const updateIngreso = (req, res) =>{
    
    const id = req.params.id;
    const body = req.body;

    connection.query(
        'UPDATE ingresos SET nombre=?, fuente=?, descripcion=? WHERE id = ?;', [
            body.nombre,
            body.fuente,
            body.descripcion,
            id],
        (err, result) => {
            if (err) {
                console.log("fallo: ", err)
            }
            console.log("Ingreso Modificado: ", result[0])
            res.json({ ingreso: result[0] });
        }
    );
};

const deleteIngreso = (req, res) =>{
    
    const id = req.params.id;

    connection.query(
        'DELETE FROM ingresos WHERE id = ?;', [id] ,
        (err, result) => {
            if (err) {
                console.log("fallo: ", err)
            }
            console.log("Ingreso Eliminado: ", result[0])
            res.json({ ingreso: result[0] });
        }
    );
};

export const methods = {
    getIngresos,
    addIngresos,
    getIngreso,
    updateIngreso,
    deleteIngreso
};