let number = parseInt(prompt("ingrese un numero de un solo digito"))
let number1 = parseInt(prompt("ingrese un numero de un solo digito"))
let number2 = parseInt(prompt("ingrese un numero de un solo digito"))
let variable = true;
let number3;

if ( number >  number1 && number > number2) {
    number3 = number;
} else if (number1 > number2 && number1 > number) {
    number3 = number1;
}else if (number2 > number1 &&  number2 > number)  {
    number3 = number2; 
}
alert(`el numero ${number3} es el mayor de todos los ingresados`)