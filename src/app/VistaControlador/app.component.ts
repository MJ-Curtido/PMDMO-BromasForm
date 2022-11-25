import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Joke } from "../Modelo/joke";
import { ServicioService } from '../Modelo/servicio.service';

@Component({
  selector: 'joke-list',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class JokeListComponent implements OnInit {
  _bromas!: Observable<Joke[]>;

  constructor(protected serv: ServicioService) {
  }
  ngOnInit(): void {
    this._bromas = this.serv.listabromas$;
    //this.serv.listabromas$.subscribe( bromas => this._chistes = bromas );
  }

  anadirBromaServ(broma:Joke) {
    this.serv.anadirBroma(broma);
  }

  eliminarBroma(broma:Joke) {
    this.serv.eliminarBromaServ(broma);
  }
}
