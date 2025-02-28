let tamaño = prompt("elige el tamaño de sandwich que deseas (grande/pequeño)");
let tocineta = prompt("desea tocineta (si/no)");
let jalapeño = prompt("desea jalapeño (si/no)");
let pavo = prompt("desea pavo (si/no)");
let queso = prompt("desea queso (si/no)");
let costobase;

if (tamaño === "grande"){
costobase = 12000;
} else if (tamaño === "pequeño"){
    costobase = 6000;
}

if (tocineta === "si"){
    costobase += 3000;
}
if (jalapeño === "si"){
    costobase += 0;
}
if (pavo === "si"){
    costobase += 3000;
}
if (queso === "si") {
    costobase += 2500;
}
alert(`señor/a usted pidio un sandwich\n
    -tamaño: ${tamaño} (grande: 12000 pequeño: 6000)\n
    -tocineta: ${tocineta} ($3000)\n
    -jalapeño: ${jalapeño} ($0)\n
    -pavo: ${pavo} ($3000)\n
    -queso: ${queso} ($2500)\n
    en total debe pagar ${costobase}`)












