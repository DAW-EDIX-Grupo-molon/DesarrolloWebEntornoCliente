import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaVideojuegosComponent } from './lista-videojuegos/lista-videojuegos.component';
import { DetalleVideojuegoComponent } from './detalle-videojuego/detalle-videojuego.component';
import { ContactoComponent } from './contacto/contacto.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component'; 
import { AuthService } from './auth.service';
import { BienvenidaComponent } from './bienvenida/bienvenida.component'; 

@NgModule({
  declarations: [
    AppComponent,
    ListaVideojuegosComponent,
    DetalleVideojuegoComponent,
    ContactoComponent,
    SobreNosotrosComponent,
    NavComponent,
    LoginComponent,
    BienvenidaComponent, 
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule], 
  providers: [AuthService], 
  bootstrap: [AppComponent],
})
export class AppModule {}
