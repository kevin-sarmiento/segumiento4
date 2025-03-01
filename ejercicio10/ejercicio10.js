let copias = parseInt(prompt("ingrese el numero de copias requerido"))
while(copias < 0){
    copias = parseInt(prompt("ingrese el numero de copias requerido"))
}
let pago ;
let total;
if (copias <= 499) {
    pago = 120
    total = pago * copias
    
}else if (copias <= 749) {
    pago = 100
    total = pago * copias
} else if (copias <= 999) {
    pago = 80
    total = pago * copias
}
else if (copias >= 1000 ) {
    pago = 50
    total = pago * copias
}
alert(`usted desea imprimir ${copias} copias, cada copia sale a ${pago} y en total debe pagar ${total}`)