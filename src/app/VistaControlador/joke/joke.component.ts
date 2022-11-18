import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Joke } from 'src/app/Modelo/joke';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent {
  @Input() bromaHijo!:Joke;
  @Output() bromaAEliminar = new EventEmitter<Joke>();

  eliminarBroma(bromaHijo:Joke) {
    this.bromaAEliminar.emit(bromaHijo);
  }
}