//Funcion para iniciar sesión 
function login(form){
    if(form.user.value == "Luisa"){
        if(form.pass.value ==  "holamundo1807"){
            location = "menu.html";
        }else{
            alert("Contraseña incorrecta")
        }
    }else if(form.user.value == "Adriana"){
        if(form.pass.value == "contraseña6511"){
            location = "menu.html";
        }else{
            alert("Contraseña incorrecta")
        }
    }else if(form.user.value == "Fidel"){
        if(form.pass.value == "0731hunter"){
            location = "menu.html";
        }else{
            alert("Contraseña incorrecta")
        }
    }else{
        alert("Por favor, ingresa un usuario válido.")
    };
};
