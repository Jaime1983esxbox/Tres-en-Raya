import { Component, OnInit } from '@angular/core';
import { Jugador } from 'src/app/models/jugador';

@Component({
  selector: 'app-tres-en-raya',
  templateUrl: './tres-en-raya.component.html',
  styleUrls: ['./tres-en-raya.component.css']
})
export class TresEnRayaComponent implements OnInit {

  jugador!: Jugador;
  jugador1: Jugador = new Jugador();
  jugador2: Jugador = new Jugador();
  tablero: string[][] = [['', '', ''],['', '', ''],['', '', '']];
  contador: number = 0;
  turno: boolean = true;
  partidaTerminada: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.comenzarPartida();
  }

  crearJugadores(){
    this.jugador1 = new Jugador();
    this.jugador1.nombre = 'X';
    this.jugador2 = new Jugador();
    this.jugador2.nombre = 'O';
  }

  comenzarPartida(){
    this.partidaTerminada = false;
    this.crearJugadores();
    if(this.contador == 0){
      alert('Comienza la partida');
    }
  }

  turnoJugador(posicion: number, posicion2: number) {
    if(this.contador == 9){
      alert('La partida termina con empate');
      this.partidaTerminada = true;
    }
    if(this.turno){
      this.contador = this.contador + 1;
      this.turno = !this.turno;
      this.posicionTablero(this.jugador1, posicion, posicion2);
    }else{
      this.contador = this.contador + 1;
      this.turno = !this.turno;
      this.posicionTablero(this.jugador2, posicion, posicion2);
    }
    
    for (let i = 0; i < 3 && !this.partidaTerminada; i++) {
      if(this.tablero[i][0] != '' && this.tablero[i][0] == this.tablero[i][1] 
      && this.tablero[i][0] == this.tablero[i][2]){
        alert('El ganador del juego es el jugador ' + this.tablero[i][0]);
        this.partidaTerminada = true;
      }
    }

    for (let j = 0; j < 3 && !this.partidaTerminada; j++) {
      if(this.tablero[0][j] != '' && this.tablero[0][j] == this.tablero[1][j] 
      && this.tablero[0][j] == this.tablero[2][j]){
        alert('El ganador del juego es el jugador ' + this.tablero[0][j]);
        this.partidaTerminada = true;
      }  
    }

    if(this.tablero[0][0] == this.jugador1.nombre && this.tablero[1][1] == this.jugador1.nombre && this.tablero[2][2] == this.jugador1.nombre){
      alert('La partida la ha ganado el jugador: ' + this.jugador1.nombre);
      this.partidaTerminada = true;
    }else if(this.tablero[0][0] == this.jugador2.nombre && this.tablero[1][1] == this.jugador2.nombre && this.tablero[2][2] == this.jugador2.nombre){
      alert('La partida la ha ganado el jugador: ' + this.jugador2.nombre);
      this.partidaTerminada = true;
    }
    
    if(this.tablero[0][2] == this.jugador1.nombre && this.tablero[1][1] == this.jugador1.nombre && this.tablero[2][0] == this.jugador1.nombre){
      alert('La partida la ha ganado el jugador: ' + this.jugador1.nombre);
      this.partidaTerminada = true;
    }else if(this.tablero[0][2] == this.jugador2.nombre && this.tablero[1][1] == this.jugador2.nombre && this.tablero[2][0] == this.jugador2.nombre){
      alert('La partida la ha ganado el jugador: ' + this.jugador2.nombre);
      this.partidaTerminada = true;
    }
    
  }

  posicionTablero(jugador: Jugador, posicion: number, posicion2: number){
    this.tablero[posicion][posicion2] = jugador.nombre;
  }

  volverJugar(){
    this.tablero = [['', '', ''],['', '', ''],['', '', '']];
    this.contador = 0;
    this.comenzarPartida();
  }

}
