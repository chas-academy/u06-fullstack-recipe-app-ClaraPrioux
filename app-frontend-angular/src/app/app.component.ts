import { AsyncPipe, CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth.service';
import { Observable } from 'rxjs';
import { LoggedInUser } from './interfaces/loggedinuser';
import { RecipesearchComponent } from './pages/recipesearch/recipesearch.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet, RouterLink, RouterLinkActive, AsyncPipe, RecipesearchComponent, LoginComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TastyTreasure';

  loggedIn$: Observable<LoggedInUser>;

  constructor(private auth: AuthService) {
    this.loggedIn$ = this.auth.loggedIn$;
  }

  logoutUser(){
    this.auth.logout();
  }

}