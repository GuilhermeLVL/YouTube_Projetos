let audios = [
    { caminho: 'audios/projeto_ratinho_audios_grito.mp3', legenda: 'Grito' },
    { caminho: 'audios/projeto_ratinho_audios_jesus.mp3', legenda: 'Jesus' },
    { caminho: 'audios/projeto_ratinho_audios_nao-e-o-pai.mp3', legenda: 'Nao é o PAI' },
    { caminho: 'audios/projeto_ratinho_audios_pare.mp3', legenda: 'Pare' },
    { caminho: 'audios/projeto_ratinho_audios_que-isso-meu-filho.mp3', legenda: 'Que isso' },
    { caminho: 'audios/projeto_ratinho_audios_ratinhoo.mp3', legenda: 'Ratinhoo' },
    { caminho: 'audios/projeto_ratinho_audios_uepa.mp3', legenda: 'Uepa!' },
    { caminho: 'audios/projeto_ratinho_audios_vixi-ratinho.mp3', legenda: 'Vixi' },
    { caminho: 'audios/projeto_ratinho_audios_xaropinho.mp3', legenda: 'Xaropinho' },
];

let botoes = document.querySelectorAll('.botao');
let legendas = document.querySelectorAll('p');

for(let i =0; i < 9; i++){
    legendas[i].textContent = audios[i].legenda;
    botoes[i].setAttribute('data-item', i);
}

let audioTag = document.querySelector('audio');


botoes.forEach(botao => {
    botao.addEventListener('click',() => {
       let som = audios[botao.getAttribute('data-item')];
       audioTag.setAttribute('src', som.caminho);
       audioTag.addEventListener('loadeddata',() =>{
        audioTag.play();
       });
       
    })
});