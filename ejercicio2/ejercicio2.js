let number = parseInt(prompt("ingrese un numero"));
let variable ;
while(isNaN(number) ){
    number = parseInt(prompt("ingrese un numero"));
}
if (number % 2 === 0) {
variable = "par";
    
} else{
    variable = "impar";
}
alert(`el numero ingresado es un numero ${variable}`);