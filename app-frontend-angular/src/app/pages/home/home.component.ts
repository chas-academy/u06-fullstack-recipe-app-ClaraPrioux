import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { LoggedInUser } from '../../interfaces/loggedinuser';
import { Observable } from 'rxjs';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  loggedIn$: Observable<LoggedInUser>;
  
  constructor(private auth: AuthService) {
    this.loggedIn$ = this.auth.loggedIn$;
  }
}
