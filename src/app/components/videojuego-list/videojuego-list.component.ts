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
  busquedaTitulo: any[] = [];
  ordenPrecio: any[] = [];

  id : number | null = null;
  titulo: string = '';
  desarrolladora: string = '';
  plataforma: string = '';
  precio: number = 0;
  anoLanzamiento: number = 0;
  genero: string = '';
  puntuacion: number = 0;

  haBuscado: boolean = false;
  textoBusqueda: string = '';

  constructor(private sVideojuego: VideojuegoService) {}

  ngOnInit() {
    this.videojuegos = this.sVideojuego.getVideojuegos();
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

  ordenarArrayPrecio(){
    /* const videogames = [...this.sVideojuego.getVideojuegos()]; Esto crea una copia */
    const videogames = this.sVideojuego.getVideojuegos().slice(); /* Esto tambien crea una copia del original para no ordenar el array madre */
    this.ordenPrecio = videogames.sort((a,b) => a.precio - b.precio);
  }

  guardar() {
    if(this.id !== null) {
      this.sVideojuego.updateVideojuego(this.id, this.precio, this.puntuacion);
    } else {
      this.sVideojuego.addVidejuego(this.titulo, this.desarrolladora, this.plataforma, this.precio, this.anoLanzamiento, this.genero, this.puntuacion);
    }

    this.ngOnInit();
    this.limpiarFormulario();
  }

  eliminar(id: number){
    this.sVideojuego.deleteVideojuego(id);
    this.ngOnInit();
  }

  mejorGames(){
    const videojuegos = this.sVideojuego.getVideojuegos();
    this.mejorValorados = videojuegos.filter(videojuego => videojuego.puntuacion > 8);
  }

  busquedaPorTitulo(titulo: string) { 

    this.haBuscado = true;

    const gamesT = this.sVideojuego.getVideojuegos();
    this.busquedaTitulo = gamesT.filter(juego => juego.titulo === titulo);
  }
}
