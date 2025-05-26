const express = require("express");

const productRoutes = express.Router();

const logger = (req, res, next) => {
  console.log("Product Routes");
  next();
};
productRoutes.use(logger);

productRoutes.get("/", (req, res) => res.send("Get all products"));
productRoutes.get("/:id", (req, res) =>
  res.send(`get products ${req.params.id}`)
);
productRoutes.post("/", (req, res) => res.send("Create product"));
productRoutes.put("/:id", (req, res) =>
  res.send(`update products ${req.params.id}`)
);

productRoutes.delete("/:id", (req, res) =>
  res.send(`Delete product ${req.params.id}`)
);

module.exports = productRoutes;
