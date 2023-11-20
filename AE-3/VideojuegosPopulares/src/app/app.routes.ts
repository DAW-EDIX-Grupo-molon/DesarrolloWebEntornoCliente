import { Routes } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';
import { ReadAllComponent } from './components/read-all/read-all.component';


export const routes: Routes = [
    {path : '', component :  LogInComponent},
    {path : 'logged', component : ReadAllComponent},
];
