import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideojuegoListComponent } from './components/videojuego-list/videojuego-list.component';
import { FormsModule } from '@angular/forms';
import { DVideojuegoDirective } from './directives/d-videojuego.directive';
import { PVideojuegoPipe } from './pipes/p-videojuego.pipe';

@NgModule({
  declarations: [
    AppComponent,
    VideojuegoListComponent,
    DVideojuegoDirective,
    PVideojuegoPipe
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
