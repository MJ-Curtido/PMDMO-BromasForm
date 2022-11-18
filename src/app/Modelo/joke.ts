import {v4 as uuidv4} from 'uuid';

export class Joke {
    private pregunta: String;
    private respuesta: String;
    private escondido: Boolean;
    private idJoke: String;

    constructor(pregunta: String, respuesta: String) {
        this.pregunta = pregunta;
        this.respuesta = respuesta;
        this.escondido = true;
        this.idJoke = uuidv4();
    }

    isEscondido() {
        return this.escondido;
    }
    
    getPregunta() {
        return this.pregunta;
    }

    getRespuesta() {
        return this.respuesta;
    }

    setPregunta(pregunta: String) {
        this.pregunta = pregunta;
    }

    setRespuesta(respuesta: String) {
        this.respuesta = respuesta;
    }

    setEscondido() {
        this.escondido = !this.escondido;
    }

    getId() {
        return this.idJoke;
    }
}