// Esercizio 8
// Modella i dati di una carta di credito

const creditCard = {
    intestatario: {
        nome: "Patricia Ann",
        cognome: "Comendador"
    },
    datiCarta: {
        numero: 12345,
        cvc: 547,
        scadenza: 2030
    },
    isValid() {
        return (this.datiCarta.scadenza - new Date().getFullYear()) > 0
    }
}
