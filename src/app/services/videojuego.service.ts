import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideojuegoService {

  private listaVideojuegos = [
    { id: 1, titulo: 'The Legend of Zelda', desarrolladora: 'Nintendo', plataforma: 'Switch', precio: 59.99, anoLanzamiento: 2017, genero: 'aventura', puntuacion: 9.5 },
    { id: 2, titulo: 'God of War', desarrolladora: 'Santa Monica', plataforma: 'PS5', precio: 49.99, anoLanzamiento: 2018, genero: 'accion', puntuacion: 9.2 },
    { id: 3, titulo: 'Minecraft', desarrolladora: 'Mojang', plataforma: 'PC', precio: 26.95, anoLanzamiento: 2011, genero: 'sandbox', puntuacion: 8.8 },
    { id: 4, titulo: 'FIFA 24', desarrolladora: 'EA Sports', plataforma: 'PS5', precio: 69.99, anoLanzamiento: 2023, genero: 'deportes', puntuacion: 7.5 },
    { id: 5, titulo: 'Elden Ring', desarrolladora: 'FromSoftware', plataforma: 'PC', precio: 59.99, anoLanzamiento: 2022, genero: 'rpg', puntuacion: 9.7 }
  ]

  constructor() { }

  getVideojuegos() {
    return this.listaVideojuegos;
  }

  addVidejuego(titulo: string, desarrolladora: string, plataforma: string, precio: number, anoLanzamiento: number, genero: string, puntuacion: number){
    const newId = this.listaVideojuegos.length + 1;
    const newGame = {
      id: newId,
      titulo,
      desarrolladora,
      plataforma,
      precio,
      anoLanzamiento,
      genero,
      puntuacion
    }

    this.listaVideojuegos.push(newGame);
  }

  updateVideojuego(id: number,precio: number, puntuacion: number)
  {
    const posicion = this.listaVideojuegos.findIndex(game => game.id === id);

    if(posicion !== -1) {
      this.listaVideojuegos[posicion].precio = precio;
      this.listaVideojuegos[posicion].puntuacion = puntuacion;
    }
  }

  deleteVideojuego(id: number) {
    this.listaVideojuegos = this.listaVideojuegos.filter(juego => juego.id !== id);
  }
}
