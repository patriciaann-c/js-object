// Esercizio 7
// Descrivi le caratteristiche di un immobile in vendita

const immobile = {
    constructionYear: 2011,
    metric: 900,
    floor: "ground floor",
    heater: "autonomo",
    custode: true,
    price: 250000,
    calcTot(price) {
        return this.price / this.metric;
    },
    restructionYear: 2025,
    ape: "C"
}