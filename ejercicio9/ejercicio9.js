let angulo1 = parseInt(prompt("ingrese tres números enteros como ángulos para verificar si es un triangulo"))
while(angulo1 < 0){
    angulo1 = parseInt(prompt("ingrese tres números enteros como ángulos para verificar si es un triangulo"))
}
let angulo2 = parseInt(prompt("ingrese tres números enteros como ángulos para verificar si es un triangulo"))
while(angulo2 < 0){
    angulo2 = parseInt(prompt("ingrese tres números enteros como ángulos para verificar si es un triangulo"))
}
let angulo3 = parseInt(prompt("ingrese tres números enteros como ángulos para verificar si es un triangulo"))
while(angulo3 < 0){
    angulo3 = parseInt(prompt("ingrese tres números enteros como ángulos para verificar si es un triangulo"))
}
let validez;
if ((angulo1 + angulo2 + angulo3) == 180) {
    validez = "valido";
}
else if ((angulo1 + angulo2 + angulo3) !== 180) {
    validez = "no valido";
    
}
alert(`los numeros ingresados dan un triangulo ${validez}`)