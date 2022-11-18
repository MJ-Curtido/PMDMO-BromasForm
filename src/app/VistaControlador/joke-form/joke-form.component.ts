import { Component, EventEmitter, Output } from '@angular/core';
import { Joke } from 'src/app/Modelo/joke';

@Component({
  selector: 'app-joke-form',
  templateUrl: './joke-form.component.html',
  styleUrls: ['./joke-form.component.css']
})
export class JokeFormComponent {
  @Output() enviarBroma = new EventEmitter<Joke>();
  escondido:Boolean

  constructor() {
    this.escondido = true;
  }

  pulsarIntro(e:KeyboardEvent, pregunta:HTMLInputElement, respuesta:HTMLInputElement) {
    if (e.key == 'Enter') {
      this.crearBroma(pregunta, respuesta);
    }
  }

  crearBroma(pregunta:HTMLInputElement, respuesta:HTMLInputElement) {
    if (pregunta.value !== '' && respuesta.value !== '') {
      this.escondido = true;
      this.enviarBroma.emit(new Joke(pregunta.value, respuesta.value));
    }
    else {
      this.escondido = false;
    }
    pregunta.value = '';
    respuesta.value = '';
  }
}
