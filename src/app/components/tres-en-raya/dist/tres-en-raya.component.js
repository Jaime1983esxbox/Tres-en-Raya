"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TresEnRayaComponent = void 0;
var core_1 = require("@angular/core");
var jugador_1 = require("src/app/models/jugador");
var TresEnRayaComponent = /** @class */ (function () {
    function TresEnRayaComponent() {
        this.jugador1 = new jugador_1.Jugador();
        this.jugador2 = new jugador_1.Jugador();
        this.tablero = [['', '', ''], ['', '', ''], ['', '', '']];
        this.contador = 0;
        this.turno = true;
        this.partidaTerminada = false;
    }
    TresEnRayaComponent.prototype.ngOnInit = function () {
        this.comenzarPartida();
    };
    TresEnRayaComponent.prototype.crearJugadores = function () {
        this.jugador1 = new jugador_1.Jugador();
        this.jugador1.nombre = 'X';
        this.jugador2 = new jugador_1.Jugador();
        this.jugador2.nombre = 'O';
    };
    TresEnRayaComponent.prototype.comenzarPartida = function () {
        this.partidaTerminada = false;
        this.crearJugadores();
        if (this.contador == 0) {
            alert('Comienza la partida');
        }
    };
    TresEnRayaComponent.prototype.turnoJugador = function (posicion, posicion2) {
        if (this.contador == 9) {
            alert('La partida termina con empate');
            this.partidaTerminada = true;
        }
        if (this.turno) {
            this.contador = this.contador + 1;
            this.turno = !this.turno;
            this.posicionTablero(this.jugador1, posicion, posicion2);
        }
        else {
            this.contador = this.contador + 1;
            this.turno = !this.turno;
            this.posicionTablero(this.jugador2, posicion, posicion2);
        }
        for (var i = 0; i < 3 && !this.partidaTerminada; i++) {
            if (this.tablero[i][0] != '' && this.tablero[i][0] == this.tablero[i][1]
                && this.tablero[i][0] == this.tablero[i][2]) {
                alert('El ganador del juego es el jugador ' + this.tablero[i][0]);
                this.partidaTerminada = true;
            }
        }
        for (var j = 0; j < 3 && !this.partidaTerminada; j++) {
            if (this.tablero[0][j] != '' && this.tablero[0][j] == this.tablero[1][j]
                && this.tablero[0][j] == this.tablero[2][j]) {
                alert('El ganador del juego es el jugador ' + this.tablero[0][j]);
                this.partidaTerminada = true;
            }
        }
        if (this.tablero[0][0] == this.jugador1.nombre && this.tablero[1][1] == this.jugador1.nombre && this.tablero[2][2] == this.jugador1.nombre) {
            alert('La partida la ha ganado el jugador: ' + this.jugador1.nombre);
            this.partidaTerminada = true;
        }
        else if (this.tablero[0][0] == this.jugador2.nombre && this.tablero[1][1] == this.jugador2.nombre && this.tablero[2][2] == this.jugador2.nombre) {
            alert('La partida la ha ganado el jugador: ' + this.jugador2.nombre);
            this.partidaTerminada = true;
        }
        if (this.tablero[0][2] == this.jugador1.nombre && this.tablero[1][1] == this.jugador1.nombre && this.tablero[2][0] == this.jugador1.nombre) {
            alert('La partida la ha ganado el jugador: ' + this.jugador1.nombre);
            this.partidaTerminada = true;
        }
        else if (this.tablero[0][2] == this.jugador2.nombre && this.tablero[1][1] == this.jugador2.nombre && this.tablero[2][0] == this.jugador2.nombre) {
            alert('La partida la ha ganado el jugador: ' + this.jugador2.nombre);
            this.partidaTerminada = true;
        }
    };
    TresEnRayaComponent.prototype.posicionTablero = function (jugador, posicion, posicion2) {
        this.tablero[posicion][posicion2] = jugador.nombre;
    };
    TresEnRayaComponent.prototype.volverJugar = function () {
        this.tablero = [['', '', ''], ['', '', ''], ['', '', '']];
        this.contador = 0;
        this.comenzarPartida();
    };
    TresEnRayaComponent = __decorate([
        core_1.Component({
            selector: 'app-tres-en-raya',
            templateUrl: './tres-en-raya.component.html',
            styleUrls: ['./tres-en-raya.component.css']
        })
    ], TresEnRayaComponent);
    return TresEnRayaComponent;
}());
exports.TresEnRayaComponent = TresEnRayaComponent;
