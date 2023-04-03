document.addEventListener("DOMContentLoaded",function(){
    document.getElementById("formulario").addEventListener("submit",function(evento){

    let email=document.getElementById("email").value;
    let rut=document.getElementById("rut").value;
    let contrasena=document.getElementById("contrasena").value;
    let concontrasena=document.getElementById("concontrasena").value;
    const coleccion=document.getElementById("formulario").getElementsByClassName("ingreso");

    if(email==""){
        coleccion[0].querySelector("span").innerHTML="</br>*el correo electrónico está vacio*"
    }else{
        coleccion[0].querySelector("span").innerHTML="";
    }

    if(rut==""){
        coleccion[1].querySelector("span").innerHTML="</br>*el rut está vacio*";
    }else{
        if(validar(rut)){
            coleccion[1].querySelector("span").innerHTML="";
        }else{
            coleccion[1].querySelector("span").innerHTML="</br>*rut Invalido*";
        }
    }

    if(contrasena==""){
        coleccion[2].querySelector("span").innerHTML="</br>*la contraseña está vacia*"
    }else{
    coleccion[2].querySelector("span").innerHTML="";
}
    if(concontrasena==""){
        coleccion[3].querySelector("span").innerHTML="</br>*la contraseña está vacia*"
    }else{
        coleccion[3].querySelector("span").innerHTML="";
    }
    if(contrasena!=concontrasena){
        coleccion[3].querySelector("span").innerHTML="</br>*las contraseñas no coinciden*"
    }else{
        coleccion[3].querySelector("span").innerHTML="";
    }


    evento.preventDefault();
    });
});

function validar(rut){
    var suma=0;
    var arrRut = rut.split("-");
    var rutSolo = arrRut[0];
    var verif = arrRut[1];
    var continuar = true;
    for(i=2;continuar;i++){
        suma += (rutSolo%10)*i;
        rutSolo = parseInt((rutSolo /10));
        i=(i==7)?1:i;
        continuar = (rutSolo == 0)?false:true;
    }
    resto = suma%11; dv = 11-resto;
    if(dv==10){
        if(verif.toUpperCase() == 'K') return true;
    }else if (dv == 11 && verif == 0) return true;
    else if (dv == verif) return true;
    else return false;
    return false;
   
}