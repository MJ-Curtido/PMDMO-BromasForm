import { Component } from '@angular/core';
import { Joke } from "../Modelo/joke";
import { Servicio } from '../Modelo/servicio';

@Component({
  selector: 'joke-list',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class JokeListComponent {
  serv:Servicio;

  constructor() {
    this.serv = new Servicio();
  }

  anadirBromaServ(broma:Joke) {
    this.serv.anadirBroma(broma);
  }

  eliminarBroma(broma:Joke) {
    this.serv.eliminarBromaServ(broma);
  }
}
