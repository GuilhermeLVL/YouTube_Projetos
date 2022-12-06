
//Trazendo a classe mario do HTML para o JS (Possibilitando alteracoes)
const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')

//Funcao Jump, essa funcao acrecenta a palavra "Jump" na class ".mario" , acionando a animacao "Jump"
const jump = () =>{
    mario.classList.add('jump')

    setTimeout(()=>{

        mario.classList.remove('jump');
    }, 500);
}


const loop = setInterval(() => {

    //Variaveis que pegam a posicao atual das animacoes 
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');

    //Com essas posicoes em maos, podemos cirar condicoes e funcionalidades.

    //AO Peder
    if(pipePosition <= 120 && pipePosition > 0 && marioPosition <80 ){

        //Para animacao do cone
        pipe.style.animation = 'none';
        //Redireciona o cone para o lucar em que ouve a colisao
        pipe.style.left = `${pipePosition}px`

        //Cancela a animacao do mario (Pulo)
        mario.style.animation = 'none';
        //Congela o mario na posicao em que ouve a colisao 
        mario.style.bottom = `${marioPosition}px`


        mario.src="mario-jump-images/game-over.png"
        mario.style.width = "75px"
        mario.style.marginLeft = "50px"

        clearInterval(loop);
    }


},10);

//Ao precionar qualker tecla do teclado a funcao Jump sera acionada
document.addEventListener('keydown', jump)

