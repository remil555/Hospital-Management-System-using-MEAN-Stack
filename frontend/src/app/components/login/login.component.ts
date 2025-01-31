import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../../hospital.service';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './login.component.html',
})
export class LoginComponent {
    email: string = '';
    password: string = '';

    constructor(
        private apiService: ApiService, 
        private toastr: ToastrService, 
        private router: Router // Inject Angular Router
    ) {}

    onLoginClick(): void {
        if (!this.email || !this.password) {
            this.toastr.error('Please fill in all fields', 'Error');
            return;
        }
    
        const loginData = {
            email: this.email,
            password: this.password,
        };
    
        this.apiService.login(loginData).subscribe({
            next: (res) => {
                this.toastr.success('Login successful!', 'Success');
                
                localStorage.setItem('token', res.token); // Store token
                
                this.router.navigate(['/appointments']); // Redirect to appointments
            },
            error: (err) => {
                this.toastr.error(err.message || 'Login failed', 'Error');
            },
        });
    }
    

    // Navigate to the registration page
    goToRegister(): void {
        this.router.navigate(['/register']);
    }
}
