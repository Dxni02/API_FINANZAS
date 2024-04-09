import { Router } from "express";
import { methods as gastoController} from "./../controllers/gasto.controller";

const router=Router();

//ROUTES GASTOS
router.get("/", gastoController.getGastos);
router.post("/", gastoController.addGastos);
router.get("/:id", gastoController.getGasto);
router.put("/:id", gastoController.updateGasto);
router.delete("/:id", gastoController.deleteGasto);

export default router;