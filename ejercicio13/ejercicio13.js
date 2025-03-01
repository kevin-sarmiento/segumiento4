let operador = prompt("ingrese su operador (claro, tigo o movistar)")
while(operador != "claro" && operador != "tigo" && operador != "movistar"){
    operador = prompt("ingrese su operador (claro, tigo o movistar)")
}
let minutes = parseInt(prompt("ingrese su numero de minutos internacionales consumidos"))
while(minutes < 0 ){
    minutes = parseInt(prompt("ingrese su numero de minutos internacionales consumidos"))
}
let almacenamiento;
let paquete;
let unidadminutes;
let cargo;

if (operador == "claro"){
    almacenamiento = 30000 +(100 * minutes) + 18000;
    paquete= 18000;
    unidadminutes = 100;
    cargo = 30000
} else if (operador == "tigo"){
    almacenamiento = 45000 + ( 200 * minutes) + 12000;
    paquete = 12000;
    unidadminutes = 200;
    cargo = 45000;
}else if (operador == "movistar") {
    almacenamiento = 40000 + (250 * minutes) + 8000;
    paquete = 8000;
    unidadminutes = 250;
    cargo = 40000;
}
alert(`señor/a usted tiene como operador ${operador}, el valor de paquete vale ${paquete},\nlos minutos internaciones valen ${unidadminutes}, y el cargo fijo cuesta ${cargo}.\nseñor/a usted utilizo ${minutes} minutos internacionales asi que en total debe pagar ${almacenamiento} `)