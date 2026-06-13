// Esercizio 1
// Descrivi le proprietà geometriche di un triangolo

// const triangle = {
//     lati: [
//         5, 6, 7
//     ],
//     tipologia: "scaleno",
//     figura: "piana"
// }



// Esercizio 2
// Rappresenta i dati anagrafici di una persona fisica

// const person = {
//     nome: "Patricia Ann",
//     cognome: "Comendador",
//     cittadinanza: "Italiana",
//     residenza: {
//         indirizzo: "Via Unità d'italia",
//         numero: 8,
//         citta: "Verona",
//         cap: 37131,
//         provincia: "VR",
//     },
//     lavoro: "Programmatore",
//     dataNascita: 10052001,
//     luogoNascita: "Filippine"
// }



// Esercizio 3
// Definisci le informazioni essenziali di un libro

// const best_book = {
//     titolo: "L'isola degli enigmi",
//     autore: "Loris Barbiero",
//     annoPubblicazione: 2024,
//     generi: [
//         "mystery", "enigmi", "rompicapo"
//     ],
//     target: "Young",
//     pages: 214,
//     yearsOld() {
//         return new Date().getFullYear() - this.annoPubblicazione
//     }
// }



// Esercizio 4
// Descrivi le caratteristiche di un immobile in vendita

// const immobile = {
//     constructionYear: 2011,
//     metric: 900,
//     floor: "ground floor",
//     heater: "autonomo",
//     custode: true,
//     price: 250000,
//     calcTot(price) {
//         return this.price / this.metric;
//     },
//     restructionYear: 2025,
//     ape: "C"
// }



// Esercizio 5
// Descrivi l'elenco dei prodotti presenti in un carrello di un ecommerce

// const Maglia = {
//     marca: "Gucci",
//     modello: "Il più costoso",
//     taglia: "S",
//     colore: "Bellissimo",
//     prezzo: 40000
// }

// const Vestito = {
//     marca: "Armani",
//     modello: "Edizione limitata",
//     taglia: "S",
//     colore: "Verde",
//     prezzo: 700000
// }

// const Scarpe = {
//     marca: "Onistuka tiger",
//     modello: "Mexico 66 ballet",
//     taglia: 37,
//     colori: [
//         "Beige", "Nero", "Argento"
//     ],
//     prezzo: 170
// }

// const products = [Maglia, Vestito, Scarpe];



// Esercizio 6
// Rappresenta lo stato attuale di una partita sportiva

// const partita = {
//     minutaggio: 60,
//     squadraCasa: "Italia",
//     puntiCasa: 0,
//     squadraOspite: "Brasile",
//     puntiOspite: 2,
//     vantaggio() {
//         if (this.puntiCasa > this.puntiOspite) {
//             return "L'Italia é al momento in vantaggio";
//         } else if (this.puntiCasa === this.puntiOspite) {
//             return "Al momento le squadre sono pari"
//         } else {
//             return "Il Brasile é al momento in vantaggio";
//         }
//     }
// }