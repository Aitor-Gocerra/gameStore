import { Component } from '@angular/core';
import { VideojuegoService } from 'src/app/services/videojuego.service';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})
export class EstadisticasComponent {
  videojuegos: any[] = [];

  masCaro: string = '';
  masPuntuado: string = '';
  mediaPrecio: number = 0;
  
  constructor(private sVideojuego: VideojuegoService) {}
  
    ngOnInit() {
      this.videojuegos = this.sVideojuego.getVideojuegos();
      this.estadisticas();
    }

  estadisticas() {
    let gameMasCaro = this.videojuegos[0];

    for(let game of this.videojuegos){
      if(game.precio > gameMasCaro.precio){
        gameMasCaro = game;
      }
    }
    this.masCaro = gameMasCaro.titulo;

    let gamePuntuado = this.videojuegos[0];

    for(let game of this.videojuegos){
      if(game.puntuacion > gamePuntuado.puntuacion){
        gamePuntuado = game;
      }
    }
    this.masPuntuado = gamePuntuado.titulo;

    let suma = 0;
    let contador = 0;
    for(let game of this.videojuegos){
      suma += game.precio;
      contador ++;
    }

    this.mediaPrecio = suma/contador;
  }

}
