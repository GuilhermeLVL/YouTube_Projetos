function GerarQRCode (){
let inputUsuario = document.querySelector('textarea').value;

let GoogleCharApi = 'https://chart.googleapis.com/chart?cht=qr&chs=250x250&chld=H&chl=';
var conteudoQRCode = GoogleCharApi +encodeURIComponent(inputUsuario);
document.getElementById('QRCodeImage').src = conteudoQRCode;    
}




