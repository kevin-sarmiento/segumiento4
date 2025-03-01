let number3;
let number = parseInt(prompt("ingrese un numero"))

while(isNaN(number)){
     number = parseInt(prompt("ingrese un numero"))}
let number1 = parseInt(prompt("ingrese un segundo numero"))
while(isNaN(number1) ){
    number1 = parseInt(prompt("ingrese un segundo numero"))}
let number2 = parseInt(prompt("ingrese un ultimo numero "))
while(isNaN(number2)){
    number2 = parseInt(prompt("ingrese un ultimo numero "))}
let variable = true;


if ( number >  number1 && number > number2) {
    number3 = number;
} else if (number1 > number2 && number1 > number) {
    number3 = number1;
}else if (number2 > number1 &&  number2 > number)  {
    number3 = number2; 
}
alert(`el numero ${number3} es el mayor de todos los ingresados`)