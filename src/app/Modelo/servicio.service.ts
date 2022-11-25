import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Joke } from "./joke";

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  listaBromas:Joke[];
  private _listaBromas$: BehaviorSubject<Joke[]>;

  constructor() {
      this.listaBromas = [
          new Joke("What did the cheese say when it looked in the mirror?", "Hello-Me (Halloumi)"),
          new Joke("What kind of cheese do you use to disguise a small horse?", "Mask-a-pony (Mascarpone)"),
          new Joke("A kid threw a lump of cheddar at me", "I thought ‘That’s not very mature’")
        ]
        this._listaBromas$ = new BehaviorSubject<Joke[]>(this.listaBromas);
  }

  getListaBromas() {
      return this.listaBromas;
  }

  get listabromas$(): Observable<Joke[]> {
    return this._listaBromas$.asObservable();
  }

  getBroma(ind:number) {
      return this.listaBromas[ind];
  }
  
  anadirBroma(broma:Joke) {
      this.listaBromas.unshift(broma);
      this._listaBromas$.next( [...this.listaBromas] );
  }

  eliminarBromaServ(broma:Joke) {
      this.listaBromas = this.listaBromas.filter((bromaServ) => bromaServ.getId() !== broma.getId());
      this._listaBromas$.next( [...this.listaBromas] );
  }
}
