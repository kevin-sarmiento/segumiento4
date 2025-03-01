let genere = prompt("ingrese su genero (masculino/femenino)");
while(genere != "masculino" && genere != "femenino" ){ genere = prompt("ingrese su genero (masculino/femenino)");}
let age = parseInt(prompt("ingrese su edad"));
while(age < 0 ){
    age = parseInt(prompt("ingrese su edad"));
}
let payment;
if ( genere  == "femenino" && age > 50){
    payment = 150000;
} else if (genere == "femenino" &&  ( age >= 30)){
    payment = 100000;
} else if (genere == "femenino" && age < 30){
    payment = 0;
} else if (genere ==  "masculino" ){
    payment = 40000;
}
alert(`El valor de ayuda mensual es: ${payment}.`)