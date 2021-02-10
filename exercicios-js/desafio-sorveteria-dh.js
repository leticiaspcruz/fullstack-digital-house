//informações gerais
const arrayPedidos = [{
    nomeCliente: "Victória",
    valorPedido: 5.30,
    itemComprado: "picolé",
    dataPedido: new Date (2020,12,15)
},
{nomeCliente: "Letícia",
valorPedido: 10.70,
itemComprado: "sorvete de massa",
dataPedido: new Date (2020,12,16)
},
{nomeCliente: "Andressa",
valorPedido: 20.03,
itemComprado: "pote de sorvete",
dataPedido: new Date (2020,12,17)
}]


//somar o valor total dos pedidos
let valorTotalPedidos = (array) => {
    array.map((array) => {
      let valorTotal = 0;
      for (valorPedido in array.valorPedido) {
        valorTotal += array.valorPedido[valorPedido];
      }
      array.valorTotal = valorTotal;
      valorTodosPedidos.push(valorTotal);
    });
    return valorTotal;
  };

  valorTotalPedidos (arrayPedidos)




//utilizar callback

//transformação em json
//let relatorioFinal = JSON.strigify (relatorio)

//teste do código
//console.log (relatorioFinal)
