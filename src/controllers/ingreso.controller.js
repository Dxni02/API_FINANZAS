import  connection  from "./../database/database";

const getIngresos = (req, res) =>{
    connection.query(
        'SELECT * FROM ingresos;',
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
        "INSERT INTO ingresos (id, fecha, nombre, valor, fuente, descripcion, usuario_id) VALUES (?, ?, ?, ?, ?, ?, ?);",

        [
            body.id,
            body.fecha,
            body.nombre,
            body.valor,
            body.fuente,
            body.descripcion,
            body.usuario_id,
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
    
    const id = req.params.id;

    connection.query(
        'SELECT * FROM ingresos WHERE id = ?;', [id] ,
        (err, result) => {
            if (err) {
                console.log("fallo: ", err)
            }
            console.log("Ingreso Encontrado: ", result[0])
            res.json({ ingreso: result[0] });
        }
    );
};

const updateIngreso = (req, res) =>{

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