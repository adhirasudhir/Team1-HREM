import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isSignDivVisible: boolean = true;
  isLoginMode: boolean = true;

  firstname: string = '';
  lastname: string = '';
  email: string = '';
  password: string = '';
  message: string = '';
  department: string = '';
  position: string = '';
  phonenumber: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  toggleMode() {
    this.isLoginMode = !this.isLoginMode;
    this.message = ''; // Reset message when switching modes
  }

  onLogin() {
    this.authService.login(this.email, this.password)
      .subscribe(
        data => {
          console.log(data);
          this.message = 'Login successful!'; // Set success message
          // After login, go to the dashboard
          this.router.navigate(['/dashboard'], { state: { email: this.email } });
        },
        error => {
          console.log(error);
          this.message = 'Invalid email or password.';
        });
  }

  onSubmit() {
    this.authService.register(this.firstname, this.lastname, this.email, this.password, this.department,this.position, this.phonenumber)
      .subscribe(
        data => {
          console.log(data);
          this.message = 'Registration successful!';
        },
        error => {
          console.log(error);
          this.message = 'Something went wrong with registration.';
        });
  }
}
