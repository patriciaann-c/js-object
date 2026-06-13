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



// Esercizio 7
// Organigramma dei dipendenti di un'azienda

// const dipMark1 = {
//     nome: "Mario",
//     cognome: "Rossi"
// }
// const dipMark2 = {
//     nome: "Luigi",
//     cognome: "Verdi"
// }
// const dipMark3 = {
//     nome: "Peach",
//     cognome: "Princess"
// }

// const dipendentiMarketing = {
//     dipMark1, dipMark2, dipMark3
// }

// const dipHR1 = {
//     nome: "Bettina",
//     cognome: "Peres"
// }
// const dipHR2 = {
//     nome: "Vanessa",
//     cognome: "Bianchi"
// }
// const dipHR3 = {
//     nome: "Valeria",
//     cognome: "Verdi"
// }

// const dipendentiHR = {
//     dipHR1, dipHR2, dipHR3
// }

// const ceo = {
//     nome: "Loris",
//     cognome: "Barbieri"
// }

// const azienda = {
//     cda: {
//         manager: ceo
//     },
//     repMarketing: {
//         dipendenti: dipendentiMarketing
//     },
//     repHR: {
//         dipendenti: dipendentiHR
//     }
// }


// const azienda = {
//     cda: {
//         quoteAzionarie: 20,
//         manager: {
//             nome: "Patricia Ann",
//             cognome: "Comendador"
//         }
//     },
//     repartoIT: {
//         budget: 500000,
//         bonus: 10000,
//         dipendenti: [
//             {
//                 nome: "Anthony June",
//                 cognome: "Lopez"
//             },
//             {
//                 nome: "Sophia Loren",
//                 cognome: "Comendador"
//             },
//             {
//                 nome: "Alyssa Marie",
//                 cognome: "Raymundo"
//             }
//         ]
//     }
// }



// Esercizio 8
// Modella i dati di una carta di credito

// const creditCard = {
//     intestatario: {
//         nome: "Patricia Ann",
//         cognome: "Comendador"
//     },
//     datiCarta: {
//         numero: 12345,
//         cvc: 547,
//         scadenza: 2030
//     },
//     isValid() {
//         return (this.datiCarta.scadenza - new Date().getFullYear()) > 0
//     }
// }