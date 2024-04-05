import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../interfaces/user';
import { Observable } from 'rxjs';
import { LoggedInUser } from '../../interfaces/loggedinuser';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  user: User;
  loggedIn$: Observable<LoggedInUser>;

  constructor(private auth: AuthService){
    this.user = {
      id:-1,
      name:"",
      email:""
    }
    this.loggedIn$ = this.auth.loggedIn$;
  }

  getUser(){
    this.auth.getUser2().subscribe(res => {
      console.log(res[0]);
      this.user = res[0];
    })
  }

}