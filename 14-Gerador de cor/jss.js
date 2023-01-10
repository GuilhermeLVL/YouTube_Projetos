//Funcao que gera cor
const getColor = () => {
    //Arredonda para baixo o valor da multiplicacao do numero aleaorio pelo valor numerico
const randomNumber = Math.floor(Math.random() * 16777215);
//"Converte parar o  valor aceito pela propriedade backGroud"
const randomCode = "#" + randomNumber.toString(16);

//Aplica o valor convertido na propriedade backgroundColor do body
document.body.style.backgroundColor = randomCode;

document.getElementById("color-code").innerText = randomCode;
navigator.clipboard.writeText(randomCode)

}

//Pegando e atribuindo funcao para o botao
document.getElementById("btn").addEventListener(
    'click',getColor
)

getColor();