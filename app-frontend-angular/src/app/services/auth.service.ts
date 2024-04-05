import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, throwError, tap } from 'rxjs';
import { Logindetails } from '../interfaces/logindetails';
import { User } from '../interfaces/user';
import { LoggedInUser } from '../interfaces/loggedinuser';
import { Registerdetails } from '../interfaces/registerdetails';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn = new BehaviorSubject<LoggedInUser>({
    user: undefined,
    loginState: false,
  });
  loggedIn$ = this.loggedIn.asObservable();
  loading: boolean = true;
  errors: boolean = false;
  errorMessage: string = '';

  // Observable for error message
  private errorMessageSubject = new BehaviorSubject<string>('');
  errorMessage$ = this.errorMessageSubject.asObservable();

  private baseUrl = 'https://u06-fullstack-recipe-app-claraprioux.onrender.com/api/'; 

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient, private router: Router) {}

  updateLoginState(loginState: LoggedInUser): void {
    this.loggedIn.next(loginState);
  }
  getLoginStatus() {
    return this.loggedIn.value.loginState;
  }

  loginUser(loginDetails: Logindetails): Observable<any> {
    return this.http
      .post<any>(this.baseUrl + 'login', loginDetails, this.httpOptions)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          this.handleError(error);
          return throwError(() => new Error('Something bad happened; please try again later'));
        }),
        tap(response => {
          this.updateLoginState({
            user: response.user,
            loginState: true
          });
        })
      );
  }

  logoutUser() {}

  getUser2(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl+'getuser/2', this.httpOptions);
  }

  registerUser(registerDetails: Registerdetails): Observable<any> {
    return this.http
      .post<any>(this.baseUrl + 'register', registerDetails, this.httpOptions)
      .pipe(catchError((error: HttpErrorResponse) => {
        this.handleError(error);
        return throwError(() => new Error('Something bad happened; please try again later'));
      }))
  }

  logout(){
    this.updateLoginState({
      user: undefined,
      loginState: false
    });
    
    this.router.navigate(['/home']);
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.status === 404) {
      errorMessage = 'An error occurred: ' + error.error;
    } else if (error.status === 401) {
      errorMessage = `Wrong email or password`;
    } else {
      errorMessage = `Backend returned code ${error.status}, body was ${error.error}`;
    }
    console.error(errorMessage);
    this.errorMessageSubject.next(errorMessage);
  }
}