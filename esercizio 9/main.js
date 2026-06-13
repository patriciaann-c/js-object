// Esercizio 9
// Siamo su Amazon, gestisci la lista di recensioni lasciate dagli utenti su un prodotto

const gestoreRecensioni = {
    recensioni: [
        {
            nome: "Ciro",
            stelle: 4
        },
        {
            nome: "Caio",
            stelle: 5
        },
        {
            nome: "Pino",
            stelle: 3
        },
        {
            nome: "Mario",
            stelle: 2
        },
        {
            nome: "Luigi",
            stelle: 1
        }
    ],
    filtraStelle(minValue) {
        return this.recensioni.filter(r => r.stelle >= minValue)
    }
}