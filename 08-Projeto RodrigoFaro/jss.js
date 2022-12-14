let audios = [
  { caminho: "audios/dança-gatinho-dança-rodrigo-faro-By-Tuna.mp3", legenda: "Dança-gatinho" },
  { caminho: "audios/rodrigo-faro---demais-By-Tuna.mp3", legenda: "Demais" },
  { caminho: "audios/rodrigo-faro---ira-By-Tuna.mp3", legenda: "Iraa" },
  { caminho: "audios/rodrigo-faro---não-By-Tuna.mp3", legenda: "Nao" },
  { caminho: "audios/rodrigo-faro---pare-By-Tuna.mp3", legenda: "Pare" },
  { caminho: "audios/rodrigo-faro---tapa-By-Tuna.mp3", legenda: "Tapa" },
  { caminho: "audios/rodrigo-faro---tome-By-Tuna.mp3", legenda: "Tome" },
  { caminho: "audios/rodrigo-faro---uêpa!-By-Tuna.mp3", legenda: "Uepa" },
  { caminho: "audios/rodrigo-faro---xiiiiii-By-Tuna.mp3", legenda: "Xiii" },
  { caminho: "audios/rodrigo-faro---cheeeega-By-Tuna.mp3", legenda: "Chega" },
];

let botoes = document.querySelectorAll('.botoes');
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