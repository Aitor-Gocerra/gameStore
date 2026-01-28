import { Component} from '@angular/core';
import { VideojuegoService } from 'src/app/services/videojuego.service';

@Component({
  selector: 'app-videojuego-list',
  templateUrl: './videojuego-list.component.html',
  styleUrls: ['./videojuego-list.component.css']
})
export class VideojuegoListComponent{
  videojuegos: any[] = [];
  mejorValorados: any[] = [];

  id : number | null = null;
  titulo: string = '';
  desarrolladora: string = '';
  plataforma: string = '';
  precio: number = 0;
  anoLanzamiento: number = 0;
  genero: string = '';
  puntuacion: number = 0;

  masCaro: string = '';
  masPuntuado: string = '';
  mediaPrecio: number = 0;

  constructor(private sVideojuego: VideojuegoService) {}

  ngOnInit() {
    this.videojuegos = this.sVideojuego.getVideojuegos();
    this.estadisticas();
  }

  prepararEdicion(game: any) {
    this.id = game.id;
    this.titulo = game.titulo;
    this.desarrolladora = game.desarrolladora;
    this.plataforma = game.plataforma;
    this.precio = game.precio;
    this.anoLanzamiento = game.anoLanzamiento;
    this.genero = game.genero;
    this.puntuacion = game.puntuacion;
  }

  limpiarFormulario () {
    this.id = null;
    this.titulo = '';
    this.desarrolladora = '';
    this.plataforma = '';
    this.precio = 0;
    this.anoLanzamiento = 0;
    this.genero = '';
    this.puntuacion = 0;
  }

  guardar() {
    if(this.id !== null) {
      this.sVideojuego.updateVideojuego(this.id, this.precio, this.puntuacion);
    } else {
      this.sVideojuego.addVidejuego(this.titulo, this.desarrolladora, this.plataforma, this.precio, this.anoLanzamiento, this.genero, this.puntuacion);
    }

    this.ngOnInit();
    this.estadisticas();
    this.limpiarFormulario();
  }

  eliminar(id: number){
    this.sVideojuego.deleteVideojuego(id);
    this.ngOnInit;
    this.estadisticas();
  }

  mejorGames(){
    const videojuegos = this.sVideojuego.getVideojuegos();
    this.mejorValorados = videojuegos.filter(videojuego => videojuego.puntuacion > 8);
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
