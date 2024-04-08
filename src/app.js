import express from "express";
import morgan from "morgan";
import usuarioRoutes from "./routes/usuario.routes";

const app = express();

app.use(express.json());

app.set("port", 8080);

app.use(morgan("dev"));

app.use("/api/usuarios", usuarioRoutes);

export default app;