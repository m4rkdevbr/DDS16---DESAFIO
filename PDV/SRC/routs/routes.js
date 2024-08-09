const express = require("express");
const routes = express.Router();
const userRoutes = require("./userRoutes");
const categoryRoutes = require("./categoryRoutes");
const produtoRoute = require("./produtoRoute");
const pedidoRoute = require("./pedidoRoute");
const produtoRoutes = require("../routs/produtoRoute")

routes.use("/usuario", userRoutes);
routes.use("/categoria", categoryRoutes);
routes.use("/produto", produtoRoute);
routes.use("/pedido", pedidoRoute);
routes.use("/produtos", produtoRoutes);

module.exports = routes;
