// base server

const express = require("express");
const PORT = 5000;
const productRoutes = require("./routes/product.route");
const orderRoutes = require("./routes/order.route");

const app = express(); //body parser  to accees the body

app.use(express.json());
app.use("/product", productRoutes); //import
app.use("/order", orderRoutes);

app.get("/info", (req, res) => {
  res.send("server is healthy");
});

app.listen(PORT, () => {
  console.log(`server is running in http://localhost:${PORT}`);
});
