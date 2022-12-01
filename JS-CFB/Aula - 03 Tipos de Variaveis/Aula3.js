"use stict"


//Var e let
// var é uma vaariavel com poucas restricoes


//Teoricamaente a variavel criada dentro dessa funcao do poderia ser chamada dentro dela, mas o var permite que ela possa ser chamada em outros lugares do codigo.
function test (){
    if(true){
/*Var */    var nome = "Guilherme"
      console.log("Dentro de teste" + nome)  
    }
    console.log("Guilheme")
}

test()

console.log("Fora de teste:" + nome)



//LET
//Usando o let o valor da variavel so pode ser impresso dentro do escopo da funcao, fora dele ocorrear um erro.
function test (){
    if(true){
/*let*/   let nome = "Guilherme"
      console.log("Dentro de teste" + nome)  
    }
    console.log("Guilheme")
}

test()

console.log("Fora de teste:" + nome)



//Tipos de variaveis : LET/ VAR / CONST 
var nome1 = "opa 1   "
let nome2 = "opa 2"
const nome = "opa 3"

/*Let e Var podem er seu valor alterado posteriomente, cont nao pode ter seu valor alterado, seu valor permanece o mesmo */

