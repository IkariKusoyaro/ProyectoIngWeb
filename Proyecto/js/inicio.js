document.addEventListener("DOMContentLoaded",function(){
    document.getElementById("formulario").addEventListener("submit",function(evento){

    let email=document.getElementById("email").value;
    let contrasena=document.getElementById("contrasena").value;
    const coleccion=document.getElementById("formulario").getElementsByClassName("ingreso");

    if(email==""){
        coleccion[0].querySelector("span").innerHTML="</br>*el correo electrónico está vacio*"
    }else{
        coleccion[0].querySelector("span").innerHTML="";
    }
    if(contrasena==""){
        coleccion[1].querySelector("span").innerHTML="</br>*la contraseña está vacia*"
    }else{
    coleccion[1].querySelector("span").innerHTML="";
    }
    evento.preventDefault();
    });
});
