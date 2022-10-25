const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const reparar = document.getElementById('reparar');
const imagem = document.getElementById('imagem');
const titulo = document.getElementById('titulo');


const lamp = document.getElementById('lamp');



//Funcoes

function isLmpBroken(){
    return lamp.src.indexOf('quebrada') > -1 
}
/*
Cda uma das funcoes é responsavel por um tipo diferente de imagen. 
 */
function lampOn(){
    if(!isLmpBroken()){
    lamp.src = './imagens/ligada.jpg';
    imagem.style.cssText = 'box-shadow: yellow 1px 1px 80px';

    turnOff.style.cssText = 'box-shadow: yellow 1px 1px 5px;';
    turnOn.style.cssText = 'box-shadow:  yellow 1px 1px 5px;';
    reparar.style.cssText = 'box-shadow: yellow 1px 1px 5px;';
    
    titulo.style.cssText = 'box-shadow:  yellow 1px 1px 5px;'+ 'color:yellow';
    }
}

function lampOff(){
    if(!isLmpBroken()){
    lamp.src = './imagens/desligada.jpg';

    imagem.style.cssText = 'box-shadow: rgb(109, 107, 107) 1px 1px 80px;';

    turnOff.style.cssText = 'box-shadow: rgb(109, 107, 107) 1px 1px 5px;'+'color:rgb(255, 255, 255)';
    turnOn.style.cssText = 'box-shadow: rgb(109, 107, 107) 1px 1px 5px;'+'color:rgb(255, 255, 255)';
    reparar.style.cssText = 'box-shadow: rgb(109, 107, 107) 1px 1px 5px;'+'color:rgb(255, 255, 255)';

    titulo.style.cssText = 'box-shadow: rgb(109, 107, 107) 1px 1px 5px;'+'color:rgb(255, 255, 255)';
    }
}

function lampBroken(){
    if(!isLmpBroken()){
    lamp.src = './imagens/quebrada.jpg'

    imagem.style.cssText = 'box-shadow:none'

    turnOff.style.cssText = 'box-shadow:none';
    turnOn.style.cssText = 'box-shadow:none';
    reparar.style.cssText = 'box-shadow:yellow';
    titulo.style.cssText = 'box-shadow:none';
    
    }
}

function lampRepara(){
    if(isLmpBroken()){
        lamp.src = './imagens/desligada.jpg'
    }
}

//Faz com que o elemento HRML seja acionado com um 'click', linka o HTML com a funcao.
turnOn.addEventListener('click', lampOn);

turnOff.addEventListener('click', lampOff);

reparar.addEventListener('click',lampRepara);

lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave',lampOff);
lamp.addEventListener('dblclick',lampBroken);

/*
    {TurnOn / TurnOff}

Sao ID do HTML


     {addEventListener}

comando que adiciona um evento, esse comando permie associar uma funcao(CRIADA NO JS) ao elemto HTML


    {('click',)}

É a declaracao do metodo de acionacao da funcao criada


         {lampOn}

Funcao que sera acionada


turnOn.addEventListener('click', lampOn);

*/