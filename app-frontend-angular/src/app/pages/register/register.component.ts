import { Component } from '@angular/core';
import { Registerdetails } from '../../interfaces/registerdetails';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerDetails: Registerdetails;
  registerForm!: FormGroup;

  constructor(private auth: AuthService, private router: Router, private formBuilder: FormBuilder) {
    this.registerDetails = {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
    };
  }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      password_confirmation: ['', Validators.required]
    });
  }

  register(): void {
    if (this.registerForm.invalid) {
      return;
    }

    const registerDetails: Registerdetails = this.registerForm.value;

    this.auth.registerUser(registerDetails).subscribe(
      (result) => {
        console.log(result);
        this.handleSuccessfulRegistration(result.token);
      },
      (error) => {
        console.error('Registration error:', error);
        // Handle specific error messages or show generic message to the user
      }
    );
  }

  private handleSuccessfulRegistration(token: string): void {
    localStorage.setItem('token', token);
    this.router.navigate(['/']);
  }
}