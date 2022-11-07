//Para MENU
var numero=document.getElementById('cubo')
var radio=document.getElementById('radio')
var raton=document.getElementById('raton')
var tecla=document.getElementById('tecla')
//Para EJERCICIO
var nav1=document.getElementById('coorNav1')
var cli1=document.getElementById('coorClien1')
var nav2=document.getElementById('coorNav2')
var cli2=document.getElementById('coorClien2')
var char=document.getElementById('char')
var cod=document.getElementById('cod')
function movMuse(e){
    var nx=e.clientX
    var ny=e.clientY
    var cx=e.screenX
    var cy=e.screenY
    nav1.innerHTML="Navegador: { "+nx+", "+ny+" }"
    cli1.innerHTML="Cliente: { "+cx+", "+cy+" }"
    raton.style.display="none"
    tecla.style.display="none"
    radio.style.display="block"
    //.style.backgroundColor="#00FF00"
} 
function clc(e){
    var nx=e.clientX
    var ny=e.clientY
    var cx=e.screenX
    var cy=e.screenY
    nav2.innerHTML="Navegador: { "+nx+", "+ny+" }"
    cli2.innerHTML="Cliente: { "+cx+", "+cy+" }"
    radio.style.display="none"
    tecla.style.display="none"
    raton.style.display="block"
}
function tacla(e){
    var key = event.key;
    var codeValue = event.keyCode;
    char.innerHTML="Carácter: { "+key+" }"
    cod.innerHTML="Código: { "+codeValue+" }"
    radio.style.display="none"
    raton.style.display="none"
    tecla.style.display="block"
}
