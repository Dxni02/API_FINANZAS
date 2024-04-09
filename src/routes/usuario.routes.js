import { Router } from "express";
import { methods as usuarioController} from "./../controllers/usuario.controller";

const router=Router();

//ROUTES USUARIOS
router.get("/", usuarioController.getUsuarios);
router.post("/", usuarioController.addUsuarios);
router.get("/:id", usuarioController.getUsuario);
router.put("/:id", usuarioController.updateUsuario);
router.delete("/:id", usuarioController.deleteUsuario);

export default router;