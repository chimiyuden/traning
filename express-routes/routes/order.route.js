const express = require("express");

const orderRoutes = express.Router();

const logger = (req, res, next) => {
  console.log("Order Routes");
  next();
};

orderRoutes.get("/", (req, res) => res.send("Get all orders"));
orderRoutes.get("/:id", (req, res) => res.send(`Get order ${req.params.id}`));
orderRoutes.post("/", (req, res) => res.send("Create order"));
orderRoutes.put("/:id", (req, res) =>
  res.send(`update order ${req.params.id}`)
);

orderRoutes.delete("/:id", (req, res) =>
  res.send(`Delete order ${req.params.id}`)
);

module.exports = orderRoutes;
