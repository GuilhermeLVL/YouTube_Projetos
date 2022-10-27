 const img = document.getElementById('img');
const butoes = document.getElementById('butoes');
let colorIndex = 0;
let intervalid = null;

/*Funcao que é acionada */
const mudaCor = (event) => {
    stop();
    turnOn[event.target.id]();
    
}


const nextIndex = () =>{
    if (colorIndex<2){
        colorIndex++ 
    }else{
        colorIndex = 0;
    }
   
}

const mudaCor2 = () =>{
    const colors = ['vermelho','amarelo','verde']
    const color = colors[colorIndex];
    turnOn[color]();
    nextIndex();
    
}

const stop = () =>{
    clearInterval(intervalid);
}

const turnOn = {
    'vermelho': () => img.src = './img/vermelho.png',

    'amarelo': () => img.src = './img/amarelo.png',

    'verde': () => img.src = './img/verde.png',

    'automatico': () => intervalid = setInterval(mudaCor2, 1000)
}




/*Comando para criar um acionador(event) da funcao  */
butoes.addEventListener('click', mudaCor)