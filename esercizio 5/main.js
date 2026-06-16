// Esercizio 5
//descrivi i dati identificativi di un veicolo immatricolato

const vehicle = {
    cartaCircolazione: {
        datiIdentificativi: [
            "numero telaio", "marca", "tipo", "denominazione", "numero omologazione"
        ],
        datiImmatricolazione: [
            "targa", "data prima immatricolazione", "data ultima immatricolazione", "categoria", "destinazione ed uso"
        ],
        datiProprietario: {
            generalita: [
                "nome", "cognome", "codice fiscale"
            ],
            residenza: [
                "indirizzo", "numero", "cap", "provincia"
            ]
        }
    }
}

console.log(vehicle);
