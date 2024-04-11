import  connection  from "./../database/database";

const getGastos = (req, res) =>{
    connection.query(
        'SELECT * FROM gastos WHERE usuario_id=?;',[req.usuario.num_documento],
        (err, result) => {
            if (err) {
                console.log("fallo: ", err)
            }
            console.log("result: ", result)
            res.json({result})
        }
    );
};

const addGastos = (req, res) =>{
    
    const body = req.body;
    console.log(body);

    connection.query(
        "INSERT INTO gastos (id, nombre, valor, categoria, descripcion, usuario_id) VALUES (?, ?, ?, ?, ?, ?);",

        [   
            body.id,
            body.nombre,
            body.valor,
            body.categoria,
            body.descripcion,
            req.usuario.num_documento,
        ],

        (err, result) => {
            if (err) {
                console.log("fallo: ", err)
            }
            console.log("Gasto agregado: ", result)
            res.json({result})
        }
    );
};

const getGasto = (req, res) =>{
    
    const nombre = req.params.nombre;

    connection.query(
        'SELECT * FROM gastos WHERE usuario_id=? AND (nombre=? OR descripcion=?);', [req.usuario.num_documento, nombre, nombre] ,
        (err, result) => {
            if (err) {
                console.log("fallo: ", err)
            }
            console.log("Gasto Encontrado: ", result[0])
            res.json({ Gasto: result[0] });
        }
    );
};

const updateGasto = (req, res) =>{
    
    const id = req.params.id;
    const body = req.body;

    connection.query(
        'UPDATE gastos SET nombre=?, categoria=?, descripcion=? WHERE id = ?;', [
            body.nombre,
            body.categoria,
            body.descripcion,
            id],
        (err, result) => {
            if (err) {
                console.log("fallo: ", err)
            }
            console.log("Gasto Modificado", result[0])
            res.json({ ingreso: result[0] });
        }
    );
};

const deleteGasto = (req, res) =>{
    
    const id = req.params.id;

    connection.query(
        'DELETE FROM gastos WHERE id = ?;', [id] ,
        (err, result) => {
            if (err) {
                console.log("fallo: ", err)
            }
            console.log("Gasto Eliminado: ", result[0])
            res.json({ gasto: result[0] });
        }
    );
};

export const methods = {
    getGastos,
    addGastos,
    getGasto,
    updateGasto,
    deleteGasto
};