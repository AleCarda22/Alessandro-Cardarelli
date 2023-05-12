const a=10;
const b="ciao";
const c= false;
const d = [];
const e = {};
const f = new Date;
function g(){};
const h = undefined;
console.log(typeof a,
    typeof b,
    typeof c,
    typeof d,
    typeof e,
    typeof f,
    typeof g,
    typeof h
    )

    const carrello = {
        prodotti : [
            {
                descrizione: "carne",
                prezzo: 500,
                qty: 10
            },
            {
                descrizione: "latte",
                prezzo: 1700,
                qty: 1
            }
        ],
        getTotale(){
            let totale=0
            for(let i=0;i<this.prodotti.length;i++){
                const prodotto = this.prodotti[i];
                totale += prodotto.prezzo * prodotto.qty;
            }
            return totale
        }
    }
    console.log("stampatot", carrello.getTotale())