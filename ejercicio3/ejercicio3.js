let typelavadora = parseInt(prompt("ingrese el tipo de lavadora 1 o 2 "));

while(typelavadora > 2){
    typelavadora = parseInt(prompt("ingrese el tipo de lavadora 1 o 2 "));
}
let cantidad = parseInt(prompt("ingrese el numero de lavadoras a alquilar"));
while(cantidad <= 0){
    cantidad = parseInt(prompt("ingrese el numero de lavadoras a alquilar"));
}
let hours = parseInt(prompt("ingrese el numero de horas a alquilar"));

while(hours <= 0){
    hours = parseInt(prompt("ingrese el numero de horas a alquilar"));

}




let type1 = (hours * 4000 * cantidad);
let type2 = (hours * 3000 * cantidad);
let totalparcial;
let total;


if (typelavadora == "1" && cantidad <= 3 ) {
    total= hours * 4000 * cantidad;
} else if (typelavadora == 1 && cantidad > 3 )
    {totalparcial= (type1) * 0.03;
        total = type1 -= totalparcial;
     }
 else if ( typelavadora== 2 && cantidad <= 3)
 { total = hours * 3000 * cantidad;}
 else if (typelavadora == 2 && cantidad > 3 )
    {totalparcial=  (type2) *  0.03;
        total = type2 -= totalparcial;
    }
    
alert(`Costo total por alquilar ${cantidad} lavadoras tipo ${typelavadora} por ${hours} horas: ${total}.`)
