let car = parseInt(prompt("ingrese el numero de modelo de su carro"))

while(car < 0){car = parseInt(prompt("ingrese el numero de modelo de su carro"))}
    
switch (car) {
    case 119:
        alert(`el automovil esta defectuoso, llevar a garantía`);
        break;
    case 179:
        alert("el automovil esta defectuoso, llevar a garantía");
        break;
    case 189:
        alert("el automovil esta defectuoso, llevar a garantía");
        break;
    case 195:
        alert("el automovil esta defectuoso, llevar a garantía");
        break;
    case 221:
        alert("el automovil esta defectuoso, llevar a garantía");
        break;
    case 780:
        alert("el automovil esta defectuoso, llevar a garantía");
        break;
    default:
        alert ("Su automóvil no está defectuoso")
        break;
}