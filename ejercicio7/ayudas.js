let genere = prompt("ingrese su genero");
let age = parseInt(prompt("ingrese su edad"));
let payment;
if ( genere  == "mujer" && age > 50){
    payment = 150000;
} else if (genere == "mujer" &&  ( age >= 30)){
    payment = 100000;
} else if (genere == "mujer" && age < 30){
    payment = 0;
} else if (genere ==  "hombre" ){
    payment = 40000;
}
alert(`El valor de ayuda mensual es: ${payment}.`)