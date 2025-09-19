import express from "express";
import {
  getAllInventory,
  createInventory,
  updateInventory,
  updateStock,
  deleteInventory,
} from "../controllers/InventoryController.js";

const router = express.Router();

router.get("/", getAllInventory);
router.post("/", createInventory);
router.put("/:id", updateInventory);
router.put("/trans/:id", updateStock);
router.delete("/:id", deleteInventory);

export default router;
