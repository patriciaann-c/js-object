// Esercizio 13
// descrivi le transazioni bancarie di un conto corrente

const bankAccount = {
    entrate: {
        accrediti: [
            "ricevimento bonifici", "stipendio", "pensione"
        ],
        versamenti: [
            "deposito contanti", "deposito assegni"
        ]
    },
    uscite: [
        "pagamenti", "bonifici", "prelievi"
    ]
};

console.log(bankAccount);
