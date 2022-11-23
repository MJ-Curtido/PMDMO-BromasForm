import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Joke } from 'src/app/Modelo/joke';

@Component({
  selector: 'app-joke-form',
  templateUrl: './joke-form.component.html',
  styleUrls: ['./joke-form.component.css']
})
export class JokeFormComponent implements OnInit {
  @Output() enviarBroma = new EventEmitter<Joke>();
  escondido: Boolean
  miFormulario!: FormGroup;
  formPregunta!: FormControl;
  formRespuesta!: FormControl;

  constructor() {
    this.escondido = true;
  }

  ngOnInit() {
    this.formPregunta = new FormControl('', [
      Validators.minLength(6),
      Validators.required
    ]);

    this.formRespuesta = new FormControl('', [
      Validators.minLength(6),
      Validators.required
    ]);

    this.miFormulario = new FormGroup({
      formPregunta: this.formPregunta,
      formRespuesta: this.formRespuesta
    });
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
