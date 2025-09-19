import "dotenv/config";
import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import inventoryRoutes from "./routes/InventoryRoute.js";

const app = express();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

app.use(cors());
app.use(express.json());

app.use("/api/inventory", inventoryRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
