import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { GameDetailComponent } from './components/game-detail/game-detail.component';
import { LoginComponent } from './components/login/login.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { GameCardComponent } from './components/game-card/game-card.component';
import { BotonAtrasComponent } from './components/boton-atras/boton-atras.component';

@NgModule({
  declarations: [
    AppComponent,
    GameListComponent,
    GameDetailComponent,
    LoginComponent,
    ContactComponent,
    AboutComponent,
    NavBarComponent,
    GameCardComponent,
    BotonAtrasComponent
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
