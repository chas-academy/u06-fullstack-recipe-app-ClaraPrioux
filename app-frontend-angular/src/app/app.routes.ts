import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { authGuard } from './guards/auth.guard';
import { RecipesearchComponent } from './pages/recipesearch/recipesearch.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', component: HomeComponent },
    { path: 'search', component: RecipesearchComponent },
    { path:'profile', component: ProfileComponent, canActivate: [authGuard] },
    { path: '**', redirectTo: '' } // Redirect any unknown routes to the main page
  ];
