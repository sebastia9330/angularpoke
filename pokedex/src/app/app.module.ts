import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { FotoPokemonComponent } from './components/foto-pokemon/foto-pokemon.component';
import { TarjetaPokemonComponent } from './components/tarjeta-pokemon/tarjeta-pokemon.component';
import { DetalleComponent } from './components/detalle/detalle.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    FotoPokemonComponent,
    TarjetaPokemonComponent,
    DetalleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
