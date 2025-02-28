let fisica = parseInt(prompt("ingrese su nota obtenidad en fisica entre o y 10 puntos"))
let quimica = parseInt(prompt("ingrese su nota obtenidad en quimica entre o y 10 puntos"))
let biologia = parseInt(prompt("ingrese su nota obtenidad en biologia entre o y 10 puntos"))
let matematicas = parseInt(prompt("ingrese su nota obtenidad en matematicas entre o y 10 puntos"))
let informatica = parseInt(prompt("ingrese su nota obtenidad en informatica entre o y 10 puntos"))
let notaobtenida = ((fisica + quimica + biologia + matematicas + informatica) / 50) * 100
let obtenida;
if (  notaobtenida <= "59.9"){
    obtenida = "mala";
} else if (  notaobtenida  < "80"){
    obtenida = "buena";
}else if (notaobtenida >= "80"){
    obtenida = "excelente";
}
alert(`Tu porcentaje es ${notaobtenida}% y tu calificación es ${obtenida}.`)