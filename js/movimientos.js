//Funciones para Luisa
function ingresarLuisa(){
    let totalL  = parseInt(document.getElementById("cantidadAIngresarL").value);
    let cantidadLuisa = parseInt(document.getElementById("saldoActualL").value);
    document.getElementById("saldoActualL").value=( totalL + cantidadLuisa);
}

function retirarLuisa(){
    let totalL  = parseInt(document.getElementById("cantidadAIngresarL").value);
    let cantidadLuisa = parseInt(document.getElementById("saldoActualL").value);
    document.getElementById("saldoActualL").value=( cantidadLuisa - totalL);
}

//Funciones para Adriana
function ingresarAdriana(){
    let totalA  = parseInt(document.getElementById("cantidadAIngresarA").value);
    let cantidadAdriana = parseInt(document.getElementById("saldoActualA").value);
    document.getElementById("saldoActualA").value=( totalA + cantidadAdriana);
}

function retirarAdriana(){
    let totalA  = parseInt(document.getElementById("cantidadAIngresarA").value);
    let cantidadAdriana = parseInt(document.getElementById("saldoActualA").value);
    document.getElementById("saldoActualA").value=( cantidadAdriana - totalA);
}

// Funciones para Fidel
function ingresarFidel(){
    let totalF  = parseInt(document.getElementById("cantidadAIngresarF").value);
    let cantidadFidel = parseInt(document.getElementById("saldoActualF").value);
    document.getElementById("saldoActualF").value=( totalF + cantidadFidel);
}

function retirarFidel(){
    let totalF  = parseInt(document.getElementById("cantidadAIngresarF").value);
    let cantidadAdriana = parseInt(document.getElementById("saldoActualF").value);
    document.getElementById("saldoActualF").value=( cantidadAdriana - totalF);
}