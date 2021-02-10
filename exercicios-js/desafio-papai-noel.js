//exercício papai noel 

//informações gerais
let natal = {
    numeroCriancas: 25,
    precoPresente: 15.25,
    nomeLoja: "Magalu"
}
//cálculoTotal
let calcular = (numA, numB) => numA*numB
//resultado
let total = calcular (natal.numeroCriancas, natal.precoPresente)
//setTimeout
setTimeout(calcular, 2000)

//total para json
let totalPresentes = JSON.stringify (total)
//adicionar total ao objeto & conversão de dado
natal.valorTotal = parseInt (totalPresentes)

//transformar nome da loja em maiúsculo
let nomeLoja = "Magalu"
let lojaMaiuscula = nomeLoja.toUpperCase ()
natal.nomeLoja = lojaMaiuscula

//transformação em JSON
let nataljson = JSON.stringify (natal)

//teste do código
console.log (nataljson)


