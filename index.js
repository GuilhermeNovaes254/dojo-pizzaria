const express = require('express')
const app = express()
const pizzaRota = require('./routes/pizzas')

app.listen(3000, () => console.log("A pizzaria ta online!!!!"));

app.use(pizzaRota);