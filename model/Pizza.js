let pedidos = [
    {
        cliente:'Joao',
        pizza:['Calabresa'],
        total: 0
    }
];


let pizzas =[
    {
        nome: "Calabresa",
        categoria: "Salgada",
        preco: 10
    },
    {
        nome: "Mussarela",
        categoria: "Salgada",
        preco: 12
    },
    {
        nome: "Chocolate",
        categoria: "Doce",
        preco: 15
    },
    {
        nome: "Brócolis",
        categoria: "Vegetariana",
        preco: 30
    }
];
const listarPizzas= () =>{
    let conteudo = ""
    for(let pizza of pizzas){
        conteudo+=`
        ------------ <br>
        Sabor: ${pizza.nome} <br>
        Categoria: ${pizza.categoria} <br>
        Preço: ${pizza.preco} <br>
        ------------`         
    }
    return conteudo;
}

const adicionar = (novaPizza)=>{
    pizzas.push(novaPizza);
};

const buscarNome = (nome)=>{
    let flag = false;
    for(pizza of pizzas){
        if(nome == pizza.nome ){
            flag = true;
        }
    }
    return flag;
}

const buscarCategoria = (categoria)=>{
    let conteudo = [];
    for(pizza of pizzas){
        if(categoria.categoria == pizza.categoria){
            conteudo.push(pizza.nome);
        }
    }
    return conteudo;
}

const fazPedido = (Pedido)=>{
    for(pizza of pizzas){
        if(Pedido.sabor == pizza.nome){
            pedido.push({
                cliente:Pedido.cliente,
                pizza:Pedido.sabor,
                total: 0
            })

        }else{
            return `Sabor não existe no cardápio`
        }
    }        
}

const listarPedidos = () =>{
    let conteudo = ""
    for(let pedido of pedidos){
        conteudo+=`
        ------------ <br>
        Cliente: ${pedido.cliente} <br>
        Sabor: ${pedido.pizza} <br>
        Total: ${pedido.total} <br>
        ------------`         
    }
    return conteudo;
}

const total = (cliente) =>{
    for(pedido of pedidos){
        if(cliente == pedido.cliente){
            return `Valor total do cliente "${cliente}" = ${pedido.valor} `;
        }else{
            return `Cliente não consta em nosa base de dados`
        }
    }    
}

module.exports = {listarPizzas, adicionar, buscarNome, buscarCategoria, fazPedido, listarPedidos, total}