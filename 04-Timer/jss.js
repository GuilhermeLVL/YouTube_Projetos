var sec=00
var min = 00
var hora=00

var intervalo

function iniciar(){
   intervalo= setInterval(contador,1000)
}

function pausar(){
    clearInterval(intervalo)
}

function parar(){
    clearInterval(intervalo)
    sec=0
    min=0 
    document.getElementById('contador').innerText = min+":"+sec
}

function contador(){
    sec++
    if(sec==60){
        min++
        sec=0 
}
if(min==60){
    hora++
    min=0
}
document.getElementById('contador').innerText = hora+":"+min+":"+sec

}