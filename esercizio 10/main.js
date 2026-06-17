// Esercizio 10
// descrivi le specifiche di un corso di formazione

const course = {
    organizzazione: {
        modalita: [
            "presenza", "online", "mista"
        ],
        durata: "5 mesi",
        costo: [
            "quota partecipazione", "modalità di pagamento", "finanziamenti"
        ]
    },
    struttura: {
        obiettivi: "diventare un esperto programmatore",
        syllabus: "elenco degli argomenti",
        requisiti: "conoscenze basi della matematica e avere una base logica",
        docenti: {
            nome: "Loris",
            cognome: "Barbiero"
        }
    },
    metodi: {
        insegnamento: [
            "live coding", "lezioni teoriche", "esercitazioni"
        ],
        tirocini: "esperienza dentro le aziende partner",
        attestato: "rilascio di una certificazione riconosciuta"
    }
}

console.log(course);
