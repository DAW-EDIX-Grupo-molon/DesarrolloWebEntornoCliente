import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';
import { ReadAllComponent } from './components/read-all/read-all.component';
import { DetailComponent } from './components/detail/detail.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutUsComponent } from './components/about-us/about-us.component';



export const routes: Routes = [
    {path : '', component :  LogInComponent},
    {path : 'logged', component : ReadAllComponent},
    {path : 'detail', component : DetailComponent},
    {path : 'contact', component : ContactComponent},
    {path : 'about', component : AboutUsComponent},
];