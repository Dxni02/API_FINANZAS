import { Router } from "express";
import validacionToken from "../middleware/validacion";
import { methods as gastoController} from "./../controllers/gasto.controller";

const router=Router();

//ROUTES GASTOS
router.get("/", validacionToken, gastoController.getGastos);
router.post("/", validacionToken, gastoController.addGastos);
router.get("/:id", validacionToken, gastoController.getGasto);
router.put("/:id", validacionToken, gastoController.updateGasto);
router.delete("/:id", validacionToken, gastoController.deleteGasto);

export default router;