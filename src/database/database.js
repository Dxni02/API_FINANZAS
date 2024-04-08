import mysql from "mysql2";
import config from "./../config";

const connection = mysql.createConnection({
    host: config.host,
    database: config.database,
    user: config.user,
    password: config.password
});

connection.connect((err) => {
    if (err) {
        console.error("Error al conectar a la base de datos: ", error)
        return 
    }
    console.log("¡Conexion a la base de datos exitosa!")
});

export default connection;