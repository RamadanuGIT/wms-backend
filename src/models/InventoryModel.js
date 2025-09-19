import mongoose from "mongoose";

const HistorySchema = new mongoose.Schema({
  jumlah: { type: Number, required: true },
  tanggal: { type: Date, default: Date.now },
});

const InventorySchema = new mongoose.Schema({
  kodeBarang: { type: String, required: true, unique: true },
  namaBarang: { type: String, required: true },
  satuan: { type: String, required: true },
  stockAwal: { type: Number, default: 0 },
  stockMasuk: { type: Number, default: 0 },
  stockKeluar: { type: Number, default: 0 },
  historyMasuk: [HistorySchema],
  historyKeluar: [HistorySchema],
});

export default mongoose.model("Inventory", InventorySchema);
