import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideojuegolistaComponent } from './videojuegolista/videojuegolista.component';
import { VideojuegodetalleComponent } from './videojuegodetalle/videojuegodetalle.component';
import { SobrenosotrosComponent } from './sobrenosotros/sobrenosotros.component';
import { ContactoComponent } from './contacto/contacto.component';

const routes: Routes = [

  {path: '', redirectTo: '/catalogo', pathMatch: 'full'},
  {path: 'catalogo', component: VideojuegolistaComponent},
  {path:'',component:VideojuegodetalleComponent},
  {path:'sobrenosotros',component:SobrenosotrosComponent},
  {path:'contacto',component:ContactoComponent},
  {path: 'detalle/:id', component:VideojuegodetalleComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
