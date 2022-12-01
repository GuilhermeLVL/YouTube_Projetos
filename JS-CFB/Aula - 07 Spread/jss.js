/*
 Spread / Espalahamento 
 Declaracao dele "..."
*/ 
let n1 = [10,20,30]
let n2 = [11,22,33]
//Execucao do Spread (...)
let n3 = [...n1,...n2]

console.log("N1 "+n1)
console.log("N2 "+n2)
console.log("N3 "+n3)

/*
N1 10,20,30
jss.js:10
N2 11,22,33
jss.js:11
N3 10,20,30,11,22,33 
*/




//Operador Spread em Objetos 
const jogador1 = {Nome:"Guilherme",energia:100,vidas:15,fome:80,raiva:40}
const jogador2 = {Nome:"Amanda",energia:150,vidas:10,fome:3}
const jogador3 = {...jogador1,...jogador2}

console.log(jogador1)
console.log(jogador2)
console.log(jogador3)

/*
{Nome: 'Guilherme', energia: 100, vidas: 15, fome: 80, raiva: 40}
{Nome: 'Amanda', energia: 150, vidas: 10, fome: 3}
{Nome: 'Amanda', energia: 150, vidas: 10, fome: 3, raiva: 40} 
*/



//Somando valores de foma tradicional
const soma = (v1,v2,v3)=>{
    return v1+ v2+ v3
}

console.log(soma(10,20,30))


//Somando valores de usando Array e Spread
const soma1 = (v1,v2,v3)=>{
    return v1+ v2+ v3
}

let valores = [1,2,3]
console.log(soma1(...valores))





// Manipulando elemntos dom usando Spread 

const obj1 = document.getElementsByTagName("div")
const obj2 = [...document.getElementsByTagName("div")]