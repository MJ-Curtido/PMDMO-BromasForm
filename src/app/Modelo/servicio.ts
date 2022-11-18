import { Joke } from "./joke";

export class Servicio {
    listaBromas:Joke[];

    constructor() {
        this.listaBromas = [
            new Joke("What did the cheese say when it looked in the mirror?", "Hello-Me (Halloumi)"),
            new Joke("What kind of cheese do you use to disguise a small horse?", "Mask-a-pony (Mascarpone)"),
            new Joke("A kid threw a lump of cheddar at me", "I thought ‘That’s not very mature’")
          ]
    }

    getListaBromas() {
        return this.listaBromas;
    }

    getBroma(ind:number) {
        return this.listaBromas[ind];
    }
    
    anadirBroma(broma:Joke) {
        this.listaBromas.unshift(broma);
    }

    eliminarBromaServ(broma:Joke) {
        this.listaBromas = this.listaBromas.filter((bromaServ) => bromaServ.getId() !== broma.getId());
    }
}