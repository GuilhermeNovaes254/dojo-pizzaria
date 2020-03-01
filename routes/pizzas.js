const express = require('express');
const Router = express.Router();
const pizzaController = require("../controller/PizzaController");

Router.get('/', pizzaController.index);
Router.get('/adicionar/:nome/:categoria/:preco', pizzaController.adicionar);
Router.get('/buscar/nome/:nome/', pizzaController.buscarNome);
Router.get('/buscar/categoria/:categoria/', pizzaController.buscarCategoria);
Router.get('/fazpedido/:sabor/:nome', pizzaController.fazPedido);
Router.get('/listarpedidos', pizzaController.listarPedidos);
Router.get('/total/:cliente', pizzaController.totalCliente);

module.exports = Router;