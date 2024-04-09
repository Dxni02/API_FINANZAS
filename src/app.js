import express from "express";
import morgan from "morgan";
import usuarioRoutes from "./routes/usuario.routes";
import ingresoRoutes from "./routes/ingreso.routes";
import gastoRoutes from "./routes/gasto.routes";

const app = express();

app.use(express.json());

//SETTINGS PORT
app.set("port", 8080);

app.use(morgan("dev"));

//ROUTES
app.use("/api/usuarios", usuarioRoutes);
app.use("/api/ingresos", ingresoRoutes);
app.use("/api/gastos", gastoRoutes);

export default app;