let computer = parseInt(prompt("ingrese la opcion correcta de lo que le paso a su computadora\nemite un pitido y el disco duro gira (1)\nemite un pitido y la unidad gira(2)\nemite un pitido y la unidad no gira(3)\nno emite un pitido y el disco duro no gira(4)\nno emite un pitido y el disco duro gira(5)"));
while(computer <= 0 || computer > 5){
    computer = parseInt(prompt("ingrese la opcion correcta de lo que le paso a su computadora\nemite un pitido y el disco duro gira (1)\n emite un pitido y la unidad gira(2)\nemite un pitido y la unidad no gira(3)\nno emite un pitido y el disco duro no gira(4)\nno emite un pitido y el disco duro gira(5)"));
}


switch (computer) {
    case 1:
        alert (`usted ingreso la opcion ${computer} por lo tanto la computadora esta averiada`);
        break;
    case 2:
        alert(`usted ingreso la opcion ${computer} asi que póngase en contacto con el técnico apoyo`);
        break;
    case 3:
        alert(`usted ingreso la opcion ${computer} asi que pongase a verificar los contactos de la unidad`);
        break;
    case 4:
        alert (`usted ingreso la opcion ${computer} por lo tanto traiga la computadora para repararla en la central.`);
        break;
    case 5:
        alert(`usted ingreso la opcion ${computer} asi que compruebe las conexiones de altavoces`);
        break;
    default:
        alert("no ingreso una opcion valida");
        break;
}