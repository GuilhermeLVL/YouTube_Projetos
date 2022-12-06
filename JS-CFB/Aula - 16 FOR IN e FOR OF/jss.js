//Array 
let num = [10,20,30,40,50]


    //For Tradicional:
//(Valores do array)
for (let i= 0; i < num.length;i++){
    console.log(num[i])
}
//(Posicao do array)
for(let i=0;i<num.length;i++){
    console.log(i)
}

    //For in
//(Posicao do array)
for(n in num){
    console.log(n)
}
//(Valores do array)
for(n of num){
    console.log(n)
}
