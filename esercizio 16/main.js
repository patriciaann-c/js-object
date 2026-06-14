// Esercizio 16
// Organizza i dati meteorologici per città e giorni della settimana

const meteo = {
    Verona: {
        previsioni: "soleggiato",
        temperatura: 22
    },
    "Reggio Emilia": {
        previsioni: "pioggia",
        temperatura: 5
    },
    "L'Aquila": {
        previsioni: "nuvoloso",
        temperatura: 10
    }
}


const city = prompt("Di quale città vuoi sapere la temperatura?");
console.log(meteo[city].temperatura);