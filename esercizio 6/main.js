// Esercizio 6
// Rappresenta lo stato attuale di una partita sportiva

const partita = {
    minutaggio: 60,
    squadraCasa: "Italia",
    puntiCasa: 0,
    squadraOspite: "Brasile",
    puntiOspite: 2,
    vantaggio() {
        if (this.puntiCasa > this.puntiOspite) {
            return "L'Italia é al momento in vantaggio";
        } else if (this.puntiCasa === this.puntiOspite) {
            return "Al momento le squadre sono pari"
        } else {
            return "Il Brasile é al momento in vantaggio";
        }
    }
}