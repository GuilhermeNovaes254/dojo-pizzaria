const pizzaModel = require("../model/Pizza");

const pizzaController = {
    
    index:(req, res) => {
        res.send(pizzaModel.listarPizzas())
    },

    adicionar:(req, res) => {
        let novaPizza = req.params;
        pizzaModel.adicionar(novaPizza);
        res.send(`Pizza de  "${novaPizza.nome}" adicionada`)
    },

    buscarNome:(req, res) => {
        let sabor = req.params;
        let flag = pizzaModel.buscarNome(sabor);
        if(flag == true){
            res.send(`Pizza sabor  "${sabor}" encontrada`)
        }else{
            res.send(`Pizza sabor  "${sabor.nome}" NAO encontrada`)
        }
        
    },

    buscarCategoria:(req, res) => {
        let categoria = req.params;
        console.log(categoria)
        let resp = pizzaModel.buscarCategoria(categoria);
        if(resp.length > 1){
            res.send(`Encontramos pizza(s) de ${resp}`)
        }else{
            res.send(`Não encontramos pizzas nessa categoria`)
        }
        
    },

    fazPedido:(req, res) => {
        let pedido = req.params;
        pizzaModel.fazPedido(pedido);
        res.send(`Pedido de pizza de ${pedido.sabor} efetuado`);        
    },

    listarPedidos:(req, res) => {
        res.send(pizzaModel.listarPedidos())
    },

    totalCliente:(req, res) => {
        let total = req.params;
        res.send(pizzaModel.listarPedidos(total.cliente))
    }

}

module.exports = pizzaController
