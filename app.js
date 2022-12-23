const express = require("express");
const { productManager } = require("./productManager");

const app = express();
const port = 8080;

app.get("/products", (req, res) => {
  const productos = productManager.getProducts();
  const limit = req.query.limit;
  // Si hay query de limit, limitar la cantidad de productos que voy a devolver con array.prototype.slice
  res.send(productos);
});

app.listen(port, () => {
  console.log("Servidor levantado en el puerto", port);
});
