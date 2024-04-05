import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Logindetails } from '../../interfaces/logindetails';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})

export class LoginComponent {
  loginDetails: Logindetails;
  errorMessage: string | undefined;
  
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private auth: AuthService, private router: Router) {
    this.loginDetails = {
      email: '',
      password: '',
    };
  }

  ngOnInit(): void {
    this.auth.errorMessage$.subscribe(message => {
      this.errorMessage = message;
    });
  }

  login(){
    this.auth.loginUser(this.loginDetails).subscribe(
      (result) => {
        console.log(result);
        this.auth.updateLoginState({
          user: result.user,
          loginState: true,
        });
        this.httpOptions.headers = this.httpOptions.headers.set(
          'Authorization',
          'Bearer ' + result.token
        );
        this.router.navigate(['/profile']);
      },
      (error) => {
        console.error('Login error:', error);
      }
    );
  }
}


