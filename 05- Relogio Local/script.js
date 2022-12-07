function atualiarTempo(){
let display = document.querySelector('.display');

let agora = new Date();

let horario = `${agora.getHours()}:${agora.getMinutes()}:${agora.getSeconds()}`;
display.textContent = horario;
}

function corrigirHorario(numero){
if(numero < 10){
   numero = '0' + numero 
}
}

setInterval(atualiarTempo, 1000)