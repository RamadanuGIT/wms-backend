import "dotenv/config";

import express from "express";
import cors from "cors";
import inventoryRoutes from "./routes/InventoryRoute.js";
import db from "./config/Connection.js";

const app = express();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

app.use(cors());
app.use(express.json());

app.use("/api/inventory", inventoryRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
