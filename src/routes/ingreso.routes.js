import { Router } from "express";
import { methods as ingresoController} from "./../controllers/ingreso.controller";

const router=Router();

//ROUTES INGRESOS
router.get("/", ingresoController.getIngresos);
router.post("/", ingresoController.addIngresos);
router.get("/:id", ingresoController.getIngreso);
router.put("/:id", ingresoController.updateIngreso);
router.delete("/:id", ingresoController.deleteIngreso);

export default router;