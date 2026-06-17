// Esercizio 19
// descrivi una prenotazione alberghiera
// con dettagli dell'ospite e servizi richiesti

const booking = {
    ospite: {
        nome: "Patricia Ann",
        cognome: "Comendador",
        email: "patriciaann.c10@gmail.com",
        telefono: 1234567890
    },
    soggiorno: {
        struttura: "Hotel Maxim",
        checkIN: "Mercoledì, 17 giugno 2026",
        checINTime: "14:00",
        checkOUT: "Domenica, 21 giugno 2026",
        checkOUTTime: "10:00",
        tipologia: "Camera triple deluxe",
    },
    servizi: [
        "parcheggio gratutito",
        "spa e benessere",
        "piscina",
        "palestra interna"
    ]
}

console.log(booking);
