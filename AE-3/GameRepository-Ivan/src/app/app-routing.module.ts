import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameListComponent } from './components/game-list/game-list.component';
import { GameDetailComponent } from './components/game-detail/game-detail.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [

  {path:'',component:LoginComponent},
  {path:'biblioteca',component:GameListComponent},
  {path:'detalle/:idGame',component:GameDetailComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
