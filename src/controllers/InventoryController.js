import Inventory from "../models/InventoryModel.js";

// Get all inventory
export const getAllInventory = async (req, res) => {
  try {
    const items = await Inventory.find();
    res.json({ items });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create new inventory item
export const createInventory = async (req, res) => {
  try {
    const newItem = new Inventory(req.body);
    await newItem.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update item info
export const updateInventory = async (req, res) => {
  try {
    const item = await Inventory.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(item);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update stock (Masuk/Keluar)
export const updateStock = async (req, res) => {
  try {
    const item = await Inventory.findById(req.params.id);
    const { stockMasuk, stockKeluar } = req.body;

    if (stockMasuk) {
      item.stockMasuk += Number(stockMasuk);
      item.historyMasuk.push({ jumlah: Number(stockMasuk) });
    }

    if (stockKeluar) {
      item.stockKeluar += Number(stockKeluar);
      item.historyKeluar.push({ jumlah: Number(stockKeluar) });
    }

    await item.save();
    res.json(item);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete item
export const deleteInventory = async (req, res) => {
  try {
    await Inventory.findByIdAndDelete(req.params.id);
    res.json({ message: "Item deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
