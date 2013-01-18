/*
$(document).ready(
 function(){

 }
)
*/

function iniciar(){
 sexo = document.getElementById('sexo');
    sexo.addEventListener('onclick', mostrar, false);
}
function mostrar(){
 alert('mostrar');
}

window.addEventListener('load',iniciar,false);