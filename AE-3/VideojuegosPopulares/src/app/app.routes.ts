import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';
import { ReadAllComponent } from './components/read-all/read-all.component';
import { DetailComponent } from './components/detail/detail.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { authGuard } from './auth.guard';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path : '', component :  LogInComponent},
    {path : 'list', component : ReadAllComponent, canActivate: [authGuard]},
    {path : 'detail/:id', component : DetailComponent, canActivate: [authGuard]},
    {path : 'contact', component : ContactComponent, canActivate: [authGuard]},
    {path : 'about', component : AboutUsComponent, canActivate: [authGuard]},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}
  