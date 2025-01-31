import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private router: Router) {}

  get showNavbar(): boolean {
    
    return !(this.router.url === '/login' || this.router.url === '/register' || this.router.url === '/dashboard');
  }

  navClick(divId: string): void {
    const navItems = document.getElementsByClassName('nav-item');
    for (let i = 0; i < navItems.length; i++) {
      const navItem = navItems[i] as HTMLElement;
      if (navItem.id === 'nav-' + divId) {
        navItem.className = `
          nav-item inline-block p-4 text-blue-600 
          border-b-2 border-blue-600 rounded-t-lg active
        `;
      } else {
        navItem.className = `
          nav-item inline-block p-4 border-b-2 
          border-transparent rounded-t-lg 
          hover:text-gray-600 hover:border-gray-300
        `;
      }
    }

    this.router.navigate(['/' + divId]);
  }

  logout(): void {
    localStorage.removeItem('token'); 
    this.router.navigate(['/dashboard']); 
  }

 
  get showLogoutButton(): boolean {
    return !(this.router.url === '/login' || this.router.url === '/register' || this.router.url === '/dashboard');
  }

  navigateToDashboard() {
    this.router.navigate(['/dashboard']);
  }
}
