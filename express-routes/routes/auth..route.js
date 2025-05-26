const express =  require("express");

const authRoutes = express.Router();

const logger= (req,res,next) => {
    console.log("Auth Routes");
    next();
};
authRoutes.use(logger);

authRoutes.get("/orders", (req, res) => res.send("Get all orders"));
authRoutes.get("/:id", (req, res) => res.send(`Get order ${req.params.id}`));
authRoutes.post("/", (req, res) => res.send("Create order"));
authRoutes.put("/:id", (req, res) =>
  res.send(`update order ${req.params.id}`)
);

authRoutes.delete("/:id", (req, res) =>
  res.send(`Delete order ${req.params.id}`)
);

module.exports = authRoutes;