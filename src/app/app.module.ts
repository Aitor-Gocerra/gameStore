import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideojuegoListComponent } from './components/videojuego-list/videojuego-list.component';
import { FormsModule } from '@angular/forms';
import { DVideojuegoDirective } from './directives/d-videojuego.directive';
import { PVideojuegoPipe } from './pipes/p-videojuego.pipe';
import { EstadisticasComponent } from './components/estadisticas/estadisticas.component';

@NgModule({
  declarations: [
    AppComponent,
    VideojuegoListComponent,
    DVideojuegoDirective,
    PVideojuegoPipe,
    EstadisticasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
