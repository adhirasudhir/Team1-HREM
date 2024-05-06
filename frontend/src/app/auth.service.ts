import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn: boolean = false;
  private baseURL = 'http://localhost:3000';

  constructor(private http: HttpClient, private router: Router) {}

  register(firstname: string, lastname: string, email: string, password: string, department: string, position: string, phonenumber: string) {
    return this.http.post(`${this.baseURL}/register`, { firstname, lastname, email, password, phonenumber });
  }

  login(email: string, password: string) {
    return this.http.post(`${this.baseURL}/login`, { email, password }).pipe(
      tap(() => {
        // Update loggedIn status upon successful login
        this.loggedIn = true;
      })
    );
  }

  // Method to check if user is logged in
  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  // Method to handle logout
  logout(): void {
    // Clear user session or token
    this.loggedIn = false;
    // Navigate to login page
    this.router.navigate(['/login']);
  }
}
