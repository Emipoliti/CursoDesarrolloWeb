
let metros = prompt("Que distancia deseas recorrer?")

if(metros <= 1000){
    alert("Debes ir caminando, no olvides llevar agua!")
}

else if (metros > 1000 && metros < 10000){
    alert("Es lejos para caminar, haz este recorrido en Bicicleta!")
}

else if (metros > 10000 && metros < 30000){
    alert("Para esta distancia lo recomendable es ir en Auto Bus")
}

else if (metros > 30000 && metros < 100000){
    alert("En Auto Bus es arriesgado, te recomendamos ir en Automovil")
}

else if (metros > 100000){
    alert("Ve al aeropuerto, para llegar deberas ir en Avion")
}


