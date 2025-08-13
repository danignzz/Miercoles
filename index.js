function cambiarinicio(){
    let btn=document.getElementById("inicio");
    if(btn.innerText==="Iniciar sesión"){
        btn.innerText="Cerrar sesión";
    }else{
        btn.innerText="Iniciar sesión";
    }
}
function eliminardefinicion(){
    document.getElementById("agregardef").style.display= "none";
}
function meGusta(boton,mascota){
    alert(`${mascota} was liked`)
    let contadorSpan=boton.querySelector(".contador");
    let likes=parseInt(contadorSpan.innerText);
    contadorSpan.innerText=likes+1;
}
