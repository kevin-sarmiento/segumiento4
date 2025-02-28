
let name1 = prompt("ingresa tu nombre")
let hours = parseInt(prompt("ingrese el numero de horas trabajadas en la semana"))
let pago;
if(hours <= 10){
    pago =30000 * hours;
}else {
    pago= 33000 * hours;
}
alert(`Señor/a ${name1}, el número de horas es ${hours} y su salario equivale a ${pago}.`);
