var caja=document.getElementById('caja')
var xt=document.getElementById('nm')
function triple(e){
    var num=parseInt(xt.innerHTML)
    var sol=Math.pow(num,3)
    xt.innerHTML=sol
}
function estiloin(e){
    caja.style.backgroundColor="#90EE90"
    xt.style.color="#FFD700"
    xt.style.fontStyle="italic"
}
function estilout(e){
    caja.style.backgroundColor="#FFFFFF"
    xt.style.color="#000000"
    xt.style.fontStyle="normal"
}
