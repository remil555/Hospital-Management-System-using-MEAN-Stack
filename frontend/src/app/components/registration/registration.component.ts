import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../../hospital.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';  // ✅ Import Router for navigation

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registration.component.html',
})
export class RegistrationComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private apiService: ApiService, private toastr: ToastrService, private router: Router) {} // ✅ Inject Router

  onRegisterClick(): void {
    if (!this.name || !this.email || !this.password || !this.confirmPassword) {
      this.toastr.error('All fields are required', 'Error');
      return;
    }

    if (this.password !== this.confirmPassword) {
      this.toastr.error('Passwords do not match', 'Error');
      return;
    }

    const registrationData = {
      name: this.name,
      email: this.email,
      password: this.password,
    };

    this.apiService.registerUser(registrationData).subscribe({
      next: (res) => {
        this.toastr.success('Registration successful!', 'Success');
        console.log(res); 
        this.router.navigate(['/login']); 
      },
      error: (err) => {
        this.toastr.error(err.message || 'Registration failed', 'Error');
      },
    });
  }

  goToLogin(): void {
    this.router.navigate(['/login']); 
  }
}
