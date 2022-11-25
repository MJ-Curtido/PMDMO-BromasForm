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
  miFormulario!: FormGroup;
  formPregunta!: FormControl;
  formRespuesta!: FormControl;

  constructor() {
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

  pulsarIntro(e:KeyboardEvent) {
    if (e.key == 'Enter' && this.miFormulario.valid) {
      this.crearBroma();
    }
  }

  crearBroma() {
    this.enviarBroma.emit(new Joke(this.formPregunta.value, this.formRespuesta.value));
    this.miFormulario.reset();
  }
}
