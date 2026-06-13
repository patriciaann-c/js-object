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


const azienda = {
    cda: {
        quoteAzionarie: 20,
        manager: {
            nome: "Patricia Ann",
            cognome: "Comendador"
        }
    },
    repartoIT: {
        budget: 500000,
        bonus: 10000,
        dipendenti: [
            {
                nome: "Anthony June",
                cognome: "Lopez"
            },
            {
                nome: "Sophia Loren",
                cognome: "Comendador"
            },
            {
                nome: "Alyssa Marie",
                cognome: "Raymundo"
            }
        ]
    }
}