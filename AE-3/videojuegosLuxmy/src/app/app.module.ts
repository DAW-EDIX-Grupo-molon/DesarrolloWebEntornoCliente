import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactoComponent } from './contacto/contacto.component';
import { NavComponent } from './nav/nav.component';
import { SobrenosotrosComponent } from './sobrenosotros/sobrenosotros.component';
import { VideojuegolistaComponent } from './videojuegolista/videojuegolista.component';
import { VideojuegodetalleComponent } from './videojuegodetalle/videojuegodetalle.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactoComponent,
    NavComponent,
    SobrenosotrosComponent,
    VideojuegolistaComponent,
    VideojuegodetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
