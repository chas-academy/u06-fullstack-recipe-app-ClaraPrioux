import { Routes } from '@angular/router';
import { LoginComponent } from '../app/login/login.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    { path: '', component: AppComponent },
    { path: 'login', component: LoginComponent },
    { path: '**', redirectTo: '' } // Redirect any unknown routes to the main page
  ];
