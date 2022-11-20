import { Component } from '@angular/core';
import { Joke } from "../Modelo/joke";
import { ServicioService } from '../Modelo/servicio.service';

@Component({
  selector: 'joke-list',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class JokeListComponent {

  constructor(protected serv: ServicioService) {
  }

  anadirBromaServ(broma:Joke) {
    this.serv.anadirBroma(broma);
  }

  eliminarBroma(broma:Joke) {
    this.serv.eliminarBromaServ(broma);
  }
}
