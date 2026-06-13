// Esercizio 3
// Definisci le informazioni essenziali di un libro

const best_book = {
    titolo: "L'isola degli enigmi",
    autore: "Loris Barbiero",
    annoPubblicazione: 2024,
    generi: [
        "mystery", "enigmi", "rompicapo"
    ],
    target: "Young",
    pages: 214,
    yearsOld() {
        return new Date().getFullYear() - this.annoPubblicazione
    }
}