import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaVideojuegosComponent } from './lista-videojuegos/lista-videojuegos.component';
import { DetalleVideojuegoComponent } from './detalle-videojuego/detalle-videojuego.component';
import { ContactoComponent } from './contacto/contacto.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';

const routes: Routes = [
  { path: '', component: ListaVideojuegosComponent },
  { path: 'detalle/:id', component: DetalleVideojuegoComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'sobre-nosotros', component: SobreNosotrosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
