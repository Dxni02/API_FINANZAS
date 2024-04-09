import { Router } from "express";
import validacionToken from "../middleware/validacion";
import { methods as ingresoController} from "./../controllers/ingreso.controller";

const router=Router();

//ROUTES INGRESOS
router.get("/", validacionToken, ingresoController.getIngresos);
router.post("/", validacionToken, ingresoController.addIngresos);
router.get("/:nombre", validacionToken, ingresoController.getIngreso);
router.put("/:id", validacionToken, ingresoController.updateIngreso);
router.delete("/:id", validacionToken, ingresoController.deleteIngreso);

export default router;